// gatsby-node.js
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

/*-----------------------------------------------------------
  1)  Anular react-hot-toast COMPLETO en build-html
-----------------------------------------------------------*/
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          // ①  Todos los .js / .mjs dentro de react-hot-toast  -> módulo vacío
          {
            test: /node_modules[/\```react-hot-toast[/\```.*\.m?js$/,
            use: loaders.null(),
          },
          // ②  Cualquier css que exponga react-hot-toast        -> módulo vacío
          {
            test: /node_modules[/\```react-hot-toast[/\```.*\.css$/,
            use: loaders.null(),
          },
        ],
      },
      // ③  Alias de seguridad: si se pide exactamente "react-hot-toast"
      resolve: {
        alias: {
          "react-hot-toast": path.resolve(__dirname, "src/empty-module.js"),
        },
      },
    });
  }
};

/*-----------------------------------------------------------
  2)  createPages   (tal cual lo tenías)
-----------------------------------------------------------*/
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate   = path.resolve("./src/templates/blog-post.js");
  const staticPageTemplate = path.resolve("./src/templates/static-page.js");

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
        nodes {
          id
          fields { slug }
          frontmatter { title slug }
          internal { contentFilePath }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`There was an error loading your Markdown files`, result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  /* blog posts */
  const blogPosts = posts.filter(p =>
    p.internal.contentFilePath?.includes("/content/blog/posts/")
  );

  blogPosts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : blogPosts[index - 1].id;
    const nextPostId     = index === blogPosts.length - 1 ? null : blogPosts[index + 1].id;

    createPage({
      path: `/blog${post.fields.slug}`,
      component: `${blogPostTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: { id: post.id, previousPostId, nextPostId },
    });
  });

  /* static pages */
  const staticPages = posts.filter(p =>
    p.internal.contentFilePath?.includes("/content/pages/")
  );

  staticPages.forEach(page => {
    const slug = page.frontmatter.slug || page.fields.slug;
    createPage({
      path: `/${slug}`,
      component: `${staticPageTemplate}?__contentFilePath=${page.internal.contentFilePath}`,
      context: { id: page.id },
    });
  });
};

/*-----------------------------------------------------------
  3)  onCreateNode  (slug para Markdown)
-----------------------------------------------------------*/
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: "slug", node, value });
  }
};

/*-----------------------------------------------------------
  4)  createSchemaCustomization
-----------------------------------------------------------*/
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author { name: String, summary: String }
    type Social { twitter: String, instagram: String }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
      slug: String
    }

    type Fields { slug: String }
  `);
};

// gatsby-node.js
// ───────────────────────────────────────────────────────────
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

/*-----------------------------------------------------------
  1)  Ajuste de Webpack en fase SSR (build-html)
-----------------------------------------------------------*/
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          // Cualquier import de "react-hot-toast" → stub vacío
          "react-hot-toast": path.resolve(__dirname, "src/empty-module.js"),
        },
      },
      module: {
        rules: [
          {
            // Ignora el CSS que importa react-hot-toast
            test: /react-hot-toast\/.*\.css$/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};

/*-----------------------------------------------------------
  2)  createPages  (blog posts + páginas estáticas)
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

  /* ---- Blog posts ---- */
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

  /* ---- Páginas estáticas ---- */
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
  3)  onCreateNode  (genera campo slug para Markdown)
-----------------------------------------------------------*/
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: "slug", node, value });
  }
};

/*-----------------------------------------------------------
  4)  createSchemaCustomization  (tipado explícito)
-----------------------------------------------------------*/
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
      instagram: String
    }

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

    type Fields {
      slug: String
    }
  `);
};

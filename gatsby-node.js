// gatsby-node.js
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

/* 1) Solo stubear react-hot-toast que es el único realmente problemático */
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          { test: /react-hot-toast/, use: loaders.null() },
        ],
      },
    });
  }
};

/* 2) createPages */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("./src/templates/blog-post.js");
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
    reporter.panicOnBuild(`Error loading Markdown files`, result.errors);
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;

  /* Blog posts */
  const blogPosts = posts.filter(p =>
    p.internal.contentFilePath?.includes("/content/blog/posts/")
  );
  
  blogPosts.forEach((post, i) => {
    createPage({
      path: `/blog${post.fields.slug}`,
      component: blogPostTemplate,
      context: {
        id: post.id,
        previousPostId: i === 0 ? null : blogPosts[i - 1].id,
        nextPostId: i === blogPosts.length - 1 ? null : blogPosts[i + 1].id,
      },
    });
  });

  /* Static pages */
  const staticPages = posts.filter(p =>
    p.internal.contentFilePath?.includes("/content/pages/")
  );
  
  staticPages.forEach(page => {
    const slug = page.frontmatter.slug || page.fields.slug;
    createPage({
      path: `/${slug}`,
      component: staticPageTemplate,
      context: { id: page.id },
    });
  });
};

/* 3) onCreateNode */
exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === "MarkdownRemark") {
    const { createNodeField } = actions;
    const value = createFilePath({ node, getNode });
    createNodeField({ name: "slug", node, value });
  }
};

/* 4) Schema types */
exports.createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
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

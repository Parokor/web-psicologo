const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Create pages from Markdown files
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define templates
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const staticPage = path.resolve(`./src/templates/static-page.js`)

  // Get all markdown remark files sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  const blogPosts = posts.filter(post =>
    post.internal.contentFilePath && post.internal.contentFilePath.includes('/content/blog/posts/')
  )

  if (blogPosts.length > 0) {
    blogPosts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : blogPosts[index - 1].id
      const nextPostId = index === blogPosts.length - 1 ? null : blogPosts[index + 1].id

      createPage({
        path: `/blog${post.fields.slug}`,
        component: `${blogPost}?__contentFilePath=${post.internal.contentFilePath}`,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  // Create static pages
  const staticPages = posts.filter(post =>
    post.internal.contentFilePath && post.internal.contentFilePath.includes('/content/pages/')
  )

  staticPages.forEach(page => {
    const slug = page.frontmatter.slug || page.fields.slug
    createPage({
      path: `/${slug}`,
      component: `${staticPage}?__contentFilePath=${page.internal.contentFilePath}`,
      context: {
        id: page.id,
      },
    })
  })
}

// Create slug fields for markdown files
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// Create schema customizations
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js
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
  `)
}
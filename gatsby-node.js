const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWpPost {
        nodes {
          id
          slug
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error al obtener datos de WordPress.`, result.errors)
    return
  }

  const posts = result.data.allWpPost.nodes

  posts.forEach(post => {
    createPage({
      path: `/blog/${post.slug}`,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        id: post.id,
      },
    })
  })
}
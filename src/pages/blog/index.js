import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const siteTitle = data.site.siteMetadata?.title || "Dr. Psicólogo"

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Blog" />
        <div className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 pt-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Blog</h1>
              <p className="text-lg text-gray-600">
                No hay artículos publicados aún. ¡Vuelve pronto para leer contenido interesante!
              </p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Blog" />
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 pt-16">
          <div className="mb-16 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Blog profesional
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Artículos de Psicología</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comparto conocimientos y reflexiones sobre psicología, salud mental y bienestar emocional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <article key={post.fields.slug} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.frontmatter.categories && post.frontmatter.categories.map(category => (
                        <span key={category} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 text-gray-800">
                      <Link to={post.fields.slug} className="hover:text-blue-600 transition-colors">
                        {title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.frontmatter.description || post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <time dateTime={post.frontmatter.date}>
                        {new Date(post.frontmatter.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <Link 
                        to={post.fields.slug}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Blog" />

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/content/blog/posts/" } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          categories
        }
      }
    }
  }
`

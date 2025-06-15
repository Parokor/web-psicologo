import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const siteTitle = data.site.siteMetadata?.title || "Dr. Psicólogo"

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Blog" />
      <div className="py-24 bg-pattern">
        <div className="container-custom pt-16">
          <div className="mb-16 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              Blog profesional
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-800">Artículos de Psicología</h1>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Comparto conocimientos y reflexiones sobre psicología, salud mental y bienestar emocional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => {
              const image = null // Simplified for now

              return (
                <article key={post.id} className="card group h-full flex flex-col transition-all duration-300 hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    {image ? (
                      <GatsbyImage
                        image={image}
                        alt={post.frontmatter.title}
                        className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-52 bg-primary-50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}

                    {/* Date badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary-700 text-sm font-medium py-1 px-3 rounded-full shadow-sm">
                      {post.frontmatter.date}
                    </div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.frontmatter.categories && post.frontmatter.categories.map(category => (
                        <span key={category} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full">
                          {category}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-xl font-bold mb-3 text-primary-800 group-hover:text-primary-600 transition-colors">
                      <Link to={`/blog${post.fields.slug}`} className="hover:no-underline">
                        {post.frontmatter.title}
                      </Link>
                    </h2>

                    <p className="text-neutral-600 mb-4 line-clamp-3">
                      {post.frontmatter.description || post.excerpt}
                    </p>

                    <div className="mt-auto pt-4">
                      <Link
                        to={`/blog${post.fields.slug}`}
                        className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                      >
                        Leer más
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/"
              className="btn-primary"
            >
              Volver a la página principal
            </Link>
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
        id
        excerpt(pruneLength: 160)
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
          description
          categories
          featuredImage
        }
      }
    }
  }
`
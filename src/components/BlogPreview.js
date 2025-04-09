import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogPreview = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost(sort: {date: DESC}, limit: 3) {
        nodes {
          id
          title
          excerpt
          slug
          date(formatString: "DD MMMM, YYYY")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 600, aspectRatio: 1.5, formats: [AUTO, WEBP], placeholder: BLURRED)
                }
              }
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `)

  const posts = data.allWpPost.nodes

  return (
    <section id="blog" className="section bg-pattern">
      <div className="container-custom">
        <div className="mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
            Blog profesional
          </span>
          <h2 className="section-title mb-4">Artículos recientes</h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            Comparto conocimientos y reflexiones sobre psicología, salud mental y bienestar emocional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => {
            const image = post.featuredImage?.node?.localFile &&
              getImage(post.featuredImage.node.localFile)

            return (
              <article key={post.id} className="card group h-full flex flex-col transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  {image ? (
                    <GatsbyImage
                      image={image}
                      alt={post.title}
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
                    {post.date}
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.nodes.map(category => (
                      <span key={category.name} className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full">
                        {category.name}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-primary-800 group-hover:text-primary-600 transition-colors">
                    <Link to={`/blog/${post.slug}`} className="hover:no-underline">
                      {post.title}
                    </Link>
                  </h3>

                  <div
                    className="text-neutral-600 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />

                  <div className="mt-auto pt-4">
                    <Link
                      to={`/blog/${post.slug}`}
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

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="btn-primary"
          >
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
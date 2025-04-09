import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.wpPost
  const siteTitle = data.site.siteMetadata?.title || "Dr. Psicólogo"
  const featuredImage = post.featuredImage?.node?.localFile &&
    getImage(post.featuredImage.node.localFile)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.title} description={post.excerpt} />
      <article className="py-24 bg-pattern">
        <div className="container-custom max-w-4xl pt-16">
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.nodes.map(category => (
                <span key={category.name} className="text-sm bg-primary-50 text-primary-700 px-3 py-1 rounded-full">
                  {category.name}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-800">{post.title}</h1>
            <div className="flex items-center text-neutral-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>{post.date}</p>
            </div>
          </header>

          {featuredImage && (
            <div className="mb-10">
              <div className="rounded-2xl overflow-hidden shadow-soft">
                <GatsbyImage
                  image={featuredImage}
                  alt={post.title}
                  className="w-full"
                />
              </div>
            </div>
          )}

          <div
            className="prose prose-lg max-w-none prose-headings:text-primary-800 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700 prose-blockquote:border-primary-300 prose-blockquote:bg-primary-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-16 pt-8 border-t border-neutral-200">
            <Link to="/blog" className="btn-outline inline-flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Volver al blog
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const Head = ({ data }) => {
  const post = data.wpPost
  return <Seo title={post.title} description={post.excerpt} />
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wpPost(id: { eq: $id }) {
      id
      title
      content
      excerpt
      date(formatString: "DD MMMM, YYYY")
      featuredImage {
        node {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 1200, quality: 90, formats: [AUTO, WEBP])
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
`
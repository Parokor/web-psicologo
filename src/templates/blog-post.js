import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`
  const featuredImage = null // Simplified for now

  return (
    <Layout location={location} title={siteTitle}>
      <article className="py-24 bg-pattern">
        <div className="container-custom max-w-4xl pt-16">
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.frontmatter.categories && post.frontmatter.categories.map(category => (
                <span key={category} className="text-sm bg-primary-50 text-primary-700 px-3 py-1 rounded-full">
                  {category}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary-800">{post.frontmatter.title}</h1>
            <div className="flex items-center text-neutral-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p>{new Date(post.frontmatter.date).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</p>
            </div>
          </header>

          {featuredImage && (
            <div className="mb-10">
              <div className="rounded-2xl overflow-hidden shadow-soft">
                <GatsbyImage
                  image={featuredImage}
                  alt={post.frontmatter.title}
                  className="w-full"
                />
              </div>
            </div>
          )}
        </div>
      </article>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
        categories
        tags
        featuredImage
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
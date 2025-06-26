import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const StaticPageTemplate = ({
  data: { site, markdownRemark: page },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article className="py-24 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4 pt-16">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">{page.frontmatter.title}</h1>
          </header>
          <div className="prose prose-lg max-w-none">
            <section
              dangerouslySetInnerHTML={{ __html: page.html }}
              itemProp="articleBody"
            />
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: page } }) => {
  return (
    <Seo
      title={page.frontmatter.title}
      description={page.frontmatter.description || page.excerpt}
    />
  )
}

export default StaticPageTemplate

export const pageQuery = graphql`
  query StaticPageById(
    $id: String!
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
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

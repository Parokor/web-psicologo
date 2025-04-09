import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Landing from "../components/Landing"
import AboutMe from "../components/AboutMe"
import BlogPreview from "../components/BlogPreview"
import SocialHub from "../components/SocialHub"
import Contact from "../components/Contact"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || "Dr. Psicólogo"

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Inicio" />
      <Landing />
      <AboutMe />
      <BlogPreview />
      <SocialHub />
      <Contact />
    </Layout>
  )
}

export const Head = () => <Seo title="Inicio" />

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
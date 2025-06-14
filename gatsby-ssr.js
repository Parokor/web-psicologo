/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react")

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `es` })
  
  // Add Netlify Identity widget script
  setHeadComponents([
    React.createElement("script", {
      key: "netlify-identity-widget",
      src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
    }),
  ])
}

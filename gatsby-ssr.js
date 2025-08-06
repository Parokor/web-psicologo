/**
 * Gatsby SSR APIs
 * Docs: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `es` })

  // Netlify Identity widget
  setHeadComponents([
    <script
      key="netlify-identity-widget"
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
    />,
  ])
}

/**
 * Evitar que react-hot-toast se ejecute en el lado del servidor.
 * Gatsby llama esta API SOLAMENTE en build-html.
 */
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-hot-toast/,
            use: loaders.null(), // lo reemplaza por un módulo vacío
          },
        ],
      },
    })
  }
}

/* gatsby-ssr.js */
const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "es" })
  setHeadComponents([
    <script
      key="netlify-identity-widget"
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
    />,
  ])
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          // Ignora **cualquier** JS del paquete
          { test: /react-hot-toast\/.*\.m?js$/, use: loaders.null() },
          // Ignora el CSS que importa el paquete
          { test: /react-hot-toast\/.*\.css$/,  use: loaders.null() },
        ],
      },
      // Otra forma de asegurarlo vía alias: apuntamos a un módulo vacío
      resolve: {
        alias: {
          "react-hot-toast": require.resolve("./src/empty-module.js"),
        },
      },
    })
  }
}

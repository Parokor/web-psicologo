/* gatsby-ssr.js */
const React = require("react")

// 1) Añadimos lang="es" y el widget de Netlify Identity
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "es" })

  setHeadComponents([
    /*  SIN JSX  */
    React.createElement("script", {
      key: "netlify-identity-widget",
      src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
    }),
  ])
}

// 2) Durante build-html anulamos react-hot-toast (JS + CSS)
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      // a) Alias para que cualquier import de "react-hot-toast"
      //    apunte a nuestro stub.
      resolve: {
        alias: {
          "react-hot-toast": require.resolve("./src/empty-module.js"),
        },
      },
      // b) Ignorar el CSS que el paquete intenta importar
      module: {
        rules: [
          {
            test: /react-hot-toast\/.*\.css$/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

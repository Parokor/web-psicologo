// gatsby-ssr.js
const React = require("react");

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "es" });

  setHeadComponents([
    React.createElement("script", {
      key: "netlify-identity-widget",
      src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
    }),
  ]);
};

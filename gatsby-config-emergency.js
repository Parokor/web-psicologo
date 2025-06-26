/**
 * EMERGENCY MINIMAL GATSBY CONFIG
 */
module.exports = {
  siteMetadata: {
    title: `Psicología Profesional`,
    description: `Sitio web profesional para servicios de psicología`,
    siteUrl: `https://web-psicologo.netlify.app`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Psicología Profesional`,
        short_name: `PsiPro`,
        start_url: `/`,
        background_color: `#0ca4b8`,
        theme_color: `#0ca4b8`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
}

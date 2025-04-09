/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Dr. [Nombre del Psicólogo]`,
    description: `Psicólogo Sanitario especializado en [especialidad]. Artículos profesionales y recursos de bienestar mental.`,
    siteUrl: `https://www.tusitio.netlify.app/`,
    social: {
      twitter: `@tuusuario`,
      instagram: `@tuusuario`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://psicologiacontenidos.wordpress.com/graphql`, // Ajusta a tu URL
        schema: {
          timeout: 60000,
        },
      },
    },
    // Otros plugins...
  ],
}
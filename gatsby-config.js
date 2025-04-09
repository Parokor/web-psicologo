/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

// Load environment variables
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

// Determine whether to use mock data or real WordPress data
const useMockData = process.env.USE_MOCK_DATA === 'true';

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
    // Determine which data source to use based on environment variable
    ...(useMockData
      ? [
          // Use mock WordPress data
          `gatsby-source-mock-wordpress`,
        ]
      : [
          // Use real WordPress data with redirect prevention
          `gatsby-wordpress-no-redirect`,
          {
            resolve: `gatsby-source-wordpress`,
            options: {
              url: `https://psicologiacontenidos.wordpress.com/graphql`, // Ajusta a tu URL
              schema: {
                timeout: 60000,
              },
              // Add custom headers to prevent redirects
              headers: {
                'X-GRAPHQL-REQUEST': 'true',
              },
              // Increase timeout for requests
              fetchOptions: {
                timeout: 60000,
              },
            },
          },
        ]),

    // Common plugins for both modes
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
    // Otros plugins...
  ],
}
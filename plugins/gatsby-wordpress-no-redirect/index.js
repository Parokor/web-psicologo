const fetch = require('node-fetch');

exports.onPreInit = ({ reporter }) => {
  reporter.info(`Initializing WordPress no-redirect plugin`);
};

// Modify the fetch behavior to include custom headers
exports.onCreateNode = ({ node, actions, createNodeId, createContentDigest }) => {
  // Only process WordPress nodes
  if (node.internal.type.startsWith('Wordpress')) {
    // Add custom headers to prevent redirects
    node.headers = {
      ...node.headers,
      'X-GRAPHQL-REQUEST': 'true',
    };
  }
};

// Override the default fetch function for WordPress GraphQL requests
exports.onCreateWebpackConfig = ({ actions, stage, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'global.customFetch': JSON.stringify(async (url, options = {}) => {
          // Add custom headers to prevent redirects
          const customOptions = {
            ...options,
            headers: {
              ...options.headers,
              'X-GRAPHQL-REQUEST': 'true',
            },
          };
          
          return fetch(url, customOptions);
        }),
      }),
    ],
  });
};

const mockPosts = require('../../src/data/mock/posts');

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  // Create nodes for posts
  mockPosts.forEach(post => {
    const nodeContent = JSON.stringify(post);
    const nodeMeta = {
      id: createNodeId(`wp-post-${post.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'WpPost',
        mediaType: 'application/json',
        content: nodeContent,
        contentDigest: createContentDigest(post),
      },
    };

    const node = Object.assign({}, post, nodeMeta);
    createNode(node);
  });

  // Create site node with general settings
  const siteSettings = {
    generalSettings: {
      title: 'Dr. Psicólogo',
      description: 'Psicólogo Sanitario especializado en terapia cognitivo-conductual',
    },
  };

  const siteNodeContent = JSON.stringify(siteSettings);
  const siteNodeMeta = {
    id: createNodeId(`wp-site`),
    parent: null,
    children: [],
    internal: {
      type: 'WpSite',
      mediaType: 'application/json',
      content: siteNodeContent,
      contentDigest: createContentDigest(siteSettings),
    },
  };

  const siteNode = Object.assign({}, siteSettings, siteNodeMeta);
  createNode(siteNode);
};

// Create schema customization to match WordPress GraphQL schema
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  const typeDefs = `
    type WpPost implements Node {
      id: ID!
      title: String!
      slug: String!
      date: String!
      excerpt: String!
      content: String!
      featuredImage: WpFeaturedImage
      categories: WpCategories
    }

    type WpFeaturedImage {
      node: WpFeaturedImageNode
    }

    type WpFeaturedImageNode {
      localFile: WpLocalFile
    }

    type WpLocalFile {
      childImageSharp: WpChildImageSharp
    }

    type WpChildImageSharp {
      gatsbyImageData: WpGatsbyImageData
    }

    type WpGatsbyImageData {
      images: WpGatsbyImageDataImages
      layout: String
      width: Int
      height: Int
    }

    type WpGatsbyImageDataImages {
      fallback: WpGatsbyImageDataFallback
    }

    type WpGatsbyImageDataFallback {
      src: String
    }

    type WpCategories {
      nodes: [WpCategory!]!
    }

    type WpCategory {
      name: String!
    }

    type WpSite implements Node {
      generalSettings: WpGeneralSettings!
    }

    type WpGeneralSettings {
      title: String!
      description: String!
    }
  `;

  createTypes(typeDefs);
};

// Create pages for blog posts
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          slug
        }
      }
    }
  `);

  result.data.allWpPost.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.slug}`,
      component: require.resolve('../../src/templates/blog-post.js'),
      context: {
        id: post.id,
      },
    });
  });
};

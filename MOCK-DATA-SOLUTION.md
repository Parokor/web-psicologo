# Mock Data Solution for WordPress Integration

This document explains how we've implemented a solution to handle the build process when the WordPress site is not yet available.

## The Problem

The Gatsby build was failing with the following error:

```
7:46:22 PM: error  gatsby-source-wordpress  GraphQL request was redirected to /typo/?subdomain=psicologiacontenidos
7:46:22 PM: null
7:46:22 PM: This can happen due to custom code or redirection plugins which redirect the request when a post is accessed.
```

Since the WordPress site doesn't exist yet, we need a way to build the site without relying on the WordPress GraphQL API.

## The Solution

We've implemented a mock data solution that:

1. Creates mock blog post data that mimics the WordPress GraphQL API response
2. Uses environment variables to control whether to use mock data or real WordPress data
3. Provides a seamless transition when the WordPress site becomes available

## How It Works

### 1. Mock Data

We've created mock blog post data in `src/data/mock/posts.js` that follows the same structure as the WordPress GraphQL API response. This includes:

- Post title, slug, date, excerpt, and content
- Featured image data
- Categories

### 2. Custom Gatsby Plugin

We've created a custom Gatsby plugin called `gatsby-source-mock-wordpress` that:

- Creates Gatsby nodes from the mock data
- Implements the same GraphQL schema as the WordPress API
- Creates pages for blog posts

### 3. Environment Variables

We use environment variables to control whether to use mock data or real WordPress data:

- `.env.development` - Controls the data source in development mode
- `.env.production` - Controls the data source in production mode

To switch between mock data and real WordPress data, simply change the `USE_MOCK_DATA` variable in these files.

## How to Use

### Development Mode

By default, development mode uses mock data. To start the development server:

```bash
npm run develop
```

### Production Mode

By default, production mode also uses mock data until the WordPress site is ready. To build for production:

```bash
npm run build
```

### Switching to Real WordPress Data

When the WordPress site is ready:

1. Update `.env.production` to set `USE_MOCK_DATA=false`
2. Make sure the WordPress site has the WPGraphQL plugin installed
3. Update the WordPress GraphQL URL in `gatsby-config.js` if needed
4. Build the site again

## Troubleshooting

If you encounter issues when switching to real WordPress data:

1. Check if the WordPress site is accessible
2. Verify that the WPGraphQL plugin is installed and activated
3. Check the WordPress GraphQL URL in `gatsby-config.js`
4. Try the solutions in `WORDPRESS-REDIRECT-FIX.md` if you encounter redirect issues

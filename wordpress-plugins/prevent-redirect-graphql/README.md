# Prevent Redirect for GraphQL

This WordPress plugin prevents redirects during GraphQL requests, which can cause issues with Gatsby builds.

## Installation

1. Upload the `prevent-redirect-graphql` folder to the `/wp-content/plugins/` directory of your WordPress site
2. Activate the plugin through the 'Plugins' menu in WordPress
3. No configuration is needed - the plugin will automatically prevent redirects during GraphQL requests

## How it works

The plugin detects GraphQL requests in two ways:
1. By checking for the `GRAPHQL_REQUEST` constant
2. By checking for a custom `X-GRAPHQL-REQUEST` header

When a GraphQL request is detected, the plugin prevents all redirects by removing the relevant WordPress filters and adding its own filters that return false.

## Troubleshooting

If you're still experiencing redirect issues, make sure:
1. The plugin is activated
2. Your GraphQL client is sending the `X-GRAPHQL-REQUEST: true` header
3. You're using the WPGraphQL plugin version 1.0.0 or higher

# Fixing WordPress Redirect Issues with Gatsby

This document explains how to fix the issue where WordPress redirects GraphQL requests, causing Gatsby builds to fail.

## The Problem

When Gatsby tries to fetch data from WordPress using GraphQL, WordPress might redirect the request to another URL (e.g., `/typo/?subdomain=psicologiaconteni`). This redirection breaks the GraphQL request and causes the Gatsby build to fail.

## Solution 1: WordPress Plugin (Recommended)

The most reliable solution is to install a WordPress plugin that prevents redirects during GraphQL requests.

1. Upload the `prevent-redirect-graphql` folder from `wordpress-plugins` to your WordPress site's `/wp-content/plugins/` directory
2. Activate the plugin through the WordPress admin panel
3. No configuration is needed - the plugin will automatically prevent redirects during GraphQL requests

## Solution 2: Add Code to WordPress Theme

If you can't install a plugin, you can add the following code to your WordPress theme's `functions.php` file:

```php
/**
 * Prevent redirects during GraphQL requests
 */
function prevent_redirect_for_graphql() {
    // Check if this is a GraphQL request
    $is_graphql_request = false;
    
    // Check for the GraphQL constant
    if (defined('GRAPHQL_REQUEST') && GRAPHQL_REQUEST === true) {
        $is_graphql_request = true;
    }
    
    // Check for custom header
    if (isset($_SERVER['HTTP_X_GRAPHQL_REQUEST']) && $_SERVER['HTTP_X_GRAPHQL_REQUEST'] === 'true') {
        $is_graphql_request = true;
    }
    
    // If this is a GraphQL request, prevent redirects
    if ($is_graphql_request) {
        // Remove all redirect filters
        remove_all_filters('wp_redirect');
        remove_all_filters('redirect_canonical');
        
        // Add a filter that returns false to prevent redirects
        add_filter('wp_redirect', '__return_false', 999);
        add_filter('redirect_canonical', '__return_false', 999);
    }
}

// Hook into WordPress as early as possible
add_action('init', 'prevent_redirect_for_graphql', 1);

// Also hook into the GraphQL request
add_action('graphql_init', function() {
    prevent_redirect_for_graphql();
});
```

## Solution 3: Gatsby Configuration (Already Implemented)

We've already updated the Gatsby configuration to include custom headers and a plugin that helps prevent redirects:

1. Added a custom plugin `gatsby-wordpress-no-redirect` that modifies GraphQL requests
2. Updated the `gatsby-source-wordpress` configuration to include custom headers
3. Increased the timeout for GraphQL requests

## Testing the Solution

After implementing one of the solutions above:

1. Run `gatsby clean` to clear the cache
2. Run `gatsby develop` to test if the issue is resolved
3. If the development server starts without errors, the issue is fixed

## Additional Troubleshooting

If you're still experiencing issues:

1. Check if your WordPress site is using a caching plugin that might interfere with GraphQL requests
2. Verify that the WPGraphQL plugin is properly installed and activated
3. Check if there are any security plugins or settings that might be blocking or redirecting API requests
4. Try accessing the GraphQL endpoint directly in a browser to see if it redirects

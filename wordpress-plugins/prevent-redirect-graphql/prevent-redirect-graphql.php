<?php
/**
 * Plugin Name: Prevent Redirect for GraphQL
 * Description: Prevents redirects during GraphQL requests
 * Version: 1.0.0
 * Author: Your Name
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

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

<?php 

//Create Route for navigation
function get_menu() {
    # Change 'menu' to your own navigation slug.
    return wp_get_nav_menu_items('navigation');
}

add_action( 'rest_api_init', function () {
        register_rest_route( 'header', '/navigation', array(
        'methods' => 'GET',
        'callback' => 'get_menu',
        'show_in_rest'=> true,
    ) );
} );
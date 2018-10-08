<?php 

if (function_exists('register_sidebar')) {
    register_sidebar(array(
        'name' => 'Custom Rest API - Footer',
        'id'   => 'footer',
        'description'   => 'The footer.',
        'before_widget' => '',
        'after_widget'  => '',
        'before_title'  => '<h3>',
        'after_title'   => '<span></span></h3>'
    ));
    register_sidebar(array(
        'name' => 'Custom Rest API - Sidebar Left',
        'id'   => 'sidebar_left',
        'description'   => 'The right sidebar area.',
        'before_widget' => '<div class="sidebar_area">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3>',
        'after_title'   => '</h3>'
    ));
    }
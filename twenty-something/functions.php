<?php

function enqueue_styles_and_scripts()
{
    wp_register_style(
        'twenty-something',
        get_stylesheet_directory_uri() . '/assets/css/build/main.min.css',
        false,
        '1.0.0'
    );
    wp_enqueue_style('twenty-something');

    wp_register_script(
        'twenty-something',
        get_stylesheet_directory_uri() . '/assets/js/build/app.min.js',
        array('jquery'),
        null,
        true
    );
    $translation_array = array();
    wp_localize_script('twenty-something', 'frontend_fields', $translation_array);
    wp_enqueue_script('twenty-something');
}

add_action('wp_enqueue_scripts', 'enqueue_styles_and_scripts', 100);

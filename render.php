<?php
require_once 'vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;

// Set up Twig
$loader = new FilesystemLoader('src/templates'); // Ensure this path is correct
$twig = new Environment($loader);

try {
    // Render the base template
    echo $twig->render('base.twig', [
        'title' => 'Landing Page',
    ]);
} catch (Exception $e) {
    // Handle errors gracefully
    echo 'Error: ' . $e->getMessage();
}

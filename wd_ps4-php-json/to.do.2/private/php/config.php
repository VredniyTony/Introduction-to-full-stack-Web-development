<?php
define('ROOT_PATH', realpath(dirname(__DIR__) . DIRECTORY_SEPARATOR . '..') . DIRECTORY_SEPARATOR);
define('PRIVATE_PATH', ROOT_PATH . 'private' . DIRECTORY_SEPARATOR);
define('PUBLIC_PATH', ROOT_PATH . 'public' . DIRECTORY_SEPARATOR);

return [
    'voted_brands' => PRIVATE_PATH . 'json' . DIRECTORY_SEPARATOR . 'voted_brands',
    'brand_list' => PRIVATE_PATH . 'php' . DIRECTORY_SEPARATOR . 'brands.php',
    'json' => PRIVATE_PATH . 'php' . DIRECTORY_SEPARATOR . 'json.php'
];
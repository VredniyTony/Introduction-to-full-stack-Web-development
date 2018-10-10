<?php
define('D_SEP', DIRECTORY_SEPARATOR);
define('ROOT_PATH', realpath(dirname(__DIR__) . D_SEP . '..') . D_SEP);
define('PRIVATE_PATH', ROOT_PATH . 'private' . D_SEP);
define('PUBLIC_PATH', ROOT_PATH . 'public' . D_SEP);

return [
    'brand_list' => PRIVATE_PATH . 'json' . D_SEP . 'brand_list.json',
    'voted_list' => PRIVATE_PATH . 'json' . D_SEP . 'voted_list.json',
    'handler' => PUBLIC_PATH . 'assets' . D_SEP . 'php' . D_SEP . 'handler.php',
    'json' => PRIVATE_PATH . 'php' . D_SEP . 'json.php'
];
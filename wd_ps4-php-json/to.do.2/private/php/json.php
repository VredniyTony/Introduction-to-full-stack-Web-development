<?php
session_start();
$config = require dirname(__DIR__) . DIRECTORY_SEPARATOR . 'php' . DIRECTORY_SEPARATOR . 'config.php';

function json_file($data)
{
    try {
        check_json($data);
    } catch (Exception $e) {
        $_SESSION['error_msg'] = $e->getMessage();
    }

}

function check_json($data)
{
    if (file_exists($data)) {
        throw new Exception('no file');
    }
    $data = file_get_contents($data);

    if (!is_readable($data)) {
        throw new Exception('can not read');
    } elseif (!is_writeable($data)) {
        throw new Exception('can not write');
    } elseif (!is_string($data) || !is_array(json_decode($data))) {
        throw new Exception('bad json');
    }
    return true;
}

//    !is_array(json_decode($data)))

////    $brand_list = json_decode(file_get_contents($config['brand_list']));
////    if (in_array($item, $brand_list->brands)) {
////        $voted_list = json_decode(file_get_contents($config['voted_list']));
////        $voted_list->$item += 1;
////        file_put_contents($config['voted_list'], json_encode($voted_list));
////}
////
////};
///
///


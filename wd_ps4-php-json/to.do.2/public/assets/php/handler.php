<?php
session_start();
$config = require_once realpath(dirname(__DIR__) . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..')
    . DIRECTORY_SEPARATOR . 'private' . DIRECTORY_SEPARATOR . 'php' . DIRECTORY_SEPARATOR . 'config.php';

if (isset($_POST['vote'])) {
    require_once $config['json'];
    if (check_json($config['voted_list']) &&
        check_vote($_POST['vote'], $config['brand_list'])) {
        add_vote($_POST['vote'], $config['voted_list']);
    }
    header('Location: vote_statistics.php');
}

if (isset($_POST['voted'])) {
    echo file_get_contents($config['voted_list']);
    return;
}

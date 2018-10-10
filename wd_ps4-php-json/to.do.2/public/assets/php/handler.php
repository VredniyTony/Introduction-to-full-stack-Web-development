<?php
session_start();
$config = require_once realpath(dirname(__DIR__) . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..')
    . DIRECTORY_SEPARATOR . 'private' . DIRECTORY_SEPARATOR . 'php' . DIRECTORY_SEPARATOR . 'config.php';
require_once $config['json'];

if (isset($_POST['vote'])) {
    $_SESSION['json'] = $_POST['vote'];
    header('Location: vote_statistics.php');
}
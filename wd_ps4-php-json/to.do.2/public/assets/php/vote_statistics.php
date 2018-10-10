<?php
session_start();
$config = require_once realpath(dirname(__DIR__) . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . '..')
    . DIRECTORY_SEPARATOR . 'private' . DIRECTORY_SEPARATOR . 'php' . DIRECTORY_SEPARATOR . 'config.php';
?>

<!DOCTYPE html>
<html lang='ru'>
<head>
    <meta charset='UTF-8'>
    <link type='text/css' rel='stylesheet' href='../css/reset_css.css'>
    <link type='text/css' rel='stylesheet' href='../css/main.css'>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="../js/google_charts.js"></script>
    <title>WD_PS4 PHP, JSON(warm-up)</title>
</head>
<body>
<div class='header'>
    <div class='headerContainer'>
        <img id='logo' src='../images/logo.jpg' about='Ivanov Anton'>
        <div id='headerText'>
            <h1>Problem set "WD_PS4 PHP, JSON(vote)"</h1>
        </div>
    </div>
</div>
<div class='content'>
    <div class='contentContainer'>
        <div id="statistic"></div>
    </div>
</div>
<footer class="footer">
    <div class="footerContainer">
        <p>powered by VredniyTony</p>
    </div>
</footer>
</body>
</html>
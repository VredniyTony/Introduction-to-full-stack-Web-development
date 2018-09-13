<?php
session_start();
$config = require_once dirname(__DIR__) . DIRECTORY_SEPARATOR . 'private' . DIRECTORY_SEPARATOR . 'php'
    . DIRECTORY_SEPARATOR . 'config.php';
?>

<!DOCTYPE html>
<html lang='ru'>
<head>
    <meta charset='UTF-8'>
    <link type='text/css' rel='stylesheet' href='assets/css/reset_css.css'>
    <link type='text/css' rel='stylesheet' href='assets/css/main.css'>
    <title>WD_PS4 PHP, JSON(warm-up)</title>
</head>
<body>
<div class='header'>
    <div class='headerContainer'>
        <img id='logo' src='assets/images/logo.jpg' about='Ivanov Anton'>
        <div id='headerText'>
            <h1>Домашняя работa "WD_PS4 PHP, JSON(vote)"</h1>
        </div>
    </div>
</div>
<div class='content'>
    <div class='contentContainer'>
        <form action="assets/php/handler.php" method="post">
            <?php $brands_list = json_decode(file_get_contents($config['brand_list'])); ?>
            <h1 id="title"><?= $brands_list->title ?></h1>
            <div id="brands">
                <?php foreach ($brands_list->brands as $key => $value) : ?>
                    <label class="radio_vote">
                        <input type="radio" name="vote" value=<?= $value ?>>
                        <span><?= $value ?></span>
                    </label>
                <?php endforeach ?>

                <input type="submit">
        </form>
        <?php session_destroy() ?>
    </div>
</div>
<footer class="footer">
    <div class="footerContainer">
        <p>powered by VredniyTony</p>
    </div>
</footer>
</body>
</html>
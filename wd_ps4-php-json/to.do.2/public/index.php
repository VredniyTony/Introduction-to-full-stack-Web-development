<?php
session_start();
$config = require dirname(__DIR__) . DIRECTORY_SEPARATOR . 'private' . DIRECTORY_SEPARATOR . 'php' . DIRECTORY_SEPARATOR . 'config.php';
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
            <h1 id="title">Your favorite notebook brand:</h1>
            <div id="Brands">
                <?php
                echo require $config['brand_list'];
                ?>
                <!--                <label>-->
                <!--                    <input type="radio" name="brand" checked/>-->
                <!--                    <span>Msi</span>-->
                <!--                </label>-->

                <input type="submit" id="submitBrands">
        </form>
    </div>
</div>
<footer class="footer">
    <div class="footerContainer">
        <p>powered by VredniyTony</p>
    </div>
</footer>
</body>
</html>
<?php
session_start();
$config = require_once realpath(dirname(__DIR__))
    . DIRECTORY_SEPARATOR . 'private' . DIRECTORY_SEPARATOR . 'php' . DIRECTORY_SEPARATOR . 'config.php';
define('brand_list_json', $config['brand_list']);
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
            <h1>Problem set "WD_PS4 PHP, JSON(vote)"</h1>
        </div>
    </div>
</div>
<div class='content'>
    <div class='contentContainer'>
        <?php
        if (isset($_SESSION['error_msg'])) {
            $msg = $_SESSION['error_msg'];
            echo "<h1 id='error_msg'>$msg</h1>";
        }
        try {
            require_once $config['json'];
            json_file(brand_list_json);
        } catch (Exception $e) {
            $_SESSION['error_msg'] = $e->getMessage();
        }
        if (!isset($_SESSION['error_msg'])) {
            $brand_list = json_decode(file_get_contents(brand_list_json));
            ?>
            <form action="assets/php/handler.php" method="post">
                <h1 id="title"><?= $brand_list->title ?></h1>
                <div id="brands">
                    <?php foreach ($brand_list->brands as $key => $value) : ?>
                        <label class="radio_vote">
                            <input type="radio" name="vote" value=<?= $value ?>>
                            <span><?= $value ?></span>
                        </label>
                    <?php endforeach ?>
                    <input type="submit">
            </form>
            <?php
        }
        session_destroy()
        ?>
    </div>
</div>
<footer class="footer">
    <div class="footerContainer">
        <p>powered by VredniyTony</p>
    </div>
</footer>
</body>
</html>
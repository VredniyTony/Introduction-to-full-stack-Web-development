<?php
session_start();
ini_set('memory_limit', '-1');
?>
<!DOCTYPE html>
<html lang = 'ru'>
<head>
    <meta charset = 'UTF-8'>
    <link type = 'text/css' rel = 'stylesheet' href = 'assets/css/reset-css.css'>
    <link type = 'text/css' rel = 'stylesheet' href = 'assets/css/main.css'>
    <title>WD_PS4 PHP, JSON(warm-up)</title>
</head>
<body>
<div class = 'header'>
    <div class = 'headerContainer'>
        <img id = 'logo' src = 'assets/images/logo.jpg' about = 'Ivanov Anton'>
        <div id = 'headerText'>
            <h1>Домашняя работa "WD_PS4 PHP, JSON(warm-up)"</h1>
        </div>
    </div>
</div>
<div class = 'content'>
    <div class = 'contentContainer'>
        <!--task1-->
        <h1 class="task">Сумма чисел от -1000 до 1000</h1>
        <form action="assets/tamplates/sum.php" method="post">
            <input type="submit" name="sum" value="Результат" class="submitTask"/>
        </form>
        <div class="result">
            <?php
            if (isset($_SESSION['sum'])){
                echo $_SESSION['sum'];
            }
            ?>
        </div>
        <!--task2-->
        <h1 class="task">Сумма чисел от -1000 до 1000, которые заканчиваются на 2,3, и 7</h1>
        <form action="assets/tamplates/sum237.php" method="post">
            <input type="submit" name="sum237" value="Результат" class="submitTask"/>
        </form>
        <div class="result">
            <?php
            if (isset($_SESSION['sum237'])){
                echo $_SESSION['sum237'];
            }
            ?>
        </div>
        <!--task3-->
        <h1 class="task">Вывести на страницу список из 50 элементо</h1>
        <form action="assets/tamplates/tree.php" method="post">
            <input type="submit" name="tree" value="Результат" class="submitTask"/>
        </form>
        <div class="result">
            <?php
            if (isset($_SESSION['tree'])){
                echo $_SESSION['tree'];
            }
            ?>
        </div>
        <!--task4-->
        <h1 class="task">Шахматная доска</h1>
        <form action="assets/tamplates/chessTable.php" method="post">
            <input type="text" pattern="\d{1,3}[x]\d{1,3}" placeholder="999x999" name="chessTable" class="taskForm" required/>
            <input type="submit" value="Результат" class="submitTask"/>
        </form>
        <div class="result">
            <?php
            if (isset($_SESSION['chessTable'])){
                echo $_SESSION['chessTable'];
            }
            ?>
        </div>
        <!--task5-->
        <h1 class="task">Сумма цифр введённого числа</h1>
        <form action="assets/tamplates/sumNumbers.php" method="post">
            <input type="number" name="sumNumbers" class="taskForm"/>
            <input type="submit" value="Результат" class="submitTask"/>
        </form>
        <div class="result">
            <?php
            if (isset($_SESSION['sumNumbers'])){
                echo $_SESSION['sumNumbers'];
            }
            ?>
        </div>
        <!--task6-->
        <h1 class="task">Массив рандомных целых чисел(100)</h1>
        <form action="assets/tamplates/randomArray.php" method="post">
            <input type="submit" name="randomArray" value="Результат" class="submitTask"/>
        </form>
        <div class="result">
            <?php
            if (isset($_SESSION['randomArray'])){
                print_r($_SESSION['randomArray']);
            }
            session_destroy();
            ?>
        </div>
    </div>
</div>
<footer class="footer">
    <div class="footerContainer">
        <p>powered by VredniyTony</p>
    </div>
</footer>
</body>
</html>

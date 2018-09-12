<?php
session_start();

if (isset($_POST['task'])) {
    $taskName = $_POST['task'];
    switch ($taskName) {
        case 'sum':
            $_SESSION[$taskName] = sum();
            break;
        case 'sum237':
            $_SESSION[$taskName] = sum237();
            break;
        case 'tree':
            $_SESSION[$taskName] = tree();
            break;
        case 'chessTable':
            $_SESSION[$taskName] = chessTable();
            break;
        case 'sumNumbers':
            $_SESSION[$taskName] = sumNumbers();
            break;
        case 'randomArray':
            $_SESSION[$taskName] = randomArray();
            break;
    }
}
header('Location: ../../index.php#' . $taskName);

function sum()
{
    $sum = 0;
    for ($i = -1000; $i <= 1000; $i++) {
        $sum = $sum + $i;
    }
    return $sum;
}

function sum237()
{
    $sum237 = 0;
    for ($i = -1000; $i <= 1000; $i++) {
        $tempNum = abs($i) % 10;
        if (($tempNum === 2) || ($tempNum === 3) || ($tempNum === 7)) {
            $sum237 = $sum237 + $i;
        }
    }
    return $sum237;
}

function tree()
{
    $element = "*";
    $tmpTree = "";
    $tree = "";
    for ($i = 0; $i < 50; $i++) {
        $tmpTree .= $element;
        $tree .= $tmpTree;
        $tree .= "<br>";
    }
    return $tree;
}

function chessTable()
{
    $data = $_POST['chessTableData'];
    $sizeDiv = 920;
    list($chessWidth, $chessHeight) = explode("x", $data);
    $chessWidth > $chessHeight ? ($size = $sizeDiv / $chessWidth) : ($size = $sizeDiv / $chessHeight);
    $size .= "px";
    $chessTable = "";
    $tmpCol = "black";
    $tmpRow = "black";
    for ($i = 0; $i < $chessWidth; $i++) {
        $chessTable .= "<div class='flexDivRow' style='height: $size'>";
        for ($j = 0; $j < $chessHeight; $j++) {
            $tmpCol === "black" ? ($chessTable .= "<div class='flexDivColWhite' style='height: $size; width: $size'></div>") : ($chessTable .= "<div class='flexDivColBlack' style='height: $size; width: $size'></div>");
            $tmpCol === "black" ? ($tmpCol = "white") : ($tmpCol = "black");
        }
        $chessTable .= "</div>";
        $tmpRow === "black" ? ($tmpRow = "white") : ($tmpRow = "black");
        $tmpCol = $tmpRow;
    }
    return $chessTable;
}

function sumNumbers()
{
    $number = $_POST['numbers'];
    $numbersArray = str_split($number, 1);
    $sum = 0;
    if (!is_numeric($numbersArray[0])) {
        array_shift($numbersArray);
    }
    for ($i = 0; $i < count($numbersArray); $i++) {
        $sum = $sum + $numbersArray[$i];
    }
    return $sum;
}

function randomArray()
{
    $numbers = array();
    for ($i = 0; $i < 100; $i++) {
        $numbers[$i] = mt_rand(0, 9);
    }
    $numbers = array_unique($numbers);
    sort($numbers);
    rsort($numbers);
    $_SESSION['randomArray'] = $numbers;
    return $numbers;
}
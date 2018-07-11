<?php
session_start();
if (isset($_POST['sumNumbers'])){
    $number = $_POST['sumNumbers'];
    $numbersArray = str_split($number, 1);
    $sum = 0;
    if (!is_numeric($numbersArray[0])){
        array_shift($numbersArray);
    }
    for ($i = 0; $i < count($numbersArray); $i++){
        $sum = $sum + $numbersArray[$i];
    }
    $_SESSION['sumNumbers'] = $sum;
}
header('Location:../../../index.php');
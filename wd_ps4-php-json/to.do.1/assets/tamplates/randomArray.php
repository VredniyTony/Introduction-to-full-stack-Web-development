<?php
session_start();
if (isset($_POST['randomArray'])){
    $numbers = array();
    for ($i = 0; $i < 100; $i++){
            $numbers[$i] = mt_rand(0,9);
    }
    $numbers = array_unique($numbers);
    sort($numbers);
    rsort($numbers);
    $_SESSION['randomArray'] = $numbers;
}
header('Location:../../../index.php');
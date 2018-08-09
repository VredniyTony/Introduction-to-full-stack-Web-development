<?php
session_start();
if (isset($_POST['sum237'])){
    $sum = 0;
    for ($i = -1000; $i <= 1000; $i++){
        $tempNum = abs($i) % 10;
        if (($tempNum === 2) || ($tempNum === 3) || ($tempNum === 7)) {
            $sum = $sum + $i;
        }
    }
    $_SESSION['sum237'] = $sum;
}
header('Location:../../../index.php');
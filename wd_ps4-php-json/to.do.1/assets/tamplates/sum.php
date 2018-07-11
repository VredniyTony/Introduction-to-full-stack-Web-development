<?php
session_start();
if (isset($_POST['sum'])){
    $sum = 0;
    for ($i = -1000; $i <= 1000; $i++){
        $sum = $sum + $i;
    }
    $_SESSION['sum'] = $sum;
}
header('Location:../../../index.php');
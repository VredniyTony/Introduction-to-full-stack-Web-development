<?php
session_start();
if (isset($_POST['tree'])){
    $element = "*";
    $tmpTree = "";
    $tree = "";
    for ($i = 0; $i < 50; $i++){
        $tmpTree .= $element;
        $tree .= $tmpTree;
        $tree .= "<br>";
    }
    $_SESSION['tree'] = $tree;
}
header('Location:../../../index.php');
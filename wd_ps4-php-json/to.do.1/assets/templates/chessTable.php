<?php
session_start();
if (isset($_POST['chessTable'])) {
    $number = $_POST['chessTable'];
    $sizeDiv = 920;
    list($chessWidth, $chessHeight) = explode("x", $number);
    $chessWidth > $chessHeight ? ($size = $sizeDiv / $chessWidth):($size = $sizeDiv / $chessHeight);
    $size .= "px";
    $chessTable = "";
    $tmpCol = "black"; $tmpRow = "black";
    for ($i=0; $i < $chessWidth; $i++){
        $chessTable .="<div class='flexDivRow' style='height: $size'>";
        for ($j=0; $j < $chessHeight; $j++){
            $tmpCol === "black" ? ($chessTable .="<div class='flexDivColWhite' style='height: $size; width: $size'></div>"):($chessTable .="<div class='flexDivColBlack' style='height: $size; width: $size'></div>");
            $tmpCol === "black" ? ($tmpCol = "white"):($tmpCol = "black");
        }
        $chessTable .="</div>";
        $tmpRow === "black" ? ($tmpRow = "white"):($tmpRow = "black");
        $tmpCol = $tmpRow;
    }
    $_SESSION['chessTable'] = $chessTable;
}
header('Location:../../../index.php');
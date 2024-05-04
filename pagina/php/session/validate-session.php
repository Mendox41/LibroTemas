<?php

session_start();

if (!isset($_SESSION['idSession'])) {
    header('location: ../../templates/login.php');
    exit();
}else if ($_SESSION['admin'] ===  1) {
    header("location:../../templates/admin/home.php");
    
}

?>

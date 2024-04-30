<?php
session_start();

if (!isset($_SESSION['idSesion'])) {
    header('Location: templates/login.php');
    exit();
}else if($_SESSION['admin'] ===  1){
    header('Location: templates/admin/home.php');
    exit();
} else {
    header('Location: templates/user/home.php');
    exit();
}
?>

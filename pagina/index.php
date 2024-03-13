<?php
session_start();

if (!isset($_SESSION['idSesion'])) {
    header('Location: templates/login.php');
    exit();
} else {
    header('Location: templates/home.php');
    exit();
}
?>

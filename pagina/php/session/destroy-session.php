<?php

if (!isset($_SESSION['idSession'])) {
    header('location: ../../templates/login.php');
} else {
    session_start();
    session_unset();
    session_destroy();

    header('location: ../../templates/login.php');
    exit();
}


?>
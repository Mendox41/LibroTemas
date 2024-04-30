<?php

if (!isset($_SESSION['idSession'])) {
    header('location: ../../templates/login.php');
}else if ($_SESSION['admin'] !== 1) {
    header("location:../../templates/user/home.php");
}

?>
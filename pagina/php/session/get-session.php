<?php


session_start();

if (!isset($_SESSION['idSession'])) {
    header('location: ../../templates/login.php');
    exit();
} else {
    $variablesSession = new stdClass();
    $variablesSession->id_usuario = $_SESSION['id_usuario'];
    $variablesSession->usuario = $_SESSION['usuario'];
    $variablesSession->active = $_SESSION['active'];
    $variablesSession->admin = $_SESSION['admin'];

    echo json_encode($variablesSession);

}



?>
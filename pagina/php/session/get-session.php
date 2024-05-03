<?php


session_start();
$variablesSession = new stdClass();
$variablesSession-> success = false;

if (isset($_SESSION['idSession'])) {
    $variablesSession->id_usuario = $_SESSION['id_usuario'];
    $variablesSession->usuario = $_SESSION['usuario'];
    $variablesSession->active = $_SESSION['active'];
    $variablesSession->admin = $_SESSION['admin'];
    $variablesSession->success = true;
    
} 

echo json_encode($variablesSession);


?>
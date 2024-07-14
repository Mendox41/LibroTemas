<?php

include(__DIR__ . "/../database/conection.php");
include(__DIR__ . "/../error_stmt/errorFunctions.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);

$id_libro_tema = isset($_POST['id_libro_tema']) ? $_POST['id_libro_tema'] : null;
$fecha = isset($_POST['fecha']) ? $_POST['fecha'] : null;
$titulo = isset($_POST['titulo']) ? $_POST['titulo'] : null;
$descripcion = isset($_POST['descripcion']) ? $_POST['descripcion'] : null;

$result = new stdClass();
$result->success = false;

if ($id_libro_tema === null) {
    error_request($result, "Falta el campo id_libro_tema");
    echo json_encode($result);
    exit();
} elseif ($fecha === null) {
    error_request($result, "Falta el campo fecha");
    echo json_encode($result);
    exit();
} elseif ($titulo === null) {
    error_request($result, "Falta el campo titulo");
    echo json_encode($result);
    exit();
} elseif ($descripcion === null) {
    error_request($result, "Falta el campo descripcion");
    echo json_encode($result);
    exit();
}

$databaseName = "300hs_laborales";
mysqli_select_db($conn, $databaseName);

$stmt = $conn->prepare("CALL modify_topic(?, ?, ?, ?)");
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

$stmt->bind_param("iiss", $id_libro_tema, $fecha, $titulo, $descripcion);

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

$result->success = true;

$stmt->close();
$conn->close();

echo json_encode($result);

?>

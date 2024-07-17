<?php

// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);

$result = new stdClass();
$result->success = false;

$db_name = "300hs_laborales";
mysqli_select_db($conn, $db_name);

// Llamada al procedimiento almacenado
$stmt = $conn->prepare("SELECT id_profesor, apellido, nombre FROM profesores;");
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
}

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
}

// Manejo de resultados
$stmt->bind_result($id_profesor, $apellido, $nombre);

$profesores = [];

while ($stmt->fetch()) {
    $datoRelacion = new stdClass();

    $datoRelacion->id_profesor = $id_profesor;
    $datoRelacion->apellido_nombre = $apellido.", ".$nombre;

    array_push($profesores, $datoRelacion);
}

if (empty($profesores)) {
    error_request($result, "No hay profesores registrados");
} else {
    $result->profesores = $profesores;
    $result->success = true;
}

$stmt->close();
$conn->close();

echo json_encode($result);
?>

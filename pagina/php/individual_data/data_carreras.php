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
$stmt = $conn->prepare("SELECT id_carrera, carrera FROM carreras;"); 
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
}

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
}

// Manejo de resultados
$stmt->bind_result($id_carrera, $carrera);

$carreras = [];

while ($stmt->fetch()) {
    $datoRelacion = new stdClass();

    $datoRelacion->id_carrera = $id_carrera;
    $datoRelacion->carrera = $carrera;

    array_push($carreras, $datoRelacion);
}

if (empty($carreras)) {
    error_request($result, "No hay carreras registrados");
} else {
    $objRelacion = new stdClass();
    $objRelacion->carreras = $carreras;
    $result->respuesta = $objRelacion;
    $result->success = true;
}

$stmt->close();
$conn->close();

echo json_encode($result);
?>

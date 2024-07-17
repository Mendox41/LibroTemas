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
$stmt = $conn->prepare("CALL get_comisiones_for_new_course();"); 
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
}

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
}

// Manejo de resultados
$stmt->bind_result($id_comision, $comision);

$comisiones = [];

while ($stmt->fetch()) {
    $dato_comision = new stdClass();

    $dato_comision->id_comision = $id_comision;
    $dato_comision->comision = $comision;

    array_push($comisiones, $dato_comision);
}

if (empty($comisiones)) {
    error_request($result, "No hay comisiones registrados");
} else {
    $result->comisiones = $comisiones;
    $result->success = true;
}

$stmt->close();
$conn->close();

echo json_encode($result);
?>

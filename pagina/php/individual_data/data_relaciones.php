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
$stmt = $conn->prepare("CALL datos_relacion();"); 
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
}

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
}

// Manejo de resultados
$stmt->bind_result($id_carrera, $carrera, $id_anio, $anio, $id_semestre, $semestre, $id_materia, $materia);

$relaciones = [];

while ($stmt->fetch()) {
    $datoRelacion = new stdClass();

    $datoRelacion-> id_carrera = $id_carrera;
    $datoRelacion-> carrera = $carrera;
    $datoRelacion-> id_anio = $id_anio;
    $datoRelacion-> anio = $anio;
    $datoRelacion-> id_semestre = $id_semestre;
    $datoRelacion-> semestre = $semestre;
    $datoRelacion-> id_materia = $id_materia;
    $datoRelacion-> materia = $materia;

    array_push($relaciones, $datoRelacion);
}

if (empty($relaciones)) {
    error_request($result, "No hay relaciones registrados");
} else {
    $objRelacion = new stdClass();
    $objRelacion->relaciones = $relaciones;
    $result->respuesta = $objRelacion;
    $result->success = true;
}

$stmt->close();
$conn->close();

echo json_encode($result);
?>

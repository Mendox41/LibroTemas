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
$stmt = $conn->prepare("CALL datos_curso_id();"); 
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

// Manejo de resultados
$stmt->bind_result($id_carrera, $carrera, $id_anio, $anio, $id_materia, $materia, $id_comision, $comision, $id_turno, $turno);

$curso = [];

while ($stmt->fetch()) {
    $datoCurso = new stdClass();

    $datoCurso->id_carrera = $id_carrera;
    $datoCurso->carrera = $carrera;
    $datoCurso->id_anio = $id_anio;
    $datoCurso->anio = $anio;
    $datoCurso->id_materia = $id_materia;
    $datoCurso->materia = $materia;
    $datoCurso->id_comision = $id_comision;
    $datoCurso->comision = $comision;
    $datoCurso->id_turno = $id_turno;  
    $datoCurso->turno = $turno;       

    array_push($curso, $datoCurso);
}

if (empty($curso)) {
    error_request($result, "No hay curso registrados");
} else {
    $objCurso = new stdClass();
    $objCurso->curso = $curso;
    $result->respuesta = $objCurso;
    $result->success = true;
}

$stmt->close();
$conn->close();

echo json_encode($result);

?>

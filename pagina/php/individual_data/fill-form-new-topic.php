<?php

// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);

$id_curso = isset($_POST['id_Curso']) ? $_POST['id_Curso'] : null;

$result = new stdClass();
$result->success = false;

if ($id_curso === null) {
    error_stmt($result, "ID de curso no proporcionado", null, $conn);
    echo json_encode($result);
    exit();
}

$db_name = "300hs_laborales";
if (!mysqli_select_db($conn, $db_name)) {
    error_stmt($result, "Error seleccionando la base de datos: " . $conn->error, null, $conn);
    echo json_encode($result);
    exit();
}

// Llamada al procedimiento almacenado
$stmt = $conn->prepare("CALL datos_curso_id(?);");
if (!$stmt) {
    error_stmt($result, "Error preparando la consulta: " . $conn->error, null, $conn);
    echo json_encode($result);
    exit();
}

$stmt->bind_param("i", $id_curso);

if (!$stmt->execute()) {
    error_stmt($result, "Error ejecutando la consulta: " . $stmt->error, $stmt, $conn);
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
    error_stmt($result, "No hay cursos registrados", null, $conn);
} else {
    $result->curso = $curso;
    $result->success = true;
}

$stmt->close();
$conn->close();

echo json_encode($result);

?>
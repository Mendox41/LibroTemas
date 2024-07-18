<?php

// Incluir el archivo de conexión a la base de datos
include (__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include (__DIR__ . "/../error_stmt/errorFunctions.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);

$id_curso = isset($_POST['id_curso']) ? $_POST['id_curso'] : null;

$result = new stdClass();
$result->success = false;

if ($id_curso === null) {
    error_stmt($result, "ID de curso no fue proporcionado", null, $conn);
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
$stmt = $conn->prepare("CALL get_datos_curso(?);");
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
$stmt->bind_result($id_carrera, $carrera, $id_anio, $anio, $id_materia, $materia, $descripcion, $id_semestre, $semestre, $id_turno, $turno, $c_anio, $id_comision, $id_profesor, $apellido, $nombre, $isActive);

$curso = [];

while ($stmt->fetch()) {
    $datoCurso = new stdClass();

    $datoCurso->id_carrera = $id_carrera;
    $datoCurso->carrera = $carrera;
    $datoCurso->id_anio = $id_anio;
    $datoCurso->anio = $anio;
    $datoCurso->id_materia = $id_materia;
    $datoCurso->materia_descripcion = $materia . ', ' . $descripcion;
    $datoCurso->id_semestre = $id_semestre;
    $datoCurso->semestre = $semestre;
    $datoCurso->id_turno = $id_turno;
    $datoCurso->turno = $turno;
    $datoCurso->c_anio = $c_anio;
    $datoCurso->id_comision = $id_comision;
    $datoCurso->id_profesor = $id_profesor;
    $datoCurso->nombre_apellido = $apellido . ", " . $nombre;
    $datoCurso->isActive = $isActive;

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

<?php

// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);

$id_libro_tema = isset($_POST['id_libro_tema']) ? $_POST['id_libro_tema'] : null;

$result = new stdClass();
$result->success = false;

if ($id_libro_tema === null) {
    error_stmt($result, "ID de libro de tema no proporcionado", null, $conn);
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
$stmt = $conn->prepare("CALL get_datos_tema(?);");
if (!$stmt) {
    error_stmt($result, "Error preparando la consulta: " . $conn->error, null, $conn);
    echo json_encode($result);
    exit();
}

$stmt->bind_param("i", $id_libro_tema);

if (!$stmt->execute()) {
    error_stmt($result, "Error ejecutando la consulta: " . $stmt->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

// Manejo de resultados
$stmt->bind_result($carrera, $anio, $materia, $turno, $comision, $usuario, $apellido, $nombre, $fecha, $fecha_ingreso, $fecha_modif, $tema, $descripcion);

$curso = [];

while ($stmt->fetch()) {
    $datoCurso = new stdClass();
    $datoCurso->carrera = $carrera;
    $datoCurso->anio = $anio;
    $datoCurso->materia = $materia;
    $datoCurso->turno = $turno;
    $datoCurso->comision = $comision;
    $datoCurso->usuario = $usuario;
    $datoCurso->apellido = $apellido;
    $datoCurso->nombre = $nombre;
    $datoCurso->fecha = $fecha;
    $datoCurso->fecha_ingreso = $fecha_ingreso;
    $datoCurso->fecha_modif = $fecha_modif;
    $datoCurso->tema = $tema;
    $datoCurso->descripcion = $descripcion;
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
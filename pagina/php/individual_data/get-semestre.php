<?php

// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);

$id_carrera = isset($_POST['id_carrera']) ? $_POST['id_carrera'] : null;
$id_anio_carrera = isset($_POST['id_anio_carrera']) ? $_POST['id_anio_carrera'] : null;
$id_materia = isset($_POST['id_materia']) ? $_POST['id_materia'] : null;



$result = new stdClass();
$result->success = false;

if ($id_carrera === null) {
    error_stmt($result, "ID de carrera no proporcionado", null, $conn);
    echo json_encode($result);
    exit();
} else if ($id_anio_carrera === null) {
    error_stmt($result, "ID de año carrera no proporcionado", null, $conn);
    echo json_encode($result);
    exit();
} else if ($id_materia === null) {
    error_stmt($result, "ID de materia no proporcionado", null, $conn);
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
$stmt = $conn->prepare("CALL get_semestre(?,?,?);");
if (!$stmt) {
    error_stmt($result, "Error preparando la consulta: " . $conn->error, null, $conn);
    echo json_encode($result);
    exit();
}

$stmt->bind_param("iii", $id_carrera, $id_anio_carrera, $id_materia);


if (!$stmt->execute()) {
    error_stmt($result, "Error ejecutando la consulta: " . $stmt->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

// Manejo de resultados
$stmt->bind_result($id_semestre, $semestre);

$datos = [];
$cont = 0;

while ($stmt->fetch()) {
    $dato_semestre = new stdClass();

    $dato_semestre->id_semestre = $id_semestre;
    $dato_semestre->semestre = $semestre;

    
    $cont+=1;


    array_push($datos, $dato_semestre);
}

if (empty($datos)) {
    error_stmt($result, "No hay semestres registrados", null, $conn);
} else {
    $result->datos = $datos;
    $result->success = true;
    $result->cont= $cont;
}

$stmt->close();
$conn->close();

echo json_encode($result);

?>
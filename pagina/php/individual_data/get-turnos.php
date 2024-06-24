<?php

// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);

$id_relacion = isset($_POST['id_relacion']) ? $_POST['id_relacion'] : null;


$result = new stdClass();
$result->success = false;

if ($id_relacion === null) {
    error_stmt($result, "ID de turno no proporcionado", null, $conn);
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
$stmt = $conn->prepare("CALL get_turnos(?);");
if (!$stmt) {
    error_stmt($result, "Error preparando la consulta: " . $conn->error, null, $conn);
    echo json_encode($result);
    exit();
}

$stmt->bind_param("i", $id_relacion);


if (!$stmt->execute()) {
    error_stmt($result, "Error ejecutando la consulta: " . $stmt->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

// Manejo de resultados
$stmt->bind_result($id_turno, $turno);

$datos = [];
$cont = 0;

while ($stmt->fetch()) {
    $dato_turno = new stdClass();

    $dato_turno->id_turno = $id_turno;
    $dato_turno->turno = $turno;

    
    $cont+=1;


    array_push($datos, $dato_turno);
}

if (empty($datos)) {
    error_stmt($result, "No hay turnos registrados con esos datos", null, $conn);
} else {
    $result->datos = $datos;
    $result->success = true;
}

$result->cont= $cont;


$stmt->close();
$conn->close();

echo json_encode($result);

?>
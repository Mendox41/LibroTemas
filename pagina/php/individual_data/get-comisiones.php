<?php

// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);

$id_relacion = isset($_POST['id_relacion']) ? $_POST['id_relacion'] : null;
$id_turno = isset($_POST['id_turno']) ? $_POST['id_turno'] : null;


$result = new stdClass();
$result->success = false;

if ($id_relacion === null) {
    error_stmt($result, "ID de relacion no proporcionado", null, $conn);
    echo json_encode($result);
    exit();
} else if ($id_turno === null) {
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
$stmt = $conn->prepare("CALL get_comisiones(?,?);");
if (!$stmt) {
    error_stmt($result, "Error preparando la consulta: " . $conn->error, null, $conn);
    echo json_encode($result);
    exit();
}

$stmt->bind_param("ii", $id_relacion, $id_turno);


if (!$stmt->execute()) {
    error_stmt($result, "Error ejecutando la consulta: " . $stmt->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

// Manejo de resultados
$stmt->bind_result($id_comision, $comision);

$datos = [];
$cont = 0;

while ($stmt->fetch()) {
    $dato_comision = new stdClass();

    $dato_comision->id_comision = $id_comision;
    $dato_comision->comision = $comision;
    
    $cont+=1;


    array_push($datos, $dato_comision);
}

if (empty($datos)) {
    error_stmt($result, "No hay comisiones registradas con esos datos", null, $conn);
} else {
    $result->datos = $datos;
    $result->success = true;
}

$result->cont= $cont;

$stmt->close();
$conn->close();

echo json_encode($result);

?>
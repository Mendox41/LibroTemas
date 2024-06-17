<?php

include(__DIR__ . "/../database/conection.php");
include(__DIR__ . "/../error_stmt/errorFunctions.php");

$id_carrera = !empty($_POST['id_carrera']) ? $_POST['id_carrera'] : null;
$id_anio = !empty($_POST['id_anio']) ? $_POST['id_anio'] : null;
$id_materia = !empty($_POST['id_materia']) ? $_POST['id_materia'] : null;
$id_comision = !empty($_POST['id_comision']) ? $_POST['id_comision'] : null;
$id_profesor = !empty($_POST['id_profesor']) ? $_POST['id_profesor'] : null;
$id_turno = !empty($_POST['id_turno']) ? $_POST['id_turno'] : null;

$result = new stdClass();
$result->success = false;

if ($id_carrera === null) {
    error_request($result, "Falta el campo id_carrera");
    echo json_encode($result);
    exit();
} elseif ($id_anio === null) {
    error_request($result, "Falta el campo id_anio");
    echo json_encode($result);
    exit();
} elseif ($id_materia === null) {
    error_request($result, "Falta el campo id_materia");
    echo json_encode($result);
    exit();
} elseif ($id_comision === null) {
    error_request($result, "Falta el campo id_comision");
    echo json_encode($result);
    exit();
} elseif ($id_profesor === null) {
    error_request($result, "Falta el campo id_profesor");
    echo json_encode($result);
    exit();
} elseif ($id_turno === null) {
    error_request($result, "Falta el campo id_turno");
    echo json_encode($result);
    exit();
}

$databaseName = "300hs_laborales";
mysqli_select_db($conn, $databaseName);

$stmt = $conn->prepare("CALL new_course(?, ?, ?, ?, ?, ?)");
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

$stmt->bind_param("iiiiii", $id_carrera, $id_anio, $id_materia, $id_comision, $id_profesor, $id_turno);

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

$result->success = true;

$stmt->close();
$conn->close();

echo json_encode($result);

?>

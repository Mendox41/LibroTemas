<?php
// Incluir archivos necesarios
include(__DIR__ . "/../database/conection.php");
include(__DIR__ . "/../error_stmt/errorFunctions.php");

// Obtener parámetros de la solicitud POST
$id_carrera = !empty($_POST['id_carrera']) ? $_POST['id_carrera'] : null;
$id_anio = !empty($_POST['id_anio']) ? $_POST['id_anio'] : null;
$id_semestre = !empty($_POST['id_semestre']) ? $_POST['id_semestre'] : null;
$id_materia = !empty($_POST['id_materia']) ? $_POST['id_materia'] : null;
$ciclo = !empty($_POST['ciclo']) ? $_POST['ciclo'] : null;
$id_turno = !empty($_POST['id_turno']) ? $_POST['id_turno'] : null;
$id_comision = !empty($_POST['id_comision']) ? $_POST['id_comision'] : null;
$id_profesor = !empty($_POST['id_profesor']) ? $_POST['id_profesor'] : null;

// Inicializar objeto de resultado
$result = new stdClass();
$result->success = false;

// Validaciones de ingreso de datos
if ($id_carrera === null) {
    error_request($result, "Falta el campo id_carrera");
    echo json_encode($result);
    exit();
} elseif ($id_anio === null) {
    error_request($result, "Falta el campo id_anio");
    echo json_encode($result);
    exit();
} elseif ($id_semestre === null) {
    error_request($result, "Falta el campo id_semestre");
    echo json_encode($result);
    exit();
}elseif ($id_materia === null) {
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

// Seleccionar la base de datos
$databaseName = "300hs_laborales";
mysqli_select_db($conn, $databaseName);

// Preparar la llamada al procedimiento almacenado
$stmt = $conn->prepare("CALL new_course(?, ?, ?, ?, ?, ?, ?, ?)");
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

// Vincular los parámetros
$stmt->bind_param("iiiiiiii", $id_carrera, $id_anio, $id_semestre, $id_materia, $ciclo, $id_turno, $id_comision, $id_profesor);

// Ejecutar el procedimiento
if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

// Establecer mensaje de éxito
$result->message = 'El curso fue ingresado correctamente';
$result->success = true;

// Cerrar la declaración y la conexión
$stmt->close();
$conn->close();

// Devolver el resultado en formato JSON
echo json_encode($result);
?>

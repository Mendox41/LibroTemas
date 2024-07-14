<?php
// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");


ini_set('display_errors', 1);
error_reporting(E_ALL);

$id_usuario = isset($_POST['id_usuario']) ? $_POST['id_usuario'] : null;
$new_id_relacion = isset($_POST['new_id_relacion']) ? $_POST['new_id_relacion'] : null;
$new_id_turno = isset($_POST['new_id_turno']) ? $_POST['new_id_turno'] : null;
$new_id_comision = isset($_POST['new_id_comision']) ? $_POST['new_id_comision'] : null;
$new_tema = isset($_POST['new_tema']) ? $_POST['new_tema'] : null;
$new_descripcion = isset($_POST['new_descripcion']) ? $_POST['new_descripcion'] : null;
$new_time =  isset($_POST['new_time']) ? $_POST['new_time'] : null;

$result = new stdClass();
$result->success = false;

// Validaciones de entrada
if (is_null($id_usuario) || is_null($new_id_relacion) || is_null($new_id_turno) || is_null($new_id_comision) || is_null($new_tema) || is_null($new_descripcion) || is_null($new_time)) {
    $result->message = 'Todos los datos son requeridos.';
} elseif ($new_tema === '') {
    $result->message = 'El tema está vacío';
} elseif ($new_descripcion === '') {
    $result->message = 'La descripción está vacía';
} elseif ($new_time === '') {
    $result->message = 'El tiempo está vacío';
} else {
    $db_name = "300hs_laborales";
    mysqli_select_db($conn, $db_name);

    // Llamada al procedimiento almacenado
    $stmt = $conn->prepare("CALL new_topic_admin(?, ?, ?, ?, ?, ?, ?, @p_result)");
    if (!$stmt) {
        error_stmt($result, "Error preparando la consulta: " . $conn->error, $stmt, $conn);
    }

    $stmt->bind_param("iiiisss", $id_usuario, $new_id_relacion, $new_id_comision, $new_id_turno, $new_tema, $new_descripcion, $new_time);

    if (!$stmt->execute()) {
        error_stmt($result, "Error ejecutando la consulta: " . $conn->error, $stmt, $conn);
    }

    // Obtener el resultado de salida
    $result_query = $conn->query("SELECT @p_result");
    $result_row = $result_query->fetch_assoc();
    $result->message = $result_row['@p_result'];

    $stmt->close();
    $conn->close();

    $result->success = true;
}

echo json_encode($result);

?>
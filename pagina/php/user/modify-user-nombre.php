<?php

include(__DIR__ . "/../database/conection.php");
include("validation.php");
include(__DIR__ . "/../error_stmt/errorFunctions.php");

$id_usuario = !empty($_POST['id_usuario']) ? $_POST['id_usuario'] : null;
$usuario = !empty($_POST['usuario']) ? $_POST['usuario'] : null;

$result = new stdClass();
$result->success = false;

if ($id_usuario === null || $usuario === null) {
    error_request($result, "Todos los campos deben ser completados");
    echo json_encode($result);
    exit();
}

$databaseName = "300hs_laborales";
mysqli_select_db($conn, $databaseName);

$modifyUserQuery = "CALL modify_user_user(?, ?, @mensaje)";
$stmt = $conn->prepare($modifyUserQuery);

if (!$stmt) {
    error_stmt($result, "Error preparando la consulta: " . $conn->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

$stmt->bind_param("is", $id_usuario, $usuario);

if (!$stmt->execute()) {
    error_stmt($result, "Error ejecutando la consulta: " . $conn->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

$stmt->close();

// Obtener el mensaje de salida
$outputQuery = "SELECT @mensaje";
$outputResult = $conn->query($outputQuery);

if ($outputResult) {
    $row = $outputResult->fetch_assoc();
    $result->message = $row['@mensaje'];
    $result->success = true;
} else {
    error_stmt($result, "Error obteniendo el mensaje: " . $conn->error, $stmt, $conn);
}

$conn->close();

echo json_encode($result);

?>

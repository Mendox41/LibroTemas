<?php

include(__DIR__ . "/../database/conection.php");
include("validation.php");
include(__DIR__ . "/../error_stmt/errorFunctions.php");

$usuario = !empty($_POST['usuario']) ? $_POST['usuario'] : null;
$plain_password = !empty($_POST['pass']) ? $_POST['pass'] : null;
$id_profesor = isset($_POST["id_profesor"]) ? $_POST["id_profesor"] : '';
$admin = isset($_POST["admin"]) ? $_POST["admin"] : '';

$result = new stdClass();
$result->success = true;

if (($usuario === null) || ($plain_password === null) || ($admin === '') || ($id_profesor === '')) {
    error_request($result, "Todos los campos deben ser completados");
}

$databaseName = "300hs_laborales";
mysqli_select_db($conn, $databaseName);

$hashed_password = password_hash($plain_password, PASSWORD_DEFAULT);

# Insert instruction
$insertUserQuery = "CALL new_user(?,?,?,?,@usuario_creado, @mensaje)";
$stmt = $conn->prepare($insertUserQuery);

if (!$stmt) {
    error_stmt($result, "Error preparando la consulta: " . $conn->error, $stmt, $conn);
}

$stmt->bind_param("ssii", $usuario, $hashed_password, $id_profesor, $admin);

if (!$stmt->execute()) {
    error_stmt($result, "Error ejecutando la consulta: " . $conn->error, $stmt, $conn);
}

// Obtener los valores de salida del procedimiento almacenado
$select = $conn->query("SELECT @usuario_creado AS usuario_creado, @mensaje AS mensaje");
$result_row = $select->fetch_assoc();

$stmt->close();
$conn->close();

if ($result_row['usuario_creado']) {
    $result->message = $result_row['mensaje'];
    $result->success = true;
} else {
    $result->message = $result_row['mensaje'];
    $result->success = false;
}

echo json_encode($result);

?>

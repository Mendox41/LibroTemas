<?php

include(__DIR__ . "/../database/conection.php");
include("validation.php");
include(__DIR__ . "/../error_stmt/errorFunctions.php");

$id_usuario = !empty($_POST['id_usuario']) ? $_POST['id_usuario'] : null;
$usuario = !empty($_POST['usuario']) ? $_POST['usuario'] : null;

$result = new stdClass();
$result->success = true;

if ($usuario === null) {
    error_request($result, "Todos los campos deben ser completados");
}else{
    
$databaseName = "300hs_laborales";
mysqli_select_db($conn, $databaseName);

# Insert instruction
$insertUserQuery = "CALL modify_user_user(?, ?)";
$stmt = $conn->prepare($insertUserQuery);

if (!$stmt) {
    error_stmt($result, "Error preparando la consulta: " . $conn->error, $stmt, $conn);
}

$stmt->bind_param("is", $id_usuario, $usuario);

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
}

$stmt->close();
$conn ->close();

$result->message = 'El usuario fue modificado correctamente';
$result -> success = true;
};

echo json_encode($result);

?>

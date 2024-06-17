<?php

include(__DIR__ . "/../database/conection.php");
include ("validation.php");
include(__DIR__ . "/../error_stmt/errorFunctions.php");


$usuario = !empty($_POST['usuario']) ? $_POST['usuario'] : null;
$plain_password = !empty($_POST['pass']) ? $_POST['pass'] : null;



$result = new stdClass();
$result->success = true;

if(($usuario === null) || ($plain_password === null)) {
    error_request($result, "All field must be complete");
}

$databaseName = "300hs_laborales";
mysqli_select_db($conn, $databaseName);

$hashed_password = password_hash($plain_password, PASSWORD_DEFAULT);

# Insert instruction
$insertUserQuery = "INSERT INTO usuarios (usuario, pass, isActive) VALUES (?, ?, 1)";
$stmt = $conn->prepare($insertUserQuery);

if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
}

$stmt->bind_param("ss", $usuario, $hashed_password);

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
}

$stmt->close();
$conn->close(); 

echo json_encode($result);

?>
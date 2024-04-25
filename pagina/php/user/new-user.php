<?php

/* ------------------------ REGISTER USER IN DATABASE ------------------------ */
/* 

It needs the next parameters:
    - usuario: as 'usuario'.
    - Password: as 'pass'.

Returns:
    If the information was Okay, then redirect to login.
    If the information was not Okay, then returns an object $result with the next keys:
        - message: Message of what failed.
        - success: Always in false.

*/

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


// # Validate the pass format
// if (!is_pass_valid($plain_password)) {
//     error_request($result, "La contrasenia no es valida.");
// }

$hashed_password = password_hash($plain_password, PASSWORD_DEFAULT);

# Insert instruction
$insertUserQuery = "INSERT INTO usuarios (usuario, pass) VALUES (?, ?)";
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
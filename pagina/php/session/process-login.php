<?php
include("../database/connection.php");
include("../error_stmt/errorFunctions.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);

$usuario = isset($_POST['usuario']) ? $_POST['usuario'] : null;
$pass = isset($_POST['pass']) ? $_POST['pass'] : null;

$result = new stdClass();
$result->success = false;

if (empty($usuario) || empty($pass)) {
    error_request($result, "Todos los campos deben ser completados");
}

$db_name = "300hs_laborales";
mysqli_select_db($conn, $db_name);

// Llamada al procedimiento almacenado
$stmt = $conn->prepare("CALL login(?)");
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
}

$stmt->bind_param("s", $usuario);

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
}

// Manejo de resultados
$stmt->bind_result($id_usuario, $usuario, $stored_password, $active, $admin);
$exists = $stmt->fetch();

$stmt->close();

// Verificar si el usuario existe y la contraseña es correcta
if ($exists && password_verify($pass, $stored_password) && $active) {
    
    // Crear una sesión para el usuario
    session_start();
    
    $_SESSION['idSession'] = session_create_id();
    $_SESSION['id_usuario'] = $id_usuario;
    $_SESSION['usuario'] = $usuario;
    $_SESSION['active'] = $active;
    $_SESSION['admin'] = $admin;
    
    $result->success = true;
}

echo json_encode($result);
?>

<?php

// Incluir el archivo de conexión a la base de datos
include (__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include (__DIR__ . "/../error_stmt/errorFunctions.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);

$id_usuario = isset($_POST['id_usuario']) ? $_POST['id_usuario'] : null;

$result = new stdClass();
$result->success = false;

if ($id_usuario === null) {
    error_stmt($result, "ID de usuario no fue proporcionado", null, $conn);
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
$stmt = $conn->prepare("CALL get_datos_usuario(?);");
if (!$stmt) {
    error_stmt($result, "Error preparando la consulta: " . $conn->error, null, $conn);
    echo json_encode($result);
    exit();
}

$stmt->bind_param("i", $id_usuario);

if (!$stmt->execute()) {
    error_stmt($result, "Error ejecutando la consulta: " . $stmt->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}

// Manejo de resultados
$stmt->bind_result($id_usuario, $usuario, $legajo, $nombre, $apellido, $isActive, $IsAdmin);

$usuarios = [];

while ($stmt->fetch()) {
    $objUsuario = new stdClass();

    $objUsuario->id_usuario = $id_usuario;
    $objUsuario->usuario = $usuario;
    $objUsuario->legajo = $legajo;
    $objUsuario->nombre_apellido = $apellido . ', ' . $nombre;
    $objUsuario->isActive = $isActive;
    $objUsuario->IsAdmin = $IsAdmin;


    array_push($usuarios, $objUsuario);
}

if (empty($usuarios)) {
    error_stmt($result, "No hay usuarios registrados", null, $conn);
} else {
    $result->usuarios = $usuarios;
    $result->success = true;
}

$stmt->close();
$conn->close();

echo json_encode($result);

?>

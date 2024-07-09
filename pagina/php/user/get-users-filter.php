<?php
// Incluir el archivo de conexión a la base de datos
include (__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include (__DIR__ . "/../error_stmt/errorFunctions.php");

mb_internal_encoding("UTF-8");

ini_set('display_errors', 1);
error_reporting(E_ALL);

// $id_usuario = isset($_POST['id_usuario']) ? $_POST['id_usuario'] : null;

$result = new stdClass();
$result->success = false;

// realizar consulta sobre el id de usuario enviado y ver que sea un usuario con permisos de administrador
// PENDIENTE (CONDICION)


// if (empty($id_usuario)) {
//     error_request($result, "El id ingresado esta vacio  $id_usuario");
// }

$db_name = "300hs_laborales";
mysqli_select_db($conn, $db_name);

// Llamada al procedimiento almacenado
$stmt = $conn->prepare("CALL get_usuarios()");
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
}

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
}

// Manejo de resultados
$stmt->bind_result($id_usuario, $usuario, $isActive, $isAdmin, $id_profesor, $legajo, $apellido, $nombre, $grado, $carrera);

$usuarios = [];
$cont = 0;

while ($stmt->fetch()) {
    $usuarios_registrados = new stdClass();

    $usuarios_registrados->legajo = $legajo;
    $usuarios_registrados->usuario = $usuario;
    $usuarios_registrados->apellido = $apellido;
    $usuarios_registrados->nombre = $nombre;
    $usuarios_registrados->grado = $grado;
    $usuarios_registrados->carrera = $carrera;
    $usuarios_registrados->isActive = $isActive;
    $usuarios_registrados->isAdmin = $isAdmin;

    $usuarios_registrados->id_usuario = $id_usuario;

    $cont += 1;

    array_push($usuarios, $usuarios_registrados);
}

if (empty($usuarios)) {
    error_request($result, "No hay resultados para ese ID: " . $id_usuario);
} else {
    
    $result->respuesta = $usuarios;
    $result->cantidad_usuarios_registrados = $cont;
    $result->success = true;

}

$stmt->close();

echo json_encode($result);

?>
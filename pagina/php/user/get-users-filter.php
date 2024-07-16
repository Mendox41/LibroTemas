<?php

// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");

$usuario = isset($_POST["usuario"]) ? $_POST["usuario"] : '';
$legajo = isset($_POST["legajo"]) ? $_POST["legajo"] : '';
$nombre_profesor = isset($_POST["nombre_profesor"]) ? $_POST["nombre_profesor"] : '';
$apellido_profesor = isset($_POST["apellido_profesor"]) ? $_POST["apellido_profesor"] : '';
$activo = isset($_POST["activo"]) ? $_POST["activo"] : '';
$admin = isset($_POST["admin"]) ? $_POST["admin"] : '';

$result = new stdClass();
$result->success = false;

$databaseName = "300hs_laborales";
mysqli_select_db($conn, $databaseName);

// Armo la consulta     
$sql = "SELECT T1.id_profesor, T2.id_usuario, T2.usuario, T1.legajo, T1.nombre, T1.apellido, T2.isActive, T2.IsAdmin 
        FROM profesores AS T1
        INNER JOIN usuarios AS T2 ON T2.id_usuario = T1.id_usuario
        WHERE 1=1";

$parameters = [];
$types = "";

if (!empty($usuario)) {
    $sql .= " AND T2.usuario LIKE ?";
    $parameters[] = "%". $usuario."%";
    $types .= "s";
}
if (!empty($legajo)) {
    $sql .= " AND T1.legajo LIKE ?";
    $parameters[] = "%".$legajo."%";
    $types .= "s";
}
if (!empty($nombre_profesor)) {
    $sql .= " AND T1.nombre LIKE ?";
    $parameters[] = "%".$nombre_profesor."%";
    $types .= "s";
}
if (!empty($apellido_profesor)) {
    $sql .= " AND T1.apellido LIKE ?";
    $parameters[] = "%".$apellido_profesor."%";
    $types .= "s";
}
if (!empty($activo)) {
    $sql .= " AND T2.isActive LIKE ?";
    $parameters[] = "%".$activo."%";
    $types .= "i    ";
}
if (!empty($admin)) {
    $sql .= " AND T2.isAdmin LIKE ?";
    $parameters[] = "%".$admin."%";
    $types .= "i";
}

$stmt = $conn->prepare($sql);

// Verificar si la preparación de la consulta fue exitosa
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
    echo json_encode($result);
    exit;
}

// Vincular los parámetros
if (!empty($parameters)) {
    $stmt->bind_param($types, ...$parameters);
}

// Ejecutar la consulta y verificar si fue exitosa
if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $stmt->error, $stmt, $conn);
    echo json_encode($result);
    exit;
}

$stmt->store_result();
$stmt->bind_result($id_profesor, $id_usuario, $usuario, $legajo, $nombre, $apellido, $isActive, $IsAdmin);

$course = [];
$cont = 0;

while ($stmt->fetch()) {
    $objCourse = new stdClass();

    $objCourse->id_usuario = $id_usuario;
    $objCourse->usuario = $usuario;
    $objCourse->legajo = $legajo;
    $objCourse->nombre_apellido = $nombre . ', ' . $apellido;
    $objCourse->isActive = $isActive;
    $objCourse->IsAdmin = $IsAdmin;

    $objCourse->id_profesor_for_btns = $id_profesor;


    $cont += 1;

    array_push($course, $objCourse);
}

if (empty($course)) {
    error_stmt($result, "No topics found", $stmt, $conn);
} else {
    $result->respuesta = $course;
    $result->cant_temas = $cont;
    $result->success = true;
}

$stmt->close();
$conn->close();

echo json_encode($result);

?>

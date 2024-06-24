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


$id_curso = null;

$result = new stdClass();
$result->success = false;



if (($new_tema === null) || ($new_descripcion === null) || ($new_time === null) || ($id_curso === null)) {
    $result->message = 'Todos los datos estan vacios';
    $result->success = false;
    
} elseif ($new_tema === '') {
    $result->message = 'El tema esta vacio';
    $result->success = false;

} elseif ($new_descripcion === '') {
    $result->message = 'La descripcion esta vacia';
    $result->success = false;

} elseif ($new_time === '') {
    $result->message = 'El tiempo esta vacio';
    $result->success = false;
    
} elseif ($id_curso === '') {
    $result->message = 'El ID del curso/comision esta vacio';
    $result->success = false;
}else{
    $db_name = "300hs_laborales";
    mysqli_select_db($conn, $db_name);

    // Llamada al procedimiento almacenado
    $stmt = $conn->prepare("CALL insertar_libro_tema(?,?,?,?)");
    if (!$stmt) {
        error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
    }

    $stmt->bind_param("isss", $id_curso, $new_tema, $new_descripcion, $new_time);

    if (!$stmt->execute()) {
        error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
    }

    $stmt->close();
    $conn ->close();

    $result->message = 'El tema fue ingresado de manera correcta';
    $result -> success = true;
};

echo json_encode($result);

?>

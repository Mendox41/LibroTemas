<?php
// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");


ini_set('display_errors', 1);
error_reporting(E_ALL);

$new_tema = isset($_POST['new_tema']) ? $_POST['new_tema'] : null;
$new_descripcion = isset($_POST['new_descripcion']) ? $_POST['new_descripcion'] : null;
$new_time =  isset($_POST['new_time']) ? $_POST['new_time'] : null;
$new_id_curcom =  isset($_POST['new_id_curcom']) ? $_POST['new_id_curcom'] : null;
$new_id_prof = isset($_POST['new_id_prof']) ? $_POST['new_id_prof'] : null;
$new_id_rel = isset($_POST['new_id_rel']) ? $_POST['new_id_rel'] : null;

$result = new stdClass();
$result->success = false;

if (($new_tema === null) || ($new_descripcion === null) || ($new_time === null) || ($new_id_curcom === null) || ($new_id_prof === null) || ($new_id_rel === null)) {
    error_request($result, "Algunos de los campos ingresados esta vacio: $id_usuario, $new_descripcion, $new_time, $new_prof, $new_rel");
}

$db_name = "300hs_laborales";
mysqli_select_db($conn, $db_name);

// Llamada al procedimiento almacenado
$stmt = $conn->prepare("CALL materia_profesor(?)"); /*Cambiar este procedure por el que nuevo*/ 
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
}

$stmt->bind_param("sssiii", $new_tema, $new_descripcion, $new_time, $new_id_curcom, $new_id_prof, $new_id_rel);

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
}

$stmt->close();
$conn ->close();

$result -> success = true;

echo json_encode($result);

?>

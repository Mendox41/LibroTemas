<?php
// Incluir archivos necesarios
include(__DIR__ . "/../database/conection.php");
include(__DIR__ . "/../error_stmt/errorFunctions.php");

// Configurar reporte de errores
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Obtener el ID del curso de la solicitud POST
$id_curso =  isset($_POST['id_curso']) ? $_POST['id_curso'] : null;

// Inicializar objeto de resultado
$result = new stdClass();
$result->success = false;

// Verificar si se proporcionó un ID de curso
if (($id_curso === null)) {
    $result->message = 'No se ingreso ningun id';
    $result->success = false;
} else {
    // Seleccionar la base de datos
    $db_name = "300hs_laborales";
    mysqli_select_db($conn, $db_name);

    // Preparar la llamada al procedimiento almacenado
    $stmt = $conn->prepare("CALL activate_course(?)");
    if (!$stmt) {
        error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
    }

    // Vincular el parámetro
    $stmt->bind_param("i", $id_curso);

    // Ejecutar el procedimiento
    if (!$stmt->execute()) {
        error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
    }

    // Cerrar la declaración y la conexión
    $stmt->close();
    $conn->close();

    // Establecer mensaje de éxito
    $result->message = 'El curso fue activado correctamente';
    $result->success = true;
}

// Devolver el resultado en formato JSON
echo json_encode($result);
?>
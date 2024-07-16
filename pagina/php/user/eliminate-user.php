<?php
// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);

$id_usuario = isset($_POST['id_usuario']) ? $_POST['id_usuario'] : null;

$result = new stdClass();
$result->success = false;

if ($id_usuario === null) {
    $result->message = 'No se ingresó ningún ID de usuario';
} else {
    $db_name = "300hs_laborales";
    mysqli_select_db($conn, $db_name);

    // Llamada al procedimiento almacenado
    $stmt = $conn->prepare("CALL eliminate_user(?, @usuario_eliminado, @mensaje)");
    if (!$stmt) {
        error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
    }

    $stmt->bind_param("i", $id_usuario);

    if (!$stmt->execute()) {
        error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
    }

    // Obtener los valores de salida del procedimiento almacenado
    $select = $conn->query("SELECT @usuario_eliminado, @mensaje");
    $result_row = $select->fetch_assoc();

    $stmt->close();
    $conn->close();

    if ($result_row['@usuario_eliminado']) {
        $result->message = $result_row['@mensaje'];
        $result->success = true;
    } else {
        $result->message = $result_row['@mensaje'];
    }
}

echo json_encode($result);
?>

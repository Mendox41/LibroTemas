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

if (empty($id_usuario)) {
    error_request($result, "El id ingresado esta vacio  $id_usuario");
}

$db_name = "300hs_laborales";
mysqli_select_db($conn, $db_name);

// Llamada al procedimiento almacenado
$stmt = $conn->prepare("CALL materia_profesor(?)");
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
}

$stmt->bind_param("i", $id_usuario);

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
}

// Manejo de resultados
$stmt->bind_result($id_curcom, $id_relacion, $carrera, $anio, $semestre, $materia, $id_profesor, $legajo, $apellido_nombre, $turno, $id_comision, $comision);

$relacion = [];
$cont = 0;

while ($stmt->fetch()) {
    $datoRelacion = new stdClass();

    $datoRelacion->id_curcom = $id_curcom;
    $datoRelacion->id_relacion = $id_relacion;
    $datoRelacion->carrera = $carrera;
    $datoRelacion->anio = $anio;
    $datoRelacion->semestre = $semestre;
    $datoRelacion->materia = $materia;
    $datoRelacion->id_profesor = $id_profesor;
    $datoRelacion->legajo = $legajo;
    $datoRelacion->apellido_nombre = $apellido_nombre;
    $datoRelacion->turno = $turno;
    $datoRelacion->id_comision = $id_comision;
    $datoRelacion->comision = $comision;

    $cont += 1;

    array_push($relacion, $datoRelacion);
}

if (empty($relacion)) {
    error_request($result, "No hay resultados para ese ID: " . $id_usuario);
} else {
    // $objRelacion = new stdClass();
    // $objRelacion->relacion = $relacion;
    $result->respuesta = $relacion;
    $result->cantidadRelaciones = $cont ;
    $result->success = true;

}

$stmt->close();

echo json_encode($result);

?>

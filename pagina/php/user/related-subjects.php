<?php
// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");

mb_internal_encoding("UTF-8");

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
// $conn->set_charset("utf8");

// Llamada al procedimiento almacenado
$stmt = $conn->prepare("CALL get_materia_profesor_cursos(?)");
if (!$stmt) {
    error_stmt($result, "Error preparing the query: " . $conn->error, $stmt, $conn);
}

$stmt->bind_param("i", $id_usuario);

if (!$stmt->execute()) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
}

// Manejo de resultados
$stmt->bind_result($id_curcom, $id_profesor, $id_relacion, $id_carrera, $carrera, $id_anio, $anio, $id_materia, $materia, $id_comision, $comision, $id_turno, $turno, $semestre, $c_anio);


// ------------------

$relacion = [];
$cont = 0;

while ($stmt->fetch()) {
    $datoRelacion = new stdClass();

    $datoRelacion->id_curcom = $id_curcom;
    $datoRelacion->id_profesor = $id_profesor;
    $datoRelacion->id_relacion = $id_relacion;
    $datoRelacion->id_carrera = $id_carrera;
    $datoRelacion->carrera = $carrera;
    $datoRelacion->id_anio = $id_anio;
    $datoRelacion->anio = $anio;
    $datoRelacion->id_materia = $id_materia;
    $datoRelacion->materia = $materia;
    $datoRelacion->id_comision = $id_comision;
    $datoRelacion->comision = $comision;
    $datoRelacion->id_turno = $id_turno;
    $datoRelacion->turno = $turno;
    $datoRelacion->semestre = $semestre;
    $datoRelacion->c_anio = $c_anio;

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

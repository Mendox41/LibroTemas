<?php

// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");

|

$nombre_carrera = isset($_POST["nombre-carrera"]) ? $_POST["nombre-carrera"] : '';
$anio_carrera = isset($_POST["anio-carrera"]) ? $_POST["anio-carrera"] : '';
$nombre_materia = isset($_POST["nombre-materia"]) ? $_POST["nombre-materia"] : '';
$comision = isset($_POST["comision"]) ? $_POST["comision"] : '';
$turno = isset($_POST["turno"]) ? $_POST["turno"] : '';
$nombre_usuario = isset($_POST["nombre-usuario"]) ? $_POST["nombre-usuario"] : '';
$nombre_profesor = isset($_POST["nombre-profesor"]) ? $_POST["nombre-profesor"] : '';
$apellido_profesor = isset($_POST["apellido-profesor"]) ? $_POST["apellido-profesor"] : '';
$fecha_tema = isset($_POST["fecha-tema"]) ? $_POST["fecha-tema"] : '';
$titulo_tema = isset($_POST["titulo-tema"]) ? $_POST["titulo-tema"] : '';
$descripcion_tema = isset($_POST["descripcion-tema"]) ? $_POST["descripcion-tema"] : '';

// $inputOrdenar = isset($_POST["inputOrdenar"]) ? $_POST["inputOrdenar"] : '';

$result = new stdClass();
$result->success = false;

// Armo la cosulta     
$sql = "SELECT T1.id_libro_tema, T1.tema, T1.descripcion, T1.fecha, T6.carrera, T7.anio ,T5.materia, comision, turno, T3.apellido, T3.nombre  
    FROM libro_temas AS T1
    INNER JOIN cursos AS T2 ON T2.id_curso = T1.id_curso
    INNER JOIN profesores AS T3 ON T3.id_profesor = T1.id_profesor
    INNER JOIN relaciones AS T4 ON T4.id_relacion = T1.id_relacion
    INNER JOIN materias AS T5 ON T5.id_materia = T4.id_materia
    INNER JOIN carreras AS T6 ON T6.id_carrera = T4.id_carrera
    INNER JOIN anios AS T7 ON T7.id_anio = T4.id_anio
    INNER JOIN comisiones AS T8 ON T8.id_comision = T2.id_comision 
    INNER JOIN turnos AS T9 ON T9.id_turno = T2.id_turno 
    INNER JOIN usuarios AS T10 ON T10.id_usuario = T3.id_usuario
    WHERE 1=1";


if (!empty($nombre_carrera)) {
    $sql .= " AND T6.carrera LIKE CONCAT('%',:carrera,'%')";
}
if (!empty($anio_carrera)) {
    $sql .= " AND T7.anio LIKE CONCAT('%',:anio,'%')";
}
if (!empty($nombre_materia)) {
    $sql .= " AND T5.materia LIKE CONCAT('%',:materia,'%')";
}
if (!empty($comision)) {
    $sql .= " AND T8.comision LIKE CONCAT('%',:comision,'%')";
}
if (!empty($turno)) {
    $sql .= " AND T9.turno LIKE CONCAT('%',:turno,'%')";
}
if (!empty($nombre_usuario)) {
    $sql .= " AND T10.usuario LIKE CONCAT('%',:usuario,'%')";
}
if (!empty($nombre_profesor)) {
    $sql .= " AND T3.nombre LIKE CONCAT('%',:nombre,'%')";
}
if (!empty($apellido_profesor)) {
    $sql .= " AND T3.apellido LIKE CONCAT('%',:apellido,'%')";
}
if (!empty($fecha_tema)) {
    $sql .= " AND fecha LIKE CONCAT('%',:fecha,'%')";
}
if (!empty($titulo_tema)) {
    $sql .= " AND tema LIKE CONCAT('%',:tema,'%')";
}
if (!empty($descripcion_tema)) {
    $sql .= " AND descripcion LIKE CONCAT('%',:descripcion,'%')";
}
// if (!empty($inputOrdenar)) {
//     $sql .= " ORDER BY $inputOrdenar";
// }

$stmt = $dbh->prepare($sql);

// Vinculo los parámetros 
if (!empty($nombre_carrera)) {
    $stmt->bindParam(':carrera', $nombre_carrera);
}
if (!empty($anio_carrera)) {
    $stmt->bindParam(':anio', $anio_carrera);
}
if (!empty($nombre_materia)) {
    $stmt->bindParam(':materia', $nombre_materia);
}
if (!empty($comision)) {
    $stmt->bindParam(':comision', $comision);
}
if (!empty($turno)) {
    $stmt->bindParam(':turno', $turno);
}
if (!empty($nombre_usuario)) {
    $stmt->bindParam(':usuario', $nombre_usuario);
}
if (!empty($nombre_profesor)) {
    $stmt->bindParam(':nombre', $nombre_profesor);
}
if (!empty($apellido_profesor)) {
    $stmt->bindParam(':apellido', $apellido_profesor);
}
if (!empty($fecha_tema)) {
    $stmt->bindParam(':fecha', $fecha_tema);
}
if (!empty($titulo_tema)) {
    $stmt->bindParam(':tema', $titulo_tema);
}
if (!empty($descripcion_tema)) {
    $stmt->bindParam(':descripcion', $descripcion_tema);
}


$stmt->setFetchMode(PDO::FETCH_ASSOC);
$stmt->execute();
if (!empty($nombre_carrera)) {
    $stmt->bindParam(':carrera', $nombre_carrera);
}
$topic = [];
while ($fila = $stmt->fetch()) {
    $objTopic = new stdClass();
    $objTopic->carrera = $fila["carrera"];
    $objTopic->anio = $fila["anio"];
    $objTopic->materia = $fila["materia"];
    $objTopic->comision = $fila["comision"];
    $objTopic->turno = $fila["turno"];
    $objTopic->usuario = $fila["usuario"];
    $objTopic->nombre = $fila["nombre"];
    $objTopic->apellido = $fila["apellido"];
    $objTopic->fecha = $fila["fecha"];
    $objTopic->tema = $fila["tema"];
    $objTopic->descripcion = $fila["descripcion"];
    // $objTopic->archivo_binario = $fila["archivo_binario"];

    array_push($topic, $objTopic);
}

if (empty($topic)) {
    error_stmt($result, "Error executing the query: " . $conn->error, $stmt, $conn);
    echo json_encode($result);
    exit();
}


$objTopic = new stdClass();
$objTopic->topic = $topic;
$objTopic->cont = count($topic);
$result->respuesta = $objRelacion;
$result->success = true;
$dbh = null;

$result->success = true;
echo json_encode($result);

?>
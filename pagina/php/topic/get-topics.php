<?php

// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");

$nombre_carrera = isset($_POST["nombre-carrera"]) ? $_POST["nombre-carrera"] : '';
$anio_carrera = isset($_POST["anio-carrera"]) ? $_POST["anio-carrera"] : '';
$nombre_materia = isset($_POST["nombre-materia"]) ? $_POST["nombre-materia"] : '';
$comision = isset($_POST["comision"]) ? $_POST["comision"] : '';
$turno = isset($_POST["turno"]) ? $_POST["turno"] : '';
$nombre_profesor = isset($_POST["nombre-profesor"]) ? $_POST["nombre-profesor"] : '';
$apellido_profesor = isset($_POST["apellido-profesor"]) ? $_POST["apellido-profesor"] : '';
$fecha_tema = isset($_POST["fecha-tema"]) ? $_POST["fecha-tema"] : '';
$titulo_tema = isset($_POST["titulo-tema"]) ? $_POST["titulo-tema"] : '';
$descripcion_tema = isset($_POST["descripcion-tema"]) ? $_POST["descripcion-tema"] : '';

$result = new stdClass();
$result->success = false;

$databaseName = "300hs_laborales";
mysqli_select_db($conn, $databaseName);

// Armo la consulta     
$sql = "SELECT T1.id_libro_tema, T1.tema, T1.descripcion, T1.fecha, T6.carrera, T7.anio, T5.materia, T8.comision, T9.turno, T3.apellido, T3.nombre  
        FROM libro_temas AS T1
        INNER JOIN cursos AS T2 ON T2.id_curso = T1.id_curso
        INNER JOIN profesores AS T3 ON T3.id_profesor = T1.id_profesor
        INNER JOIN relaciones AS T4 ON T4.id_relacion = T1.id_relacion
        INNER JOIN materias AS T5 ON T5.id_materia = T4.id_materia
        INNER JOIN carreras AS T6 ON T6.id_carrera = T4.id_carrera
        INNER JOIN anios AS T7 ON T7.id_anio = T4.id_anio
        INNER JOIN comisiones AS T8 ON T8.id_comision = T2.id_comision 
        INNER JOIN turnos AS T9 ON T9.id_turno = T2.id_turno
        WHERE 1=1";

$parameters = [];
$types = "";

if (!empty($nombre_carrera)) {
    $sql .= " AND T6.carrera LIKE ?";
    $parameters[] = "%$nombre_carrera%";
    $types .= "s";
}
if (!empty($anio_carrera)) {
    $sql .= " AND T7.anio LIKE ?";
    $parameters[] = "%$anio_carrera%";
    $types .= "s";
}
if (!empty($nombre_materia)) {
    $sql .= " AND T5.materia LIKE ?";
    $parameters[] = "%$nombre_materia%";
    $types .= "s";
}
if (!empty($comision)) {
    $sql .= " AND T8.comision LIKE ?";
    $parameters[] = "%$comision%";
    $types .= "s";
}
if (!empty($turno)) {
    $sql .= " AND T9.turno LIKE ?";
    $parameters[] = "%$turno%";
    $types .= "s";
}
if (!empty($nombre_profesor)) {
    $sql .= " AND T3.nombre LIKE ?";
    $parameters[] = "%$nombre_profesor%";
    $types .= "s";
}
if (!empty($apellido_profesor)) {
    $sql .= " AND T3.apellido LIKE ?";
    $parameters[] = "%$apellido_profesor%";
    $types .= "s";
}
if (!empty($fecha_tema)) {
    $sql .= " AND T1.fecha LIKE ?";
    $parameters[] = "%$fecha_tema%";
    $types .= "s";
}
if (!empty($titulo_tema)) {
    $sql .= " AND T1.tema LIKE ?";
    $parameters[] = "%$titulo_tema%";
    $types .= "s";
}
if (!empty($descripcion_tema)) {
    $sql .= " AND T1.descripcion LIKE ?";
    $parameters[] = "%$descripcion_tema%";
    $types .= "s";
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
$stmt->bind_result($id_libro_tema, $tema, $descripcion, $fecha, $carrera, $anio, $materia, $comision, $turno, $apellido, $nombre);

$topic = [];
$cont = 0;

while ($stmt->fetch()) {
    $objTopic = new stdClass();
    $objTopic->id_libro_tema = $id_libro_tema;
    $objTopic->carrera = $carrera;
    $objTopic->anio = $anio;
    $objTopic->materia = $materia;
    $objTopic->comision = $comision;
    $objTopic->turno = $turno;
    $objTopic->nombre = $nombre;
    $objTopic->apellido = $apellido;
    $objTopic->fecha = $fecha;
    $objTopic->tema = $tema;
    $objTopic->descripcion = $descripcion;

    $cont += 1;

    array_push($topic, $objTopic);
}

if (empty($topic)) {
    error_stmt($result, "No topics found", $stmt, $conn);
} else {
    $result->respuesta = $topic;
    $result->cant_temas = $cont;
    $result->success = true;
}

$stmt->close();
$conn->close();

echo json_encode($result);

?>

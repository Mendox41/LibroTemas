<?php

// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");


// Recibir los datos del formulario
$nombre_carrera = isset($_POST["nombre_carrera"]) ? $_POST["nombre_carrera"] : '';
$anio_carrera = isset($_POST["anio_carrera"]) ? $_POST["anio_carrera"] : '';
$nombre_materia = isset($_POST["nombre_materia"]) ? $_POST["nombre_materia"] : '';
$comision = isset($_POST["comision"]) ? $_POST["comision"] : '';
$turno = isset($_POST["turno"]) ? $_POST["turno"] : '';
$usuario = isset($_POST["usuario"]) ? $_POST["usuario"] : '';
$nombre_profesor = isset($_POST["nombre_profesor"]) ? $_POST["nombre_profesor"] : '';
$apellido_profesor = isset($_POST["apellido_profesor"]) ? $_POST["apellido_profesor"] : '';
$ciclo_lectivo = isset($_POST["ciclo_lectivo"]) ? $_POST["ciclo_lectivo"] : '';
$semestre = isset($_POST["semestre"]) ? $_POST["semestre"] : '';
$fecha_desde = isset($_POST["fecha_desde"]) ? $_POST["fecha_desde"] : '';
$fecha_hasta = isset($_POST["fecha_hasta"]) ? $_POST["fecha_hasta"] : '';
$titulo_tema = isset($_POST["titulo_tema"]) ? $_POST["titulo_tema"] : '';
$descripcion_tema = isset($_POST["descripcion_tema"]) ? $_POST["descripcion_tema"] : '';

// Inicializar el objeto de resultado
$result = new stdClass();
$result->success = false;

// Seleccionar la base de datos
$databaseName = "300hs_laborales";
mysqli_select_db($conn, $databaseName);

// Iniciar la consulta SQL
$sql = "SELECT T1.id_libro_tema, T1.tema, T1.descripcion, DATE_FORMAT(T1.fecha, '%d-%m-%Y') AS fecha, T6.carrera, T7.anio, T5.materia, T8.comision, T9.turno, T3.apellido, T3.nombre  
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
        INNER JOIN semestres AS T11 ON T11.id_semestre = T4.id_semestre
        WHERE 1=1";

$parameters = [];
$types = "";

// Verificar y añadir condiciones dinámixamcas a la consulta
if (!empty($nombre_carrera)) {
    $sql .= " AND T6.carrera LIKE ?";
    $parameters[] = "%" . $nombre_carrera . "%";
    $types .= "s";
}
if (!empty($anio_carrera)) {
    $sql .= " AND T7.anio LIKE ?";
    $parameters[] = "%" . $anio_carrera . "%";
    $types .= "s";
}
if (!empty($nombre_materia)) {
    $sql .= " AND T5.materia LIKE ?";
    $parameters[] = "%" . $nombre_materia . "%";
    $types .= "s";
}
if (!empty($comision)) {
    $sql .= " AND T8.comision LIKE ?";
    $parameters[] = "%" . $comision . "%";
    $types .= "s";
}
if (!empty($turno)) {
    $sql .= " AND T9.turno LIKE ?";
    $parameters[] = "%" . $turno . "%";
    $types .= "s";
}
if (!empty($usuario)) {
    $sql .= " AND T10.usuario LIKE ?";
    $parameters[] = "%" . $usuario . "%";
    $types .= "s";
}
if (!empty($nombre_profesor)) {
    $sql .= " AND T3.nombre LIKE ?";
    $parameters[] = "%" . $nombre_profesor . "%";
    $types .= "s";
}
if (!empty($apellido_profesor)) {
    $sql .= " AND T3.apellido LIKE ?";
    $parameters[] = "%" . $apellido_profesor . "%";
    $types .= "s";
}
if (!empty($ciclo_lectivo)) {
    $sql .= " AND T2.c_anio LIKE ?";
    $parameters[] = "%" . $ciclo_lectivo . "%";
    $types .= "s";
}
if (!empty($semestre)) {
    $sql .= " AND T11.semestre LIKE ?";
    $parameters[] = "%" . $semestre . "%";
    $types .= "s";
}
if (!empty($fecha_desde) && !empty($fecha_hasta)) {
    $sql .= " AND T1.fecha BETWEEN ? AND ?";
    $parameters[] = $fecha_desde;
    $parameters[] = $fecha_hasta;
    $types .= "ss";
}
elseif (!empty($fecha_desde)) {
    $sql .= " AND T1.fecha BETWEEN ? AND CURDATE()";
    $parameters[] = $fecha_desde;
    $types .= "s";
}
elseif (!empty($fecha_hasta)) {
    $sql .= " AND T1.fecha BETWEEN CONCAT(YEAR(CURDATE()),'-01-01') AND ?";
    $parameters[] = $fecha_hasta;
    $types .= "s";
}
if (!empty($titulo_tema)) {
    $sql .= " AND T1.tema LIKE ?";
    $parameters[] = "%" . $titulo_tema . "%";
    $types .= "s";
}
if (!empty($descripcion_tema)) {
    $sql .= " AND T1.descripcion LIKE ?";
    $parameters[] = "%" . $descripcion_tema . "%";
    $types .= "s";
}
$sql .= " ORDER BY T1.id_libro_tema";

// Preparar la consulta
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

// Almacenar el resultado y vincular los resultados
$stmt->store_result();
$stmt->bind_result($id_libro_tema, $tema, $descripcion, $fecha, $carrera, $anio, $materia, $comision, $turno, $apellido, $nombre);

$topic = [];
$cont = 0;

while ($stmt->fetch()) {
    $objTopic = new stdClass();

    $objTopic->id_libro_tema = $id_libro_tema;

    $objTopic->tema = $tema;
    $objTopic->descripcion = $descripcion;
    $objTopic->fecha = $fecha;
    $objTopic->carrera = $carrera;
    $objTopic->anio = $anio;
    $objTopic->materia = $materia;
    $objTopic->turno = $turno;
    $objTopic->comision = $comision;
    $objTopic->apellido = $apellido;
   

    $objTopic->id_libro_tema_for_btns = $id_libro_tema;


    $cont += 1;

    array_push($topic, $objTopic);
}

// Verificar si se encontraron resultados
if (empty($topic)) {
    error_stmt($result, "No se encontraron temas con los parametros ingresados. Intente nuevamente.", $stmt, $conn);
} else {
    $result->respuesta = $topic;
    $result->cant_temas = $cont;
    $result->success = true;
}

// Cerrar la conexión y la consulta
$stmt->close();
$conn->close();

// Devolver el resultado en formato JSON
echo json_encode($result);

?>

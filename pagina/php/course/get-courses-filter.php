<?php

// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");

$nombre_carrera = isset($_POST["nombre_carrera"]) ? $_POST["nombre_carrera"] : '';
$anio_carrera = isset($_POST["anio_carrera"]) ? $_POST["anio_carrera"] : '';
$semestre = isset($_POST["semestre"]) ? $_POST["semestre"] : '';
$nombre_materia = isset($_POST["nombre_materia"]) ? $_POST["nombre_materia"] : '';
$comision = isset($_POST["comision"]) ? $_POST["comision"] : '';
$turno = isset($_POST["turno"]) ? $_POST["turno"] : '';
$ciclo = isset($_POST["ciclo"]) ? $_POST["ciclo"] : '';
$nombre_profesor = isset($_POST["nombre_profesor"]) ? $_POST["nombre_profesor"] : '';
$apellido_profesor = isset($_POST["apellido_profesor"]) ? $_POST["apellido_profesor"] : '';
$usuario = isset($_POST["usuario"]) ? $_POST["usuario"] : '';
$activo = isset($_POST["activo"]) ? $_POST["activo"] : '';

$result = new stdClass();
$result->success = false;

$databaseName = "300hs_laborales";
mysqli_select_db($conn, $databaseName);

// Armo la consulta     
$sql = "SELECT T1.id_curso, T3.carrera, T4.anio, T5.semestre, T6.materia, T7.comision, T8.turno, T1.c_anio, T9.nombre, t9.apellido, T10.usuario, T1.isActive
        FROM cursos AS T1
        INNER JOIN relaciones AS T2 ON T2.id_relacion = T1.id_relacion
        INNER JOIN carreras AS T3 ON T3.id_carrera = T2.id_carrera
        INNER JOIN anios AS T4 ON T4.id_anio = T2.id_anio
        INNER JOIN semestres AS T5 ON T5.id_semestre = T2.id_semestre
        INNER JOIN materias AS T6 ON T6.id_materia = T2.id_materia
        INNER JOIN comisiones AS T7 ON T7.id_comision = T1.id_comision 
        INNER JOIN turnos AS T8 ON T8.id_turno = T1.id_turno
        INNER JOIN profesores AS T9 ON T9.id_profesor = T1.id_profesor
        INNER JOIN usuarios AS T10 ON T10.id_usuario = T9.id_usuario
        WHERE 1=1";

$parameters = [];
$types = "";

if (!empty($nombre_carrera)) {
    $sql .= " AND T3.carrera LIKE ?";
    $parameters[] = "%". $nombre_carrera."%";
    $types .= "s";
}
if (!empty($anio_carrera)) {
    $sql .= " AND T4.anio LIKE ?";
    $parameters[] = "%".$anio_carrera."%";
    $types .= "s";
}
if (!empty($semestre)) {
    $sql .= " AND T5.semestre LIKE ?";
    $parameters[] = "%".$semestre."%";
    $types .= "s";
}
if (!empty($nombre_materia)) {
    $sql .= " AND T6.materia LIKE ?";
    $parameters[] = "%".$nombre_materia."%";
    $types .= "s";
}
if (!empty($comision)) {
    $sql .= " AND T7.comision LIKE ?";
    $parameters[] = "%".$comision."%";
    $types .= "s";
}
if (!empty($turno)) {
    $sql .= " AND T8.turno LIKE ?";
    $parameters[] = "%".$turno."%";
    $types .= "s";
}
if (!empty($ciclo)) {
    $sql .= " AND T1.c_anio LIKE ?";
    $parameters[] = "%".$ciclo."%";
    $types .= "s";
}
if (!empty($nombre_profesor)) {
    $sql .= " AND T9.nombre LIKE ?";
    $parameters[] = "%".$nombre_profesor."%";
    $types .= "s";
}
if (!empty($apellido_profesor)) {
    $sql .= " AND T9.apellido LIKE ?";
    $parameters[] = "%".$apellido_profesor."%";
    $types .= "s";
}
if (!empty($usuario)) {
    $sql .= " AND T10.usuario LIKE ?";
    $parameters[] = "%".$usuario."%";
    $types .= "s";
}
if ($activo !== '') {
    $sql .= " AND T1.isActive = ?";
    $parameters[] = (int)$activo;
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
$stmt->bind_result($id_curso, $carrera, $anio, $semestre, $materia, $comision, $turno, $c_anio, $nombre, $apellido, $usuario, $isActive);

$course = [];
$cont = 0;

while ($stmt->fetch()) {
    $objCourse = new stdClass();

    $objCourse->id_curso = $id_curso;

    $objCourse->carrera = $carrera;
    $objCourse->anio = $anio;
    $objCourse->materia = $materia;
    $objCourse->turno = $turno;
    $objCourse->comision = $comision;

    $objCourse->c_anio = $c_anio;
    $objCourse->semestre = $semestre;

    $objCourse->apellido = $apellido;
    
    $objCourse->isActive = $isActive;

    $objCourse->id_curso_for_btns = $id_curso;


    $cont += 1;

    array_push($course, $objCourse);
}

if (empty($course)) {
    error_stmt($result, "No se encontraron cursos", $stmt, $conn);
} else {
    $result->respuesta = $course;
    $result->cant_temas = $cont;
    $result->success = true;
}

$stmt->close();
$conn->close();

echo json_encode($result);

?>

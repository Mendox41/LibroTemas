<?php

// Incluir el archivo de conexión a la base de datos
include(__DIR__ . "/../database/conection.php");

// Incluir las funciones de error
include(__DIR__ . "/../error_stmt/errorFunctions.php");



$inputId = isset($_GET["inputId"]) ? $_GET["inputId"] : '';
$inputMarca = isset($_GET["inputMarca"]) ? $_GET["inputMarca"] : '';
$inputModelo = isset($_GET["inputModelo"]) ? $_GET["inputModelo"] : '';
$inputAno = isset($_GET["inputAno"]) ? $_GET["inputAno"] : '';

$inputPrecio = isset($_GET["inputPrecio"]) ? $_GET["inputPrecio"] : '';
$inputDescripcion = isset($_GET["inputDescripcion"]) ? $_GET["inputDescripcion"] : '';


$inputOrdenar = isset($_GET["inputOrdenar"]) ? $_GET["inputOrdenar"] : '';


// Armo la cosulta
$sql = "SELECT * FROM autos WHERE 1=1";


if (!empty($inputId)) {
    $sql .= " AND id LIKE CONCAT('%',:id,'%')";
}
if (!empty($inputMarca)) {
    $sql .= " AND marca LIKE CONCAT('%',:marca,'%')";
}
if (!empty($inputModelo)) {
    $sql .= " AND modelo LIKE CONCAT('%',:modelo,'%')";
}
if (!empty($inputAno)) {
    $sql .= " AND anio LIKE CONCAT('%',:anio,'%')";
}
if (!empty($inputPrecio)) {
    $sql .= " AND valor LIKE CONCAT('%',:valor,'%')";
}
if (!empty($inputDescripcion)) {
    $sql .= " AND descripcion LIKE CONCAT('%',:descripcion,'%')";
}
if (!empty($inputOrdenar)) {
    $sql .= " ORDER BY $inputOrdenar";
}

$stmt = $dbh->prepare($sql);

// Vinculo los parámetros 
if (!empty($inputId)) {
    $stmt->bindParam(':id', $inputId);
}
if (!empty($inputMarca)) {
    $stmt->bindParam(':marca', $inputMarca);
}
if (!empty($inputModelo)) {
    $stmt->bindParam(':modelo', $inputModelo);
}
if (!empty($inputAno)) {
    $stmt->bindParam(':anio', $inputAno);
}
if (!empty($inputPrecio)) {
    $stmt->bindParam(':valor', $inputPrecio);
}
if (!empty($inputDescripcion)) {
    $stmt->bindParam(':descripcion', $inputDescripcion);
}


$stmt->setFetchMode(PDO::FETCH_ASSOC);
$stmt->execute();

$autos = [];
while ($fila = $stmt->fetch()) {
    $objAuto = new stdClass();
    $objAuto->id = $fila["id"];
    $objAuto->marca = $fila["marca"];
    $objAuto->modelo = $fila["modelo"];
    $objAuto->anio = $fila["anio"];
    $objAuto->valor = $fila["valor"];
    $objAuto->descripcion = $fila["descripcion"];
    // $objAuto->archivo_binario = $fila["archivo_binario"];

    array_push($autos, $objAuto);
}

$objAutos = new stdClass();
$objAutos->autos = $autos;
$objAutos->cont = count($autos);
$salidaJson = json_encode($objAutos);
$dbh = null;
echo ($salidaJson);

?>
<?php
include ('../../php/session/validate-admin.php');

?>

<!doctype html>
<html lang="en">

<head>
    <title>AMB Temas</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />

    <!-- css -->
    <link rel="stylesheet" href="../../css/admin/style-abm-topics.css">

    <!-- Data tables -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">

    <!--  -->
    <link rel="stylesheet" href="https://cdn.datatables.net/2.0.8/css/dataTables.bootstrap5.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/buttons/3.0.2/css/buttons.bootstrap5.css">

   
</head>

<body id="body">

    <?php
    include ('header.php');
    ?>

    <main>
        <div class="main-container" id="main-container">

            <!-- Apartado inicial, botones, filtro y apartado de busqueda -->
            <div class="d-flex mb-3 div-botones">
                <div class="me-auto p-2 ">
                    <button type="button" name="" id="btn-nuevo-tema" class="btn btn-success">
                        Nuevo Tema
                    </button>
                </div>

                

                <div class="p-2">
                    <button type="button" name="" id="btn-filtro-tema" class="btn btn-primary" disabled>
                        Filtro
                    </button>
                </div>

            </div>

            <!-- filtro inicial -->

            <div class="filtro container-md bg-secondary-subtle" id="container-filtro-temas">
                <div class="row g-3 form-filtro" id="form-filtro-tema">
                    <h3 id="titulo-filtro">Filtro de busqueda de Tema</h3>
                    <div class="col-sm-3">
                        <label for="nombre-carrera-filtro" class="form-label">Carrera</label>
                        <input type="text" class="form-control" id="nombre-carrera-filtro">
                    </div>
                    <div class="col-sm-3">
                        <label for="anio-carrera-filtro" class="form-label">Año carrera</label>
                        <input type="text" class="form-control" id="anio-carrera-filtro">
                    </div>
                    <div class="col-sm-3">
                        <label for="nombre-materia-filtro" class="form-label">Materia</label>
                        <input type="text" class="form-control" id="nombre-materia-filtro">
                    </div>
                    <div class="col-sm-3">
                        <label for="comision-filtro" class="form-label">Comision</label>
                        <input type="text" class="form-control" id="comision-filtro">
                    </div>
                    <div class="col-sm-3">
                        <label for="turno-filtro" class="form-label">Turno</label>
                        <input type="text" class="form-control" id="turno-filtro">
                    </div>
                    <div class="col-sm-3">
                        <label for="nombre-usuario-filtro" class="form-label">Usuario</label>
                        <input type="text" class="form-control" id="nombre-usuario-filtro">
                    </div>
                    <div class="col-sm-3">
                        <label for="nombre-profesor-filtro" class="form-label">Nombre Profesor</label>
                        <input type="text" class="form-control" id="nombre-profesor-filtro">
                    </div>
                    <div class="col-sm-3">
                        <label for="apellido-profesor-filtro" class="form-label">Apellido Profesor</label>
                        <input type="text" class="form-control" id="apellido-profesor-filtro">
                    </div>
                    <div class="col-sm-3">
                        <label for="ciclo-lectivo-filtro" class="form-label">Año ciclo lectivo</label>
                        <input type="text" class="form-control" id="ciclo-lectivo-filtro">
                    </div>
                    <div class="col-sm-3">
                        <label for="semestre-filtro" class="form-label">Semestre</label>
                        <input type="text" class="form-control" id="semestre-filtro">
                    </div>
                    <div class="col-sm-3">
                        <label for="fecha-tema-desde-filtro" class="form-label">Fecha Desde</label>
                        <input type="date" class="form-control" id="fecha-tema-desde-filtro">
                    </div>
                    <div class="col-sm-3">
                        <label for="fecha-tema-hasta-filtro" class="form-label">Fecha Hasta</label>
                        <input type="date" class="form-control" id="fecha-tema-hasta-filtro">
                    </div>

                    <div class="col-md-12">
                        <label for="titulo-tema-filtro" class="form-label">Titulo</label>
                        <input type="text" class="form-control" id="titulo-tema-filtro">
                    </div>

                    <div class="col-md-12">
                        <label for="descripcion-tema-filtro" class="form-label">Descripcion</label>
                        <textarea class="form-control" id="descripcion-tema-filtro" rows="1"></textarea>
                    </div>
                    <div class="d-flex flex-row-reverse">
                        <button class="btn btn-primary" id="btn-buscar-tema">Buscar</button>
                    </div>

                </div>


                <!-- tabla abm-->
                <!-- <div id="contenedor-tabla-abm-temas" class="table-responsive text-center bg-white text-dark abm-temas ">
                </div> -->

            </div>

            <!-- tabla abm-->
            <div id="contenedor-tabla-abm-topic" class="table-responsive text-center text-dark abm-topic">

                <!-- creo dinamicamente la tabla de abm -->
                <!-- <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Column 1</th>
                            <th class="col2" scope="col ">Column 2</th>
                            <th scope="col ">Column 3</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        <tr class="">
                            <td scope="row">R1C1</td>
                            <td class="col2">R1C2</td>
                            <td>
                                <div class="" role="" aria-label="Basic mixed styles example">
                                    <button type="button" class="btn btn-primary">Ver</button>
                                    <button type="button" class="btn btn-warning">Modificar</button>
                                    <button type="button" class="btn btn-danger">Desactivar</button>
                                </div>
                            </td>
                        </tr>
                        <tr class="">
                            <td scope="row">Item</td>
                            <td class="col2">Item</td>
                            <td>
                                <div class="" role="" aria-label="Basic mixed styles example">
                                    <button type="button" class="btn btn-primary">Ver</button>
                                    <button type="button" class="btn btn-warning">Modificar</button>
                                    <button type="button" class="btn btn-danger">Desactivar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table> -->
            </div>

        </div>

        <div id="container-modals">

            <!-- Modal filtro tema -->
            <div class="modal-container-ingreso-nuevo-tema" id="modal-container-filtro-tema">
                <div class="modal modal-lg " id="modal-form-buscar-tema" data-bs-backdrop="static"
                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-fullscreen">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Filtro de Temas</h1>
                                <button id="btn-close-modal-filtro" type="button" class="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body" id="modal-body">

                                <div class="row g-3 form-filtro" id="form-filtro-tema">
                                    <div class="col-sm-3">
                                        <label for="nombre-carrera-modal-filtro" class="form-label">Carrera</label>
                                        <input type="text" class="form-control" id="nombre-carrera-modal-filtro">
                                    </div>
                                    <div class="col-sm-3">
                                        <label for="anio-carrera-modal-filtro" class="form-label">Año carrera</label>
                                        <input type="text" class="form-control" id="anio-carrera-modal-filtro">
                                    </div>
                                    <div class="col-sm-3">
                                        <label for="nombre-materia-modal-filtro" class="form-label">Materia</label>
                                        <input type="text" class="form-control" id="nombre-materia-modal-filtro">
                                    </div>
                                    <div class="col-sm-3">
                                        <label for="comision-modal-filtro" class="form-label">Comision</label>
                                        <input type="text" class="form-control" id="comision-modal-filtro">
                                    </div>
                                    <div class="col-sm-3">
                                        <label for="turno-modal-filtro" class="form-label">Turno</label>
                                        <input type="text" class="form-control" id="turno-modal-filtro">
                                    </div>
                                    <div class="col-sm-3">
                                        <label for="nombre-usuario-modal-filtro" class="form-label">Usuario</label>
                                        <input type="text" class="form-control" id="nombre-usuario-modal-filtro">
                                    </div>
                                    <div class="col-sm-3">
                                        <label for="nombre-profesor-modal-filtro" class="form-label">Nombre
                                            Profesor</label>
                                        <input type="text" class="form-control" id="nombre-profesor-modal-filtro">
                                    </div>
                                    <div class="col-sm-3">
                                        <label for="apellido-profesor-modal-filtro" class="form-label">Apellido
                                            Profesor</label>
                                        <input type="text" class="form-control" id="apellido-profesor-modal-filtro">
                                    </div>
                                    <div class="col-sm-3">
                                        <label for="ciclo-lectivo-modal-filtro" class="form-label">Año ciclo
                                            lectivo</label>
                                        <input type="text" class="form-control" id="ciclo-lectivo-modal-filtro">
                                    </div>
                                    <div class="col-sm-3">
                                        <label for="semestre-modal-filtro" class="form-label">Semestre</label>
                                        <input type="text" class="form-control" id="semestre-modal-filtro">
                                    </div>
                                    <div class="col-sm-3">
                                        <label for="fecha-tema-desde-modal-filtro" class="form-label">Fecha
                                            Desde</label>
                                        <input type="date" class="form-control" id="fecha-tema-desde-modal-filtro">
                                    </div>
                                    <div class="col-sm-3">
                                        <label for="fecha-tema-hasta-modal-filtro" class="form-label">Fecha
                                            Hasta</label>
                                        <input type="date" class="form-control" id="fecha-tema-hasta-modal-filtro">
                                    </div>

                                    <div class="col-md-12">
                                        <label for="titulo-tema-modal-filtro" class="form-label">Titulo</label>
                                        <input type="text" class="form-control" id="titulo-tema-modal-filtro">
                                    </div>

                                    <div class="col-md-12">
                                        <label for="descripcion-tema-modal-filtro"
                                            class="form-label">Descripcion</label>
                                        <textarea class="form-control" id="descripcion-tema-modal-filtro"
                                            rows="1"></textarea>
                                    </div>

                                </div>


                                <div class="modal-footer modal-footer-ver-tema">

                                    <div id="btns-izq" class="">
                                        <button class="btn btn-warning"
                                            id="btn-restablecer-datos-modal-filtro">Restablecer campos</button>
                                    </div>
                                    <div id="otros-der">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                            id="btn-cancel-modal-filtro-tema">Cancel</button>
                                        <button class="btn btn-success"
                                            id="btn-modal-filtro-buscar-tema">Buscar</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <!-- Modal Ingreso nuevo tema -->
            <div class="modal-container-ingreso-nuevo-tema" id="modal-container-ingreso-nuevo-tema">
                <div class="modal modal-lg" id="modal-form-ingreso-nuevo-tema" data-bs-backdrop="static"
                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-fullscreen-lg-down modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5">Ingreso de Nuevo Tema</h1>
                                <button id="btn-close-modal-nuevo-tema" type="button" class="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body" id="modal-body">


                                <div class="row g-3 form-filtro" id="modal-form-nuevo-tema">
                                    <div class="col-sm-6">
                                        <label for="nuevo-tema-nombre-carrera" class="form-label">Carrera</label>
                                        <select name="nuevo-tema-nombre-carrera" class="form-control"
                                            id="nuevo-tema-nombre-carrera"></select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="nuevo-tema-anio-carrera" class="form-label">Año
                                            carrera</label>
                                        <select name="nuevo-tema-anio-carrera" class="form-control"
                                            id="nuevo-tema-anio-carrera" disabled>
                                        </select>

                                    </div>
                                    <div class="col-sm-6">
                                        <label for="nuevo-tema-nombre-materia" class="form-label">Materia</label>
                                        <select name="nuevo-tema-nombre-materia" class="form-control"
                                            id="nuevo-tema-nombre-materia" disabled>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="nuevo-tema-turno" class="form-label">Turno</label>
                                        <select name="nuevo-tema-turno" class="form-control" id="nuevo-tema-turno"
                                            disabled>
                                        </select>
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="nuevo-tema-comision" class="form-label">Comision</label>
                                        <select name="nuevo-tema-comision" class="form-control" id="nuevo-tema-comision"
                                            disabled>
                                        </select>
                                    </div>


                                    <div class="col-sm-12">
                                        <label for="fecha-tema-modal-filtro" class="form-label">Fecha</label>
                                        <input type="date" class="form-control" id="nuevo-tema-fecha">
                                    </div>
                                    <div class="col-md-12">
                                        <label for="titulo-tema-modal-filtro" class="form-label">Titulo</label>
                                        <input type="text" class="form-control" id="nuevo-tema-titulo">
                                    </div>

                                    <div class="col-md-12">
                                        <label for="descripcion-tema-modal-filtro"
                                            class="form-label">Descripcion</label>
                                        <textarea class="form-control" id="nuevo-tema-descripcion" rows="1"></textarea>
                                    </div>

                                    <div class="col-md-12 ">
                                        <label for="errorMessage" id="errorMessage" class="invisible"></label>
                                    </div>

                                </div>

                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                    id="btn-cancel-ingreso-nuevo-tema">Cancel</button>
                                <button class="btn btn-success" id="btn-aceptar-ingreso-nuevo-tema">Aceptar</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- modal confirm ingreso tema-->
            <div class="modal" tabindex="-1" id="modal-container-confirm-ingreso-tema">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h7 class="modal-title fs-7 titulo-confirm" id="staticBackdropLabel">Confirmacion de nuevo
                                Registro
                            </h7>
                            <button id="btn-close-modal-confirm" type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 class="titulo-confirm" id="modal-title-confirm">¿Desea registrar el tema con los datos
                                Ingresados?</h3>
                        </div>
                        <div class="modal-footer">
                            <button id="btn-cancel-modal-confirm" type="button" class="btn btn-danger"
                                data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-success"
                                id="btn-confirm-ingreso-tema">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal para ver datos de tema -->
            <div class="modal-container-ver-tema" id="modal-container-ver-tema">
                <div class="modal modal-lg " id="modal-form-ver-tema" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-fullscreen-lg-down modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Datos de tema registrado</h1>
                                <button id="btn-close-modal-ver-tema" type="button" class="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">

                                <input id="ver-tema-id-libro-tema" type="text" class="form-control" disabled>

                                <div class="table-responsive">

                                    <table class="table table-hover table-bordered tabla-datos-tema">

                                        <tbody>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Carrera</td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-tema-td-carrera"></td>
                                            </tr>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Año Carrera</td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-tema-td-anio-carrera"></td>
                                            </tr>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Materia</td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-tema-td-materia"></td>
                                            </tr>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Turno</td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-tema-td-turno"></td>
                                            </tr>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Comision</td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-tema-td-comision"></td>
                                            </tr>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Ciclo Lectivo
                                                </td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-tema-td-ciclo"></td>
                                            </tr>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Semestre</td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-tema-td-semestre"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Usuario</td>
                                                <td id="ver-tema-td-usuario-profesor"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Profesor</td>
                                                <td id="ver-tema-td-nombre-profesor"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Fecha del Tema dado</td>
                                                <td id="ver-tema-td-fecha-tema"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Fecha registro
                                                </td>
                                                <td id="ver-tema-td-fecha-registrado"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Ultima Fecha modificacion</td>
                                                <td id="ver-tema-td-fecha-modificacion"></td>
                                            </tr>
                                            <tr class="">
                                                <td class=" bg-primary-subtle text-primary-emphasis">Titulo del Tema
                                                </td>
                                                <td class=" bg-primary-subtle text-primary-emphasis"
                                                    id="ver-tema-td-titulo-tema"></td>
                                            </tr>
                                            <tr class="">
                                                <td class=" bg-primary-subtle text-primary-emphasis">Descripcion</td>
                                                <td class=" bg-primary-subtle text-primary-emphasis"
                                                    id="ver-tema-td-descripcion-tema"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>


                            <div class="modal-footer btns-modal-space-between">
                                <div id="btns-modificar" class="">
                                    <button type="submit" class="btn btn-warning"
                                        id="btn-modif-modal-ver-tema">Modificar
                                        Datos</button>
                                    <button type="submit" class="btn btn-danger"
                                        id="btn-eliminar-modal-ver-tema">Eliminar</button>

                                </div>
                                <div id="otros-btns">
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                        id="btn-volver-modal-ver-tema">Volver</button>
                                    <!-- <button type="submit" class="btn btn-success"
                                        id="btn-ingreso-tema">Ingresar</button> -->
                                </div>



                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Modal modificar tema -->
            <div class="modal-container-modify-tema" id="modal-container-modify-tema">
                <div class="modal modal-lg" id="modal-form-modify-tema" data-bs-backdrop="static"
                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-fullscreen-lg-down modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5">Modificación datos de Tema</h1>
                                <button id="btn-close-modal-modify-tema" type="button" class="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body" id="modal-body">


                                <div class="row g-3 form-filtro" id="modal-form-modify-tema">

                                    <input type="text" id="id-libro-tema-modal-modify" class="form-control">

                                    <div class="col-sm-6">
                                        <label for="tema-nombre-carrera-modal-modify" class="form-label">Carrera</label>
                                        <input type="text" id="tema-nombre-carrera-modal-modify" class="form-control">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="tema-anio-carrera-modal-modify" class="form-label">Año
                                            carrera</label>
                                        <input type="text" id="tema-anio-carrera-modal-modify" class="form-control">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="tema-nombre-materia-modal-modify" class="form-label">Materia</label>
                                        <input type="text" id="tema-nombre-materia-modal-modify" class="form-control">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="tema-turno-modal-modify" class="form-label">Turno</label>
                                        <input type="text" id="tema-turno-modal-modify" class="form-control">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="tema-comision-modal-modify" class="form-label">Comision</label>
                                        <input type="text" id="tema-comision-modal-modify" class="form-control">
                                    </div>
                                    <div class="col-sm-12">
                                        <label for="fecha-tema-modal-modify" class="form-label">Fecha</label>
                                        <input type="date" class="form-control" id="fecha-tema-modal-modify">
                                    </div>
                                    <div class="col-md-12">
                                        <label for="titulo-tema-modal-modify" class="form-label">Titulo</label>
                                        <input type="text" class="form-control" id="titulo-tema-modal-modify">
                                    </div>

                                    <div class="col-md-12">
                                        <label for="descripcion-tema-modal-modify"
                                            class="form-label">Descripcion</label>
                                        <textarea class="form-control" id="descripcion-tema-modal-modify"
                                            rows="1"></textarea>
                                    </div>

                                    <div class="col-md-12 ">
                                        <label for="errorMessage-modal-modify-tema" id="errorMessage-modal-modify-tema"
                                            class="invisible errorMessage"></label>
                                    </div>

                                </div>

                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                    id="btn-cancel-modify-tema">Cancel</button>
                                <button class="btn btn-success" id="btn-aceptar-modify-tema">Aceptar</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- modal confirm modificacion tema -->
            <div class="modal" tabindex="-1" id="modal-container-confirm-modify-tema">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" id="contenido-confirm-modify-tema">
                        <div class="modal-header">
                            <h7 class="modal-title fs-7 titulo-confirm" id="staticBackdropLabel">Confirmacion
                                modificacion Tema
                            </h7>
                            <button id="close-btn-modal-confirm-modify-tema" type="button" class="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 class="titulo-confirm" id="">¿Desea confirmar la modificacion de los datos del
                                Tema?</h3>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                id="btn-cancel-modal-confirm-modify-tema">Cancel</button>
                            <button class="btn btn-warning" id="btn-aceptar-modal-confirm-modify-tema">Aceptar</button>

                        </div>
                    </div>
                </div>
            </div>

            <!-- modal confirm eliminacion tema -->
            <div class="modal" tabindex="-1" id="modal-container-confirm-delete-tema">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" id="contenido-confirm-delete-tema">
                        <div class="modal-header">
                            <h7 class="modal-title fs-7 titulo-confirm " id="staticBackdropLabel">Confirmacion
                                Eliminar Tema
                            </h7>
                            <button id="close-btn-modal-confirm-delete-tema" type="button" class="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 class="titulo-confirm text-danger" id="">¿Desea confirmar la eliminacion de los datos
                                del
                                Tema?</h3>
                            <input type="text" id="id-libro-tema-modal-confirm-delete" class="form-control">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                id="btn-cancel-modal-confirm-delete-tema">Cancel</button>
                            <button class="btn btn-success" id="btn-aceptar-modal-confirm-delete-tema">Aceptar</button>

                        </div>
                    </div>
                </div>
            </div>

            <!-- modal respuesta -->
            <div class="modal" tabindex="-1" id="modal-container-respuesta">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" id="contenido-modal-respuesta">
                        <div class="modal-header">
                            <h7 class="modal-title fs-7 titulo-confirm" id="staticBackdropLabel">Mensaje de respuesta
                            </h7>
                            <button id="close-btn-modal-respuesta" type="button" class="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 class="titulo-confirm" id="modal-title-respuesta"></h3>
                        </div>
                        <div class="modal-footer">
                            <button id="btn-acept-modal-respuesta" type="button" class="btn btn-primary"
                                data-bs-dismiss="modal">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- modal respuesta secundaria -->
            <div class="modal" tabindex="-1" id="modal-container-respuesta-secundario">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" id="contenido-modal-respuesta-secundario">
                        <div class="modal-header">
                            <h7 class="modal-title fs-7 titulo-confirm" id="staticBackdropLabel">Mensaje de respuesta
                            </h7>
                            <button id="close-btn-modal-respuesta-secundario" type="button" class="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 class="titulo-confirm" id="modal-title-respuesta-secundario"></h3>
                        </div>
                        <div class="modal-footer">
                            <button id="btn-acept-modal-respuesta-secundario" type="button" class="btn btn-primary"
                                data-bs-dismiss="modal">Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    </main>

    <footer>
        <!-- place footer here -->
    </footer>
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>

    <!-- Google CND of Jquery  -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

    <!-- Data tables -->
    <script src="https://cdn.datatables.net/1.10.20/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/fixedheader/3.1.6/js/dataTables.fixedHeader.min.js"></script>

    <!-- ionic.ico -->
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>


    <!-- js -->
    <script type="module" src="../../js/modals-actions/modals-abm-topics.js"></script>
    <script type="module" src="../../js/topic/topic-filter-actions.js"></script>

    <script type="module" src="../../js/topic/new-topic-admin.js"></script>
    <script type="module" src="../../js/topic/modify-topic.js"></script>

    <script type="module" src="../../js/topic/delete-topic.js"></script>


    <!--  -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/5.3.0/js/bootstrap.bundle.min.js"
        type="text/javascript"></script>
    <script src="https://cdn.datatables.net/2.0.8/js/dataTables.js" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/2.0.8/js/dataTables.bootstrap5.js" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/dataTables.buttons.js" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/buttons.bootstrap5.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/buttons.html5.min.js" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/buttons.print.min.js" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/buttons.colVis.min.js" type="text/javascript"></script>

    <!--     
    <script src="https://cdn.datatables.net/2.0.8/js/dataTables.js" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/dataTables.buttons.js" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/buttons.dataTables.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/pdfmake.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/vfs_fonts.js" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/buttons.html5.min.js" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/buttons/3.0.2/js/buttons.print.min.js" type="text/javascript"></script> -->


</body>

</html>
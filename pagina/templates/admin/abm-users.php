<?php
include ('../../php/session/validate-admin.php');

?>

<!doctype html>
<html lang="en">

<head>
    <title>AMB Usuarios</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />

    <!-- css -->
    <link rel="stylesheet" href="../../css/admin/style-abm-users.css">

    <!-- Data tables -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">


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
                    <button type="button" name="" id="btn-nuevo-usuario" class="btn btn-success">
                        Nuevo Usuario
                    </button>
                </div>
                <div class="p-2">
                    <button type="button" name="" id="btn-filtro-usuario" class="btn btn-primary" disabled>
                        Filtro
                    </button>
                </div>

            </div>

            <!-- filtro inicial -->

            <div class="filtro container-md bg-secondary-subtle" id="container-filtro-usuario">
                <div class="row g-3 form-filtro" id="form-filtro-usuario">
                    <h3 id="titulo-filtro">Filtro de busqueda de Usuarios</h3>
                    <div class="col-sm-6">
                        <label for="nombre-usuario-filtro" class="form-label">Usuario</label>
                        <input type="text" class="form-control" id="nombre-usuario-filtro">
                    </div>
                    <div class="col-sm-6">
                        <label for="legajo-filtro" class="form-label">Legajo</label>
                        <input type="text" class="form-control" id="legajo-filtro">
                    </div>
                    <div class="col-sm-6">
                        <label for="nombre-profesor-filtro" class="form-label">Nombre Profesor</label>
                        <input type="text" class="form-control" id="nombre-profesor-filtro">
                    </div>
                    <div class="col-sm-6">
                        <label for="apellido-profesor-filtro" class="form-label">Apellido Profesor</label>
                        <input type="text" class="form-control" id="apellido-profesor-filtro">
                    </div>
                    <div class="col-sm-6">
                        <label for="apellido-profesor-filtro" class="form-label">Estado</label>
                        <select class="form-select" name="select-estado-filtro" id="select-estado-filtro">
                            <option value="">Seleccione Opcion</option>
                            <option value="1">Activo</option>
                            <option value="0">Desactivado</option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <label for="admin-filtro" class="form-label">Administrador</label>
                        <select class="form-select" name="admin-filtro" id="admin-filtro">
                            <option value="">Seleccione Opcion</option>
                            <option value="1">Si</option>
                            <option value="0">No</option>
                        </select>
                    </div>


                    <div class="d-flex flex-row-reverse">
                        <button class="btn btn-primary" id="btn-buscar-usuario">Buscar</button>
                    </div>

                </div>

            </div>

            <!-- tabla abm-->
            <div id="contenedor-tabla-abm-user" class="table-responsive text-center text-dark abm-usuarios">

            </div>

        </div>

        <div id="container-modals">

            <!-- Modal filtro usuario -->
            <div class="modal-container-ingreso-nuevo-usuario" id="modal-container-filtro-usuario">
                <div class="modal modal-lg" id="modal-form-buscar-usuario" data-bs-backdrop="static"
                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-fullscreen">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Filtro de Temas</h1>
                                <button id="btn-close-modal-filtro" type="button" class="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body" id="modal-body">

                                <div class="row g-3 form-filtro" id="form-filtro-usuario">

                                    <div class="col-sm-4">
                                        <label for="nombre-carrera-modal-filtro" class="form-label">Carrera</label>
                                        <input type="text" class="form-control" id="nombre-carrera-modal-filtro">
                                    </div>
                                    <div class="col-sm-4">
                                        <label for="anio-carrera-modal-filtro" class="form-label">Año carrera</label>
                                        <input type="text" class="form-control" id="anio-carrera-modal-filtro">
                                    </div>
                                    <div class="col-sm-4">
                                        <label for="nombre-materia-modal-filtro" class="form-label">Materia</label>
                                        <input type="text" class="form-control" id="nombre-materia-modal-filtro">
                                    </div>
                                    <div class="col-sm-4">
                                        <label for="comision-modal-filtro" class="form-label">Comision</label>
                                        <input type="text" class="form-control" id="comision-modal-filtro">
                                    </div>
                                    <div class="col-sm-4">
                                        <label for="turno-modal-filtro" class="form-label">Turno</label>
                                        <input type="text" class="form-control" id="turno-modal-filtro">
                                    </div>
                                    <div class="col-sm-4">
                                        <label for="nombre-usuario-modal-filtro" class="form-label">Usuario</label>
                                        <input type="text" class="form-control" id="nombre-usuario-modal-filtro">
                                    </div>
                                    <div class="col-sm-4">
                                        <label for="ciclo-lectivo-modal-filtro" class="form-label">Año ciclo
                                            lectivo</label>
                                        <input type="text" class="form-control" id="ciclo-lectivo-modal-filtro">
                                    </div>
                                    <div class="col-sm-4">
                                        <label for="semestre-modal-filtro" class="form-label">Semestre</label>
                                        <input type="text" class="form-control" id="semestre-modal-filtro">
                                    </div>
                                    <div class="col-sm-4">
                                        <label for="nombre-profesor-modal-filtro" class="form-label">Nombre
                                            Profesor</label>
                                        <input type="text" class="form-control" id="nombre-profesor-modal-filtro">
                                    </div>
                                    <div class="col-sm-4">
                                        <label for="apellido-profesor-modal-filtro" class="form-label">Apellido
                                            Profesor</label>
                                        <input type="text" class="form-control" id="apellido-profesor-modal-filtro">
                                    </div>
                                    <div class="col-sm-4">
                                        <label for="apellido-profesor-modal-filtro" class="form-label">Estado</label>
                                        <select class="form-select" name="select-estado-modal-filtro"
                                            id="select-estado-modal-filtro">
                                            <option value="">Seleccione Opcion</option>
                                            <option value="1">Activo</option>
                                            <option value="0">Desactivado</option>
                                        </select>
                                    </div>

                                </div>

                                <div class="modal-footer btns-modal-space-between">

                                    <div id="btns-izq" class="">
                                        <button class="btn btn-warning"
                                            id="btn-restablecer-datos-modal-filtro">Restablecer
                                            campos</button>
                                    </div>
                                    <div id="otros-der">
                                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                            id="btn-cancel-modal-filtro-usuario">Cancel</button>
                                        <button class="btn btn-success"
                                            id="btn-modal-filtro-buscar-usuario">Buscar</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <!-- Modal ingreso de nuevo usuario-->
            <div class="modal-container-ingreso-nuevo-usuario" id="modal-container-ingreso-nuevo-usuario">
                <div class="modal modal-lg" id="modal-form-nuevo-usuario" data-bs-backdrop="static"
                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-fullscreen-lg-down">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Ingresar un nuevo usuario</h1>
                                <button id="btn-close-modal-form-nuevo-usuario" type="button" class="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                                <div class="mb-3">
                                    <div class="row g-3">
                                        <!-- <div class="">
                                            <input type="text" class="form-control" placeholder="ID Usuario"
                                                aria-label="ID Usuario" id="id-usuario" disabled>
                                        </div> -->


                                        <div class="col-md-6 form-floating">
                                            <input type="text" class="form-control" id="usuario-modal-n-u"
                                                placeholder="">
                                            <label for="usuario-modal-n-u">Nombre de usuario</label>
                                        </div>

                                        <div class="col-md-6 form-floating">
                                            <select class="form-select" id="select-profesor-asociado"
                                                aria-label="Floating label select example">
                                                <option selected value="0">Seleccionar profesor</option>
                                            </select>
                                            <label for="select-profesor-asociado">Profesor asociado</label>
                                        </div>

                                        <div class="col-md-6  form-floating">
                                            <input type="password" class="form-control" id="contra-modal-n-u"
                                                placeholder="">
                                            <label for="contra-modal-n-u">Contraseña</label>
                                        </div>

                                        <div class="col-md-6 form-floating">
                                            <input type="password" class="form-control" id="confirm-contra-modal-n-u"
                                                placeholder="">
                                            <label for="confirm-contra-modal-n-u">Confirmar Contraseña</label>
                                        </div>


                                        <div class="col-8 form-label-lg checkbox-admin">
                                            <input class="form-check-input" type="checkbox" value="" id="Admin-check">
                                            <label class="form-check-label" for="defaultCheck1">
                                                Administrador
                                            </label>
                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                    id="btn-cancel-modal-form-nuevo-usuario">Cancel</button>
                                <button type="submit" class="btn btn-success" id="btn-ingreso-usuario">Ingresar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- modal confirm ingreso -->
            <div class="modal" tabindex="-1" id="modal-container-confirm-ingreso-usuario">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h7 class="modal-title fs-7 titulo-confirm" id="modal-title-header-confirm">Confirmacion de
                                nuevo usuario
                            </h7>
                            <button id="btn-close-modal-confirm" type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 class="titulo-confirm" id="">¿Desea registrar el Usuario con los datos Ingresados?</h3>

                        </div>
                        <div class="modal-footer">
                            <button id="btn-cancel-modal-confirm" type="button" class="btn btn-danger"
                                data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" class="btn btn-warning"
                                id="btn-confirm-ingreso-usuario">Confirmar</button>
                        </div>
                    </div>

                </div>
            </div>

            <!-- modal respuesta -->
            <div class="modal" tabindex="-1" id="modal-container-respuesta">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" id="contenido-modal-respuesta">
                        <div class="modal-header">
                            <h7 class="modal-title fs-7 titulo-confirm" id="staticBackdropLabel">Mensaje de
                                respuesta
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

            <!-- codigo a readaptar -->

            <!-- Modal para ver datos de usuario -->
            <div class="modal-container-ver-usuario" id="modal-container-ver-usuario">
                <div class="modal modal-lg " id="modal-form-ver-usuario" data-bs-backdrop="static" data-bs-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-fullscreen-lg-down modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Datos de usuario registrado</h1>
                                <button id="btn-close-modal-ver-usuario" type="button" class="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">

                                <input id="ver-usuario-id-libro-usuario" type="text" class="form-control" disabled hidden>

                                <div class="table-responsive">

                                    <table class="table table-hover table-bordered tabla-datos-usuario">

                                        <tbody>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Carrera</td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-usuario-td-carrera"></td>
                                            </tr>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Año Carrera</td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-usuario-td-anio-carrera"></td>
                                            </tr>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Materia</td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-usuario-td-materia"></td>
                                            </tr>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Turno</td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-usuario-td-turno"></td>
                                            </tr>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Comision</td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-usuario-td-comision"></td>
                                            </tr>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Ciclo Lectivo
                                                </td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-usuario-td-ciclo"></td>
                                            </tr>
                                            <tr class="">
                                                <td class="bg-secondary-subtle text-secondary-emphasis">Semestre</td>
                                                <td class="bg-secondary-subtle text-secondary-emphasis"
                                                    id="ver-usuario-td-semestre"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Usuario</td>
                                                <td id="ver-usuario-td-usuario-profesor"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Profesor</td>
                                                <td id="ver-usuario-td-nombre-profesor"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Fecha del Tema dado</td>
                                                <td id="ver-usuario-td-fecha-usuario"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Fecha registro
                                                </td>
                                                <td id="ver-usuario-td-fecha-registrado"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Ultima Fecha modificacion</td>
                                                <td id="ver-usuario-td-fecha-modificacion"></td>
                                            </tr>
                                            <tr class="">
                                                <td class=" bg-primary-subtle text-primary-emphasis">Titulo del Tema
                                                </td>
                                                <td class=" bg-primary-subtle text-primary-emphasis"
                                                    id="ver-usuario-td-titulo-usuario"></td>
                                            </tr>
                                            <tr class="">
                                                <td class=" bg-primary-subtle text-primary-emphasis">Descripcion</td>
                                                <td class=" bg-primary-subtle text-primary-emphasis"
                                                    id="ver-usuario-td-descripcion-usuario"></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>


                            </div>


                            <div class="modal-footer btns-modal-space-between">
                                <div id="btns-modificar" class="">
                                    <button type="submit" class="btn btn-warning"
                                        id="btn-modif-modal-ver-usuario">Modificar
                                        Datos</button>
                                    <button type="submit" class="btn btn-danger"
                                        id="btn-eliminar-modal-ver-usuario">Eliminar</button>

                                </div>
                                <div id="otros-btns">
                                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
                                        id="btn-volver-modal-ver-usuario">Volver</button>
                                    <!-- <button type="submit" class="btn btn-success"
                                        id="btn-ingreso-usuario">Ingresar</button> -->
                                </div>



                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Modal modificar usuario -->
            <div class="modal-container-modify-usuario" id="modal-container-modify-usuario">
                <div class="modal modal-lg" id="modal-form-modify-usuario" data-bs-backdrop="static"
                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-fullscreen-lg-down modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5">Modificación datos de Tema</h1>
                                <button id="btn-close-modal-modify-usuario" type="button" class="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body" id="modal-body">


                                <div class="row g-3 form-filtro" id="modal-form-modify-usuario">

                                    <input type="text" id="id-libro-usuario-modal-modify" class="form-control">

                                    <div class="col-sm-6">
                                        <label for="usuario-nombre-carrera-modal-modify" class="form-label">Carrera</label>
                                        <input type="text" id="usuario-nombre-carrera-modal-modify" class="form-control">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="usuario-anio-carrera-modal-modify" class="form-label">Año
                                            carrera</label>
                                        <input type="text" id="usuario-anio-carrera-modal-modify" class="form-control">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="usuario-nombre-materia-modal-modify" class="form-label">Materia</label>
                                        <input type="text" id="usuario-nombre-materia-modal-modify" class="form-control">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="usuario-turno-modal-modify" class="form-label">Turno</label>
                                        <input type="text" id="usuario-turno-modal-modify" class="form-control">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="usuario-comision-modal-modify" class="form-label">Comision</label>
                                        <input type="text" id="usuario-comision-modal-modify" class="form-control">
                                    </div>
                                    <div class="col-sm-12">
                                        <label for="fecha-usuario-modal-modify" class="form-label">Fecha</label>
                                        <input type="date" class="form-control" id="fecha-usuario-modal-modify">
                                    </div>
                                    <div class="col-md-12">
                                        <label for="titulo-usuario-modal-modify" class="form-label">Titulo</label>
                                        <input type="text" class="form-control" id="titulo-usuario-modal-modify">
                                    </div>

                                    <div class="col-md-12">
                                        <label for="descripcion-usuario-modal-modify"
                                            class="form-label">Descripcion</label>
                                        <textarea class="form-control" id="descripcion-usuario-modal-modify"
                                            rows="1"></textarea>
                                    </div>

                                    <div class="col-md-12 ">
                                        <label for="errorMessage-modal-modify-usuario" id="errorMessage-modal-modify-usuario"
                                            class="invisible errorMessage"></label>
                                    </div>

                                </div>

                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                    id="btn-cancel-modify-usuario">Cancel</button>
                                <button class="btn btn-success" id="btn-aceptar-modify-usuario">Aceptar</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <!-- modal confirm modificacion usuario -->
            <div class="modal" tabindex="-1" id="modal-container-confirm-modify-usuario">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" id="contenido-confirm-modify-usuario">
                        <div class="modal-header">
                            <h7 class="modal-title fs-7 titulo-confirm" id="staticBackdropLabel">Confirmacion
                                modificacion Tema
                            </h7>
                            <button id="close-btn-modal-confirm-modify-usuario" type="button" class="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 class="titulo-confirm" id="">¿Desea confirmar la modificacion de los datos del
                                Tema?</h3>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                id="btn-cancel-modal-confirm-modify-usuario">Cancel</button>
                            <button class="btn btn-warning" id="btn-aceptar-modal-confirm-modify-usuario">Aceptar</button>

                        </div>
                    </div>
                </div>
            </div>

            <!-- modal confirm eliminacion usuario -->
            <div class="modal" tabindex="-1" id="modal-container-confirm-delete-usuario">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" id="contenido-confirm-delete-usuario">
                        <div class="modal-header">
                            <h7 class="modal-title fs-7 titulo-confirm " id="staticBackdropLabel">Confirmacion
                                Eliminar Tema
                            </h7>
                            <button id="close-btn-modal-confirm-delete-usuario" type="button" class="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 class="titulo-confirm text-danger" id="">¿Desea confirmar la eliminacion de los datos
                                del
                                Tema?</h3>
                            <input type="text" id="id-libro-usuario-modal-confirm-delete" class="form-control">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                id="btn-cancel-modal-confirm-delete-usuario">Cancel</button>
                            <button class="btn btn-success" id="btn-aceptar-modal-confirm-delete-usuario">Aceptar</button>

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
    <script type="module" src="../../js/modals-actions/modals-abm-users.js"></script>
    <script type="module" src="../../js/users/user-filter-actions.js"></script>

    <script type="module" src="../../js/users/new-user.js"></script>


    <!-- <script type="module" src="../../js/users/modify-user.js"></script> -->

    <!-- <script type="module" src="../../js/users/delete-user.js"></script> -->



</body>

</html>
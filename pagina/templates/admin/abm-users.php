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
                <div class="modal modal-lg " id="modal-form-buscar-usuario" data-bs-backdrop="static"
                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-fullscreen">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Filtro de Temas</h1>
                                <button id="btn-close-modal-filtro" type="button" class="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="row g-3 form-filtro" id="form-modal-filtro-usuario">
                                <h3 id="titulo-modal-filtro">Filtro de busqueda de Usuarios</h3>
                                <div class="col-sm-6">
                                    <label for="nombre-usuario-modal-filtro" class="form-label">Usuario</label>
                                    <input type="text" class="form-control" id="nombre-usuario-modal-filtro">
                                </div>
                                <div class="col-sm-6">
                                    <label for="legajo-modal-filtro" class="form-label">Legajo</label>
                                    <input type="text" class="form-control" id="legajo-modal-filtro">
                                </div>
                                <div class="col-sm-6">
                                    <label for="nombre-profesor-modal-filtro" class="form-label">Nombre Profesor</label>
                                    <input type="text" class="form-control" id="nombre-profesor-modal-filtro">
                                </div>
                                <div class="col-sm-6">
                                    <label for="apellido-profesor-modal-filtro" class="form-label">Apellido
                                        Profesor</label>
                                    <input type="text" class="form-control" id="apellido-profesor-modal-filtro">
                                </div>
                                <div class="col-sm-6">
                                    <label for="apellido-profesor-modal-filtro" class="form-label">Estado</label>
                                    <select class="form-select" name="select-estado-filtro"
                                        id="select-estado-modal-filtro">
                                        <option value="">Seleccione Opcion</option>
                                        <option value="1">Activo</option>
                                        <option value="0">Desactivado</option>
                                    </select>
                                </div>
                                <div class="col-sm-6">
                                    <label for="admin-modal-filtro" class="form-label">Administrador</label>
                                    <select class="form-select" name="admin-modal-filtro" id="admin-modal-filtro">
                                        <option value="">Seleccione Opcion</option>
                                        <option value="1">Si</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>


                                <div class="d-flex flex-row-reverse">
                                    <button class="btn btn-primary" id="btn-buscar-usuario-modal-filtro">Buscar</button>
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

            <!-- Modal para ver datos de usuario -->
            <div class="modal-container-ver-usuario" id="modal-container-ver-usuario">
                <div class="modal modal-lg" id="modal-form-ver-usuario" data-bs-backdrop="static"
                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-fullscreen-lg-down modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Datos de usuario registrado</h1>
                                <button id="btn-close-modal-ver-usuario" type="button" class="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">

                                <input id="ver-usuario-id-usuario" type="text" class="form-control" disabled >

                                <div class="table-responsive">

                                    <table class="table table-hover table-bordered tabla-datos-usuario">

                                        <tbody>
                                            <tr class="">
                                                <td>Usuario</td>
                                                <td id="ver-usuario-td-usuario-profesor"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Legajo</td>
                                                <td id="ver-usuario-td-legajo"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Docente</td>
                                                <td id="ver-usuario-td-nombre-profesor"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Estado</td>
                                                <td id="ver-usuario-td-estado"></td>
                                            </tr>
                                            <tr class="">
                                                <td>Administrador</td>
                                                <td id="ver-usuario-td-admin"></td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>


                            </div>


                            <div class="modal-footer btns-modal-space-between">
                                <div id="btns-modificar" class="">
                                    <button type="submit" class="btn btn-warning"
                                        id="btn-modif-contra-modal-ver-usuario">Modificar
                                        Contraseña</button>
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
                <div class="modal modal-lg " id="modal-form-modify-usuario" data-bs-backdrop="static"
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

                                    <input type="text" id="id-usuario-modal-modify" class="form-control" disabled hidden>

                                    <div class="col-sm-12">
                                        <label for="nombre-usuario-modal-modify" class="form-label">Usuario</label>
                                        <input type="text" id="nombre-usuario-modal-modify" class="form-control">
                                    </div>


                                    <div class="col-md-12 ">
                                        <label for="errorMessage-modal-modify-usuario"
                                            id="errorMessage-modal-modify-usuario"
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
            <div class="modal " tabindex="-1" id="modal-container-confirm-modify-usuario">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" id="contenido-confirm-modify-usuario">
                        <div class="modal-header">
                            <h7 class="modal-title fs-7 titulo-confirm" id="staticBackdropLabel">Confirmacion
                                modificacion Usuario
                            </h7>
                            <button id="close-btn-modal-confirm-modify-usuario" type="button" class="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 class="titulo-confirm" id="">¿Desea confirmar la modificacion de los datos del
                                Usuario?</h3>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                id="btn-cancel-modal-confirm-modify-usuario">Cancel</button>
                            <button class="btn btn-warning"
                                id="btn-aceptar-modal-confirm-modify-usuario">Aceptar</button>

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
                                Eliminar Usuario
                            </h7>
                            <button id="close-btn-modal-confirm-delete-usuario" type="button" class="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 class="titulo-confirm text-danger" id="">¿Desea confirmar la eliminacion de los datos
                                del
                                Usuario?</h3>
                            <input type="text" id="id-usuario-modal-confirm-delete" class="form-control" disabled>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                id="btn-cancel-modal-confirm-delete-usuario">Cancel</button>
                            <button class="btn btn-success"
                                id="btn-aceptar-modal-confirm-delete-usuario">Aceptar</button>

                        </div>
                    </div>
                </div>
            </div>

            <!-- modal confirm activar/desactivar usuario -->
            <div class="modal" tabindex="-1" id="modal-container-confirm-act-desac-usuario">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content" id="contenido-confirm-act-desac-usuario">
                        <div class="modal-header">
                            <h7 class="modal-title fs-7 titulo-confirm-act-desac-usuario "
                                id="titulo-confirm-act-desac-usuario">
                            </h7>
                            <button id="close-btn-modal-confirm-act-desac-usuario" type="button" class="btn-close"
                                data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 class="titulo-confirm" id="h3-act-desac-usuario"></h3>
                            <input type="text" id="id-usuario-modal-confirm-act-desac" class="form-control" disabled>
                            <input type="text" id="estado-usuario-modal-confirm-act-desac" class="form-control"
                                disabled>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                id="btn-cancel-modal-confirm-act-desac-usuario">Cancel</button>
                            <button class="btn btn-success"
                                id="btn-aceptar-modal-confirm-act-desac-usuario">Aceptar</button>

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
    <script type="module" src="../../js/users/modify-status-user.js"></script>
    <script type="module" src="../../js/users/modify-user-data.js"></script>


    <script type="module" src="../../js/users/new-user.js"></script>


    <!-- <script type="module" src="../../js/users/modify-user.js"></script> -->

    <script type="module" src="../../js/users/delete-user.js"></script>



</body>

</html>
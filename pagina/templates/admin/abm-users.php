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

</head>

<body id="body">

    <?php
    include ('header.php');
    ?>

    <main>
        <div class="main-container" id="main-container">

            <!-- Apartado inicial, botones, filtro y apartado de busqueda -->
            <div class="d-flex mb-3 div-botones">
                <div class="me-auto p-2">
                    <button type="button" name="" id="btn-nuevo-usuario" class="btn btn-success">
                        Nuevo Usuario
                    </button>
                </div>
                <div class="p-2">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div class="p-2">
                    <button type="button" name="" id="" class="btn btn-primary">
                        Filtro
                    </button>
                </div>
            </div>



            <!-- tabla abm-->
            <div id="contenedor-tabla-abm-usuarios"
                class="table-responsive text-center bg-white text-dark abm-usuarios">

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

        </div>

        <div id="container-modals">

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
                                        <div class="">
                                            <input type="text" class="form-control" placeholder="ID Usuario"
                                                aria-label="ID Usuario" id="id-usuario" disabled>
                                        </div>


                                        <div class="col-md-6 form-floating">
                                            <input type="text" class="form-control" id="floatingInputNombreUsuario"
                                                placeholder="">
                                            <label for="floatingInputNombreUsuario">Nombre de usuario</label>
                                        </div>

                                        <div class="col-md-6 form-floating">
                                            <select class="form-select" id="select-profesor-asociado"
                                                aria-label="Floating label select example">
                                                <option selected value="0">Seleccionar profesor</option>
                                            </select>
                                            <label for="floatingSelect">Profesor asociado</label>
                                        </div>

                                        <div class="col-md-6  form-floating">
                                            <input type="password" class="form-control" id="floatingInput-contrasenia"
                                                placeholder="">
                                            <label for="floatingInput-contrasenia">Contraseña</label>
                                        </div>

                                        <div class="col-md-6 form-floating" id="confirm-contra">
                                            <input type="password" class="form-control"
                                                id="floatingInput-confirm-contrasenia" placeholder="">
                                            <label for="floatingInput-confirm-contrasenia">Confirmar Contraseña</label>
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
                            <h7 class="modal-title fs-7 titulo-confirm" id="modal-title-header-confirm">Confirmacion de nuevo
                                Registro
                            </h7>
                            <button id="btn-close-modal-confirm" type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3 class="titulo-confirm" id="modal-title-body-confirm"></h3>
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
                    <div class="modal-content">
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

    <!-- js -->
    <script src="../../js/admin/abm-users.js"></script>
    <script src="../../js/admin/modals-actions.js"></script>



</body>

</html>
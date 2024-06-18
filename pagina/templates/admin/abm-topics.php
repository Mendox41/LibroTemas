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
                <form class="row g-3 form-filtro" id="form-filtro-tema">
                    <h3 id="titulo-filtro">Filtro de busqueda de Tema</h3>
                    <div class="col-sm-3">
                        <label for="nombre-carrera" class="form-label">Carrera</label>
                        <input type="text" class="form-control" id="nombre-carrera">
                    </div>
                    <div class="col-sm-3">
                        <label for="anio-carrera" class="form-label">Año carrera</label>
                        <input type="text" class="form-control" id="anio-carrera">
                    </div>
                    <div class="col-sm-3">
                        <label for="nombre-materia" class="form-label">Materia</label>
                        <input type="text" class="form-control" id="nombre-materia">
                    </div>
                    <div class="col-sm-3">
                        <label for="comision" class="form-label">Comision</label>
                        <input type="text" class="form-control" id="comision">
                    </div>
                    <div class="col-sm-3">
                        <label for="turno" class="form-label">Turno</label>
                        <input type="text" class="form-control" id="turno">
                    </div>
                    <div class="col-sm-3">
                        <label for="nombre-usuario" class="form-label">Usuario</label>
                        <input type="text" class="form-control" id="nombre-usuario">
                    </div>
                    <div class="col-sm-3">
                        <label for="nombre-profesor" class="form-label">Nombre Profesor</label>
                        <input type="text" class="form-control" id="nombre-profesor">
                    </div>
                    <div class="col-sm-3">
                        <label for="apellido-profesor" class="form-label">Apellido Profesor</label>
                        <input type="text" class="form-control" id="apellido-profesor">
                    </div>
                    <div class="col-sm-3">
                        <label for="fecha-tema" class="form-label">Fecha</label>
                        <input type="date" class="form-control" id="fecha-tema">
                    </div>
                    <div class="col-md-12">
                        <label for="titulo-tema" class="form-label">Titulo</label>
                        <input type="text" class="form-control" id="titulo-tema">
                    </div>

                    <div class="col-md-12">
                        <label for="descripcion-tema" class="form-label">Descripcion</label>
                        <textarea class="form-control" id="descripcion-tema" rows="1"></textarea>
                    </div>
                    <div class="d-flex flex-row-reverse">
                        <button class="btn btn-primary" id="btn-buscar-tema">Buscar</button>

                    </div>
                </form>
            </div>


            <!-- tabla abm-->
            <div id="contenedor-tabla-abm-temas" class="table-responsive text-center bg-white text-dark abm-temas ">

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

            <!-- Modal filtro tema -->
            <div class="modal-container-ingreso-nuevo-tema" id="modal-container-filtro-tema">
                <div class="modal modal-lg " id="modal-form-buscar-tema" data-bs-backdrop="static"
                    data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-fullscreen-lg-down">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Filtro de Temas</h1>
                                <button id="btn-close-modal-filtro" type="button" class="btn-close"
                                    data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body" id="modal-body">


                                <form class="row g-3 form-filtro" id="modal-form-filtro-tema">
                                    <div class="col-sm-6">
                                        <label for="nombre-carrera-modal-filtro" class="form-label">Carrera</label>
                                        <input type="text" class="form-control" id="nombre-carrera-modal-filtro">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="anio-carrera-modal-filtro" class="form-label">Año carrera</label>
                                        <input type="text" class="form-control" id="anio-carrera-modal-filtro">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="nombre-materia-modal-filtro" class="form-label">Materia</label>
                                        <input type="text" class="form-control" id="nombre-materia-modal-filtro">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="comision-modal-filtro" class="form-label">Comision</label>
                                        <input type="text" class="form-control" id="comision-modal-filtro">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="turno-modal-filtro" class="form-label">Turno</label>
                                        <input type="text" class="form-control" id="turno-modal-filtro">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="nombre-usuario-modal-filtro" class="form-label">Usuario</label>
                                        <input type="text" class="form-control" id="nombre-usuario-modal-filtro">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="nombre-profesor-modal-filtro" class="form-label">Nombre
                                            Profesor</label>
                                        <input type="text" class="form-control" id="nombre-profesor-modal-filtro">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="apellido-profesor-modal-filtro" class="form-label">Apellido
                                            Profesor</label>
                                        <input type="text" class="form-control" id="apellido-profesor-modal-filtro">
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="fecha-tema-modal-filtro" class="form-label">Fecha</label>
                                        <input type="date" class="form-control" id="fecha-tema-modal-filtro">
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

                                </form>

                            </div>

                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                    id="btn-cancel-modal-filtro-tema">Cancel</button>
                                <button class="btn btn-success" id="btn-modal-buscar-tema">Buscar</button>

                            </div>
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
    <script src="../../js/modals-actions/modals-abm-topics.js"></script>
    <script src="../../js/topic/topic-filter-actions.js"></script>




</body>

</html>
<?php
include ('../../php/session/validate-admin.php');

?>

<!doctype html>
<html lang="en">

<head>
    <title>AMB Cursos</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />

    <!-- css -->
    <link rel="stylesheet" href="../../css/admin/style-abm-courses.css">

    <!-- Data tables -->
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css">
    <link rel="" href="https://cdn.datatables.net/fixedheader/3.1.6/css/fixedHeader.dataTables.min.css">


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
                    <button type="button" name="" id="btn-nuevo-curso" class="btn btn-success">
                        Nuevo Curso
                    </button>
                </div>

                <div class="p-2">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            disabled>
                            Exportar
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#" id="btn-export-pdf">PDF</a></li>
                            <li><a class="dropdown-item" href="#" id="btn-export-csv">CSV</a></li>
                            <li><a class="dropdown-item" href="#" id="btn-export-txt">TXT</a></li>
                        </ul>
                    </div>
                </div>

                <div class="p-2">
                    <button type="button" name="" id="btn-filtro-curso" class="btn btn-primary" disabled>
                        Filtro
                    </button>
                </div>

            </div>

            <!-- filtro inicial -->

            <div class="filtro container-md bg-secondary-subtle" id="container-filtro-curso">
                <div class="row g-3 form-filtro" id="form-filtro-curso">
                    <h3 id="titulo-filtro">Filtro de busqueda de Cursos</h3>
                    <div class="col-sm-4">
                        <label for="nombre-carrera-filtro" class="form-label">Carrera</label>
                        <input type="text" class="form-control" id="nombre-carrera-filtro">
                    </div>
                    <div class="col-sm-4">
                        <label for="anio-carrera-filtro" class="form-label">Año carrera</label>
                        <input type="text" class="form-control" id="anio-carrera-filtro">
                    </div>
                    <div class="col-sm-4">
                        <label for="nombre-materia-filtro" class="form-label">Materia</label>
                        <input type="text" class="form-control" id="nombre-materia-filtro">
                    </div>
                    <div class="col-sm-4">
                        <label for="comision-filtro" class="form-label">Comision</label>
                        <input type="text" class="form-control" id="comision-filtro">
                    </div>
                    <div class="col-sm-4">
                        <label for="turno-filtro" class="form-label">Turno</label>
                        <input type="text" class="form-control" id="turno-filtro">
                    </div>


                    <div class="col-sm-4">
                        <label for="nombre-usuario-filtro" class="form-label">Usuario</label>
                        <input type="text" class="form-control" id="nombre-usuario-filtro">
                    </div>

                    <div class="col-sm-4">
                        <label for="ciclo-lectivo-filtro" class="form-label">Año ciclo lectivo</label>
                        <input type="text" class="form-control" id="ciclo-lectivo-filtro">
                    </div>


                    <div class="col-sm-4">
                        <label for="semestre-filtro" class="form-label">Semestre</label>
                        <input type="text" class="form-control" id="semestre-filtro">
                    </div>

                    <div class="col-sm-4">
                        <label for="nombre-profesor-filtro" class="form-label">Nombre Profesor</label>
                        <input type="text" class="form-control" id="nombre-profesor-filtro">
                    </div>
                    <div class="col-sm-4">
                        <label for="apellido-profesor-filtro" class="form-label">Apellido Profesor</label>
                        <input type="text" class="form-control" id="apellido-profesor-filtro">
                    </div>

                    <div class="col-sm-4">
                        <label for="apellido-profesor-filtro" class="form-label">Estado</label>
                        <select class="form-select" name="select-estado-filtro" id="select-estado-filtro">
                            <option value="">Seleccione Opcion</option>
                            <option value="1">Activo</option>
                            <option value="0">Desactivado</option>
                        </select>
                    </div>



                    <div class="d-flex flex-row-reverse">
                        <button class="btn btn-primary" id="btn-buscar-curso">Buscar</button>
                    </div>

                </div>

            </div>

            <!-- tabla abm-->
            <div id="contenedor-tabla-abm-course" class="table-responsive text-center text-dark abm-cursos">

            </div>

        </div>

        <div id="container-modals">


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
    <script type="module" src="../../js/modals-actions/modals-abm-courses.js"></script>
    <script type="module" src="../../js/course/course-filter-actions.js"></script>

    <script type="module" src="../../js/course/new-course.js"></script>
    <script type="module" src="../../js/course/modify-course.js"></script>

    <script type="module" src="../../js/course/delete-course.js"></script>



</body>

</html>
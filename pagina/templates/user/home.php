<?php
include ('../../php/session/validate-session.php');
?>



<!doctype html>
<html lang="en">

<head>
    <title>Home</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />

    <!-- css -->
    <link rel="stylesheet" href="../../css/user/style-home.css">

</head>

<body id="body">
    <header id="header">
        <nav class="navbar navbar-expand-md " id="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" id="logo-ub" href="#"><img src="../../img/logo-ub/logo-ub.jpg"
                        alt="logo-ub"></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link btn btn-danger" href="../../php/session/destroy-session.php">Cerrar
                                Sesión</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>

    </header>

    <main>
        <div class="main-container" id="main-container">
            <div class="accordion" id="accordionMain">
                <!-- Aqui se crea mediante js el accordion para mostrar los datos -->

            </div>
        </div>

        <!-- Modal ingreso de nuevo tema-->
        <div class="modal-container-ingreso-nuevo-tema" id="modal-container-ingreso-nuevo-tema">
            <div class="modal modal-lg" id="modal-form" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Ingresar un nuevo Tema</h1>
                            <button id="btn-close-modal-form" type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>

                        <div class="modal-body">
                            <div class="form-floating mb-3">
                                <div class="row g-3">
                                    <div class="">
                                        <input type="text" class="form-control" placeholder="ID Curso"
                                            aria-label="ID Curso" id="id-curso" disabled hidden>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="CarreraSelec"
                                            aria-label="Carrera Seleccionada" id="carrera-selec" disabled>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="Año Carrera Selecc"
                                            aria-label="Año Carrera Selecc" id="anio-carrera-selec" disabled>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="Materia Selecc"
                                            aria-label="Materia Selecc" id="materia-selec" disabled>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="Com selecc"
                                            aria-label="Com selecc" id="comision-selec" disabled>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="Turno comm Selecc"
                                            aria-label="Turno comm Selecc" id="turno-com-selec" disabled>
                                    </div>
                                    <!-- <div class="col-md-6">
                                        <input type="text" class="form-control" placeholder="Fecha actual"
                                            aria-label="Fecha actual" id="fecha-actual" disabled>
                                    </div> -->

                                </div>
                            </div>
                        </div>

                        <div class="modal-body">
                            <form class="row g-3" id="form-nuevo-tema">

                                <div class="md-3">
                                    <input type="date" class="form-control" id="fecha-tema" required>
                                </div>

                                <div class="md-3">
                                    <input placeholder="Titulo del tema" type="text" class="form-control"
                                        id="titulo-tema" required>
                                </div>

                                <div class="mb-3">
                                    <textarea class="form-control" id="descripcion-tema"
                                        placeholder="Descripcion del tema" required></textarea>
                                </div>

                                <div class="mb-3">

                                    <label for="errorMessage" id="errorMessage" class="oculto"></label>
                                </div>

                            </form>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                                id="btn-cancel-modal-form">Cancel</button>
                            <button type="submit" class="btn btn-success" id="btn-ingreso-tema">Ingresar</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- modal confirm ingreso -->
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
                            Ingresados? MOSTRAR DATOS QUE SE INGRESARON PREVIAMENTE</h3>
                    </div>
                    <div class="modal-footer">
                        <button id="btn-cancel-modal-confirm" type="button" class="btn btn-danger"
                            data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-warning" id="btn-confirm-ingreso-tema">Confirmar</button>
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
                        <button id="close-btn-modal-respuesta" type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
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
    <script src="../../js/user/user-actions.js"></script>
    <script src="../../js/user/newtopic.js"></script>
    <script src="../../js/user/modals-actions.js"></script>

</body>

</html>
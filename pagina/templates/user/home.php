<?php
include('../../php/session/validate-session.php');
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

<body>
    <header>
        <nav class="navbar navbar-expand-md bg-body-tertiary">
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
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>



            </div>
        </nav>

    </header>

    <main>
        <div class="main-container">
            <div class="accordion" id="accordionMain">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Ingenieria Informatica
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionMain">
                        <div class="accordion-body">
                            <!-- Materias -->

                            <div class="accordion" id="accordionMateria">
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#panelsStayOpen-collapseOne1" aria-expanded="false"
                                            aria-controls="panelsStayOpen-collapseOne">
                                            Programacion 1
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne1" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionMateria">
                                        <div class="accordion-body">
                                            <!-- Cursos  -->
                                            <div class="accordion" id="accordionCursos">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseOne1-1"
                                                            aria-expanded="false"
                                                            aria-controls="panelsStayOpen-collapseOne1-1">
                                                            Curso xxxx
                                                        </button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseOne1-1"
                                                        class="accordion-collapse collapse"
                                                        data-bs-parent="#accordionCursos">
                                                        <div class="accordion-body">
                                                            <!--  -->
                                                            <button>Ingresar tema</button>
                                                            <!--  -->


                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseOne1-2"
                                                            aria-expanded="false"
                                                            aria-controls="panelsStayOpen-collapseTwo">
                                                            Curso xxxx
                                                        </button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseOne1-2"
                                                        class="accordion-collapse collapse"
                                                        data-bs-parent="#accordionCursos">
                                                        <div class="accordion-body">
                                                            <!--  -->

                                                            <button>Ingresar tema</button>
                                                            <button>Ver Info</button>
                                                            <!--  -->

                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseOne1-3"
                                                            aria-expanded="false"
                                                            aria-controls="panelsStayOpen-collapseThree">
                                                            Curso xxxx
                                                        </button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseOne1-3"
                                                        class="accordion-collapse collapse"
                                                        data-bs-parent="#accordionCursos">
                                                        <div class="accordion-body">
                                                            <button>Ingresar Tema</button>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <!--  -->



                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            Fisica
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionMateria">
                                        <div class="accordion-body">
                                            <!--  -->

                                            <div class="accordion" id="accordionPanelsStayOpenExample">

                                                <div class="accordion-item">
                                                    <h2 class="accordion-header">
                                                        <button class="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#panelsStayOpen-collapseTwo1"
                                                            aria-expanded="false"
                                                            aria-controls="panelsStayOpen-collapseTwo">
                                                            Curso xxxxxx
                                                        </button>
                                                    </h2>
                                                    <div id="panelsStayOpen-collapseTwo1"
                                                        class="accordion-collapse collapse">
                                                        <div class="accordion-body">
                                                            <!--  -->

                                                            <button>Ingresar tema</button>


                                                            <!--  -->

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>



                                            <!--  -->

                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree"
                                            aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            Algebra
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                                        data-bs-parent="#accordionMateria">
                                        <div class="accordion-body">


                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!--  -->
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionMain">
                        <div class="accordion-body">


                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionMain">
                        <div class="accordion-body">



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


    <!-- js -->
    

</body>

</html>
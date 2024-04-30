<?php
session_start();

if (isset($_SESSION['idSesion'])) {
    header('Location: user/home.php');
    exit();
}
?>

<!doctype html>
<html lang="en">

<head>
    <title>Login</title>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />

    <!-- CSS -->
    <link rel="stylesheet" href="../css/style.css">

    <link rel="stylesheet" href="../css/style-login.css">
</head>

<body>
    <header>
        <nav class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" id="logo-ub" href="#"><img src="../img/logo-ub/logo-ub.jpg" alt="logo-ub"></a>
            </div>
        </nav>

    </header>
    <main>
        <div class="login-container">
            <h2>Login</h2>
            <form id="loginForm" class="login-form" method="post" action="../php/session/processLogin.php">

                <label for="errorMessage" id="errorMessage" class="oculto"></label>

                <input type="text" id="email" name="email" placeholder="Email o Nombre de Usuario" required>
                <input type="password" id="password" name="password" placeholder="Contraseña" required>
                <button type="submit" id="loginBtn" class="btn btn-success">Iniciar Sesión</button>
            </form>
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
    
    <!-- Script validacion de login -->
    <script src="../js/login.js"></script>

</body>

</html>
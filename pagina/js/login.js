$(document).ready(function () {

    $("#errorMessage").empty();
    $("#errorMessage").addClass("oculto");

    var loginForm = document.getElementById("loginForm");

    var loginBtn = document.getElementById("loginBtn");

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    loginBtn.disabled = true;

    loginForm.onkeyup = function () {

        if (email.value !== "" && password.value !== "") {
            loginBtn.disabled = false;

        } else {
            loginBtn.disabled = true;

        }
    };

    $('#loginBtn').click(function (event) {
        event.preventDefault();


        var datosLoginForm = $('#loginForm').serialize();

        var objAjax = $.ajax({
            type: "post",
            url: "../php/session/process-login.php",
            data: datosLoginForm,
            success: function (respuesta) {
                var data = JSON.parse(respuesta);
                if (data.success == true) {
                    // alert("ENTRAMOSSSS");
                    window.location.href = "../templates/user/home.php";
                } else {
                    $("#errorMessage").empty();
                    $("#errorMessage").text(data.message);
                    $("#errorMessage").removeClass("oculto");
                }

            }, error: function (error) {
                console.log(error);
            }


        });

    });

});
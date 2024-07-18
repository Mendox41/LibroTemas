$(document).ready(function () {

    // Funcion de modificar datos de usuario
    $("#btn-aceptar-modify-usuario").click(function () {

        var id_usuario = $("#id-usuario-modal-modify").val();
        var nombre_usuario = $("#nombre-usuario-modal-modify").val();

        // si uno de los campos esta vacio entra aca
        if (id_usuario == "" || nombre_usuario == "") {
            alert('Error: Se deben completar todos los campos')
            // $("#errorMessage-modal-modify-usuario").empty();
            // $("#errorMessage-modal-modify-usuario").text('Todos los campos deben ser completados');
            // $("#errorMessage-modal-modify-usuario").removeClass("invisible");

        } else {
            // si todos los campos estan completos entra aca

            $("#modal-form-modify-usuario").removeClass("d-block");
            $("#modal-container-confirm-modify-usuario").addClass("d-block");

        };


    });

    $("#btn-aceptar-modal-confirm-modify-usuario").click(function () {
        var id_usuario = $("#id-usuario-modal-modify").val();
        var nombre_usuario = $("#nombre-usuario-modal-modify").val();

        // si uno de los campos esta vacio entra aca
        if (id_usuario == "" || nombre_usuario == "") {
            alert('Error: Se deben completar todos los campos')
            // $("#errorMessage-modal-modify-usuario").empty();
            // $("#errorMessage-modal-modify-usuario").text('Todos los campos deben ser completados');
            // $("#errorMessage-modal-modify-usuario").removeClass("invisible");

        } else {

            // ajax que realiza el envio de datos al servidor
            $.ajax({
                type: "post",
                url: "../../php/user/modify-user-nombre.php",
                data: {
                    id_usuario: id_usuario,
                    usuario: nombre_usuario

                },
                success: function (respuesta) {
                    // alert(respuesta);
                    var data = JSON.parse(respuesta);


                    // oculto el modal del formy del de confirmar ingreso de un nuevo usuario
                    $("#modal-container-confirm-modify-usuario").removeClass("d-block");

                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data.message);

                    if (data.success == true) {
                        $("#modal-title-respuesta").addClass("text-success");

                        // update_tabla_filtro_usuarios();

                    } else {
                        $("#modal-title-respuesta").addClass("text-danger");

                    }

                    // hago visible el modal de respuesta
                    $("#modal-container-respuesta").addClass("d-block");



                }, error: function (error) {
                    console.log(error);
                }


            });

        }



    });


    // Funcion de modificar contra de usuario
    $("#btn-modif-contra-modal-ver-usuario").click(function () {

        var id_usuario = $("#ver-usuario-id-usuario").val();

        $("#contra-modal-modify").val("");
        $("#contra-confirm-modal-modify").val("");;

        $("#id-usuario-modal-modify-contra").val("");

        // si uno de los campos esta vacio entra aca
        if (id_usuario == "") {
            alert('Error: Se deben completar todos los campos')
            // $("#errorMessage-modal-modify-usuario").empty();
            // $("#errorMessage-modal-modify-usuario").text('Todos los campos deben ser completados');
            // $("#errorMessage-modal-modify-usuario").removeClass("invisible");

        } else {
            // si todos los campos estan completos entra aca
            $("#id-usuario-modal-modify-contra").val(id_usuario);
            $("#modal-form-ver-usuario").removeClass("d-block");
            $("#modal-form-modify-contra-usuario").addClass("d-block");

        };


    });


    $("#btn-aceptar-modify-contra-usuario").click(function () {

        var id_usuario = $("#id-usuario-modal-modify-contra").val();
        var contra = $("#contra-modal-modify").val();
        var confirm_contra = $("#contra-confirm-modal-modify").val();

        // si uno de los campos esta vacio entra aca
        if (id_usuario == "" || contra == "" || confirm_contra == "") {
            alert('Error: Se deben completar todos los campos');


        } else if (contra != confirm_contra) {
            alert('Error: No coinciden las contraseñas ingresadas');

        } else {
            // si todos los campos estan completos entra aca
            $("#modal-form-modify-contra-usuario").removeClass("d-block");
            $("#modal-container-confirm-modify-contra-usuario").addClass("d-block");

        };


    });

    // btn del modal de confirm modificar contra
    $("#btn-aceptar-modal-confirm-modify-contra-usuario").click(function () {

        var id_usuario = $("#id-usuario-modal-modify-contra").val();
        var contra = $("#contra-modal-modify").val();
        var confirm_contra = $("#contra-confirm-modal-modify").val();

        // si uno de los campos esta vacio entra aca
        if (id_usuario == "" || contra == "" || confirm_contra == "") {
            alert('Error: Se deben completar todos los campos');


        } else if (contra != confirm_contra) {
            alert('Error: No coinciden las contraseñas ingresadas');

        } else {
            $.ajax({
                type: "post",
                url: "../../php/user/modify-user-pass.php",
                data: {
                    id_usuario: id_usuario,
                    pass: contra

                },
                success: function (respuesta) {
                    // alert(respuesta);
                    var data = JSON.parse(respuesta);


                    // oculto el modal del formy del de confirmar ingreso de un nuevo usuario
                    $("#modal-container-confirm-modify-contra-usuario").removeClass("d-block");

                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data.message);

                    if (data.success == true) {
                        $("#modal-title-respuesta").addClass("text-success");

                        // update_tabla_filtro_usuarios();

                    } else {
                        $("#modal-title-respuesta").addClass("text-danger");

                    }

                    // hago visible el modal de respuesta
                    $("#modal-container-respuesta").addClass("d-block");



                }, error: function (error) {
                    console.log(error);
                }


            });
        };






    });


});
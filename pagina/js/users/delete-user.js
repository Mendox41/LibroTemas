$(document).ready(function () {


    // btn aceptar eliminacion de usuario del modal eliminar usuario
    $("#btn-aceptar-modal-confirm-delete-usuario").click(function () {
        var id_usuario = $("#ver-usuario-id-usuario").val();

        var objAjax = $.ajax({
            type: "post",
            url: "../../php/user/eliminate-user.php",
            data: {
                id_usuario: id_usuario,
            },
            success: function (respuesta) {
                var data = JSON.parse(respuesta);

                // oculto el modal del formy del de confirmar ingreso de un nuevo usuario
                $("#modal-form").removeClass("d-block");
                $("#modal-container-confirm-delete-usuario").removeClass("d-block");

                // agrego el mensaje de respuesta del servidor
                $("#modal-title-respuesta").empty();
                $("#modal-title-respuesta").text(data.message);
                if (data.success == true) {
                    $("#modal-title-respuesta").addClass("text-success");


                } else {
                    $("#modal-title-respuesta").addClass("text-danger");
                };

                // hago visible el modal de respuesta
                $("#modal-container-respuesta").addClass("d-block");



            }, error: function (jqXHR, textStatus, errorThrown) {
                console.error('Error en la solicitud:', textStatus, errorThrown);
                console.log('Estado de la respuesta:', jqXHR.status);
                console.log('Respuesta completa:', jqXHR.responseText);
                if (jqXHR.status === 0) {
                    alert('No se pudo conectar al servidor. Por favor, verifica tu conexión a internet y la URL del servidor.');
                } else {
                    alert('Error en la solicitud AJAX: ' + textStatus + ' - ' + errorThrown + '\nEstado: ' + jqXHR.status);
                }
            }


        });





    });

    // btn eliminar del modal de ver usuario
    $("#btn-eliminar-modal-ver-usuario").click(function () {
        $('#id-usuario-modal-confirm-delete').val("");

        var id_usuario = $("#ver-usuario-id-usuario").val();

        if (id_usuario == "") {
            alert("No se ingreso ningun id_usuario");
        } else {
            $('#id-usuario-modal-confirm-delete').val(id_usuario);

            // habilito modal de confirm eliminacion del usuario
            $("#modal-container-confirm-delete-usuario").addClass("d-block");

            // deshabilito modal de ver usuario
            $("#modal-form-ver-usuario").removeClass("d-block");

        };




    });


});
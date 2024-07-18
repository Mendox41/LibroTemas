$(document).ready(function () {


    $("#btn-aceptar-modal-confirm-act-desac-usuario").click(function () {

        var id_usuario = $("#id-usuario-modal-confirm-act-desac").val();
        var estado_usuario = $("#estado-usuario-modal-confirm-act-desac").val();
        

        if (id_usuario == "" || estado_usuario == "") {
            console.log("No se encuentra ingresado estado o id_usuario");
        } else if (estado_usuario == 0) {

            var objAjax = $.ajax({
                type: "post",
                url: "../../php/user/activate-user.php",
                data: {
                    id_usuario: id_usuario,
                },
                success: function (respuesta) {
                    var data = JSON.parse(respuesta);

                    // oculto el modal del formy del de confirmar ingreso de un nuevo tema
                    $("#modal-container-confirm-act-desac-usuario").removeClass("d-block");

                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data.message);
                    if (data.success == true) {
                        $("#modal-title-respuesta").addClass("text-success");

                        // actualizo datos de la tabla dinamicamente
                        // update_tabla_filtro_temas();


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


        } else {

            var objAjax = $.ajax({
                type: "post",
                url: "../../php/user/deactivate-user.php",
                data: {
                    id_usuario: id_usuario,
                },
                success: function (respuesta) {
                    var data = JSON.parse(respuesta);

                    // oculto el modal del formy del de confirmar ingreso de un nuevo tema
                    $("#modal-container-confirm-act-desac-usuario").removeClass("d-block");

                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data.message);
                    if (data.success == true) {
                        $("#modal-title-respuesta").addClass("text-success");

                        // actualizo datos de la tabla dinamicamente
                        // update_tabla_filtro_temas();


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



        };

    });

});
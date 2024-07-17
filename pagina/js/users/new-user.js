import { deshabilitar_contenedores, } from '../modals-actions/modals-abm-users.js';
import { get_profesores_for_select } from '../individual-data/get_profesores.js';

$(document).ready(function () {

    // inicializo funcion para agregar opciones de proferoes registrado en el select del modal de ingreso un nuevo usuario
    get_profesores_for_select();

    // ------------------------------------

    var check_box = $("#Admin-check");
    var select_profesores = $("#select-profesor-asociado");
    var val_isAdmin = 0;

    // Función para habilitar o deshabilitar el select de profesores al hacer clic en el checkbox y obtener valor si es admin o no
    function updateSelectState() {
        var isChecked = check_box.is(":checked");
        val_isAdmin = isChecked ? 1 : 0;
        select_profesores.prop("disabled", isChecked).val(0);
    }

    check_box.change(updateSelectState);
    updateSelectState();


    // -----------------------------------

    // btn ingreso nuevo usuario
    $("#btn-nuevo-usuario").click(function () {
        // reinicio campos de 0 en caso de que tenga datos ingresados previamente
        $("#usuario-modal-n-u").val("");
        $("#contra-modal-n-u").val("");
        $("#confirm-contra-modal-n-u").val("");
        $("#select-profesor-asociado").val(0);

        // $("#errorMessage").addClass("oculto");



        // manejo de clases para mostrar modal del form nuevo usuario
        $("#modal-form-nuevo-usuario").addClass("d-block");
        deshabilitar_contenedores();

        // Desmarcar el checkbox al cargar la página y habilitar el select
        check_box.prop("checked", false);
        select_profesores.prop("disabled", false);

    });

    $("#btn-ingreso-usuario").click(function () {

        var nombre_usuario = $("#usuario-modal-n-u").val();
        var contra = $("#contra-modal-n-u").val();
        var confirm_contra = $("#confirm-contra-modal-n-u").val();
        var profesor_select = $("#select-profesor-asociado").val();

        if (nombre_usuario == "" || contra == "" || confirm_contra == "" || (profesor_select == 0 && val_isAdmin == 0)) {
            alert("Error: Se deberan completar todos los campos")
        } else if (contra !== confirm_contra) {
            alert("Error: las contraseñas no coinciden")
        } else {
            $("#modal-form-nuevo-usuario").removeClass("d-block");
            $("#modal-container-confirm-ingreso-usuario").addClass("d-block");
        }

    });

    $("#btn-confirm-ingreso-usuario").click(function () {
        var nombre_usuario = $("#usuario-modal-n-u").val();
        var contra = $("#contra-modal-n-u").val();
        var confirm_contra = $("#confirm-contra-modal-n-u").val();
        var profesor_select = $("#select-profesor-asociado").val();

        if (nombre_usuario == "" || contra == "" || confirm_contra == "" || (profesor_select == 0 && val_isAdmin == 0)) {
            alert("Error: Se deberan completar todos los campos")
        } else if (contra !== confirm_contra) {
            alert("Error: las contraseñas no coinciden")
        } else {

            $.ajax({
                type: "post",
                url: "../../php/user/new-user.php",
                data: {
                    usuario: nombre_usuario,
                    pass: contra,
                    admin: val_isAdmin,
                    id_profesor: profesor_select
                },
                success: function (respuesta) {
                    var data = JSON.parse(respuesta);
                    // oculto el modal del form y del de confirmar ingreso de un nuevo tema
                    $("#modal-container-confirm-ingreso-usuario").removeClass("d-block");
                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data.message);

                    if (data.success == true) {
                        $("#modal-title-respuesta").addClass("text-success");
                        // update_tabla_filtro_temas();
                    } else {
                        $("#modal-title-respuesta").addClass("text-danger");

                    }

                    // hago visible el modal de respuesta
                    $("#modal-container-respuesta").addClass("d-block");
                }
            });

        }

    });




});
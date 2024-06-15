$(document).ready(function () {

    var check_box = $("#Admin-check");
    var select_profesores = $("#select-profesor-asociado");

    // funcion para habilitar o deshabilitar el select de profesores el momento de hacer click en el check box en
    // el modal ingreso nuevo usuario
    function updateSelectState() {
        var isDisabled = check_box.is(":checked");
        select_profesores.prop("disabled", isDisabled).val(0);
    }

    check_box.change(updateSelectState);
    updateSelectState();



    // btn ingreso nuevo usuario
    $("#btn-nuevo-usuario").click(function () {
        // $("#fecha-tema").val(0);
        // $("#titulo-tema").val("");
        // $("#descripcion-tema").val("");
        // $("#errorMessage").addClass("oculto");


        // completo los input con los datos que tenia
        // $("#id-curso").val(relacion.id_curcom);

        // se llenan los campos con valores seleccionados (Fx en modals-actions.js)
        //fill_form(relacion.id_curcom); // tomi falta que haga php

        // manejo de clases para mostrar modal del form nuevo usuario
        $("#modal-form-nuevo-usuario").addClass("d-block");
        $("#header").addClass("opacity-25");
        $("#main-container").addClass("opacity-25");
        $("#body").addClass("fondo-desactivado");

        // Desmarcar el checkbox al cargar la página y habilitar el select
        check_box.prop("checked", false);
        select_profesores.prop("disabled", false);



    });




    // Funciones para ventana de form de nuevo usuario

    $("#btn-close-modal-form-nuevo-usuario").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");
        $("#modal-form-nuevo-usuario").removeClass("d-block");


        // $("#modal-container-confirm-ingreso-usuario").removeClass("d-block");

    });

    $("#btn-cancel-modal-form-nuevo-usuario").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");
        $("#modal-form-nuevo-usuario").removeClass("d-block");


        // $("#modal-container-confirm-ingreso-usuario").removeClass("d-block");

    });



    // Funciones para ventana de confirm ingreso nuevo usuario (readaptar codigo)
    $("#btn-close-modal-confirm").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");

        $("#modal-container-confirm-ingreso-tema").removeClass("d-block");

    });

    // (readaptar codigo)
    $("#btn-cancel-modal-confirm").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");

        $("#modal-container-confirm-ingreso-tema").removeClass("d-block");

    });

    // Funciones para ventana de respuesta (readaptar codigo)
    $("#close-btn-modal-respuesta").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");

        $("#modal-container-respuesta").removeClass("d-block");

    });

    // (readaptar codigo)
    $("#btn-acept-modal-respuesta").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");

        $("#modal-container-respuesta").removeClass("d-block");

    });

    // funciones para la ventana de ver datos de un usuario

    // btn x del modal
    $("#btn-close-modal-ver-usuario-usuario").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");

        $("#modal-form-ver-usuario").removeClass("d-block");

    });

    // btn volver del modal
    $("#btn-volver-modal-ver-usuario").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");

        $("#modal-form-ver-usuario").removeClass("d-block");

    });


    // funciones para modal de confirmacion activacion/desactivacion de usuario registrado

    // btn cancelar del modal
    $("#btn-cancel-modal-confirm-desactivar-activar-usuario").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");

        $("#modal-container-confirm-desactivar-activar-usuario").removeClass("d-block");

    });

    // btn x del modal
    $("#close-btn-modal-confirm-desactivar-activar-usuario").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");

        $("#modal-container-confirm-desactivar-activar-usuario").removeClass("d-block");

    });

    

    // funciones para modal de modificacion de datos de un usuario 

    // btn cancelar del modal
    $("#btn-cancel-modal-form-modf-datos-usuario").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");

        $("#modal-form-modif-datos-usuario").removeClass("d-block");

    });

    // btn x del modal
    $("#btn-close-modal-form-modif-datos-usuario").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");

        $("#modal-form-modif-datos-usuario").removeClass("d-block");

    });


});
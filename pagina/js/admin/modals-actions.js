$(document).ready(function () {

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

    // Funciones para ventana de confirm ingreso nuevo tema
    $("#btn-close-modal-confirm").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("prueba-back");

        $("#modal-container-confirm-ingreso-tema").removeClass("d-block");

    });

    $("#btn-cancel-modal-confirm").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("prueba-back");

        $("#modal-container-confirm-ingreso-tema").removeClass("d-block");

    });

    // Funciones para ventana de respuesta
    $("#close-btn-modal-respuesta").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("prueba-back");

        $("#modal-container-respuesta").removeClass("d-block");

    });

    $("#btn-acept-modal-respuesta").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("prueba-back");

        $("#modal-container-respuesta").removeClass("d-block");

    });




});
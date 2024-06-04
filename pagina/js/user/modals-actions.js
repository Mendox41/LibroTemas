$(document).ready(function () {

    // Funciones para ventana de form de nuevo tema

    $("#btn-close-modal-form").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("prueba-back");

        $("#modal-form").removeClass("d-block");

    });

    $("#btn-cancel-modal-form").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("prueba-back");

        $("#modal-form").removeClass("d-block");

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
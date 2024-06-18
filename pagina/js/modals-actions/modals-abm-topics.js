$(document).ready(function () {
    
    $("#btn-close-modal-filtro").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        // $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");

        $("#modal-form-buscar-tema").removeClass("d-block");

    });


   

        
    $("#btn-cancel-modal-filtro-tema").click(function () {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        // $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").removeClass("fondo-desactivado");

        $("#modal-form-buscar-tema").removeClass("d-block");

    });


        
    $("#btn-filtro-tema").click(function () {
        $("#modal-form-buscar-tema").addClass("d-block");

        $("#header").addClass("opacity-25");
        $("#main-container").addClass("opacity-25");
        // $("#modal-container-ingreso-nuevo-tema").removeClass("opacity-0");
        $("#body").addClass("fondo-desactivado");

        $("#nombre-carrera-modal-filtro").val("");
        $("#anio-carrera-modal-filtro").val("");
        $("#nombre-materia-modal-filtro").val("");
        $("#comision-modal-filtro").val("");
        $("#turno-modal-filtro").val("");
        $("#nombre-usuario-modal-filtro").val("");
        $("#nombre-profesor-modal-filtro").val("");
        $("#apellido-profesor-modal-filtro").val("");
        $("#fecha-tema-modal-filtro").val(0);
        $("#titulo-tema-modal-filtro").val("");
        $("#descripcion-tema-modal-filtro").val("");


    });


});
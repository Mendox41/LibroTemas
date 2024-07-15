$(document).ready(function () {

    // funciones del modal de mensaje de respuesta

    // btn x
    $("#close-btn-modal-respuesta").click(function () {
        $("#modal-container-respuesta").removeClass("d-block");
        restablecer_contenedores();

    });

    // btn aceptar
    $("#btn-acept-modal-respuesta").click(function () {
        $("#modal-container-respuesta").removeClass("d-block");
        restablecer_contenedores();

    });

});

// FUNCION que restablece los contenedores del body, header y fondo al cerrar un modal
export function restablecer_contenedores() {
    $("#header").removeClass("opacity-25");
    $("#main-container").removeClass("opacity-25");
    $("#body").removeClass("fondo-desactivado");
}

// FUNCION que oculta los contenedores del body, header y fondo
export function deshabilitar_contenedores() {
    $("#header").addClass("opacity-25");
    $("#main-container").addClass("opacity-25");
    $("#body").addClass("fondo-desactivado");
}





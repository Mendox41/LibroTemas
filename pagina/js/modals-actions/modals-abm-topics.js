$(document).ready(function () {

    // Inicializo funciones
    disabled_input_modal_modify_topic();


    //  limpiar campos y mostrar modal de filtro de temas
    $("#btn-filtro-tema").click(function () {
        $("#modal-form-buscar-tema").addClass("d-block");

        $("#header").addClass("opacity-25");
        $("#main-container").addClass("opacity-25");
        $("#body").addClass("fondo-desactivado");

        // vacio los valores del modal/form  
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

    // ----------------------------------------------------------------

    // Funciones del modal para filtrar busqueda de temas
    // Btn x cerrar modal filtro 
    $("#btn-close-modal-filtro").click(function () {
        restablecer_contenedores();
        $("#modal-form-buscar-tema").removeClass("d-block");
    });

    // btn cancelar modal filtro 
    $("#btn-cancel-modal-filtro-tema").click(function () {
        restablecer_contenedores();
        $("#modal-form-buscar-tema").removeClass("d-block");
    });

    // ----------------------------------------------------------------

    // Funciones del modal para ingresar un nuevo tema

    // BTN x del modal
    $("#btn-close-modal-nuevo-tema").click(function () {
        restablecer_contenedores();
        $("#modal-form-ingreso-nuevo-tema").removeClass("d-block");
    });

    // BTN cancelar del modal
    $("#btn-cancel-ingreso-nuevo-tema").click(function () {
        restablecer_contenedores();
        $("#modal-form-ingreso-nuevo-tema").removeClass("d-block");
    });

    // ----------------------------------------------------------------

    // funciones del modal de mensaje de respuesta

    // btn x
    $("#close-btn-modal-respuesta").click(function () {
        $("#modal-container-respuesta").removeClass("d-block");
    });

    // btn aceptar
    $("#btn-acept-modal-respuesta").click(function () {
        $("#modal-container-respuesta").removeClass("d-block");
    });

    // ----------------------------------------------------------------

    // funcion del modal de confirmar ingreso de un nuevo tema 

    // btn x
    $("#btn-close-modal-confirm").click(function () {
        $("#modal-container-confirm-ingreso-tema").removeClass("d-block");
        $("#modal-form-ingreso-nuevo-tema").addClass("d-block");

    });

    // btn cancelar
    $("#btn-cancel-modal-confirm").click(function () {
        $("#modal-container-confirm-ingreso-tema").removeClass("d-block");
        $("#modal-form-ingreso-nuevo-tema").addClass("d-block");

    });

    // Funcion del modal de ver tema

    // btn x
    $("#btn-close-modal-ver-tema").click(function () {
        $("#modal-form-ver-tema").removeClass("d-block");
        restablecer_contenedores();

    });

    $("#btn-volver-modal-ver-tema").click(function () {
        $("#modal-form-ver-tema").removeClass("d-block");
        restablecer_contenedores();

    });




    // ----------------------------------------------------------------

    // FUNCION que restablece los contenedores del body, header y fondo al cerrar un modal
    function restablecer_contenedores() {
        $("#header").removeClass("opacity-25");
        $("#main-container").removeClass("opacity-25");
        $("#body").removeClass("fondo-desactivado");
    }

    
});

export function restablecer_valores_modal_ver_tema() {
    document.getElementById('ver-tema-td-carrera').innerHTML = "";
    document.getElementById('ver-tema-td-anio-carrera').innerHTML = "";
    document.getElementById('ver-tema-td-materia').innerHTML = "";
    document.getElementById('ver-tema-td-turno').innerHTML = "";
    document.getElementById('ver-tema-td-comision').innerHTML = "";
    document.getElementById('ver-tema-td-usuario-profesor').innerHTML = "";
    document.getElementById('ver-tema-td-nombre-profesor').innerHTML = "";
    document.getElementById('ver-tema-td-fecha-tema').innerHTML = "";
    document.getElementById('ver-tema-td-fecha-registrado').innerHTML = "";
    document.getElementById('ver-tema-td-fecha-modificacion').innerHTML = "";
    document.getElementById('ver-tema-td-titulo-tema').innerHTML = "";
    document.getElementById('ver-tema-td-descripcion-tema').innerHTML = "";

}

function disabled_input_modal_modify_topic(){
    $('#id-libro-tema-modal-modify').prop('disabled', true);
    $('#tema-nombre-carrera-modal-modify').prop('disabled', true);
    $('#tema-anio-carrera-modal-modify').prop('disabled', true);
    $('#tema-nombre-materia-modal-modify').prop('disabled', true);
    $('#tema-turno-modal-modify').prop('disabled', true);
    $('#tema-comision-modal-modify').prop('disabled', true);
}
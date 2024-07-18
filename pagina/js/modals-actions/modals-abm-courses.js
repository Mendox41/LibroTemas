$(document).ready(function () {

    // funciones del modal de mensaje de respuesta





    // mostrar modal de filtro de cursos
    $("#btn-filtro-curso").click(function () {
        $("#modal-form-buscar-curso").addClass("d-block");

        deshabilitar_contenedores();
    });

    // ----------------------------------------------------------------

    // Funciones del modal para filtrar busqueda de cursos
    // Btn x cerrar modal filtro 
    $("#btn-close-modal-filtro").click(function () {
        restablecer_contenedores();
        $("#modal-form-buscar-curso").removeClass("d-block");
    });

    // btn cancelar modal filtro 
    $("#btn-cancel-modal-filtro-curso").click(function () {
        restablecer_contenedores();
        $("#modal-form-buscar-curso").removeClass("d-block");
    });

    // btn retablecer campos del modal filtro cursos
    $("#btn-restablecer-datos-modal-filtro").click(function () {
        retablecer_inputs_modal_filtro_cursos();
    });


    // ----------------------------------------------------------------

    // Funciones del modal para ingresar un nuevo curso

    // BTN x del modal
    $("#btn-close-modal-nuevo-curso").click(function () {
        restablecer_contenedores();
        $("#modal-form-ingreso-nuevo-curso").removeClass("d-block");
    });

    // BTN cancelar del modal
    $("#btn-cancel-ingreso-nuevo-curso").click(function () {
        restablecer_contenedores();
        $("#modal-form-ingreso-nuevo-curso").removeClass("d-block");
    });

    // ----------------------------------------------------------------

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

    // funciones del modal de mensaje de respuesta sedundario

    // btn x
    $("#close-btn-modal-respuesta-secundario").click(function () {
        $("#modal-container-respuesta-secundario").removeClass("d-block");
        $("#modal-form-ingreso-nuevo-curso").addClass("d-block");


    });

    // btn aceptar
    $("#btn-acept-modal-respuesta-secundario").click(function () {
        $("#modal-container-respuesta-secundario").removeClass("d-block");
        $("#modal-form-ingreso-nuevo-curso").addClass("d-block");


    });

    // ----------------------------------------------------------------

    // funcion del modal de confirmar ingreso de un nuevo curso 

    // btn x
    $("#btn-close-modal-confirm").click(function () {
        $("#modal-container-confirm-ingreso-curso").removeClass("d-block");
        $("#modal-form-ingreso-nuevo-curso").addClass("d-block");


    });

    // btn cancelar
    $("#btn-cancel-modal-confirm").click(function () {
        $("#modal-form-ingreso-nuevo-curso").addClass("d-block");
        $("#modal-container-confirm-ingreso-curso").removeClass("d-block");


    });

    // Funcion del modal de ver curso

    // btn x
    $("#btn-close-modal-ver-curso").click(function () {
        $("#modal-form-ver-curso").removeClass("d-block");
        restablecer_contenedores();

    });

    $("#btn-volver-modal-ver-curso").click(function () {
        $("#modal-form-ver-curso").removeClass("d-block");
        restablecer_contenedores();

    });

    // Funciones del modal modify curso

    // btn x
    $("#btn-close-modal-modify-curso").click(function () {
        $("#modal-form-modify-curso").removeClass("d-block");
        restablecer_contenedores();
    });

    // btn cancelar
    $("#btn-cancel-modify-curso").click(function () {
        $("#modal-form-modify-curso").removeClass("d-block");
        restablecer_contenedores();

    });

    // Funciones del modal confirm modify curso

    // btn x
    $("#close-btn-modal-confirm-modify-curso").click(function () {
        $("#modal-form-modify-curso").addClass("d-block");
        $("#modal-container-confirm-modify-curso").removeClass("d-block");

    });

    // btn cancelar
    $("#btn-cancel-modal-confirm-modify-curso").click(function () {
        $("#modal-form-modify-curso").addClass("d-block");
        $("#modal-container-confirm-modify-curso").removeClass("d-block");


    });

    // ----------------------------------------


    // Funciones del modal confirm delete curso

    // btn x
    $("#close-btn-modal-confirm-delete-curso").click(function () {
        $("#modal-container-confirm-delete-curso").removeClass("d-block");
        restablecer_contenedores();
    });

    // btn cancelar
    $("#btn-cancel-modal-confirm-delete-curso").click(function () {
        $("#modal-container-confirm-delete-curso").removeClass("d-block");
        restablecer_contenedores();
    });



    // ----------------------------------------------------------------

    // Funciones del modal confirm act/desact curso

    // btn x
    $("#close-btn-modal-confirm-act-desac-curso").click(function () {
        $("modal-container-confirm-act-desac-curso").removeClass("d-block");
        restablecer_contenedores();
    });

    // btn cancelar
    $("#btn-cancel-modal-confirm-act-desac-curso").click(function () {
        $("#modal-container-confirm-act-desac-curso").removeClass("d-block");
        restablecer_contenedores();
    });



    // ----------------------------------------------------------------




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

// ----------------------------------------------------------------
// codigo para readaptar a curso
// Funcion para restablecer valores del modal ver datos de curso seleccionado
export function restablecer_valores_modal_ver_curso() {
    document.getElementById('ver-curso-td-carrera').innerHTML = "";
    document.getElementById('ver-curso-td-anio-carrera').innerHTML = "";
    document.getElementById('ver-curso-td-materia').innerHTML = "";
    document.getElementById('ver-curso-td-turno').innerHTML = "";
    document.getElementById('ver-curso-td-comision').innerHTML = "";

    document.getElementById('ver-curso-td-ciclo').innerHTML = '';
    document.getElementById('ver-curso-td-semestre').innerHTML = '';


   

}

// Funcion para restablecer valores del modal modificar datos de curso seleccionado
export function restablecer_valores_modal_modify_curso() {

    // vacio campos

    $('#modify-curso-ciclo').val("");

    $('#modify-curso-nombre-carrera').val(0);
    $('#modify-curso-anio-carrera').val(0);
    $('#modify-curso-nombre-materia').val(0);
    $('#modify-curso-semestre').val(0);
    $('#modify-curso-turno').val(0);
    $('#modify-curso-comision').val(0);
    $('#modify-curso-profesor').val(0);



    // restablesco estilos si fueron modificados

    // oculto el mensaje de error si esta visivle
    $("#errorMessage-modal-modify-curso").addClass("invisible");


}

// Funcion para deshabilitar y ocultar inputs del modal modify curso
function disabled_input_modal_modify_course() {

    $('#id-libro-curso-modal-modify').prop('disabled', true);
    $('#id-libro-curso-modal-modify').prop('hidden', true);

    $('#curso-nombre-carrera-modal-modify').prop('disabled', true);
    $('#curso-anio-carrera-modal-modify').prop('disabled', true);
    $('#curso-nombre-materia-modal-modify').prop('disabled', true);
    $('#curso-turno-modal-modify').prop('disabled', true);
    $('#curso-comision-modal-modify').prop('disabled', true);
}

// Funcion para deshabilitar y ocultar inputs del modal confirm delete curso
function disabled_input_modal_confirm_delete_course() {
    $('#id-libro-curso-modal-confirm-delete').prop('disabled', true);
    $('#id-libro-curso-modal-confirm-delete').prop('hidden', true);

};

export function retablecer_inputs_modal_filtro_cursos() {
    // vacio los valores del modal/form  
    $("#nombre-carrera-modal-filtro").val("");
    $("#anio-carrera-modal-filtro").val("");
    $("#nombre-materia-modal-filtro").val("");
    $("#comision-modal-filtro").val("");
    $("#turno-modal-filtro").val("");

    $("#nombre-usuario-modal-filtro").val("");
    $("#nombre-profesor-modal-filtro").val("");
    $("#apellido-profesor-modal-filtro").val("");

    $("#ciclo-lectivo-modal-filtro").val("");
    $("#semestre-modal-filtro").val("");

    $("#fecha-curso-desde-modal-filtro").val(0);
    $("#fecha-curso-hasta-modal-filtro").val(0);

    $("#titulo-curso-modal-filtro").val("");
    $("#descripcion-curso-modal-filtro").val("");

};


export function update_inputs_modal_filtro_cursos() {
    var carrera_f_i = $("#nombre-carrera-filtro").val();
    var anio_carrera_f_i = $("#anio-carrera-filtro").val();
    var nombre_materia_f_i = $("#nombre-materia-filtro").val();
    var comision_f_i = $("#comision-filtro").val();
    var turno_f_i = $("#turno-filtro").val();
    var usuario_f_i = $("#nombre-usuario-filtro").val();
    var nombre_profesor_f_i = $("#nombre-profesor-filtro").val();
    var apellido_profesor_f_i = $("#apellido-profesor-filtro").val();

    var semestre_f_i = $("#semestre-filtro").val();
    var ciclo_lectivo_f_i = $("#ciclo-lectivo-filtro").val();

    var fecha_desde_f_i = $("#fecha-curso-desde-filtro").val();
    var fecha_hasta_f_i = $("#fecha-curso-hasta-filtro").val();

    var titulo_curso_f_i = $("#titulo-curso-filtro").val();
    var descripcion_curso_f_i = $("#descripcion-curso-filtro").val();


    //   actualizo los valores del modal filtro con los ingresados en el filtro inicial
    $("#nombre-carrera-modal-filtro").val(carrera_f_i);
    $("#anio-carrera-modal-filtro").val(anio_carrera_f_i);
    $("#nombre-materia-modal-filtro").val(nombre_materia_f_i);
    $("#comision-modal-filtro").val(comision_f_i);
    $("#turno-modal-filtro").val(turno_f_i);

    $("#nombre-usuario-modal-filtro").val(usuario_f_i);
    $("#nombre-profesor-modal-filtro").val(nombre_profesor_f_i);
    $("#apellido-profesor-modal-filtro").val(apellido_profesor_f_i);

    $("#ciclo-lectivo-modal-filtro").val(semestre_f_i);
    $("#semestre-modal-filtro").val(ciclo_lectivo_f_i);

    $("#fecha-curso-desde-modal-filtro").val(fecha_desde_f_i);
    $("#fecha-curso-hasta-modal-filtro").val(fecha_hasta_f_i);

    $("#titulo-curso-modal-filtro").val(titulo_curso_f_i);
    $("#descripcion-curso-modal-filtro").val(descripcion_curso_f_i);
}





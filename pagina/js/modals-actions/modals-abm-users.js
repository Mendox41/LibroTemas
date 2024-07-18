$(document).ready(function () {

    // Funciones para ventana de form de modal filtro

    $("#btn-close-modal-filtro").click(function () {
        restablecer_contenedores();
        $("#modal-form-buscar-usuario").removeClass("d-block");

    });

    // Funciones para ventana de form de nuevo usuario

    $("#btn-close-modal-form-nuevo-usuario").click(function () {
        restablecer_contenedores();
        $("#modal-form-nuevo-usuario").removeClass("d-block");


        // $("#modal-container-confirm-ingreso-usuario").removeClass("d-block");

    });

    $("#btn-cancel-modal-form-nuevo-usuario").click(function () {
        restablecer_contenedores();
        $("#modal-form-nuevo-usuario").removeClass("d-block");


        // $("#modal-container-confirm-ingreso-usuario").removeClass("d-block");

    });



    // Funciones para ventana de confirm ingreso nuevo usuario (readaptar codigo)
    $("#btn-close-modal-confirm").click(function () {
        restablecer_contenedores();
        $("#modal-container-confirm-ingreso-usuario").removeClass("d-block");

    });

    // (readaptar codigo)

    $("#btn-cancel-modal-confirm").click(function () {
        restablecer_contenedores();
        $("#modal-container-confirm-ingreso-usuario").removeClass("d-block");

    });

    // Funciones para ventana de respuesta (readaptar codigo)
    $("#close-btn-modal-respuesta").click(function () {
        restablecer_contenedores();
        $("#modal-container-respuesta").removeClass("d-block");

    });

    // (readaptar codigo)
    $("#btn-acept-modal-respuesta").click(function () {
        restablecer_contenedores();
        $("#modal-container-respuesta").removeClass("d-block");

    });

    // funciones para la ventana de ver datos de un usuario

    // btn x del modal
    $("#btn-close-modal-ver-usuario").click(function () {
        restablecer_contenedores();
        $("#modal-form-ver-usuario").removeClass("d-block");

    });

    // btn volver del modal
    $("#btn-volver-modal-ver-usuario").click(function () {
        restablecer_contenedores();

        $("#modal-form-ver-usuario").removeClass("d-block");

    });


    // funciones para modal de confirmacion activacion/desactivacion de usuario registrado

    // btn cancelar del modal
    $("#btn-cancel-modal-confirm-desactivar-activar-usuario").click(function () {
        restablecer_contenedores();
        $("#modal-container-confirm-desactivar-activar-usuario").removeClass("d-block");

    });

    // btn x del modal
    $("#close-btn-modal-confirm-desactivar-activar-usuario").click(function () {
        restablecer_contenedores();
        $("#modal-container-confirm-desactivar-activar-usuario").removeClass("d-block");

    });



    // funciones para modal de modificacion de datos de un usuario 

    // btn cancelar del modal
    $("#btn-cancel-modify-usuario").click(function () {
        restablecer_contenedores();
        $("#modal-form-modify-usuario").removeClass("d-block");

    });

    // btn x del modal
    $("#btn-close-modal-modify-usuario").click(function () {
        restablecer_contenedores();
        $("#modal-form-modify-usuario").removeClass("d-block");

    });

    // funciones para modal de confirm modificacion de datos de un usuario 

    // btn cancelar del modal
    $("#btn-cancel-modal-confirm-modify-usuario").click(function () {
        restablecer_contenedores();
        $("#modal-container-confirm-modify-usuario").removeClass("d-block");

    });

    // btn x del modal
    $("#close-btn-modal-confirm-modify-usuario").click(function () {
        restablecer_contenedores();
        $("#modal-container-confirm-modify-usuario").removeClass("d-block");

    });


    // --------------------------------------------

    // Funciones del modal confirm act/desact usuario

    // btn x
    $("#close-btn-modal-confirm-act-desac-usuario").click(function () {
        $("#modal-container-confirm-act-desac-usuario").removeClass("d-block");
        restablecer_contenedores();
    });

    // btn cancelar
    $("#btn-cancel-modal-confirm-act-desac-usuario").click(function () {
        $("#modal-container-confirm-act-desac-usuario").removeClass("d-block");
        restablecer_contenedores();
    });

        // --------------------------------------------

    // Funciones del modal confirm act/desact usuario

    // btn x
    $("#close-btn-modal-confirm-delete-usuario").click(function () {
        $("#modal-container-confirm-delete-usuario").removeClass("d-block");
        restablecer_contenedores();
    });

    // btn cancelar
    $("#btn-cancel-modal-confirm-delete-usuario").click(function () {
        $("#modal-container-confirm-delete-usuario").removeClass("d-block");
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

// Funcion para restablecer valores del modal ver datos de usuario seleccionado
export function restablecer_valores_modal_ver_usuario() {
    document.getElementById('ver-usuario-td-usuario-profesor').innerHTML = '';
    document.getElementById('ver-usuario-td-legajo').innerHTML = '';
    document.getElementById('ver-usuario-td-nombre-profesor').innerHTML = '';
    document.getElementById('ver-usuario-td-admin').innerHTML = '';
    document.getElementById('ver-usuario-td-estado').innerHTML = '';


}

// Funcion para restablecer valores del modal modificar datos de usuario seleccionado
export function restablecer_valores_modal_modify_usuario() {

    // vacio campos
    $('#nombre-usuario-modal-modify').val("");

    // oculto el mensaje de error si esta visivle
    $("#errorMessage-modal-modify-usuario").addClass("invisible");




}

// Funcion para deshabilitar y ocultar inputs del modal modify usuario
function disabled_input_modal_modify_topic() {

    $('#id-libro-usuario-modal-modify').prop('disabled', true);
    $('#id-libro-usuario-modal-modify').prop('hidden', true);

    $('#usuario-nombre-carrera-modal-modify').prop('disabled', true);
    $('#usuario-anio-carrera-modal-modify').prop('disabled', true);
    $('#usuario-nombre-materia-modal-modify').prop('disabled', true);
    $('#usuario-turno-modal-modify').prop('disabled', true);
    $('#usuario-comision-modal-modify').prop('disabled', true);
}

// Funcion para deshabilitar y ocultar inputs del modal confirm delete usuario
function disabled_input_modal_confirm_delete_topic() {
    $('#id-libro-usuario-modal-confirm-delete').prop('disabled', true);
    $('#id-libro-usuario-modal-confirm-delete').prop('hidden', true);

};

export function retablecer_inputs_modal_filtro_usuarios() {
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

    $("#fecha-usuario-desde-modal-filtro").val(0);
    $("#fecha-usuario-hasta-modal-filtro").val(0);

    $("#titulo-usuario-modal-filtro").val("");
    $("#descripcion-usuario-modal-filtro").val("");

};


export function update_inputs_modal_filtro_usuarios() {
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

    var fecha_desde_f_i = $("#fecha-usuario-desde-filtro").val();
    var fecha_hasta_f_i = $("#fecha-usuario-hasta-filtro").val();

    var titulo_usuario_f_i = $("#titulo-usuario-filtro").val();
    var descripcion_usuario_f_i = $("#descripcion-usuario-filtro").val();


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

    $("#fecha-usuario-desde-modal-filtro").val(fecha_desde_f_i);
    $("#fecha-usuario-hasta-modal-filtro").val(fecha_hasta_f_i);

    $("#titulo-usuario-modal-filtro").val(titulo_usuario_f_i);
    $("#descripcion-usuario-modal-filtro").val(descripcion_usuario_f_i);
}
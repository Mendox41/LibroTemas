
$(document).ready(function () {

    // Inicializo funciones
    disabled_input_modal_modify_topic();
    disabled_input_modal_confirm_delete_topic();



    // mostrar modal de filtro de temas
    $("#btn-filtro-tema").click(function () {
        $("#modal-form-buscar-tema").addClass("d-block");

        deshabilitar_contenedores();
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

    // btn retablecer campos del modal filtro temas
    $("#btn-restablecer-datos-modal-filtro").click(function () {
        retablecer_inputs_modal_filtro_temas();
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
        $("#modal-form-ingreso-nuevo-tema").addClass("d-block");


    });

    // btn aceptar
    $("#btn-acept-modal-respuesta-secundario").click(function () {
        $("#modal-container-respuesta-secundario").removeClass("d-block");
        $("#modal-form-ingreso-nuevo-tema").addClass("d-block");


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
        $("#modal-form-ingreso-nuevo-tema").addClass("d-block");
        $("#modal-container-confirm-ingreso-tema").removeClass("d-block");


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

    // Funciones del modal modify tema

    // btn x
    $("#btn-close-modal-modify-tema").click(function () {
        $("#modal-form-modify-tema").removeClass("d-block");
        restablecer_contenedores();
    });

    // btn cancelar
    $("#btn-cancel-modify-tema").click(function () {
        $("#modal-form-modify-tema").removeClass("d-block");
        restablecer_contenedores();

    });


    // Funciones del modal confirm delete tema

    // btn x
    $("#close-btn-modal-confirm-delete-tema").click(function () {
        $("#modal-container-confirm-delete-tema").removeClass("d-block");
        restablecer_contenedores();
    });

    // btn cancelar
    $("#btn-cancel-modal-confirm-delete-tema").click(function () {
        $("#modal-container-confirm-delete-tema").removeClass("d-block");
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

// Funcion para restablecer valores del modal ver datos de tema seleccionado
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

// Funcion para restablecer valores del modal modificar datos de tema seleccionado
export function restablecer_valores_modal_modify_tema() {

    // vacio campos
    $('#tema-nombre-carrera-modal-modify').val("");
    $('#tema-anio-carrera-modal-modify').val("");
    $('#tema-nombre-materia-modal-modify').val("");
    $('#tema-turno-modal-modify').val("");
    $('#tema-comision-modal-modify').val("");

    $('#fecha-tema-modal-modify').val(0);
    $('#titulo-tema-modal-modify').val("");
    $('#descripcion-tema-modal-modify').val("");

    // restablesco estilos si fueron modificados
    $("#fecha-tema-modal-modify").removeClass('bg-danger-subtle');
    $("#fecha-tema-modal-modify").removeClass("text-danger-emphasis");
    $("#fecha-tema-modal-modify").removeClass("border-danger");

    // oculto el mensaje de error si esta visivle
    $("#errorMessage-modal-modify-tema").addClass("invisible");


}

// Funcion para deshabilitar y ocultar inputs del modal modify tema
function disabled_input_modal_modify_topic() {

    $('#id-libro-tema-modal-modify').prop('disabled', true);
    $('#id-libro-tema-modal-modify').prop('hidden', true);

    $('#tema-nombre-carrera-modal-modify').prop('disabled', true);
    $('#tema-anio-carrera-modal-modify').prop('disabled', true);
    $('#tema-nombre-materia-modal-modify').prop('disabled', true);
    $('#tema-turno-modal-modify').prop('disabled', true);
    $('#tema-comision-modal-modify').prop('disabled', true);
}

// Funcion para deshabilitar y ocultar inputs del modal confirm delete tema
function disabled_input_modal_confirm_delete_topic() {
    $('#id-libro-tema-modal-confirm-delete').prop('disabled', true);
    $('#id-libro-tema-modal-confirm-delete').prop('hidden', true);

};

export function retablecer_inputs_modal_filtro_temas() {
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

    $("#fecha-tema-desde-modal-filtro").val(0);
    $("#fecha-tema-hasta-modal-filtro").val(0);

    $("#titulo-tema-modal-filtro").val("");
    $("#descripcion-tema-modal-filtro").val("");

};


export function update_inputs_modal_filtro_temas() {
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

    var fecha_desde_f_i = $("#fecha-tema-desde-filtro").val();
    var fecha_hasta_f_i = $("#fecha-tema-hasta-filtro").val();

    var titulo_tema_f_i = $("#titulo-tema-filtro").val();
    var descripcion_tema_f_i = $("#descripcion-tema-filtro").val();


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

    $("#fecha-tema-desde-modal-filtro").val(fecha_desde_f_i);
    $("#fecha-tema-hasta-modal-filtro").val(fecha_hasta_f_i);

    $("#titulo-tema-modal-filtro").val(titulo_tema_f_i);
    $("#descripcion-tema-modal-filtro").val(descripcion_tema_f_i);
}
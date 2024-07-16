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

    document.getElementById('ver-tema-td-ciclo').innerHTML = '';
    document.getElementById('ver-tema-td-semestre').innerHTML = '';


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
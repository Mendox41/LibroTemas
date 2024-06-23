import * as fn_get_data_form from '../individual-data/get-data-form-nuevo-tema.js';

$(document).ready(function () {


    fn_get_data_form.crear_primer_opcion('Carrera', 'nuevo-tema-nombre-carrera');
    fn_get_data_form.crear_primer_opcion('Año de Carrera', 'nuevo-tema-anio-carrera');
    fn_get_data_form.crear_primer_opcion('Materia', 'nuevo-tema-nombre-materia');
    fn_get_data_form.crear_primer_opcion('Comision', 'nuevo-tema-comision');
    fn_get_data_form.crear_primer_opcion('Turno', 'nuevo-tema-turno');

    $("#btn-nuevo-tema").click(function () {

        vaciar_campos_form_nuevo_tema();

        // $("#nuevo-tema-nombre-carrera").empty();


        $("#modal-form-ingreso-nuevo-tema").addClass("d-block");
        $("#header").addClass("opacity-25");
        $("#main-container").addClass("opacity-25");
        $("#body").addClass("fondo-desactivado");


        // Inserto datos de carreras en el select del modal de nuevo tema
        fn_get_data_form.get_carreras_select();


    });

    $("#btn-ingreso-nuevo-tema").click(function () {
    })


    // ----------------------------------------------------------------

    let select_nombre_carrera = $("#nuevo-tema-nombre-carrera");
    let select_anio_carrera = $("#nuevo-tema-anio-carrera");
    let select_materia = $("#nuevo-tema-nombre-materia");
    let select_comision = $("#nuevo-tema-comision");
    let select_turno = $("#nuevo-tema-turno");



    // Evento de cambio de valor en el select de nombre carrera
    select_nombre_carrera.on('change', function () {
        // console.log("Cambió el valor del select");

        if (select_nombre_carrera.val() == 0) {
            $('#nuevo-tema-anio-carrera').prop('disabled', true);
            $('#nuevo-tema-nombre-materia').prop('disabled', true);
            $('#nuevo-tema-comision').prop('disabled', true);
            $('#nuevo-tema-turno').prop('disabled', true);

            $("#nuevo-tema-anio-carrera").val(0);
            $("#nuevo-tema-nombre-materia").val(0);
            $("#nuevo-tema-comision").val(0);
            $("#nuevo-tema-turno").val(0);

        } else {
            $('#nuevo-tema-anio-carrera').prop('disabled', false);
            fn_get_data_form.get_anio_carrera_select(select_nombre_carrera.val());

        }
    });

    // Evento de cambio de valor en el select de anio carrera
    select_anio_carrera.on('change', function () {
    });











    // ----------------------------------------------------------------

    function cargar_campos_form_nuevo_tema(id_carrera) {

    };

    function vaciar_campos_form_nuevo_tema() {
        $("#nuevo-tema-nombre-carrera").val(0);
        $("#nuevo-tema-anio-carrera").val(0);
        $("#nuevo-tema-nombre-materia").val(0);
        $("#nuevo-tema-comision").val(0);
        $("#nuevo-tema-turno").val(0);
        $("#nuevo-tema-fecha").val(0);
        $("#nuevo-tema-titulo").val("");
        $("#nuevo-tema-descripcion").val("");
    }

    function deshabilitar_campos_form_nuevo_tema(var1) {
        document.getElementById(var1).prop('disabled', true);
        document.getElementById(var1).val(0);

    }

});

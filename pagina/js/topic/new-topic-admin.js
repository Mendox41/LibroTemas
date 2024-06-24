import * as funciones_get_data_form from '../individual-data/funciones-get-data-form.js';
import get_usuario from '../individual-data/get-usuario.js';


$(document).ready(function () {


    funciones_get_data_form.crear_primer_opcion('Carrera', 'nuevo-tema-nombre-carrera');
    funciones_get_data_form.crear_primer_opcion('Año de Carrera', 'nuevo-tema-anio-carrera');
    funciones_get_data_form.crear_primer_opcion('Materia', 'nuevo-tema-nombre-materia');
    funciones_get_data_form.crear_primer_opcion('Comision', 'nuevo-tema-comision');
    funciones_get_data_form.crear_primer_opcion('Turno', 'nuevo-tema-turno');

    $("#btn-nuevo-tema").click(function () {

        vaciar_campos_form_nuevo_tema();

        // $("#nuevo-tema-nombre-carrera").empty();


        $("#modal-form-ingreso-nuevo-tema").addClass("d-block");
        $("#header").addClass("opacity-25");
        $("#main-container").addClass("opacity-25");
        $("#body").addClass("fondo-desactivado");


        // Inserto datos de carreras en el select del modal de nuevo tema
        funciones_get_data_form.get_carreras_select();


    });


    $("#btn-aceptar-ingreso-nuevo-tema").click(function () {
        // el id de relacion lo almaceno en el select de materia
        var id_relacion = $("#nuevo-tema-nombre-materia").val();
        var id_turno = $("#nuevo-tema-turno").val();
        var id_comision = $("#nuevo-tema-comision").val();
        var fecha_tema = $("#nuevo-tema-fecha").val();
        var titulo_tema = $("#nuevo-tema-titulo").val();
        var descripcion_tema = $("#nuevo-tema-descripcion").val();

        // si uno de los campos esta vacio entra aca
        if (id_relacion == 0 || id_turno == 0 || id_comision == 0 || fecha_tema == 0 || titulo_tema == "" || descripcion_tema == "") {

            $("#errorMessage").empty();
            $("#errorMessage").text('Todos los campos deben ser completados');
            $("#errorMessage").removeClass("invisible");


            // $("#fecha-tema").classList.add("border", "border-danger");
            // $("#fecha-tema").addClass("border");
            // $("#fecha-tema").addClass("border-danger");


            // $("#modal-title-respuesta").empty();
            // $("#modal-title-respuesta").text("Todos los campos deben ser completados");
            // $("#modal-title-respuesta").addClass("text-danger");

            // $("#header").addClass("opacity-25");
            // $("#main-container").addClass("opacity-25");
            // $("#modal-container-ingreso-nuevo-tema").addClass("opacity-0");
            // $("#body").addClass("prueba-back");

            // $("#modal-container-respuesta").addClass("d-block");

        } else if (!validacion_fecha(fecha_tema)) {
            $("#errorMessage").empty();
            $("#errorMessage").text('La fecha ingresada debe ser menor o igual que la fecha actual');

            $("#nuevo-tema-fecha").addClass('bg-danger-subtle');
            $("#nuevo-tema-fecha").addClass("text-danger-emphasis");
            $("#nuevo-tema-fecha").addClass("border-danger");


            $("#errorMessage").removeClass("oculto");

        } else {
            // si todos los campos estan completos entra aca
            $("#header").addClass("opacity-25");
            $("#main-container").addClass("opacity-25");
            $("#modal-container-ingreso-nuevo-tema").addClass("opacity-0");
            $("#body").addClass("prueba-back");

            $("#modal-form-ingreso-nuevo-tema").removeClass("d-block");
            $("#modal-container-confirm-ingreso-tema").addClass("d-block");

        };

    });


    $("#btn-confirm-ingreso-tema").click(function () {
        var id_usuario = get_usuario();

        if (id_usuario == false) {
            alert("Error: Id usuario not found");
        } else {
            // el id de relacion lo almaceno en el select de materia
            var id_relacion = $("#nuevo-tema-nombre-materia").val();
            var id_turno = $("#nuevo-tema-turno").val();
            var id_comision = $("#nuevo-tema-comision").val();
            var fecha_tema = $("#nuevo-tema-fecha").val();
            var titulo_tema = $("#nuevo-tema-titulo").val();
            var descripcion_tema = $("#nuevo-tema-descripcion").val();

            $.ajax({
                type: "post",
                url: "../../php/topic/new-topic-admin.php",
                data: {
                    id_usuario: id_usuario,
                    new_id_relacion: id_relacion,
                    new_id_turno: id_turno,
                    new_id_comision: id_comision,
                    new_tema: titulo_tema,
                    new_descripcion: descripcion_tema,
                    new_time: fecha_tema

                },
                success: function (respuesta) {
                    var data = JSON.parse(respuesta);

                    // oculto el modal del form y del de confirmar ingreso de un nuevo tema
                    $("#modal-container-confirm-ingreso-tema").removeClass("d-block");

                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data.message);

                    // hago visible el modal de respuesta
                    $("#modal-container-respuesta").addClass("d-block");

                    // if (data.success == true) {

                    // } else {

                    // }

                }, error: function (error) {
                    console.log(error);
                }


            });

        }



    });





    // ----------------------------------------------------------------

    let select_nombre_carrera = $("#nuevo-tema-nombre-carrera");
    let select_anio_carrera = $("#nuevo-tema-anio-carrera");
    let select_materias = $("#nuevo-tema-nombre-materia");
    let select_turno = $("#nuevo-tema-turno");
    let select_comision = $("#nuevo-tema-comision");




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
            funciones_get_data_form.get_anio_carrera_select(select_nombre_carrera.val());

        }
    });

    // Evento de cambio de valor en el select de anio carrera
    select_anio_carrera.on('change', function () {
        $('#nuevo-tema-nombre-materia').prop('disabled', true);
        $('#nuevo-tema-comision').prop('disabled', true);
        $('#nuevo-tema-turno').prop('disabled', true);

        $("#nuevo-tema-nombre-materia").val(0);
        $("#nuevo-tema-comision").val(0);
        $("#nuevo-tema-turno").val(0);

        if (select_anio_carrera.val() != 0) {
            $('#nuevo-tema-nombre-materia').prop('disabled', false);
            funciones_get_data_form.get_materias_select(select_nombre_carrera.val(), select_anio_carrera.val());

        }

    });

    // Evento de cambio de valor en el select de materias
    select_materias.on('change', function () {
        $('#nuevo-tema-comision').prop('disabled', true);
        $('#nuevo-tema-turno').prop('disabled', true);

        $("#nuevo-tema-comision").val(0);
        $("#nuevo-tema-turno").val(0);

        if (select_materias.val() != 0) {
            $('#nuevo-tema-turno').prop('disabled', false);
            funciones_get_data_form.get_turno_select(select_materias.val());
        }

    });

    // Evento de cambio de valor en el select de turnos
    select_turno.on('change', function () {
        $('#nuevo-tema-comision').prop('disabled', true);

        $("#nuevo-tema-comision").val(0);

        if (select_turno.val() != 0) {
            $('#nuevo-tema-comision').prop('disabled', false);
            funciones_get_data_form.get_comision_select(select_materias.val(), select_turno.val());

        }
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

        $('#nuevo-tema-anio-carrera').prop('disabled', true);
        $('#nuevo-tema-nombre-materia').prop('disabled', true);
        $('#nuevo-tema-comision').prop('disabled', true);
        $('#nuevo-tema-turno').prop('disabled', true);




    }


    function validacion_fecha(fecha_ingresada) {

        // Crear un objeto Date con la fecha del input
        var fechaIngresada_d = new Date(fecha_ingresada);

        // Crear un objeto Date con la fecha actual (solo con año, mes y día)
        var hoy = new Date();
        var fechaActual = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());


        if (fechaIngresada_d.getTime() <= fechaActual.getTime()) {
            // La fecha seleccionada es igual a la fecha actual.
            return true;

        } else {
            // La fecha seleccionada es posterior a la fecha actual
            return false;
        };

    };



});

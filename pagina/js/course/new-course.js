import { deshabilitar_contenedores } from '../modals-actions/modals-abm-users.js';
import { get_profesores_for_select } from '../individual-data/get_profesores.js';
import * as funciones_get_data_form from '../individual-data/funciones-get-data-form.js';

$(document).ready(function () {


    funciones_get_data_form.crear_primer_opcion('Carrera', 'nuevo-curso-nombre-carrera');
    funciones_get_data_form.crear_primer_opcion('Año de Carrera', 'nuevo-curso-anio-carrera');
    funciones_get_data_form.crear_primer_opcion('Materia', 'nuevo-curso-nombre-materia');
    funciones_get_data_form.crear_primer_opcion('Comision', 'nuevo-curso-comision');
    funciones_get_data_form.crear_primer_opcion('Turno', 'nuevo-curso-turno');
    funciones_get_data_form.crear_primer_opcion('Semestre', 'nuevo-curso-semestre');
    funciones_get_data_form.crear_primer_opcion('Profesor', 'select-profesor-asociado');



    $("#btn-nuevo-curso").click(function () {

        vaciar_campos_form_nuevo_curso();

        $("#modal-form-ingreso-nuevo-curso").addClass("d-block");
        deshabilitar_contenedores();


        // Inserto datos de carreras en el select del modal de nuevo curso
        funciones_get_data_form.get_carreras_for_select("nuevo-curso-nombre-carrera");


    });


    $("#btn-aceptar-ingreso-nuevo-curso").click(function () {
        var id_carrera = $("#nuevo-curso-nombre-carrera").val();
        var id_anio = $("#nuevo-curso-anio-carrera").val();
        var id_materia = $("#nuevo-curso-materia").val();
        var id_semestre = $("#nuevo-curso-semestre").val();
        var id_turno = $("#nuevo-curso-turno").val();
        var id_comision = $("#nuevo-curso-comision").val();
        var ciclo = $("#nuevo-curso-ciclo").val();
        var id_profesor = $("#select-profesor-asociado").val();


        // si uno de los campos esta vacio entra aca
        if (id_carrera == 0 || id_anio == 0 || id_materia == 0 || id_semestre == 0 || id_turno == 0 || id_comision == 0 || ciclo == 0 || id_profesor == 0){

            $("#errorMessage").empty();
            $("#errorMessage").text('Todos los campos deben ser completados');
            $("#errorMessage").removeClass("invisible");

            alert('Todos los campos deben ser completados');

        } else {
            // si todos los campos estan completos entra aca

            $("#modal-form-ingreso-nuevo-curso").removeClass("d-block");
            $("#modal-container-confirm-ingreso-curso").addClass("d-block");

        };

    });


    $("#btn-confirm-ingreso-curso").click(function () {

        var id_carrera = $("#nuevo-curso-nombre-carrera").val();
        var id_anio = $("#nuevo-curso-anio-carrera").val();
        var id_materia = $("#nuevo-curso-nombre-materia").val();
        var id_semestre = $("#nuevo-curso-semestre").val();
        var id_turno = $("#nuevo-curso-turno").val();
        var id_comision = $("#nuevo-curso-comision").val();
        var ciclo = $("#nuevo-curso-ciclo").val();
        var id_profesor = $("#select-profesor-asociado").val();


        if (id_carrera == 0 || id_anio == 0 || id_materia == 0 || id_semestre == 0 || id_turno == 0 || id_comision == 0 || ciclo == 0 || id_profesor == 0){
            alert("Todos los campos deben ser completados");

        } else {
            console.log(id_materia);

            $.ajax({
                type: "post",
                url: "../../php/course/new-course.php",
                data: {
                    id_carrera: id_carrera,
                    id_anio: id_anio,
                    id_materia: id_materia,
                    id_semestre: id_semestre,
                    id_turno:id_turno,
                    id_comision:id_comision,
                    ciclo:ciclo,
                    id_profesor:id_profesor
                },
                success: function (respuesta) {

                    var data = JSON.parse(respuesta);
                    // oculto el modal del form y del de confirmar ingreso de un nuevo curso
                    $("#modal-container-confirm-ingreso-curso").removeClass("d-block");
                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data.message);

                    if (data.success == true) {
                        $("#modal-title-respuesta").addClass("text-success");
                        // update_tabla_filtro_cursos();
                    } else {
                        $("#modal-title-respuesta").addClass("text-danger");

                    }

                    // hago visible el modal de respuesta
                    $("#modal-container-respuesta").addClass("d-block");
                }
            });
        }

    });





    // ----------------------------------------------------------------

    let select_nombre_carrera = $("#nuevo-curso-nombre-carrera");
    let select_anio_carrera = $("#nuevo-curso-anio-carrera");
    let select_materias = $("#nuevo-curso-nombre-materia");
    let select_turno = $("#nuevo-curso-turno");
    let select_comision = $("#nuevo-curso-comision");
    let select_semestre = $("#nuevo-curso-semestre");




    // Evento de cambio de valor en el select de nombre carrera
    select_nombre_carrera.on('change', function () {
        // console.log("Cambió el valor del select");
        $('#nuevo-curso-anio-carrera').prop('disabled', true);
        $('#nuevo-curso-nombre-materia').prop('disabled', true);
        $('#nuevo-curso-semestre').prop('disabled', true);

        // $('#nuevo-curso-comision').prop('disabled', true);
        // $('#nuevo-curso-turno').prop('disabled', true);

        $("#nuevo-curso-anio-carrera").val(0);
        $("#nuevo-curso-nombre-materia").val(0);
        $("#nuevo-curso-semestre").val(0);

        // $("#nuevo-curso-comision").val(0);
        // $("#nuevo-curso-turno").val(0);

        if (select_nombre_carrera.val() != 0) {
            $('#nuevo-curso-anio-carrera').prop('disabled', false);
            funciones_get_data_form.get_anio_carrera_for_select(select_nombre_carrera.val(), "nuevo-curso-anio-carrera");
        }
    });

    // Evento de cambio de valor en el select de anio carrera
    select_anio_carrera.on('change', function () {
        $('#nuevo-curso-nombre-materia').prop('disabled', true);
        $('#nuevo-curso-semestre').prop('disabled', true);


        // $('#nuevo-curso-comision').prop('disabled', true);
        // $('#nuevo-curso-turno').prop('disabled', true);

        $("#nuevo-curso-nombre-materia").val(0);
        $("#nuevo-curso-semestre").val(0);
        // $("#nuevo-curso-turno").val(0);

        if (select_anio_carrera.val() != 0) {
            $('#nuevo-curso-nombre-materia').prop('disabled', false);
            funciones_get_data_form.get_materias_for_select(select_nombre_carrera.val(), select_anio_carrera.val(), "nuevo-curso-nombre-materia");

        }

    });

    // Evento de cambio de valor en el select de materias
    select_materias.on('change', function () {
        $('#nuevo-curso-semestre').prop('disabled', true);
        $("#nuevo-curso-semestre").val(0);

        if (select_materias.val() != 0) {
            $('#nuevo-curso-semestre').prop('disabled', false);
            funciones_get_data_form.get_semestre_for_select(select_nombre_carrera.val(), select_anio_carrera.val(), select_materias.val(), "nuevo-curso-semestre");

        }

    });




    // ----------------------------------------------------------------

    // creo dinamicamente las opciones del select de turnos
    funciones_get_data_form.get_turnos_for_select('nuevo-curso-turno');

    // creo dinamicamente las opciones del select de comisiones
    funciones_get_data_form.get_comisiones_for_select('nuevo-curso-comision');

    // creo dinamicamente las opciones del select de profesores
    get_profesores_for_select();


    // ----------------------------------------------------------------



    function vaciar_campos_form_nuevo_curso() {
        $("#nuevo-curso-nombre-carrera").val(0);
        $("#nuevo-curso-anio-carrera").val(0);
        $("#nuevo-curso-nombre-materia").val(0);
        $("#nuevo-curso-comision").val(0);
        $("#nuevo-curso-turno").val(0);
        $("#nuevo-curso-ciclo").val("");
        $("#nuevo-curso-semestre").val(0);
        $("#nuevo-curso-profesor").val(0);



        $('#nuevo-curso-anio-carrera').prop('disabled', true);
        $('#nuevo-curso-nombre-materia').prop('disabled', true);
        // $('#nuevo-curso-comision').prop('disabled', true);
        // $('#nuevo-curso-turno').prop('disabled', true);

        $("#errorMessage").addClass("invisible");






    }





});
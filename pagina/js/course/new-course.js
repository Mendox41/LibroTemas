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
    funciones_get_data_form.crear_primer_opcion('Profesor', 'nuevo-curso-profesor');



    $("#btn-nuevo-curso").click(function () {

        // vaciar_campos_form_nuevo_curso();

        $("#modal-form-ingreso-nuevo-curso").addClass("d-block");
        deshabilitar_contenedores();


        // Inserto datos de carreras en el select del modal de nuevo curso
        funciones_get_data_form.get_carreras_for_select("nuevo-curso-nombre-carrera");


    });


    $("#btn-aceptar-ingreso-nuevo-curso").click(function () {
        // el id de relacion lo almaceno en el select de materia
        var id_relacion = $("#nuevo-curso-nombre-materia").val();
        var id_turno = $("#nuevo-curso-turno").val();
        var id_comision = $("#nuevo-curso-comision").val();
        var fecha_curso = $("#nuevo-curso-fecha").val();
        var titulo_curso = $("#nuevo-curso-titulo").val();
        var descripcion_curso = $("#nuevo-curso-descripcion").val();

        // si uno de los campos esta vacio entra aca
        if (id_relacion == 0 || id_turno == 0 || id_comision == 0 || fecha_curso == 0 || titulo_curso == "" || descripcion_curso == "") {

            $("#errorMessage").empty();
            $("#errorMessage").text('Todos los campos deben ser completados');
            $("#errorMessage").removeClass("invisible");


        } else if (!validacion_fecha(fecha_curso)) {
            $("#errorMessage").empty();
            $("#errorMessage").text('La fecha ingresada debe ser menor o igual que la fecha actual');

            $("#nuevo-curso-fecha").addClass('bg-danger-subtle');
            $("#nuevo-curso-fecha").addClass("text-danger-emphasis");
            $("#nuevo-curso-fecha").addClass("border-danger");

            $("#errorMessage").removeClass("invisible");

        } else {
            // si todos los campos estan completos entra aca
          
            $("#modal-form-ingreso-nuevo-curso").removeClass("d-block");
            $("#modal-container-confirm-ingreso-curso").addClass("d-block");

        };

    });


    $("#btn-confirm-ingreso-curso").click(function () {
        get_usuario().then(function (id_usuario) {
            if (id_usuario === false) {
                alert("Error: Id usuario not found");
            } else if (id_relacion == 0 || id_turno == 0 || id_comision == 0 || fecha_curso == 0 || titulo_curso == "" || descripcion_curso == "") {
                alert("Todos los campos deben ser completados");

            } else {
                // el id de relacion lo almaceno en el select de materia
                var id_relacion = $("#nuevo-curso-nombre-materia").val();
                var id_turno = $("#nuevo-curso-turno").val();
                var id_comision = $("#nuevo-curso-comision").val();
                var fecha_curso = $("#nuevo-curso-fecha").val();
                var titulo_curso = $("#nuevo-curso-titulo").val();
                var descripcion_curso = $("#nuevo-curso-descripcion").val();
                $.ajax({
                    type: "post",
                    url: "../../php/topic/new-topic-admin.php",
                    data: {
                        id_usuario: id_usuario,
                        new_id_relacion: id_relacion,
                        new_id_turno: id_turno,
                        new_id_comision: id_comision,
                        new_curso: titulo_curso,
                        new_descripcion: descripcion_curso,
                        new_time: fecha_curso
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
        }).catch(function (error) {
            console.error("Error al obtener el usuario:", error);
            alert("Error al obtener el usuario");
        });
    });





    // ----------------------------------------------------------------

    let select_nombre_carrera = $("#nuevo-curso-nombre-carrera");
    let select_anio_carrera = $("#nuevo-curso-anio-carrera");
    let select_materias = $("#nuevo-curso-nombre-materia");
    let select_turno = $("#nuevo-curso-turno");
    let select_comision = $("#nuevo-curso-comision");




    // Evento de cambio de valor en el select de nombre carrera
    select_nombre_carrera.on('change', function () {
        // console.log("Cambió el valor del select");
        $('#nuevo-curso-anio-carrera').prop('disabled', true);
        $('#nuevo-curso-nombre-materia').prop('disabled', true);
        // $('#nuevo-curso-comision').prop('disabled', true);
        // $('#nuevo-curso-turno').prop('disabled', true);

        $("#nuevo-curso-anio-carrera").val(0);
        $("#nuevo-curso-nombre-materia").val(0);
        // $("#nuevo-curso-comision").val(0);
        // $("#nuevo-curso-turno").val(0);

        if (select_nombre_carrera.val() != 0) {
            $('#nuevo-curso-anio-carrera').prop('disabled', false);
            funciones_get_data_form.get_anio_carrera_select(select_nombre_carrera.val());
        }
    });

    // Evento de cambio de valor en el select de anio carrera
    select_anio_carrera.on('change', function () {
        $('#nuevo-curso-nombre-materia').prop('disabled', true);
        $('#nuevo-curso-comision').prop('disabled', true);
        $('#nuevo-curso-turno').prop('disabled', true);

        $("#nuevo-curso-nombre-materia").val(0);
        // $("#nuevo-curso-comision").val(0);
        // $("#nuevo-curso-turno").val(0);

        if (select_anio_carrera.val() != 0) {
            $('#nuevo-curso-nombre-materia').prop('disabled', false);
            funciones_get_data_form.get_materias_select(select_nombre_carrera.val(), select_anio_carrera.val());

        }

    });

    // Evento de cambio de valor en el select de materias
    select_materias.on('change', function () {
        // $('#nuevo-curso-comision').prop('disabled', true);
        // $('#nuevo-curso-turno').prop('disabled', true);

        // $("#nuevo-curso-comision").val(0);
        // $("#nuevo-curso-turno").val(0);

        // if (select_materias.val() != 0) {
        //     $('#nuevo-curso-turno').prop('disabled', false);
        //     funciones_get_data_form.get_turno_select(select_materias.val());
        // }

    });

    // Evento de cambio de valor en el select de turnos
    select_turno.on('change', function () {
        $('#nuevo-curso-comision').prop('disabled', true);

        $("#nuevo-curso-comision").val(0);

        if (select_turno.val() != 0) {
            $('#nuevo-curso-comision').prop('disabled', false);
            funciones_get_data_form.get_comision_select(select_materias.val(), select_turno.val());

        }
    });


    // ----------------------------------------------------------------

    // function cargar_campos_form_nuevo_curso(id_carrera) {

    // };

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
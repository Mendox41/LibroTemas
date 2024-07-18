// aca entrara modificar datos de cursos como modificar status de activo o inactivo

import { deshabilitar_contenedores } from '../modals-actions/modals-abm-users.js';
import { get_profesores_for_select, get_profesores_for_select_modal } from '../individual-data/get_profesores.js';
import * as funciones_get_data_form from '../individual-data/funciones-get-data-form.js';

$(document).ready(function () {


    funciones_get_data_form.crear_primer_opcion('Carrera', 'modify-curso-nombre-carrera');
    funciones_get_data_form.crear_primer_opcion('Año de Carrera', 'modify-curso-anio-carrera');
    funciones_get_data_form.crear_primer_opcion('Materia', 'modify-curso-nombre-materia');
    funciones_get_data_form.crear_primer_opcion('Comision', 'modify-curso-comision');
    funciones_get_data_form.crear_primer_opcion('Turno', 'modify-curso-turno');
    funciones_get_data_form.crear_primer_opcion('Semestre', 'modify-curso-semestre');
    funciones_get_data_form.crear_primer_opcion('Profesor', 'modify-curso-profesor');



    // $("#btn-modify-curso").click(function () {

    //     // vaciar_campos_form_modify_curso();

    //     $("#modal-form-ingreso-modify-curso").addClass("d-block");
    //     deshabilitar_contenedores();




    // });


    $("#btn-aceptar-modify-curso").click(function () {
        var id_curso = $('#modify-id-curso').val();
        var id_carrera = $("#modify-curso-nombre-carrera").val();
        var id_anio = $("#modify-curso-anio-carrera").val();
        var id_materia = $("#modify-curso-materia").val();
        var id_semestre = $("#modify-curso-semestre").val();
        var id_turno = $("#modify-curso-turno").val();
        var id_comision = $("#modify-curso-comision").val();
        var ciclo = $("#modify-curso-ciclo").val();
        var id_profesor = $("#modify-curso-profesor").val();


        // si uno de los campos esta vacio entra aca
        if (id_curso == "" || id_carrera == 0 || id_anio == 0 || id_materia == 0 || id_semestre == 0 || id_turno == 0 || id_comision == 0 || ciclo == 0 || id_profesor == 0) {

            // $("#errorMessage").empty();
            // $("#errorMessage").text('Todos los campos deben ser completados');
            // $("#errorMessage").removeClass("invisible");

            alert('Todos los campos deben ser completados');

        } else {
            // si todos los campos estan completos entra aca

            $("#modal-form-modify-curso").removeClass("d-block");
            $("#modal-container-confirm-modify-curso").addClass("d-block");

        };

    });


    $("#btn-aceptar-modal-confirm-modify-curso").click(function () {
        var id_curso = $('#modify-id-curso').val();
        var id_carrera = $("#modify-curso-nombre-carrera").val();
        var id_anio = $("#modify-curso-anio-carrera").val();
        var id_materia = $("#modify-curso-nombre-materia").val();
        var id_semestre = $("#modify-curso-semestre").val();
        var id_turno = $("#modify-curso-turno").val();
        var id_comision = $("#modify-curso-comision").val();
        var ciclo = $("#modify-curso-ciclo").val();
        var id_profesor = $("#modify-curso-profesor").val();




        if (id_curso == "" || id_carrera == 0 || id_anio == 0 || id_materia == 0 || id_semestre == 0 || id_turno == 0 || id_comision == 0 || ciclo == 0 || id_profesor == 0) {
            alert("Todos los campos deben ser completados");

        } else {

            $.ajax({
                type: "POST",
                url: "../../php/course/modify-course.php",
                data: {
                    id_curso: id_curso,
                    id_carrera: id_carrera,
                    id_anio: id_anio,
                    id_materia: id_materia,
                    id_semestre: id_semestre,
                    id_turno: id_turno,
                    id_comision: id_comision,
                    c_anio: ciclo,
                    id_profesor: id_profesor
                },
                success: function (respuesta) {
                    var data = JSON.parse(respuesta);
                    // oculto el modal del form y del de confirmar ingreso de un modify curso
                    $("#modal-container-confirm-modify-curso").removeClass("d-block");
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

    let select_nombre_carrera = $("#modify-curso-nombre-carrera");
    let select_anio_carrera = $("#modify-curso-anio-carrera");
    let select_materias = $("#modify-curso-nombre-materia");
    let select_turno = $("#modify-curso-turno");
    let select_comision = $("#modify-curso-comision");
    let select_semestre = $("#modify-curso-semestre");

    // Inserto datos de carreras en el select del modal de modify curso
    funciones_get_data_form.get_carreras_for_select("modify-curso-nombre-carrera");



    // Evento de cambio de valor en el select de nombre carrera
    select_nombre_carrera.on('change', function () {
        // console.log("Cambió el valor del select");
        $('#modify-curso-anio-carrera').prop('disabled', true);
        $('#modify-curso-nombre-materia').prop('disabled', true);
        $('#modify-curso-semestre').prop('disabled', true);

        // $('#modify-curso-comision').prop('disabled', true);
        // $('#modify-curso-turno').prop('disabled', true);

        $("#modify-curso-anio-carrera").val(0);
        $("#modify-curso-nombre-materia").val(0);
        $("#modify-curso-semestre").val(0);

        // $("#modify-curso-comision").val(0);
        // $("#modify-curso-turno").val(0);

        if (select_nombre_carrera.val() != 0) {
            $('#modify-curso-anio-carrera').prop('disabled', false);
            funciones_get_data_form.get_anio_carrera_for_select(select_nombre_carrera.val(), "modify-curso-anio-carrera");
        }
    });

    // Evento de cambio de valor en el select de anio carrera
    select_anio_carrera.on('change', function () {
        $('#modify-curso-nombre-materia').prop('disabled', true);
        $('#modify-curso-semestre').prop('disabled', true);


        // $('#modify-curso-comision').prop('disabled', true);
        // $('#modify-curso-turno').prop('disabled', true);

        $("#modify-curso-nombre-materia").val(0);
        $("#modify-curso-semestre").val(0);
        // $("#modify-curso-turno").val(0);

        if (select_anio_carrera.val() != 0) {
            $('#modify-curso-nombre-materia').prop('disabled', false);
            funciones_get_data_form.get_materias_for_select(select_nombre_carrera.val(), select_anio_carrera.val(), "modify-curso-nombre-materia");

        }

    });

    // Evento de cambio de valor en el select de materias
    select_materias.on('change', function () {
        $('#modify-curso-semestre').prop('disabled', true);
        $("#modify-curso-semestre").val(0);

        if (select_materias.val() != 0) {
            $('#modify-curso-semestre').prop('disabled', false);
            funciones_get_data_form.get_semestre_for_select(select_nombre_carrera.val(), select_anio_carrera.val(), select_materias.val(), "modify-curso-semestre");

        }

    });




    // ----------------------------------------------------------------

    // creo dinamicamente las opciones del select de turnos
    funciones_get_data_form.get_turnos_for_select('modify-curso-turno');

    // creo dinamicamente las opciones del select de comisiones
    funciones_get_data_form.get_comisiones_for_select('modify-curso-comision');

    // creo dinamicamente las opciones del select de profesores
    get_profesores_for_select_modal('modify-curso-profesor');


    // ----------------------------------------------------------------

    // evento para activar o desactivar un curso

    $("#btn-aceptar-modal-confirm-act-desac-curso").click(function () {

        var id_curso = $("#id-curso-modal-confirm-act-desac").val();
        var estado_curso = $("#estado-curso-modal-confirm-act-desac").val();


        if (id_curso == "" || estado_curso == "") {
            console.log("No se encuentra ingresado estado o id_curso");
        } else if (estado_curso == 0) {

            var objAjax = $.ajax({
                type: "post",
                url: "../../php/course/activate-course.php",
                data: {
                    id_curso: id_curso,
                },
                success: function (respuesta) {
                    var data = JSON.parse(respuesta);

                    // oculto el modal del formy del de confirmar ingreso de un nuevo tema
                    $("#modal-container-confirm-act-desac-curso").removeClass("d-block");

                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data.message);
                    if (data.success == true) {
                        $("#modal-title-respuesta").addClass("text-success");

                        // actualizo datos de la tabla dinamicamente
                        // update_tabla_filtro_temas();


                    } else {
                        $("#modal-title-respuesta").addClass("text-danger");
                    };

                    // hago visible el modal de respuesta
                    $("#modal-container-respuesta").addClass("d-block");



                }, error: function (jqXHR, textStatus, errorThrown) {
                    console.error('Error en la solicitud:', textStatus, errorThrown);
                    console.log('Estado de la respuesta:', jqXHR.status);
                    console.log('Respuesta completa:', jqXHR.responseText);
                    if (jqXHR.status === 0) {
                        alert('No se pudo conectar al servidor. Por favor, verifica tu conexión a internet y la URL del servidor.');
                    } else {
                        alert('Error en la solicitud AJAX: ' + textStatus + ' - ' + errorThrown + '\nEstado: ' + jqXHR.status);
                    }
                }


            });


        } else {

            var objAjax = $.ajax({
                type: "post",
                url: "../../php/course/deactivate-course.php",
                data: {
                    id_curso: id_curso,
                },
                success: function (respuesta) {
                    var data = JSON.parse(respuesta);

                    // oculto el modal del formy del de confirmar ingreso de un nuevo tema
                    $("#modal-container-confirm-act-desac-curso").removeClass("d-block");

                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data.message);
                    if (data.success == true) {
                        $("#modal-title-respuesta").addClass("text-success");

                        // actualizo datos de la tabla dinamicamente
                        // update_tabla_filtro_temas();


                    } else {
                        $("#modal-title-respuesta").addClass("text-danger");
                    };

                    // hago visible el modal de respuesta
                    $("#modal-container-respuesta").addClass("d-block");



                }, error: function (jqXHR, textStatus, errorThrown) {
                    console.error('Error en la solicitud:', textStatus, errorThrown);
                    console.log('Estado de la respuesta:', jqXHR.status);
                    console.log('Respuesta completa:', jqXHR.responseText);
                    if (jqXHR.status === 0) {
                        alert('No se pudo conectar al servidor. Por favor, verifica tu conexión a internet y la URL del servidor.');
                    } else {
                        alert('Error en la solicitud AJAX: ' + textStatus + ' - ' + errorThrown + '\nEstado: ' + jqXHR.status);
                    }
                }


            });


            
        };




    });


});



export function activate_couse(val) {

};

export function desactivate_couse(val) {
};
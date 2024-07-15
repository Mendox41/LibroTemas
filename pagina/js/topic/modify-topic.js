import { update_tabla_filtro_temas } from './topic-filter-actions.js';
import { fill_form_modify_topic } from './get-topic.js';
import { restablecer_valores_modal_modify_tema } from '../modals-actions/modals-abm-topics.js';



$(document).ready(function () {

    $("#btn-aceptar-modify-tema").click(function () {
        var fecha_tema = $("#fecha-tema-modal-modify").val();
        var titulo_tema = $("#titulo-tema-modal-modify").val();
        var descripcion_tema = $("#descripcion-tema-modal-modify").val();

        // si uno de los campos esta vacio entra aca
        if (fecha_tema == 0 || titulo_tema == "" || descripcion_tema == "") {

            $("#errorMessage-modal-modify-tema").empty();
            $("#errorMessage-modal-modify-tema").text('Todos los campos deben ser completados');
            $("#errorMessage-modal-modify-tema").removeClass("invisible");

        } else if (!validacion_fecha(fecha_tema)) {
            $("#errorMessage-modal-modify-tema").empty();
            $("#errorMessage-modal-modify-tema").text('La fecha ingresada debe ser menor o igual que la fecha actual');

            $("#fecha-tema").addClass('bg-danger-subtle');
            $("#fecha-tema").addClass("text-danger-emphasis");
            $("#fecha-tema").addClass("border-danger");

            $("#errorMessage-modal-modify-tema").removeClass("invisible");

        } else {
            // si todos los campos estan completos entra aca

            $("#modal-form-modify-tema").removeClass("d-block");
            $("#modal-container-confirm-modify-tema").addClass("d-block");

        };

    });

    $("#btn-aceptar-modal-confirm-modify-tema").click(function () {
        var id_libro_tema = $("#id-libro-tema-modal-modify").val();
        var titulo_tema = $("#titulo-tema-modal-modify").val();
        var descripcion_tema = $("#descripcion-tema-modal-modify").val();
        var fecha_tema = $("#fecha-tema-modal-modify").val();


        if (fecha_tema == 0 || titulo_tema == "" || descripcion_tema == "") {
            alert("Todos los campos deben ser completados");

        }
        else {

            // ajax que realiza el envio de datos al servidor
            $.ajax({
                type: "post",
                url: "../../php/topic/modify-topic.php",
                data: {
                    id_libro_tema: id_libro_tema,
                    fecha: fecha_tema,
                    titulo: titulo_tema,
                    descripcion: descripcion_tema

                },
                success: function (respuesta) {
                    // alert(respuesta);
                    var data = JSON.parse(respuesta);


                    // oculto el modal del formy del de confirmar ingreso de un nuevo tema
                    $("#modal-container-confirm-modify-tema").removeClass("d-block");

                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data.message);

                    if (data.success == true) {
                        $("#modal-title-respuesta").addClass("text-success");

                        update_tabla_filtro_temas();

                    } else {
                        $("#modal-title-respuesta").addClass("text-danger");

                    }

                    // hago visible el modal de respuesta
                    $("#modal-container-respuesta").addClass("d-block");



                }, error: function (error) {
                    console.log(error);
                }


            });

        }



    });

    // btn modificar datos del modal de ver tema
    $("#btn-modif-modal-ver-tema").click(function () {
        $('#id-libro-tema-modal-modify').val("");

        restablecer_valores_modal_modify_tema();


        var id_libro_tema = $("#ver-tema-id-libro-tema").val();

        if (id_libro_tema == "") {
            alert("No se ingreso ningun id_libro_tema");
        } else {
            $('#id-libro-tema-modal-modify').val(id_libro_tema);

            fill_form_modify_topic(id_libro_tema);

            // habilito modal de modificacion de datos del tema
            $("#modal-form-modify-tema").addClass("d-block");


            // deshabilito modal de ver tema
            $("#modal-form-ver-tema").removeClass("d-block");

        };




    });




});

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
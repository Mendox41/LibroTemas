import { update_tabla_filtro_temas } from './topic-filter-actions.js';

$(document).ready(function () {


    // btn aceptar eliminacion de tema del modal eliminar tema
    $("#btn-aceptar-modal-confirm-delete-tema").click(function () {
        var id_libro_tema = $("#id-libro-tema-modal-confirm-delete").val();
        if (id_libro_tema == "") {
            alert("No se ingreso ningun id_libro_tema");
        } else {
            var objAjax = $.ajax({
                type: "post",
                url: "../../php/topic/delete-topic.php",
                data: {
                    id_libro_tema: id_libro_tema,
                },
                success: function (respuesta) {
                    var data = JSON.parse(respuesta);

                    // oculto el modal del formy del de confirmar ingreso de un nuevo tema
                    $("#modal-form").removeClass("d-block");
                    $("#modal-container-confirm-delete-tema").removeClass("d-block");

                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data.message);
                    if (data.success == true) {
                        $("#modal-title-respuesta").addClass("text-success");

                        // actualizo datos de la tabla dinamicamente
                        update_tabla_filtro_temas();

                        // $.ajax({
                        //     url: '../../php/topic/get-topics-filter.php',
                        //     type: 'POST',
                        //     data: {
                        //         nombre_carrera: $("#nombre-carrera-filtro").val(),
                        //         anio_carrera: $("#anio-carrera-filtro").val(),
                        //         nombre_materia: $("#nombre-materia-filtro").val(),
                        //         comision: $("#comision-filtro").val(),
                        //         turno: $("#turno-filtro").val(),
                        //         usuario: $("#nombre-usuario-filtro").val(),
                        //         nombre_profesor: $("#nombre-profesor-filtro").val(),
                        //         apellido_profesor: $("#apellido-profesor-filtro").val(),

                        //         semestre: $("#semestre-filtro").val(),
                        //         ciclo_lectivo: $("#ciclo-lectivo-filtro").val(),

                        //         fecha_desde: $("#fecha-tema-desde-filtro").val(),
                        //         fecha_hasta: $("#fecha-tema-hasta-filtro").val(),

                        //         titulo_tema: $("#titulo-tema-filtro").val(),
                        //         descripcion_tema: $("#descripcion-tema-filtro").val()
                        //     },
                        //     success: function (respuesta) {
                        //         // alert(respuesta);
                        //         var data_filtro_temas = JSON.parse(respuesta);

                        //         if (!(data_filtro_temas.success)) {
                        //             // alert("Error: no se encontraron temas");
                        //             $('#contenedor-tabla-abm-topic').empty();

                        //             var text_alert = document.createElement("H3");
                        //             text_alert.classList.add("text-danger");
                        //             text_alert.id = 'text_alert';
                        //             text_alert.textContent = 'No se encontraron temas registrados con los parametros Ingresados en el filtro';

                        //             document.getElementById('contenedor-tabla-abm-topic').appendChild(text_alert);


                        //         } else {
                        //             $('#btn-filtro-tema').prop('disabled', false);
                        //             $('#form-filtro-tema').hide();

                        //             // vacio el contenedor del abm
                        //             $('#contenedor-tabla-abm-topic').empty();


                        //             $('#contenedor-tabla-abm-topic').addClass('bg-white');

                        //             // creo dinamicamente la tabla del ABM de topic
                        //             var tabla_abm = document.createElement('table');
                        //             tabla_abm.id = 'tabla-abm-topic';
                        //             tabla_abm.classList.add('tabla-abm-topic', 'display');

                        //             // creo el thead de la tabla
                        //             var thead_tabla = document.createElement('thead');
                        //             // creo elemento tr para agregar los th con valores de los titulos de las columnas
                        //             var tr_thead_tabla = document.createElement('tr');


                        //             var titulos_columnas_abm_topic = ['ID', 'Titulo', 'Fecha', 'Carrera', 'Año Carrera', 'Materia', 'Turno', 'Comision', 'Apellido', '-'];

                        //             // recorro el array creado anteriormente de los titulos 
                        //             titulos_columnas_abm_topic.forEach(function (titulo) {
                        //                 var th_tabla = document.createElement('th');
                        //                 th_tabla.textContent = titulo;

                        //                 // agrego como clase la posicion del titulo dentro del array para colocar clases distintas
                        //                 var num_columna = 'columna-' + titulos_columnas_abm_topic.indexOf(titulo);

                        //                 th_tabla.classList.add(num_columna);

                        //                 tr_thead_tabla.appendChild(th_tabla);

                        //             });


                        //             // creo el tbody de la tabla
                        //             var tbody_tabla = document.createElement('tbody');
                        //             tbody_tabla.id = 'tabla-abm-topic-tbody';


                        //             // recorro los valores obtenidos de la respuesta ajax
                        //             data_filtro_temas.respuesta.forEach(function (topic) {
                        //                 // alert(topic);
                        //                 var tr_tbody_tabla = document.createElement('tr');


                        //                 Object.entries(topic).forEach(function ([dato_topic, valor]) {

                        //                     if (dato_topic == 'id_libro_tema_for_btns') {
                        //                         var td_tbody_tabla = document.createElement('td');
                        //                         td_tbody_tabla.classList.add('d-flex', 'justify-content-center');

                        //                         // creo los botones y le doy como id al valor de id del topic. id o atributo?

                        //                         // btn ver topic


                        //                         var ver_topic = document.createElement("button");
                        //                         // ver_topic.textContent = 'VER';
                        //                         ver_topic.classList.add("btn", "btn-primary");
                        //                         ver_topic.id = 'ver_topic';
                        //                         ver_topic.setAttribute("id_topic", valor);
                        //                         ver_topic.setAttribute('type', "button");

                        //                         ver_topic.onclick = function () {
                        //                             // fn carga de datos de topic en tabla del modal

                        //                             // vacio campo con datos anteriores
                        //                             restablecer_valores_modal_ver_tema();
                        //                             $('#ver-tema-id-libro-tema').val("");

                        //                             fill_table_ver_datos_topic(valor);
                        //                             $('#ver-tema-id-libro-tema').val(valor);


                        //                             $("#modal-form-ver-tema").addClass("d-block");
                        //                             $("#header").addClass("opacity-25");
                        //                             $("#main-container").addClass("opacity-25");
                        //                             $("#body").addClass("fondo-desactivado");

                        //                         };

                        //                         var icono_ver = document.createElement("ion-icon");
                        //                         icono_ver.setAttribute('name', "search");

                        //                         ver_topic.appendChild(icono_ver);


                        //                         // BTN modificar topic

                        //                         var btn_modif_topic = document.createElement("button");
                        //                         // btn_modif_topic.textContent = 'Modificar';
                        //                         btn_modif_topic.classList.add("btn", "btn-warning");
                        //                         btn_modif_topic.id = 'btn_modif_topic';
                        //                         btn_modif_topic.setAttribute("id_topic", valor);
                        //                         btn_modif_topic.setAttribute('type', "button");

                        //                         btn_modif_topic.onclick = function () {
                        //                             // fn modificar topic
                        //                             // alert(valor);
                        //                             // vacio campo con datos anteriores

                        //                             $('#id-libro-tema-modal-modify').val("");


                        //                             fill_form_modify_topic(valor);
                        //                             $('#id-libro-tema-modal-modify').val(valor);

                        //                             $("#modal-form-modify-tema").addClass("d-block");
                        //                             $("#header").addClass("opacity-25");
                        //                             $("#main-container").addClass("opacity-25");
                        //                             $("#body").addClass("fondo-desactivado");


                        //                         };


                        //                         var icono_modificar = document.createElement("ion-icon");
                        //                         icono_modificar.setAttribute('name', "pencil");


                        //                         btn_modif_topic.appendChild(icono_modificar);


                        //                         // Btn eliminar topic
                        //                         var btn_delete_topic = document.createElement("button");
                        //                         btn_delete_topic.id = 'btn_delete_topic';
                        //                         btn_delete_topic.setAttribute("id_topic", valor);
                        //                         btn_delete_topic.setAttribute('type', "button");


                        //                         // btn_delete_topic.textContent = 'Eliminar';
                        //                         btn_delete_topic.classList.add("btn", "btn-danger");
                        //                         btn_delete_topic.onclick = function () {
                        //                             // fn delete topic
                        //                             // alert(valor);
                        //                             // vacio campo con datos anteriores
                        //                             $('#id-libro-tema-modal-confirm-delete').val("");


                        //                             $('#id-libro-tema-modal-confirm-delete').val(valor);

                        //                             $("#modal-container-confirm-delete-tema").addClass("d-block");
                        //                             $("#header").addClass("opacity-25");
                        //                             $("#main-container").addClass("opacity-25");
                        //                             $("#body").addClass("fondo-desactivado");


                        //                         };

                        //                         var icono_eliminar = document.createElement("ion-icon");
                        //                         icono_eliminar.setAttribute('name', "trash");

                        //                         btn_delete_topic.appendChild(icono_eliminar);

                        //                         // <ion-icon name="trash"></ion-icon>





                        //                         td_tbody_tabla.appendChild(ver_topic);
                        //                         td_tbody_tabla.appendChild(btn_modif_topic);
                        //                         td_tbody_tabla.appendChild(btn_delete_topic);

                        //                         tr_tbody_tabla.appendChild(td_tbody_tabla);



                        //                     } else {
                        //                         // creo los td con los valores de los datos de los topic
                        //                         var td_tbody_tabla = document.createElement('td');
                        //                         td_tbody_tabla.textContent = valor;

                        //                         tr_tbody_tabla.appendChild(td_tbody_tabla);

                        //                     }
                        //                     // console.log(dato_topic + ": " + valor);
                        //                 });



                        //                 tbody_tabla.appendChild(tr_tbody_tabla);

                        //             });


                        //             // creo el tbody de la tabla con los datos obtenidos de la respuesta ajax


                        //             // Inserto elementos de la tabla creados anteriormente
                        //             thead_tabla.appendChild(tr_thead_tabla);
                        //             tabla_abm.appendChild(thead_tabla);

                        //             tabla_abm.appendChild(tbody_tabla);



                        //             // Inserto la tabla con elementos creados en el contenedor
                        //             document.getElementById("contenedor-tabla-abm-topic").appendChild(tabla_abm);

                        //             // ----------------------------------------------------------------

                        //             var table = $('#tabla-abm-topic').DataTable({
                        //                 orderCellsTop: true,
                        //                 fixedHeader: true
                        //             });

                        //         }

                        //     },
                        //     error: function (jqXHR, textStatus, errorThrown) {
                        //         console.error('Error en la solicitud:', textStatus, errorThrown);
                        //         console.log('Estado de la respuesta:', jqXHR.status);
                        //         console.log('Respuesta completa:', jqXHR.responseText);
                        //         if (jqXHR.status === 0) {
                        //             alert('No se pudo conectar al servidor. Por favor, verifica tu conexión a internet y la URL del servidor.');
                        //         } else {
                        //             alert('Error en la solicitud AJAX: ' + textStatus + ' - ' + errorThrown + '\nEstado: ' + jqXHR.status);
                        //         }
                        //     }
                        // });


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

    // btn eliminar del modal de ver tema
    $("#btn-eliminar-modal-ver-tema").click(function () {
        $('#id-libro-tema-modal-confirm-delete').val("");

        var id_libro_tema = $("#ver-tema-id-libro-tema").val();
        if (id_libro_tema == "") {
            alert("No se ingreso ningun id_libro_tema");
        } else {
            $('#id-libro-tema-modal-confirm-delete').val(id_libro_tema);

            // habilito modal de confirm eliminacion del tema
            $("#modal-container-confirm-delete-tema").addClass("d-block");

            // deshabilito modal de ver tema
            $("#modal-form-ver-tema").removeClass("d-block");

        };




    });


});
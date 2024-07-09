import { fill_table_ver_datos_topic, fill_form_modify_topic } from './get-topic.js';
import { restablecer_valores_modal_ver_tema } from '../modals-actions/modals-abm-topics.js';


$(document).ready(function () {


    // $("#btn-buscar-tema").click(function () {
    //     // Escuchar clic en el botón de búsqueda de temas
    //     $.ajax({
    //         url: '../../php/topic/get-topics2.php',
    //         type: 'GET',
    //         dataType: 'json',
    //         beforeSend: function (xhr) {
    //             xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    //         },
    //         success: function (response) {
    //             console.log('Respuesta del servidor:', response);
    //             if (response && response.message && response.timestamp) {
    //                 alert('Éxito: ' + response.message + '\nTimestamp: ' + response.timestamp);
    //             } else {
    //                 console.error('La respuesta no tiene el formato esperado:', response);
    //                 alert('La respuesta no tiene el formato esperado');
    //             }
    //         },
    //         error: function (jqXHR, textStatus, errorThrown) {
    //             console.error('Error en la solicitud:', textStatus, errorThrown);
    //             console.log('Estado de la respuesta:', jqXHR.status);
    //             console.log('Respuesta completa:', jqXHR.responseText);
    //             if (jqXHR.status === 0) {
    //                 alert('No se pudo conectar al servidor. Por favor, verifica tu conexión a internet y la URL del servidor.');
    //             } else {
    //                 alert('Error en la solicitud AJAX: ' + textStatus + ' - ' + errorThrown + '\nEstado: ' + jqXHR.status);
    //             }
    //         }
    //     });


    // });


    $("#btn-buscar-tema").click(function () {
        // Escuchar clic en el botón de búsqueda de temas
        $.ajax({
            url: '../../php/topic/get-topics-filter.php',
            type: 'POST',
            data: {
                nombre_carrera: $("#nombre-carrera").val(),
                anio_carrera: $("#anio-carrera").val(),
                nombre_materia: $("#nombre-materia").val(),
                comision: $("#comision").val(),
                turno: $("#turno").val(),
                nombre_usuario: $("#nombre-usuario").val(),
                nombre_profesor: $("#nombre-profesor").val(),
                apellido_profesor: $("#apellido-profesor").val(),
                fecha_tema: $("#fecha-tema").val(),
                titulo_tema: $("#titulo-tema").val(),
                descripcion_tema: $("#descripcion-tema").val()
            },
            success: function (respuesta) {
                // alert(respuesta);
                var data_filtro_temas = JSON.parse(respuesta);

                if (!(data_filtro_temas.success)) {
                    alert("Error: no se encontraron temas");
                } else {
                    $('#btn-filtro-tema').prop('disabled', false);
                    $('#form-filtro-tema').hide();

                    // vacio el contenedor del abm
                    $('#contenedor-tabla-abm-topic').empty();


                    $('#contenedor-tabla-abm-topic').addClass('bg-white');

                    // creo dinamicamente la tabla del ABM de topic
                    var tabla_abm = document.createElement('table');
                    tabla_abm.id = 'tabla-abm-topic';
                    tabla_abm.classList.add('table', 'tabla-abm-topic', 'display');

                    // creo el thead de la tabla
                    var thead_tabla = document.createElement('thead');
                    // creo elemento tr para agregar los th con valores de los titulos de las columnas
                    var tr_thead_tabla = document.createElement('tr');


                    var titulos_columnas_abm_topic = ['ID', 'Titulo', 'Descripcion', 'Fecha', 'Carrera', 'Año Carrera', 'Materia', 'Turno', 'Comision', 'Apellido', '-'];

                    // recorro el array creado anteriormente de los titulos 
                    titulos_columnas_abm_topic.forEach(function (titulo) {
                        var th_tabla = document.createElement('th');
                        th_tabla.textContent = titulo;

                        // agrego como clase la posicion del titulo dentro del array para colocar clases distintas
                        var num_columna = 'columna-' + titulos_columnas_abm_topic.indexOf(titulo);

                        th_tabla.classList.add(num_columna);

                        tr_thead_tabla.appendChild(th_tabla);

                    });


                    // creo el tbody de la tabla
                    var tbody_tabla = document.createElement('tbody');


                    // recorro los valores obtenidos de la respuesta ajax
                    data_filtro_temas.respuesta.forEach(function (topic) {
                        // alert(topic);
                        var tr_tbody_tabla = document.createElement('tr');


                        // Object.values(topic).forEach(function (dato_topic) {
                        //     if (topic.id_topic) {

                        //     } else {
                        //         var td_tbody_tabla = document.createElement('td');
                        //             td_tbody_tabla.textContent = dato_topic;

                        //             tr_tbody_tabla.appendChild(td_tbody_tabla);

                        //     };

                        //     console.log(dato_topic);
                        // });

                        Object.entries(topic).forEach(function ([dato_topic, valor]) {

                            if (dato_topic == 'id_libro_tema_for_btns') {
                                var td_tbody_tabla = document.createElement('td');
                                td_tbody_tabla.classList.add('d-flex', 'justify-content-center');

                                // creo los botones y le doy como id al valor de id del topic. id o atributo?

                                // btn ver topic


                                var ver_topic = document.createElement("button");
                                // ver_topic.textContent = 'VER';
                                ver_topic.classList.add("btn", "btn-primary");
                                ver_topic.id = 'ver_topic';
                                ver_topic.setAttribute("id_topic", valor);
                                ver_topic.setAttribute('type', "button");

                                ver_topic.onclick = function () {
                                    // fn carga de datos de topic en tabla del modal

                                    restablecer_valores_modal_ver_tema();

                                    $('#ver-tema-id-libro-tema').val("");

                                    fill_table_ver_datos_topic(valor);
                                    $('#ver-tema-id-libro-tema').val(valor);


                                    $("#modal-form-ver-tema").addClass("d-block");
                                    $("#header").addClass("opacity-25");
                                    $("#main-container").addClass("opacity-25");
                                    $("#body").addClass("fondo-desactivado");

                                };

                                var icono_ver = document.createElement("ion-icon");
                                icono_ver.setAttribute('name', "search");

                                ver_topic.appendChild(icono_ver);


                                // BTN modificar topic

                                var btn_modif_topic = document.createElement("button");
                                // btn_modif_topic.textContent = 'Modificar';
                                btn_modif_topic.classList.add("btn", "btn-warning");
                                btn_modif_topic.id = 'btn_modif_topic';
                                btn_modif_topic.setAttribute("id_topic", valor);
                                btn_modif_topic.setAttribute('type', "button");

                                btn_modif_topic.onclick = function () {
                                    // fn modificar topic
                                    alert(valor);

                                    fill_form_modify_topic(valor);


                                };


                                var icono_modificar = document.createElement("ion-icon");
                                icono_modificar.setAttribute('name', "pencil");


                                btn_modif_topic.appendChild(icono_modificar);


                                // Btn eliminar topic
                                var btn_delete_topic = document.createElement("button");
                                btn_delete_topic.id = 'btn_delete_topic';
                                btn_delete_topic.setAttribute("id_topic", valor);
                                btn_delete_topic.setAttribute('type', "button");


                                // btn_delete_topic.textContent = 'Eliminar';
                                btn_delete_topic.classList.add("btn", "btn-danger");
                                btn_delete_topic.onclick = function () {
                                    // fn delete topic
                                    alert(valor);

                                };

                                var icono_eliminar = document.createElement("ion-icon");
                                icono_eliminar.setAttribute('name', "trash");

                                btn_delete_topic.appendChild(icono_eliminar);

                                // <ion-icon name="trash"></ion-icon>





                                td_tbody_tabla.appendChild(ver_topic);
                                td_tbody_tabla.appendChild(btn_modif_topic);
                                td_tbody_tabla.appendChild(btn_delete_topic);

                                tr_tbody_tabla.appendChild(td_tbody_tabla);



                            } else {
                                // creo los td con los valores de los datos de los topic
                                var td_tbody_tabla = document.createElement('td');
                                td_tbody_tabla.textContent = valor;

                                tr_tbody_tabla.appendChild(td_tbody_tabla);

                            }
                            // console.log(dato_topic + ": " + valor);
                        });



                        tbody_tabla.appendChild(tr_tbody_tabla);

                    });


                    // creo el tbody de la tabla con los datos obtenidos de la respuesta ajax


                    // Inserto elementos de la tabla creados anteriormente
                    thead_tabla.appendChild(tr_thead_tabla);
                    tabla_abm.appendChild(thead_tabla);

                    tabla_abm.appendChild(tbody_tabla);



                    // Inserto la tabla con elementos creados en el contenedor
                    document.getElementById("contenedor-tabla-abm-topic").appendChild(tabla_abm);

                    // ----------------------------------------------------------------

                    var table = $('#tabla-abm-topic').DataTable({
                        orderCellsTop: true,
                        fixedHeader: true
                    });

                    //Creamos una fila en el head de la tabla y lo clonamos para cada columna
                    // $('#tabla-abm-topic thead tr').clone(true).appendTo('#tabla-abm-topic thead');

                    // $('#tabla-abm-topic thead tr:eq(1) th').each(function (i) {
                    //     var title = $(this).text(); //es el nombre de la columna
                    //     $(this).html('<input type="text" placeholder="Search...' + title + '" />');

                    //     // fn de buscador de cada search
                    //     $('input', this).on('keyup change', function () {
                    //         if (table.column(i).search() !== this.value) {
                    //             table
                    //                 .column(i)
                    //                 .search(this.value)
                    //                 .draw();
                    //         }
                    //     });
                    // });





                }

            },
            error: function (jqXHR, textStatus, errorThrown) {
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


    });

});

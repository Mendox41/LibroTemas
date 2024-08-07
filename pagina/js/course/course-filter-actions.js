import { fill_table_ver_datos_course, fill_form_modify_course } from './get-course.js';
import { deshabilitar_contenedores, restablecer_contenedores, restablecer_valores_modal_modify_curso, restablecer_valores_modal_ver_curso } from '../modals-actions/modals-abm-courses.js';


$(document).ready(function () {


    var estado = $('#select-estado-filtro').val();

    // evento cuando cambia lo seleccionado en el select de estado del filtro de un curso
    $('#select-estado-filtro').change(function () {
        // Obtén el valor seleccionado
        estado = $(this).val();

        // Muestra el valor seleccionado en un elemento <p>
        // console.log(estado);
    });

    //  Funcionalidad al boton del filtro inicial para buscar los cursos y crear tabla dinamicamente
    $("#btn-buscar-curso").click(function () {

        // console.log(estado);

        // Escuchar clic en el botón de búsqueda de cursos
        $.ajax({
            url: '../../php/course/get-courses-filter.php',
            type: 'POST',
            data: {
                nombre_carrera: $("#nombre-carrera-filtro").val(),
                anio_carrera: $("#anio-carrera-filtro").val(),
                nombre_materia: $("#nombre-materia-filtro").val(),
                comision: $("#comision-filtro").val(),
                turno: $("#turno-filtro").val(),

                usuario: $("#nombre-usuario-filtro").val(),
                nombre_profesor: $("#nombre-profesor-filtro").val(),
                apellido_profesor: $("#apellido-profesor-filtro").val(),

                semestre: $("#semestre-filtro").val(),
                ciclo: $("#ciclo-lectivo-filtro").val(),

                activo: estado

            },
            success: function (respuesta) {
                var data_filtro_cursos = JSON.parse(respuesta);

                if (!(data_filtro_cursos.success)) {

                    // caso de no encontrar cursos con los datos ingresados en el filtro 
                    // alert("Error: no se encontraron cursos");

                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data_filtro_cursos.message);
                    $("#modal-title-respuesta").addClass("text-danger");

                    // deshabilito contenedores de fondo
                    deshabilitar_contenedores();

                    // hago visible el modal de respuesta
                    $("#modal-container-respuesta").addClass("d-block");

                } else {
                    $('#btn-filtro-curso').prop('disabled', false);
                    $('#form-filtro-curso').hide();

                    // vacio el contenedor del abm
                    $('#contenedor-tabla-abm-course').empty();


                    $('#contenedor-tabla-abm-course').addClass('bg-white');

                    // actualizo campos de inputs del filtro inicial al modal filtro cursos
                    // update_inputs_modal_filtro_cursos(); // FALTA CREAR EL MODAL DE FILTRO DE CURSOS

                    // creo dinamicamente la tabla del ABM de course
                    var tabla_abm = document.createElement('table');
                    tabla_abm.id = 'tabla-abm-course';
                    tabla_abm.classList.add('tabla-abm-course', 'display');

                    // creo el thead de la tabla
                    var thead_tabla = document.createElement('thead');
                    // creo elemento tr para agregar los th con valores de los titulos de las columnas
                    var tr_thead_tabla = document.createElement('tr');


                    var titulos_columnas_abm_course = ['ID', 'Carrera', 'Año Carrera', 'Materia', 'Turno', 'Comision', 'Ciclo', 'Semestre', 'Docente', 'Estado', '-'];

                    // recorro el array creado anteriormente de los titulos 
                    titulos_columnas_abm_course.forEach(function (titulo) {
                        var th_tabla = document.createElement('th');
                        th_tabla.textContent = titulo;

                        // agrego como clase la posicion del titulo dentro del array para colocar clases distintas
                        var num_columna = 'columna-' + titulos_columnas_abm_course.indexOf(titulo);

                        th_tabla.classList.add(num_columna);

                        tr_thead_tabla.appendChild(th_tabla);

                    });


                    // creo el tbody de la tabla
                    var tbody_tabla = document.createElement('tbody');
                    tbody_tabla.id = 'tabla-abm-course-tbody';


                    // recorro los valores obtenidos de la respuesta ajax
                    data_filtro_cursos.respuesta.forEach(function (course) {
                        // alert(course);
                        var tr_tbody_tabla = document.createElement('tr');

                        var estado = course.isActive;


                        Object.entries(course).forEach(function ([dato_course, valor]) {

                            if (dato_course == 'id_curso_for_btns') {
                                var td_tbody_tabla = document.createElement('td');
                                td_tbody_tabla.classList.add('d-flex', 'justify-content-center');

                                // creo los botones y le doy como id al valor de id del course. id o atributo?

                                // btn ver course
                                var ver_course = document.createElement("button");

                                // ver_course.textContent = 'VER';
                                ver_course.classList.add("btn", "btn-primary");
                                ver_course.id = 'ver_course';
                                ver_course.setAttribute("id_course", valor);
                                ver_course.setAttribute('type', "button");

                                ver_course.onclick = function () {
                                    // fn carga de datos de course en tabla del modal

                                    // vacio campo con datos anteriores
                                    restablecer_valores_modal_ver_curso();
                                    $('#ver-curso-id').val("");

                                    fill_table_ver_datos_course(valor);
                                    $('#ver-curso-id').val(valor);

                                    // deshabilito contenedores de fondo
                                    deshabilitar_contenedores();

                                    // habilito modal de ver curso
                                    $("#modal-form-ver-curso").addClass("d-block");

                                };

                                var icono_ver = document.createElement("ion-icon");
                                icono_ver.setAttribute('name', "search");

                                ver_course.appendChild(icono_ver);


                                // BTN modificar course

                                var btn_modif_course = document.createElement("button");
                                // btn_modif_course.textContent = 'Modificar';
                                btn_modif_course.classList.add("btn", "btn-warning");
                                btn_modif_course.id = 'btn_modif_course';
                                btn_modif_course.setAttribute("id_course", valor);
                                btn_modif_course.setAttribute('type', "button");

                                btn_modif_course.onclick = function () {
                                    // fn modificar course
                                    // alert(valor);
                                    // vacio campo con datos anteriores

                                    $('#modify-id-curso').val("");
                                    restablecer_valores_modal_modify_curso();

                                    fill_form_modify_course(valor);
                                    $('#modify-id-curso').val(valor);

                                    // deshabilito contenedores de fondo
                                    deshabilitar_contenedores();

                                    // habilito modal de modificar curso
                                    $("#modal-form-modify-curso").addClass("d-block");

                                    // $("#header").addClass("opacity-25");
                                    // $("#main-container").addClass("opacity-25");
                                    // $("#body").addClass("fondo-desactivado");


                                };


                                var icono_modificar = document.createElement("ion-icon");
                                icono_modificar.setAttribute('name', "pencil");


                                btn_modif_course.appendChild(icono_modificar);


                                // Btn eliminar course
                                var btn_delete_course = document.createElement("button");
                                btn_delete_course.id = 'btn_act_desac_course';
                                btn_delete_course.setAttribute("id_course", valor);
                                btn_delete_course.setAttribute('type', "button");

                                if (estado == 0) {
                                    btn_delete_course.classList.add("btn", "btn-success");

                                } else {
                                    btn_delete_course.classList.add("btn", "btn-danger");

                                }


                                // btn_delete_course.textContent = 'Eliminar';
                                btn_delete_course.onclick = function () {
                                    // fn delete course
                                    // alert(valor);
                                    // vacio campo con datos anteriores



                                    $('#id-curso-modal-confirm-act-desac').val("");
                                    $('#estado-curso-modal-confirm-act-desac').val("");


                                    $('#id-curso-modal-confirm-act-desac').val(valor);
                                    $('#estado-curso-modal-confirm-act-desac').val(estado);



                                    // deshabilito contenedores de fondo
                                    deshabilitar_contenedores();

                                    var titulo_modal_confirm_act_desac = $('#titulo-confirm-act-desac-curso');
                                    var h3_modal_confirm_act_desac = $('#h3-act-desac-curso');

                                    titulo_modal_confirm_act_desac.empty();
                                    h3_modal_confirm_act_desac.empty();

                                    if (estado == 0) {
                                        titulo_modal_confirm_act_desac.text('Modal confirm activar curso');
                                        h3_modal_confirm_act_desac.text('¿Desea activar este curso?');
                                    } else {
                                        titulo_modal_confirm_act_desac.text('Modal confirm desactivar curso');
                                        h3_modal_confirm_act_desac.text('¿Desea desactivar este curso?');
                                    }



                                    // habilito modal de confirm eliminar curso
                                    $("#modal-container-confirm-act-desac-curso").addClass("d-block");




                                };

                                var icono_power = document.createElement("ion-icon");
                                icono_power.setAttribute('name', "power");

                                btn_delete_course.appendChild(icono_power);


                                td_tbody_tabla.appendChild(ver_course);
                                td_tbody_tabla.appendChild(btn_modif_course);
                                td_tbody_tabla.appendChild(btn_delete_course);

                                tr_tbody_tabla.appendChild(td_tbody_tabla);



                            } else if (dato_course == 'isActive') {

                                // creo los td con los valores de los datos de los course
                                var td_tbody_tabla = document.createElement('td');
                                if (valor == 1) {
                                    td_tbody_tabla.textContent = "Activo";
                                } else {
                                    td_tbody_tabla.textContent = "Desactivado";
                                }

                                tr_tbody_tabla.appendChild(td_tbody_tabla);

                            } else {
                                // creo los td con los valores de los datos de los course
                                var td_tbody_tabla = document.createElement('td');
                                td_tbody_tabla.textContent = valor;

                                tr_tbody_tabla.appendChild(td_tbody_tabla);

                            }
                            // console.log(dato_course + ": " + valor);
                        });



                        tbody_tabla.appendChild(tr_tbody_tabla);

                    });


                    // creo el tbody de la tabla con los datos obtenidos de la respuesta ajax


                    // Inserto elementos de la tabla creados anteriormente
                    thead_tabla.appendChild(tr_thead_tabla);
                    tabla_abm.appendChild(thead_tabla);

                    tabla_abm.appendChild(tbody_tabla);



                    // Inserto la tabla con elementos creados en el contenedor
                    document.getElementById("contenedor-tabla-abm-course").appendChild(tabla_abm);

                    // ----------------------------------------------------------------

                    var table = $('#tabla-abm-course').DataTable({
                        orderCellsTop: true,
                        // fixedHeader: true
                    });

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

    // ------------------------------------------------

    var estado_modal_filtro = $('#select-estado-filtro').val();

    // evento cuando cambia lo seleccionado en el select de estado del filtro de un curso
    $('#select-estado-modal-filtro').change(function () {
        // Obtén el valor seleccionado
        estado_modal_filtro = $(this).val();

        // Muestra el valor seleccionado en un elemento <p>
        // console.log(estado);
    });

    $("#btn-modal-filtro-buscar-curso").click(function () {


        // Escuchar clic en el botón de búsqueda de cursos
        $.ajax({
            url: '../../php/course/get-courses-filter.php',
            type: 'POST',
            data: {
                nombre_carrera: $("#nombre-carrera-modal-filtro").val(),
                anio_carrera: $("#anio-carrera-modal-filtro").val(),
                nombre_materia: $("#nombre-materia-modal-filtro").val(),
                comision: $("#comision-modal-filtro").val(),
                turno: $("#turno-modal-filtro").val(),

                usuario: $("#nombre-usuario-modal-filtro").val(),
                nombre_profesor: $("#nombre-profesor-modal-filtro").val(),
                apellido_profesor: $("#apellido-profesor-modal-filtro").val(),

                semestre: $("#semestre-modal-filtro").val(),
                ciclo: $("#ciclo-lectivo-modal-filtro").val(),

                activo: estado_modal_filtro

            },
            success: function (respuesta) {
                var data_filtro_cursos = JSON.parse(respuesta);

                if (!(data_filtro_cursos.success)) {

                    // caso de no encontrar cursos con los datos ingresados en el filtro 
                    // alert("Error: no se encontraron cursos");

                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data_filtro_cursos.message);
                    $("#modal-title-respuesta").addClass("text-danger");

                    // deshabilito contenedores de fondo
                    deshabilitar_contenedores();

                    // hago visible el modal de respuesta
                    $("#modal-container-respuesta").addClass("d-block");




                } else {
                    $('#btn-filtro-curso').prop('disabled', false);
                    $('#form-filtro-curso').hide();

                    // vacio el contenedor del abm
                    $('#contenedor-tabla-abm-course').empty();

                    // oculto el modal del filtro
                    $("#modal-form-buscar-curso").removeClass("d-block");

                    // restablesco los contenedores de fondo (main container)
                    restablecer_contenedores();


                    $('#contenedor-tabla-abm-course').addClass('bg-white');


                    // actualizo campos de inputs del filtro inicial al modal filtro cursos
                    // update_inputs_modal_filtro_cursos(); // FALTA CREAR EL MODAL DE FILTRO DE CURSOS

                    // creo dinamicamente la tabla del ABM de course
                    var tabla_abm = document.createElement('table');
                    tabla_abm.id = 'tabla-abm-course';
                    tabla_abm.classList.add('tabla-abm-course', 'display');

                    // creo el thead de la tabla
                    var thead_tabla = document.createElement('thead');
                    // creo elemento tr para agregar los th con valores de los titulos de las columnas
                    var tr_thead_tabla = document.createElement('tr');


                    var titulos_columnas_abm_course = ['ID', 'Carrera', 'Año Carrera', 'Materia', 'Turno', 'Comision', 'Ciclo', 'Semestre', 'Docente', 'Estado', '-'];

                    // recorro el array creado anteriormente de los titulos 
                    titulos_columnas_abm_course.forEach(function (titulo) {
                        var th_tabla = document.createElement('th');
                        th_tabla.textContent = titulo;

                        // agrego como clase la posicion del titulo dentro del array para colocar clases distintas
                        var num_columna = 'columna-' + titulos_columnas_abm_course.indexOf(titulo);

                        th_tabla.classList.add(num_columna);

                        tr_thead_tabla.appendChild(th_tabla);

                    });


                    // creo el tbody de la tabla
                    var tbody_tabla = document.createElement('tbody');
                    tbody_tabla.id = 'tabla-abm-course-tbody';


                    // recorro los valores obtenidos de la respuesta ajax
                    data_filtro_cursos.respuesta.forEach(function (course) {
                        // alert(course);
                        var tr_tbody_tabla = document.createElement('tr');

                        var estado = course.isActive;


                        Object.entries(course).forEach(function ([dato_course, valor]) {

                            if (dato_course == 'id_curso_for_btns') {
                                var td_tbody_tabla = document.createElement('td');
                                td_tbody_tabla.classList.add('d-flex', 'justify-content-center');

                                // creo los botones y le doy como id al valor de id del course. id o atributo?

                                // btn ver course
                                var ver_course = document.createElement("button");

                                // ver_course.textContent = 'VER';
                                ver_course.classList.add("btn", "btn-primary");
                                ver_course.id = 'ver_course';
                                ver_course.setAttribute("id_course", valor);
                                ver_course.setAttribute('type', "button");

                                ver_course.onclick = function () {
                                    // fn carga de datos de course en tabla del modal

                                    // vacio campo con datos anteriores
                                    // restablecer_valores_modal_ver_curso(); // Crear funcion con datos modificados a cursos
                                    $('#ver-curso-id').val("");

                                    fill_table_ver_datos_course(valor);
                                    $('#ver-curso-id').val(valor);

                                    // deshabilito contenedores de fondo
                                    deshabilitar_contenedores();

                                    // habilito modal de ver curso
                                    $("#modal-form-ver-curso").addClass("d-block");

                                    // $("#header").addClass("opacity-25");
                                    // $("#main-container").addClass("opacity-25");
                                    // $("#body").addClass("fondo-desactivado");

                                };

                                var icono_ver = document.createElement("ion-icon");
                                icono_ver.setAttribute('name', "search");

                                ver_course.appendChild(icono_ver);


                                // BTN modificar course

                                var btn_modif_course = document.createElement("button");
                                // btn_modif_course.textContent = 'Modificar';
                                btn_modif_course.classList.add("btn", "btn-warning");
                                btn_modif_course.id = 'btn_modif_course';
                                btn_modif_course.setAttribute("id_course", valor);
                                btn_modif_course.setAttribute('type', "button");

                                btn_modif_course.onclick = function () {
                                    // fn modificar course
                                    // alert(valor);
                                    // vacio campo con datos anteriores

                                    $('#modify-id-curso').val("");
                                    restablecer_valores_modal_modify_curso();

                                    fill_form_modify_course(valor);
                                    $('#modify-id-curso').val(valor);

                                    // deshabilito contenedores de fondo
                                    deshabilitar_contenedores();

                                    // habilito modal de modificar curso
                                    $("#modal-form-modify-curso").addClass("d-block");

                                    // $("#header").addClass("opacity-25");
                                    // $("#main-container").addClass("opacity-25");
                                    // $("#body").addClass("fondo-desactivado");


                                };


                                var icono_modificar = document.createElement("ion-icon");
                                icono_modificar.setAttribute('name', "pencil");


                                btn_modif_course.appendChild(icono_modificar);


                                // Btn eliminar course
                                var btn_delete_course = document.createElement("button");
                                btn_delete_course.id = 'btn_act_desac_course';
                                btn_delete_course.setAttribute("id_course", valor);
                                btn_delete_course.setAttribute('type', "button");

                                if (estado == 0) {
                                    btn_delete_course.classList.add("btn", "btn-success");

                                } else {
                                    btn_delete_course.classList.add("btn", "btn-danger");

                                }


                                // btn_delete_course.textContent = 'Eliminar';
                                btn_delete_course.onclick = function () {
                                    // fn delete course
                                    // alert(valor);
                                    // vacio campo con datos anteriores



                                    $('#id-curso-modal-confirm-act-desac').val("");
                                    $('#estado-curso-modal-confirm-act-desac').val("");


                                    $('#id-curso-modal-confirm-act-desac').val(valor);
                                    $('#estado-curso-modal-confirm-act-desac').val(estado);



                                    // deshabilito contenedores de fondo
                                    deshabilitar_contenedores();

                                    var titulo_modal_confirm_act_desac = $('#titulo-confirm-act-desac-curso');
                                    var h3_modal_confirm_act_desac = $('#h3-act-desac-curso');

                                    titulo_modal_confirm_act_desac.empty();
                                    h3_modal_confirm_act_desac.empty();

                                    if (estado == 0) {
                                        titulo_modal_confirm_act_desac.text('Modal confirm activar curso');
                                        h3_modal_confirm_act_desac.text('¿Desea activar este curso?');
                                    } else {
                                        titulo_modal_confirm_act_desac.text('Modal confirm desactivar curso');
                                        h3_modal_confirm_act_desac.text('¿Desea desactivar este curso?');
                                    }



                                    // habilito modal de confirm eliminar curso
                                    $("#modal-container-confirm-act-desac-curso").addClass("d-block");




                                };

                                var icono_power = document.createElement("ion-icon");
                                icono_power.setAttribute('name', "power");

                                btn_delete_course.appendChild(icono_power);


                                td_tbody_tabla.appendChild(ver_course);
                                td_tbody_tabla.appendChild(btn_modif_course);
                                td_tbody_tabla.appendChild(btn_delete_course);

                                tr_tbody_tabla.appendChild(td_tbody_tabla);



                            } else if (dato_course == 'isActive') {

                                // creo los td con los valores de los datos de los course
                                var td_tbody_tabla = document.createElement('td');
                                if (valor == 1) {
                                    td_tbody_tabla.textContent = "Activo";
                                } else {
                                    td_tbody_tabla.textContent = "Desactivado";
                                }

                                tr_tbody_tabla.appendChild(td_tbody_tabla);

                            } else {
                                // creo los td con los valores de los datos de los course
                                var td_tbody_tabla = document.createElement('td');
                                td_tbody_tabla.textContent = valor;

                                tr_tbody_tabla.appendChild(td_tbody_tabla);

                            }
                            // console.log(dato_course + ": " + valor);
                        });



                        tbody_tabla.appendChild(tr_tbody_tabla);

                    });


                    // creo el tbody de la tabla con los datos obtenidos de la respuesta ajax


                    // Inserto elementos de la tabla creados anteriormente
                    thead_tabla.appendChild(tr_thead_tabla);
                    tabla_abm.appendChild(thead_tabla);

                    tabla_abm.appendChild(tbody_tabla);



                    // Inserto la tabla con elementos creados en el contenedor
                    document.getElementById("contenedor-tabla-abm-course").appendChild(tabla_abm);

                    // ----------------------------------------------------------------

                    var table = $('#tabla-abm-course').DataTable({
                        orderCellsTop: true,
                        // fixedHeader: true
                    });

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



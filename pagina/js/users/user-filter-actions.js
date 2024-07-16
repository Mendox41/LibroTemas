// import { fill_table_ver_datos_user, fill_form_modify_user } from './get-user.js';
import { deshabilitar_contenedores } from '../modals-actions/modals-abm-users.js';
//  restablecer_valores_modal_ver_usuario 

$(document).ready(function () {


    var estado = $('#select-estado-filtro').val();
    var admin = $('#admin-filtro').val();


    // evento cuando cambia lo seleccionado en el select de estado del filtro de un usuario
    $('#select-estado-filtro').change(function () {
        // Obtén el valor seleccionado
        estado = $(this).val();

    });

    // evento cuando cambia lo seleccionado en el select de administrador del filtro de un usuario
    $('#admin-filtro').change(function () {
        // Obtén el valor seleccionado
        admin = $(this).val();

    });


    //  Funcionalidad al boton del filtro inicial para buscar los usuarios y crear tabla dinamicamente
    $("#btn-buscar-usuario").click(function () {

        // console.log(estado + " / " + admin);

        // Escuchar clic en el botón de búsqueda de usuarios
        $.ajax({
            url: '../../php/user/get-users-filter.php',
            type: 'POST',
            data: {

                usuario: $("#nombre-usuario-filtro").val(),
                legajo: $("#legajo-filtro").val(),
                nombre_profesor: $("#nombre-profesor-filtro").val(),
                apellido_profesor: $("#apellido-profesor-filtro").val(),

                admin: admin,
                activo: estado

            },
            success: function (respuesta) {
                alert(respuesta);
                var data_filtro_usuarios = JSON.parse(respuesta);

                if (!(data_filtro_usuarios.success)) {

                    // caso de no encontrar usuarios con los datos ingresados en el filtro 
                    // alert("Error: no se encontraron usuarios");

                    // agrego el mensaje de respuesta del servidor
                    $("#modal-title-respuesta").empty();
                    $("#modal-title-respuesta").text(data_filtro_usuarios.message);
                    $("#modal-title-respuesta").addClass("text-danger");

                    // deshabilito contenedores de fondo
                    deshabilitar_contenedores();

                    // hago visible el modal de respuesta
                    $("#modal-container-respuesta").addClass("d-block");




                } else {
                    $('#btn-filtro-usuario').prop('disabled', false);
                    $('#form-filtro-usuario').hide();

                    // vacio el contenedor del abm
                    $('#contenedor-tabla-abm-user').empty();


                    $('#contenedor-tabla-abm-user').addClass('bg-white');

                    // actualizo campos de inputs del filtro inicial al modal filtro usuarios
                    // update_inputs_modal_filtro_usuarios(); // FALTA CREAR EL MODAL DE FILTRO DE CURSOS

                    // creo dinamicamente la tabla del ABM de user
                    var tabla_abm = document.createElement('table');
                    tabla_abm.id = 'tabla-abm-user';
                    tabla_abm.classList.add('tabla-abm-user', 'display');

                    // creo el thead de la tabla
                    var thead_tabla = document.createElement('thead');
                    // creo elemento tr para agregar los th con valores de los titulos de las columnas
                    var tr_thead_tabla = document.createElement('tr');


                    var titulos_columnas_abm_user = ['ID', 'Usuario', 'Legajo', 'Docente', 'Estado', 'Administrador', '-'];

                    // recorro el array creado anteriormente de los titulos 
                    titulos_columnas_abm_user.forEach(function (titulo) {
                        var th_tabla = document.createElement('th');
                        th_tabla.textContent = titulo;

                        // agrego como clase la posicion del titulo dentro del array para colocar clases distintas
                        var num_columna = 'columna-' + titulos_columnas_abm_user.indexOf(titulo);

                        th_tabla.classList.add(num_columna);

                        tr_thead_tabla.appendChild(th_tabla);

                    });


                    // creo el tbody de la tabla
                    var tbody_tabla = document.createElement('tbody');
                    tbody_tabla.id = 'tabla-abm-user-tbody';


                    // recorro los valores obtenidos de la respuesta ajax
                    data_filtro_usuarios.respuesta.forEach(function (user) {
                        // alert(user);
                        var tr_tbody_tabla = document.createElement('tr');

                        Object.entries(user).forEach(function ([dato_user, valor]) {

                            if (dato_user == 'id_profesor_for_btns') {
                                var td_tbody_tabla = document.createElement('td');
                                td_tbody_tabla.classList.add('d-flex', 'justify-content-center');

                                // creo los botones y le doy como id al valor de id del user. id o atributo?

                                // btn ver user
                                var ver_user = document.createElement("button");

                                // ver_user.textContent = 'VER';
                                ver_user.classList.add("btn", "btn-primary");
                                ver_user.id = 'ver_user';
                                ver_user.setAttribute("id_user", valor);
                                ver_user.setAttribute('type', "button");

                                ver_user.onclick = function () {
                                    // fn carga de datos de user en tabla del modal

                                    // vacio campo con datos anteriores
                                    // restablecer_valores_modal_ver_tema(); // Crear funcion con datos modificados a usuarios
                                    $('#ver-tema-id-libro-tema').val("");

                                    fill_table_ver_datos_user(valor);
                                    $('#ver-tema-id-libro-tema').val(valor);

                                    // deshabilito contenedores de fondo
                                    deshabilitar_contenedores();

                                    // habilito modal de ver tema
                                    $("#modal-form-ver-tema").addClass("d-block");

                                    // $("#header").addClass("opacity-25");
                                    // $("#main-container").addClass("opacity-25");
                                    // $("#body").addClass("fondo-desactivado");

                                };

                                var icono_ver = document.createElement("ion-icon");
                                icono_ver.setAttribute('name', "search");

                                ver_user.appendChild(icono_ver);


                                // BTN modificar user

                                var btn_modif_user = document.createElement("button");
                                // btn_modif_user.textContent = 'Modificar';
                                btn_modif_user.classList.add("btn", "btn-warning");
                                btn_modif_user.id = 'btn_modif_user';
                                btn_modif_user.setAttribute("id_user", valor);
                                btn_modif_user.setAttribute('type', "button");

                                btn_modif_user.onclick = function () {
                                    // fn modificar user
                                    // alert(valor);
                                    // vacio campo con datos anteriores

                                    $('#id-libro-tema-modal-modify').val("");
                                    restablecer_valores_modal_modify_tema();

                                    fill_form_modify_user(valor);
                                    $('#id-libro-tema-modal-modify').val(valor);

                                    // deshabilito contenedores de fondo
                                    deshabilitar_contenedores();

                                    // habilito modal de modificar tema
                                    $("#modal-form-modify-tema").addClass("d-block");

                                    // $("#header").addClass("opacity-25");
                                    // $("#main-container").addClass("opacity-25");
                                    // $("#body").addClass("fondo-desactivado");


                                };


                                var icono_modificar = document.createElement("ion-icon");
                                icono_modificar.setAttribute('name', "pencil");


                                btn_modif_user.appendChild(icono_modificar);


                                // Btn eliminar user
                                var btn_delete_user = document.createElement("button");
                                btn_delete_user.id = 'btn_delete_user';
                                btn_delete_user.setAttribute("id_user", valor);
                                btn_delete_user.setAttribute('type', "button");


                                // btn_delete_user.textContent = 'Eliminar';
                                btn_delete_user.classList.add("btn", "btn-danger");
                                btn_delete_user.onclick = function () {
                                    // fn delete user
                                    // alert(valor);
                                    // vacio campo con datos anteriores
                                    $('#id-libro-tema-modal-confirm-delete').val("");


                                    $('#id-libro-tema-modal-confirm-delete').val(valor);

                                    // deshabilito contenedores de fondo
                                    deshabilitar_contenedores();

                                    // habilito modal de confirm eliminar tema
                                    $("#modal-container-confirm-delete-tema").addClass("d-block");

                                    // $("#header").addClass("opacity-25");
                                    // $("#main-container").addClass("opacity-25");
                                    // $("#body").addClass("fondo-desactivado");


                                };

                                var icono_eliminar = document.createElement("ion-icon");
                                icono_eliminar.setAttribute('name', "trash");

                                btn_delete_user.appendChild(icono_eliminar);


                                td_tbody_tabla.appendChild(ver_user);
                                td_tbody_tabla.appendChild(btn_modif_user);
                                td_tbody_tabla.appendChild(btn_delete_user);

                                tr_tbody_tabla.appendChild(td_tbody_tabla);



                            } else if (dato_user == 'isActive') {

                                // creo los td con los valores de los datos de los user
                                var td_tbody_tabla = document.createElement('td');
                                if (valor == 1) {
                                    td_tbody_tabla.textContent = "Activo";
                                } else {
                                    td_tbody_tabla.textContent = "Desactivado";
                                }

                                tr_tbody_tabla.appendChild(td_tbody_tabla);

                            } else if (dato_user == 'IsAdmin') {
                                var td_tbody_tabla = document.createElement('td');
                                if (valor == 1) {
                                    td_tbody_tabla.textContent = "Si";
                                } else {
                                    td_tbody_tabla.textContent = "No";
                                }

                                tr_tbody_tabla.appendChild(td_tbody_tabla);
                            } else {
                                // creo los td con los valores de los datos de los user
                                var td_tbody_tabla = document.createElement('td');
                                td_tbody_tabla.textContent = valor;

                                tr_tbody_tabla.appendChild(td_tbody_tabla);

                            }
                            // console.log(dato_user + ": " + valor);
                        });



                        tbody_tabla.appendChild(tr_tbody_tabla);

                    });


                    // creo el tbody de la tabla con los datos obtenidos de la respuesta ajax


                    // Inserto elementos de la tabla creados anteriormente
                    thead_tabla.appendChild(tr_thead_tabla);
                    tabla_abm.appendChild(thead_tabla);

                    tabla_abm.appendChild(tbody_tabla);



                    // Inserto la tabla con elementos creados en el contenedor
                    document.getElementById("contenedor-tabla-abm-user").appendChild(tabla_abm);

                    // ----------------------------------------------------------------

                    var table = $('#tabla-abm-user').DataTable({
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
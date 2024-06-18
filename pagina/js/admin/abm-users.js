$(document).ready(function () {

    $.ajax({
        url: '../../php/session/get-session.php',
        type: 'GET',

        success: function (respuesta) {

            var dataSession = JSON.parse(respuesta);

            // adjunto los datos de las variables de sesion en las variables creadas previamente
            id_usuario = dataSession.id_usuario;
            usuario = dataSession.usuario;
            active = dataSession.active;
            admin = dataSession.admin;


            if (dataSession.success == true && id_usuario !== null && id_usuario !== undefined && admin === 1) {

                var titulos_columnas_abm_usuarios = ['Legajo', 'Usuario', 'Nombre y Apellido', 'Grado', 'Carrera', 'Activo', 'Administrador', '-'];


                $.ajax({
                    url: '../../php/user/get-users.php',
                    method: 'POST',
                    success: function (segunda_respuesta) {
                        alert(segunda_respuesta); //RESPUESTA DE LAS RELACIONES ASOCIADAS AL PROFESOR
                        var data_usuarios = JSON.parse(segunda_respuesta);

                        // alert(data_usuarios.success)
                        // alert(data_usuarios.cantidadRelaciones)

                        if (data_usuarios.success == true && data_usuarios.cantidad_usuarios_registrados > 0) {

                            // alert(data_usuarios.cantidad_usuarios_registrados);

                            // creo dinamicamente la tabla del ABM de usuarios
                            var tabla_abm = document.createElement('table');
                            tabla_abm.id = 'tabla-abm-usuarios';
                            tabla_abm.classList.add('table', 'tabla-abm-usuarios');

                            // creo el thead de la tabla
                            var thead_tabla = document.createElement('thead');
                            // creo elemento tr para agregar los th con valores de los titulos de las columnas
                            var tr_thead_tabla = document.createElement('tr');

                            // recorro el array creado anteriormente de los titulos 
                            titulos_columnas_abm_usuarios.forEach(function (titulo) {
                                var th_tabla = document.createElement('th');
                                th_tabla.textContent = titulo;

                                // agrego como clase la posicion del titulo dentro del array para colocar clases distintas
                                var num_columna = 'columna-' + titulos_columnas_abm_usuarios.indexOf(titulo);

                                th_tabla.classList.add(num_columna);

                                tr_thead_tabla.appendChild(th_tabla);

                            });


                            // creo el tbody de la tabla
                            var tbody_tabla = document.createElement('tbody');


                            // recorro los valores obtenidos de la respuesta ajax
                            data_usuarios.respuesta.forEach(function (usuario) {
                                // alert(usuario);
                                var tr_tbody_tabla = document.createElement('tr');


                                // Object.values(usuario).forEach(function (dato_usuario) {
                                //     if (usuario.id_usuario) {

                                //     } else {
                                //         var td_tbody_tabla = document.createElement('td');
                                //             td_tbody_tabla.textContent = dato_usuario;

                                //             tr_tbody_tabla.appendChild(td_tbody_tabla);

                                //     };

                                //     console.log(dato_usuario);
                                // });

                                Object.entries(usuario).forEach(function ([dato_usuario, valor]) {

                                    if (dato_usuario == 'id_usuario') {
                                        var td_tbody_tabla = document.createElement('td');
                                        td_tbody_tabla.classList.add('d-flex', 'justify-content-center');

                                        // creo los botones y le doy como id al valor de id del usuario. id o atributo?

                                        // btn ver usuario
                                        ver_usuario

                                        var ver_usuario = document.createElement("button");
                                        ver_usuario.textContent = 'VER';
                                        ver_usuario.classList.add("btn", "btn-primary");
                                        ver_usuario.id = 'ver_usuario';
                                        ver_usuario.setAttribute("id_usuario", valor);
                                        ver_usuario.setAttribute('type', "button");

                                        ver_usuario.onclick = function () {
                                            // fn carga de datos de usuario en tabla del modal

                                            // fill_form_ver_datos_usuario(valor);

                                            // alert(valor);
                                            $("#modal-form-ver-usuario").addClass("d-block");
                                            $("#header").addClass("opacity-25");
                                            $("#main-container").addClass("opacity-25");
                                            $("#body").addClass("fondo-desactivado");

                                        };

                                        // BTN modificar usuario

                                        // div dropdown
                                        var div_dropdown_modif_usuario = document.createElement("div");
                                        div_dropdown_modif_usuario.classList.add("dropdown");

                                        // btn dropdown
                                        var btn_dropdown = document.createElement("button");
                                        btn_dropdown.classList.add("btn", "btn-warning", "dropdown-toggle");
                                        btn_dropdown.setAttribute("type", 'button');
                                        btn_dropdown.setAttribute("data-bs-toggle", 'dropdown');
                                        btn_dropdown.setAttribute("aria-expanded", false);
                                        btn_dropdown.textContent = 'Modificar';

                                        // agrego btn_dropdown a div_dropdown_modif_usuario
                                        div_dropdown_modif_usuario.appendChild(btn_dropdown);

                                        // ul_dropdown
                                        var ul_dropdown = document.createElement("ul");
                                        ul_dropdown.classList.add("dropdown-menu", "bg-warning-subtle");

                                        // li_datos_dropdown
                                        var li_datos_dropdown = document.createElement("li");

                                        // a_datos_dropdown
                                        var a_datos_dropdown = document.createElement("a");
                                        a_datos_dropdown.classList.add("dropdown-item");
                                        a_datos_dropdown.id = 'btn-modif-datos-usuario';
                                        a_datos_dropdown.setAttribute("id_usuario", valor);
                                        a_datos_dropdown.textContent = 'Datos';

                                        a_datos_dropdown.onclick = function () {
                                            // fn mostrar modal de modificacion de datos de usuario
                                            alert(valor);

                                        };

                                        // agrego a_datos_dropdown a li_datos_dropdown
                                        li_datos_dropdown.appendChild(a_datos_dropdown);

                                        // li_contra_dropdown
                                        var li_contra_dropdown = document.createElement("li");

                                        // a_contra_dropdown
                                        var a_contra_dropdown = document.createElement("a");
                                        a_contra_dropdown.classList.add("dropdown-item");
                                        a_contra_dropdown.id = 'btn-modif-contrasena-usuario';
                                        a_contra_dropdown.textContent = 'Contraseña';
                                        a_contra_dropdown.setAttribute("id_usuario", valor);


                                        a_contra_dropdown.onclick = function () {
                                            // fn mostrar modal de modificacion de contraseña de usuario
                                            alert(valor);

                                        };


                                        // agrego a_contra_dropdown  a li_contra_dropdown
                                        li_contra_dropdown.appendChild(a_contra_dropdown);

                                        // agrego li_datos_dropdown a ul_dropdown
                                        ul_dropdown.appendChild(li_datos_dropdown);
                                        // agrego li_contra_dropdown a ul_dropdown
                                        ul_dropdown.appendChild(li_contra_dropdown);

                                        // agrego ul_dropdown a div_dropdown_modif_usuario
                                        div_dropdown_modif_usuario.appendChild(ul_dropdown);


                                        // ------------
                                        // btn modificar viejo
                                        // var btn_modif_usuario = document.createElement("button");
                                        // btn_modif_usuario.textContent = 'Modificar';
                                        // btn_modif_usuario.classList.add("btn", "btn-warning");
                                        // btn_modif_usuario.id = 'btn_modif_usuario';
                                        // btn_modif_usuario.setAttribute("id_usuario", valor);
                                        // btn_modif_usuario.setAttribute('type', "button");

                                        // btn_modif_usuario.onclick = function () {
                                        //     // fn modificar usuario
                                        //     alert(valor);

                                        // };

                                        // Btn desactivar/activar usuario
                                        var btn_activar_desactivar_usuario = document.createElement("button");
                                        btn_activar_desactivar_usuario.id = 'btn_activar_desactivar_usuario';
                                        btn_activar_desactivar_usuario.setAttribute("id_usuario", valor);
                                        btn_activar_desactivar_usuario.setAttribute('type', "button");


                                        if (usuario.isActive == 0) {
                                            btn_activar_desactivar_usuario.textContent = 'Activar';
                                            btn_activar_desactivar_usuario.classList.add("btn", "btn-success");
                                            btn_activar_desactivar_usuario.onclick = function () {
                                                // fn activar usuario
                                                alert(valor);

                                            };

                                        } else {
                                            btn_activar_desactivar_usuario.textContent = 'Desactivar';
                                            btn_activar_desactivar_usuario.classList.add("btn", "btn-danger");
                                            btn_activar_desactivar_usuario.onclick = function () {
                                                // fn desactivar usuario
                                                alert(valor);

                                            };

                                        };



                                        td_tbody_tabla.appendChild(ver_usuario);
                                        td_tbody_tabla.appendChild(div_dropdown_modif_usuario);
                                        // td_tbody_tabla.appendChild(btn_modif_usuario);
                                        td_tbody_tabla.appendChild(btn_activar_desactivar_usuario);

                                        tr_tbody_tabla.appendChild(td_tbody_tabla);



                                    } else if (dato_usuario == "isActive" || dato_usuario == "isAdmin") {
                                        var td_tbody_tabla = document.createElement('td');

                                        if (valor == 1) {
                                            td_tbody_tabla.textContent = "SI";

                                        } else {
                                            td_tbody_tabla.textContent = "NO";


                                        }
                                        // td_tbody_tabla.textContent = valor;

                                        tr_tbody_tabla.appendChild(td_tbody_tabla);

                                    } else {
                                        // creo los td con los valores de los datos de los usuarios
                                        var td_tbody_tabla = document.createElement('td');
                                        td_tbody_tabla.textContent = valor;

                                        tr_tbody_tabla.appendChild(td_tbody_tabla);

                                    }
                                    // console.log(dato_usuario + ": " + valor);
                                });



                                tbody_tabla.appendChild(tr_tbody_tabla);

                            });


                            // creo el tbody de la tabla con los datos obtenidos de la respuesta ajax


                            // Inserto elementos de la tabla creados anteriormente
                            thead_tabla.appendChild(tr_thead_tabla);
                            tabla_abm.appendChild(thead_tabla);

                            tabla_abm.appendChild(tbody_tabla);



                            // Inserto la tabla con elementos creados en el contenedor
                            document.getElementById("contenedor-tabla-abm-usuarios").appendChild(tabla_abm);



                            // });

                        } else {
                            alert('No hay usuarios registrados en sistema')
                        };

                    },
                    error: function (error) {
                        console.log(error);
                    }
                });

            } else {
                alert('El usuario ' + usuario + 'No posee permisos de administrador');
            };

        }, error: function (error) {
            console.log(error);
        }
    });



    // FUNCION MODIFICAR USUARIO

    // FUNCION VER DATOS DE UN USUARIO
    // function fill_form_ver_datos_usuario(valor);


    // FUNCION DESACTIVAR UN USUARIO

    // FUNCION ACTIVAR UN USUARIO



});
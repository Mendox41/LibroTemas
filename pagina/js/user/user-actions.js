$(document).ready(function () {

    // variables para almacenar valores de la sesion
    var id_usuario;
    var usuario;
    var active;
    var admin;

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

            if (dataSession.success == true && id_usuario !== null && id_usuario !== undefined) {
                // alert(id_usuario);

                $.ajax({
                    url: '../../php/user/related-subjects.php',
                    method: 'POST',
                    data: { 'id_usuario': id_usuario },

                    success: function (segunda_respuesta) {
                        alert(segunda_respuesta);
                        var data_related_subjects = JSON.parse(segunda_respuesta);

                        // alert(data_related_subjects.success)
                        // alert(data_related_subjects.cantidadRelaciones)
                        var cant_relaciones = data_related_subjects.cantidadRelaciones;

                        if (data_related_subjects.success == true && data_related_subjects.cantidadRelaciones > 0) {

                            // variables que tomaran valores para comparar en la iteracion mas adelante

                            var carreraAnterior;
                            var anioAnterior;
                            var materiaAnterior;
                            var id_collapse_number = 1;

                            var accordion_anios_carrera_anterior; // Va dentro de accordion body de carrera
                            var accordion_materias_anterior; // Va dentro de accordion body de anio
                            var accordion_comisiones_anterior; // Va dentro de accordion body de materia

                            var accordion_body_carrera_anterior;
                            var accordion_body_anio_carrera_anterior;
                            var accordion_body_materia_anterior;

                            var data_bs_parent_anio_carrera_anterior;
                            var data_bs_parent_materia_anterior;
                            var data_bs_parent_comision_anterior;


                            // Recorro el json para crear los accordion con los datos recolectados de la respuesta del Back
                            data_related_subjects.respuesta.forEach(function (relacion) {

                                // CARRERA ------------------------------------------------------------------------------------------------

                                // Creo un nuevo accordion item separado

                                // Creo el div de accordion-item y le asigno la  respectiva clase de bootstrap
                                var accordion_Item_Carrera = document.createElement("div");
                                accordion_Item_Carrera.classList.add("accordion-item");

                                // creo h2 y le asigno la respectiva clase de bootstrap
                                var accordion_header_carrera = document.createElement("h2");
                                accordion_header_carrera.classList.add("accordion-header");

                                // creo button y le asigno la respectiva clase y atrubutos de bootstrap
                                var button_carrera = document.createElement("button");
                                button_carrera.classList.add("accordion-button", "collapsed");
                                button_carrera.setAttribute("type", false);
                                button_carrera.setAttribute("data-bs-toggle", "collapse");

                                // creo variables y les asigno valores que se diferencien de otros para controlar elementos de mejor manera
                                var target_carrera = "#collapse" + id_collapse_number;
                                var control_carrera = "collapse" + id_collapse_number;
                                button_carrera.setAttribute("data-bs-target", target_carrera);

                                button_carrera.setAttribute("aria-expanded", "true");
                                button_carrera.setAttribute("aria-controls", control_carrera);

                                // Le agrego el nombre de la carrera al boton
                                button_carrera.textContent = relacion.carrera;

                                // agrego el botton al h2
                                accordion_header_carrera.appendChild(button_carrera);
                                // agrego el h2 al div del accordion item
                                accordion_Item_Carrera.appendChild(accordion_header_carrera);


                                // Creo el div que colapsa con sus respectivos elementos, clases y atributos
                                var div_collapse_carrera = document.createElement("div");

                                // Le doy valor al id del div
                                var id_collapse_carrera = "collapse" + id_collapse_number;
                                div_collapse_carrera.id = id_collapse_carrera;

                                id_collapse_number += 1;

                                // seteo clase y atributos a div_collapse_carrera
                                div_collapse_carrera.classList.add("accordion-collapse", "collapse");
                                div_collapse_carrera.setAttribute("data-bs-parent", "#accordionMain");

                                // Creo una variable accordion_body_carrera para luego insertrla en div_collapse_carrera dandole clase e id
                                var accordion_body_carrera = document.createElement("div");
                                accordion_body_carrera.classList.add("accordion-body");


                                // agrego id
                                var concat_accordion_body_carrera_id = "accordion-body-" + relacion.id_carrera;
                                accordion_body_carrera.id = concat_accordion_body_carrera_id;

                                // creo un accordion dentro del accordion body de carrera (accordion_body_carrera)
                                var accordion_anio_carrera = document.createElement("div");
                                var concat_accordion_anio_carrera_id = "accordion-anio-carrera-" + relacion.id_carrera;
                                accordion_anio_carrera.id = concat_accordion_anio_carrera_id;
                                accordion_anio_carrera.classList.add("accordion");


                                // agrego accordion_body_carrera a div_collapse_carrera
                                div_collapse_carrera.appendChild(accordion_body_carrera);
                                // agrego el div_collapse_carrera a accordion_Item_Carrera
                                accordion_Item_Carrera.appendChild(div_collapse_carrera);


                                // AÑO CARRERA ------------------------------------------------------------------------------------------------


                                // Creo un nuevo accordion item separado

                                // Creo el div de accordion-item y le asigno la  respectiva clase de bootstrap
                                var accordion_Item_anio_Carrera = document.createElement("div");
                                accordion_Item_anio_Carrera.classList.add("accordion-item");

                                // creo h2 y le asigno la respectiva clase de bootstrap
                                var accordion_header_anio_carrera = document.createElement("h2");
                                accordion_header_anio_carrera.classList.add("accordion-header");

                                // creo button y le asigno la respectiva clase y atrubutos de bootstrap
                                var button_anio_carrera = document.createElement("button");
                                button_anio_carrera.classList.add("accordion-button", "collapsed");
                                button_anio_carrera.setAttribute("type", false);
                                button_anio_carrera.setAttribute("data-bs-toggle", "collapse");

                                // creo variables y les asigno valores que se diferencien de otros para controlar elementos de mejor manera
                                var target_anio_carrera = "#collapse" + id_collapse_number;
                                var control_anio_carrera = "collapse" + id_collapse_number;
                                button_anio_carrera.setAttribute("data-bs-target", target_anio_carrera);

                                button_anio_carrera.setAttribute("aria-expanded", "true");
                                button_anio_carrera.setAttribute("aria-controls", control_anio_carrera);

                                // Le agrego el nombre de la carrera al boton
                                button_anio_carrera.textContent = relacion.anio;

                                // agrego el botton al h2
                                accordion_header_anio_carrera.appendChild(button_anio_carrera);
                                // agrego el h2 al div del accordion item
                                accordion_Item_anio_Carrera.appendChild(accordion_header_anio_carrera);


                                // Creo el div que colapsa con sus respectivos elementos, clases y atributos
                                var div_collapse_anio_carrera = document.createElement("div");

                                // Le doy valor al id del div
                                var id_collapse_anio_carrera = "collapse" + id_collapse_number;
                                div_collapse_anio_carrera.id = id_collapse_anio_carrera;

                                id_collapse_number += 1;

                                // seteo clase y atributos a div_collapse_anio_carrera
                                div_collapse_anio_carrera.classList.add("accordion-collapse", "collapse");


                                // Creo una variable accordion_body_anio_carrera para luego insertrla en div_collapse_anio_carrera dandole clase e id
                                var accordion_body_anio_carrera = document.createElement("div");
                                accordion_body_anio_carrera.classList.add("accordion-body");
                                // agrego id
                                var concat_accordion_body_anio_carrera_id = "accordion-body-" + relacion.id_anio + "-" + relacion.id_carrera;
                                accordion_body_anio_carrera.id = concat_accordion_body_anio_carrera_id;

                                // agrego accordion_body_anio_carrera a div_collapse_anio_carrera
                                div_collapse_anio_carrera.appendChild(accordion_body_anio_carrera);
                                // agrego el div_collapse_anio_carrera a accordion_Item_anio_Carrera
                                accordion_Item_anio_Carrera.appendChild(div_collapse_anio_carrera);

                                //  creo un accordion para agregar las materias (accordion item materia ) del respectivo año carrera
                                var accordion_materia = document.createElement("div");
                                var concat_accordion_materia_id = "accordion-anio-carrera-materia-" + relacion.id_carrera + '-' + relacion.id_anio;
                                accordion_materia.id = concat_accordion_materia_id;
                                accordion_materia.classList.add("accordion");


                                // Materia> ------------------------------------------------------------------------------------------------

                                // Creo un nuevo accordion item separado

                                // Creo el div de accordion-item y le asigno la  respectiva clase de bootstrap
                                var accordion_Item_materia = document.createElement("div");
                                accordion_Item_materia.classList.add("accordion-item");

                                // creo h2 y le asigno la respectiva clase de bootstrap
                                var accordion_header_materia = document.createElement("h2");
                                accordion_header_materia.classList.add("accordion-header");

                                // creo button y le asigno la respectiva clase y atrubutos de bootstrap
                                var button_materia = document.createElement("button");
                                button_materia.classList.add("accordion-button", "collapsed");
                                button_materia.setAttribute("type", false);
                                button_materia.setAttribute("data-bs-toggle", "collapse");

                                // creo variables y les asigno valores que se diferencien de otros para controlar elementos de mejor manera
                                var target_carrera = "#collapse" + id_collapse_number;
                                var control_materia = "collapse" + id_collapse_number;
                                button_materia.setAttribute("data-bs-target", target_carrera);

                                button_materia.setAttribute("aria-expanded", "true");
                                button_materia.setAttribute("aria-controls", control_materia);

                                // Le agrego el nombre de la carrera al boton
                                button_materia.textContent = relacion.materia;

                                // agrego el botton al h2
                                accordion_header_materia.appendChild(button_materia);
                                // agrego el h2 al div del accordion item
                                accordion_Item_materia.appendChild(accordion_header_materia);


                                // Creo el div que colapsa con sus respectivos elementos, clases y atributos
                                var div_collapse_materia = document.createElement("div");

                                // Le doy valor al id del div
                                var id_collapse_materia = "collapse" + id_collapse_number;
                                div_collapse_materia.id = id_collapse_materia;

                                id_collapse_number += 1;


                                // seteo clase y atributos a div_collapse_materia
                                div_collapse_materia.classList.add("accordion-collapse", "collapse");


                                // Creo una variable accordion_body_materia para luego insertrla en div_collapse_materia dandole clase e id
                                var accordion_body_materia = document.createElement("div");
                                accordion_body_materia.classList.add("accordion-body");
                                // agrego id
                                var concat_accordion_body_materia_id = "accordion-body-" + relacion.id_carrera + '-' + relacion.id_anio + "-" + relacion.id_materia;
                                accordion_body_materia.id = concat_accordion_body_materia_id;

                                // agrego accordion_body_materia a div_collapse_materia
                                div_collapse_materia.appendChild(accordion_body_materia);
                                // agrego el div_collapse_materia a accordion_Item_materia
                                accordion_Item_materia.appendChild(div_collapse_materia);



                                //  creo un accordion para agregar las comisiones (accordion item comison ) de la respectiva materia del respectivo año de la carrera
                                var accordion_comison = document.createElement("div");
                                var concat_accordion_comision_id = "accordion-anio-carrera-materia-comision-" + relacion.id_carrera + '-' + relacion.id_anio + "-" + relacion.id_materia;
                                accordion_comison.id = concat_accordion_comision_id;
                                accordion_comison.classList.add("accordion");


                                // Comision  ------------------------------------------------------------------------------------------------

                                // Creo un nuevo accordion item separado

                                // Creo el div de accordion-item y le asigno la  respectiva clase de bootstrap
                                var accordion_Item_comision = document.createElement("div");
                                accordion_Item_comision.classList.add("accordion-item");

                                // creo h2 y le asigno la respectiva clase de bootstrap
                                var accordion_header_comision = document.createElement("h2");
                                accordion_header_comision.classList.add("accordion-header");

                                // creo button y le asigno la respectiva clase y atrubutos de bootstrap
                                var button_comision = document.createElement("button");
                                button_comision.classList.add("accordion-button", "collapsed");
                                button_comision.setAttribute("type", false);
                                button_comision.setAttribute("data-bs-toggle", "collapse");

                                // creo variables y les asigno valores que se diferencien de otros para controlar elementos de mejor manera
                                var target_comision = "#collapse" + id_collapse_number;
                                var control_comision = "collapse" + id_collapse_number;
                                button_comision.setAttribute("data-bs-target", target_comision);

                                button_comision.setAttribute("aria-expanded", "true");
                                button_comision.setAttribute("aria-controls", control_comision);

                                // Le agrego el nombre de la carrera al boton
                                var nombre_button_comision_turno = relacion.comision + ' / Turno: ' + relacion.turno;

                                button_comision.textContent = nombre_button_comision_turno;

                                // agrego el botton al h2
                                accordion_header_comision.appendChild(button_comision);
                                // agrego el h2 al div del accordion item
                                accordion_Item_comision.appendChild(accordion_header_comision);


                                // Creo el div que colapsa con sus respectivos elementos, clases y atributos
                                var div_collapse_comision = document.createElement("div");

                                // Le doy valor al id del div
                                var id_collapse_comision = "collapse" + id_collapse_number;
                                div_collapse_comision.id = id_collapse_comision;

                                id_collapse_number += 1;

                                // seteo clase y atributos a div_collapse_comision
                                div_collapse_comision.classList.add("accordion-collapse", "collapse");


                                // Creo una variable accordion_body_comision para luego insertrla en div_collapse_comision dandole clase e id
                                var accordion_body_comision = document.createElement("div");
                                accordion_body_comision.classList.add("accordion-body");
                                // agrego id
                                accordion_body_comision.id = "accordion-body-" + relacion.id_carrera + '-' + relacion.id_anio + "-" + relacion.id_materia + "-" + relacion.id_comision + '-' + relacion.id_turno;

                                // agrego accordion_body_comision a div_collapse_comision
                                div_collapse_comision.appendChild(accordion_body_comision);
                                // agrego el div_collapse_comision a accordion_Item_comision
                                accordion_Item_comision.appendChild(div_collapse_comision);

                                // Creo boton para gregar un nuevo tema con id de curcom
                                var btn_agregar_nuevo_tema = document.createElement("button");
                                btn_agregar_nuevo_tema.textContent = 'Agregar nuevo Tema';
                                btn_agregar_nuevo_tema.classList.add("btn", "btn-primary");
                                btn_agregar_nuevo_tema.id = 'btn_nuevo_tema';
                                btn_agregar_nuevo_tema.setAttribute("id_curso", relacion.id_curcom);
                                accordion_body_comision.appendChild(btn_agregar_nuevo_tema);

                                // agrego la funcion de hacer visible la ventana para gregar un nuevo tema con los valores recolectados del btn clickeado
                                btn_agregar_nuevo_tema.onclick = function () {
                                    alert(relacion.id_curcom);
            
                                    $("#footer").addClass("contenedor-pasivo");
                                    $("#header").addClass("contenedor-pasivo");
                                    $("#main-conteiner").addClass("contenedor-pasivo");
                                    $("#ventanaModif").removeClass("modal-hidden");
                                    fillSelectModi();
                                    $('#enviarFormModify').prop('disabled', false);
                                    completarFormAuto(auto.id);
                                    // todoListoParaModify()
            
                                };


                                // Comparar el elemento actual con el anterior
                                if (relacion.carrera === carreraAnterior) {

                                    // Muestro en consola para controlar valores y condiciones
                                    console.log("La carrera actual es igual a la anterior.");
                                    console.log(relacion.carrera);
                                    console.log('-----------');

                                    // comparo el año de la carrera actual con el anterior
                                    if (relacion.anio === anioAnterior) {

                                        // Muestro en consola para controlar valores y condiciones
                                        console.log("El año actual es igual que el anterior.");
                                        console.log(relacion.anio);
                                        console.log('-----------');

                                        // comparo la materia actual con la anterior
                                        if (relacion.materia === materiaAnterior) {

                                            // Muestro en consola para controlar valores y condiciones
                                            console.log("La materia actual es igual a la anterior.");
                                            console.log(relacion.materia);
                                            console.log(relacion.comision);
                                            console.log('-----------');

                                            // COMISION
                                            // agrego el accordion comision al accordion body de materia
                                            document.getElementById(accordion_comisiones_anterior).appendChild(accordion_Item_comision);

                                            // le agrego el data-bs-parent correcto a accordion item de comison
                                            div_collapse_comision.setAttribute("data-bs-parent", data_bs_parent_comision_anterior);

                                            // actualizo los valores de los accordion para la proxima iteracion agregandoles el id creado de cada uno
                                            accordion_comisiones_anterior = concat_accordion_comision_id;

                                        } else {

                                            // Muestro en consola para controlar valores y condiciones
                                            console.log("La materia actual es distinta a la anterior.")
                                            console.log(relacion.materia)
                                            console.log(relacion.comision);
                                            console.log('-----------');

                                            // MATERIA
                                            // agrego el accordion materia al accordion body de anio carrera
                                            // document.getElementById(concat_accordion_body_anio_carrera_id).appendChild(accordion_materia);
                                            document.getElementById(accordion_materias_anterior).appendChild(accordion_Item_materia);


                                            // le agrego el data-bs-parent correcto a accordion item de materia
                                            div_collapse_materia.setAttribute("data-bs-parent", data_bs_parent_materia_anterior);


                                            // COMISION
                                            // agrego el accordion comision al accordion body de materia
                                            document.getElementById(concat_accordion_body_materia_id).appendChild(accordion_comison);

                                            // le agrego el data-bs-parent correcto a accordion item de comison
                                            var data_bs_parent_concat_accordion_comision_id = "#" + concat_accordion_comision_id;
                                            div_collapse_comision.setAttribute("data-bs-parent", data_bs_parent_concat_accordion_comision_id); //cambiar accordionMain por concat_comision (seria el acordion donde va comision)


                                            // agrego el accordion item comision al accodion comision
                                            accordion_comison.appendChild(accordion_Item_comision);

                                            // actualizo los valores anteriores con los actuales
                                            materiaAnterior = relacion.materia;
                                            accordion_body_materia_anterior = concat_accordion_body_materia_id;

                                            // actualizo los valores de los accordion para la proxima iteracion agregandoles el id creado de cada uno
                                            accordion_comisiones_anterior = concat_accordion_comision_id;

                                            data_bs_parent_comision_anterior = data_bs_parent_concat_accordion_comision_id;

                                        };


                                    } else {

                                        // Muestro en consola para controlar valores y condiciones
                                        console.log("El año actual es distinto que el anterior.")
                                        console.log(relacion.anio);
                                        console.log('-----------');

                                        // agrego el accordion item de año carrera a el accordion de la = año carrera
                                        // AÑO CARRERA
                                        // Agrego el item año carrera al accordion de la misma carrera anterior (cuando el año es distinto al anterior)
                                        document.getElementById(accordion_anios_carrera_anterior).appendChild(accordion_Item_anio_Carrera);

                                        // le agrego el data-bs-parent correcto a accordion item de anio_carrera anterior
                                        div_collapse_anio_carrera.setAttribute("data-bs-parent", data_bs_parent_anio_carrera_anterior);


                                        // MATERIA
                                        // agrego el accordion materia al accordion body de anio carrera
                                        document.getElementById(concat_accordion_body_anio_carrera_id).appendChild(accordion_materia);

                                        // le agrego el data-bs-parent correcto a accordion item de materia
                                        var data_bs_parent_concat_accordion_materia_id = "#" + concat_accordion_materia_id;
                                        div_collapse_materia.setAttribute("data-bs-parent", data_bs_parent_concat_accordion_materia_id);

                                        // agrego el accordion item materia al accodion materia
                                        accordion_materia.appendChild(accordion_Item_materia);


                                        // COMISION
                                        // agrego el accordion comision al accordion body de materia
                                        document.getElementById(concat_accordion_body_materia_id).appendChild(accordion_comison);

                                        // le agrego el data-bs-parent correcto a accordion item de comison
                                        var data_bs_parent_concat_accordion_comision_id = "#" + concat_accordion_comision_id;
                                        div_collapse_comision.setAttribute("data-bs-parent", data_bs_parent_concat_accordion_comision_id); //cambiar accordionMain por concat_comision (seria el acordion donde va comision)


                                        // agrego el accordion item comision al accodion comision
                                        accordion_comison.appendChild(accordion_Item_comision);

                                        // actualizo los valores anteriores con los actuales
                                        anioAnterior = relacion.anio;
                                        materiaAnterior = relacion.materia;

                                        // actualizo los accordion body con los valores creado actuales y sus respectivos id
                                        accordion_body_anio_carrera_anterior = concat_accordion_body_anio_carrera_id;
                                        accordion_body_materia_anterior = concat_accordion_body_materia_id;

                                        // actualizo los valores de los accordion para la proxima iteracion agregandoles el id creado de cada uno
                                        accordion_materias_anterior = concat_accordion_materia_id;
                                        accordion_comisiones_anterior = concat_accordion_comision_id;

                                        // actualizo los valores de los data_bs_parent para la proxima iteracion agregandoles el id creado de cada uno
                                        data_bs_parent_materia_anterior = data_bs_parent_concat_accordion_materia_id;
                                        data_bs_parent_comision_anterior = data_bs_parent_concat_accordion_comision_id;

                                    };


                                } else {

                                    // CARRERA
                                    // agrego accordion_Item_Carrera con todos los elementos a accordionMain
                                    document.getElementById("accordionMain").appendChild(accordion_Item_Carrera);


                                    // AÑO CARRERA
                                    // agrego el accordion anio carrera al accordion body de carrera
                                    document.getElementById(concat_accordion_body_carrera_id).appendChild(accordion_anio_carrera);

                                    // le agrego el data-bs-parent correcto a accordion item de anio_carrera
                                    var data_bs_parent_concat_accordion_anio_carrera_id = '#' + concat_accordion_anio_carrera_id;
                                    div_collapse_anio_carrera.setAttribute("data-bs-parent", data_bs_parent_concat_accordion_anio_carrera_id);

                                    // agrego el accordion item anio carrera al accodion anio carrera
                                    accordion_anio_carrera.appendChild(accordion_Item_anio_Carrera);


                                    // MATERIA
                                    // agrego el accordion materia al accordion body de anio carrera
                                    document.getElementById(concat_accordion_body_anio_carrera_id).appendChild(accordion_materia);

                                    // le agrego el data-bs-parent correcto a accordion item de materia
                                    var data_bs_parent_concat_accordion_materia_id = "#" + concat_accordion_materia_id;
                                    div_collapse_materia.setAttribute("data-bs-parent", data_bs_parent_concat_accordion_materia_id);

                                    // agrego el accordion item materia al accodion materia
                                    accordion_materia.appendChild(accordion_Item_materia);


                                    // COMISION
                                    // agrego el accordion comision al accordion body de materia
                                    document.getElementById(concat_accordion_body_materia_id).appendChild(accordion_comison);

                                    // le agrego el data-bs-parent correcto a accordion item de comison
                                    var data_bs_parent_concat_accordion_comision_id = "#" + concat_accordion_comision_id;
                                    div_collapse_comision.setAttribute("data-bs-parent", data_bs_parent_concat_accordion_comision_id); //cambiar accordionMain por concat_comision (seria el acordion donde va comision)


                                    // agrego el accordion item comision al accodion comision
                                    accordion_comison.appendChild(accordion_Item_comision);

                                    // ----------------

                                    id_collapse_number += 1;

                                    // Actualizo las variables de control respecto a la carrera, año y materia anterior para la próxima iteración
                                    carreraAnterior = relacion.carrera;
                                    anioAnterior = relacion.anio;
                                    materiaAnterior = relacion.materia;

                                    // actualizo los valores de los accordion body para la proxima iteracion agregandoles el id creado de cada uno
                                    accordion_body_carrera_anterior = concat_accordion_body_carrera_id;
                                    accordion_body_anio_carrera_anterior = concat_accordion_body_anio_carrera_id;
                                    accordion_body_materia_anterior = concat_accordion_body_materia_id;

                                    // actualizo los valores de los accordion para la proxima iteracion agregandoles el id creado de cada uno
                                    accordion_anios_carrera_anterior = concat_accordion_anio_carrera_id;
                                    accordion_materias_anterior = concat_accordion_materia_id;
                                    accordion_comisiones_anterior = concat_accordion_comision_id;

                                    // actualizo los valores de los data_bs_parent para la proxima iteracion agregandoles el id creado de cada uno
                                    data_bs_parent_anio_carrera_anterior = data_bs_parent_concat_accordion_anio_carrera_id;
                                    data_bs_parent_materia_anterior = data_bs_parent_concat_accordion_materia_id;
                                    data_bs_parent_comision_anterior = data_bs_parent_concat_accordion_comision_id;


                                    // Muestro en consola para controlar valores y condiciones
                                    console.log("La carrera actual es diferente a la anterior.");
                                    console.log(relacion.carrera);
                                    console.log(relacion.anio);
                                    console.log(relacion.materia);
                                    console.log(relacion.comision);
                                    console.log('-----------');

                                }

                            })

                        } else {
                            alert('No posee cursos asociados')
                        };

                    },
                    error: function (error) {
                        console.log(error);
                    }
                });

            }

        }, error: function (error) {
            console.log(error);
        }
    });


    // Fx de Btn para agregar nuevo tema
    // $("#btnAltaNuevoTema").click(function () {
    //     $("#footer").addClass("contenedor-pasivo");
    //     $("#header").addClass("contenedor-pasivo");
    //     $("#main-conteiner").addClass("contenedor-pasivo");
    //     fillSelectAlta();

    //     $('#newMarca').val(0);
    //     $('#newModelo').val("");
    //     $('#newDescrip').val("");
    //     $('#newAno').val("");
    //     $('#newValor').val(0);

    //     $("#ventanaAltaRegistro").removeClass("modal-hidden");
    // });






});
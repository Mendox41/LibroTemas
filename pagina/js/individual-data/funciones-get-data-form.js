export function get_carreras_select() {
    $.ajax({
        url: '../../php/individual_data/get_carreras.php',
        type: 'POST',

        success: function (respuesta) {

            // var objOption0 = document.createElement("option");
            // objOption0.setAttribute("value", "0");
            // objOption0.innerHTML = "Seleccione Carrera";
            // document.getElementById("nuevo-tema-nombre-carrera").appendChild(objOption0);

            $("#nuevo-tema-nombre-carrera").empty();
            crear_primer_opcion('Carrera', 'nuevo-tema-nombre-carrera');

            var data_carreras = JSON.parse(respuesta);
            data_carreras.carreras.forEach(function (carrera) {
                var objOpcion = document.createElement("option");
                objOpcion.setAttribute("value", carrera.id_carrera);
                objOpcion.innerHTML = carrera.nombre_carrera;
                document.getElementById("nuevo-tema-nombre-carrera").appendChild(objOpcion);
            });
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
};

export function get_anio_carrera_select(id_carrera) {
    $.ajax({
        url: '../../php/individual_data/get-anio-carrera.php',
        type: 'POST',
        data: { id_carrera: id_carrera },

        success: function (respuesta) {
            $("#nuevo-tema-anio-carrera").empty();
            crear_primer_opcion('Año de Carrera', 'nuevo-tema-anio-carrera');


            var data_carreras = JSON.parse(respuesta);
            data_carreras.datos.forEach(function (valor) {
                var objOpcion = document.createElement("option");
                objOpcion.setAttribute("value", valor.id_anio);
                objOpcion.innerHTML = valor.anio;
                document.getElementById("nuevo-tema-anio-carrera").appendChild(objOpcion);
            });
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

};

export function get_materias_select(id_carrera, id_anio_carrera) {
    $.ajax({
        url: '../../php/individual_data/get-materias.php',
        type: 'POST',
        data: {
            id_carrera: id_carrera,
            id_anio_carrera: id_anio_carrera

        },

        success: function (respuesta) {
            $("#nuevo-tema-nombre-materia").empty();
            crear_primer_opcion('Materia', 'nuevo-tema-nombre-materia');

            var data_materias = JSON.parse(respuesta);
            data_materias.datos.forEach(function (valor) {
                var objOpcion = document.createElement("option");
                objOpcion.setAttribute("value", valor.id_relacion);
                if (valor.descripcion_materia != "") {
                    objOpcion.innerHTML = valor.nombre_materia + " (" + valor.descripcion_materia + ")";

                } else {
                    objOpcion.innerHTML = valor.nombre_materia;
                }
                document.getElementById("nuevo-tema-nombre-materia").appendChild(objOpcion);
            });
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

};

export function get_turno_select(id_relacion) {
    $.ajax({
        url: '../../php/individual_data/get-turnos.php',
        type: 'POST',
        data: {
            id_relacion: id_relacion
        },

        success: function (respuesta) {
            $("#nuevo-tema-turno").empty();
            crear_primer_opcion('Turno', 'nuevo-tema-turno');
            var data_turnos = JSON.parse(respuesta);

            if (data_turnos.success == false) {
           
                // $("#modal-form-ingreso-nuevo-tema").removeClass("d-block");


                // agrego el mensaje de respuesta del servidor
                $("#modal-title-respuesta-secundario").empty();
                $("#modal-title-respuesta-secundario").text(data_turnos.message);
                $("#modal-title-respuesta-secundario").addClass("text-danger");

                // hago visible el modal de respuesta
                $("#modal-container-respuesta-secundario").addClass("d-block");

                // oculto modal de ingreso de nuevo tema
                $("#modal-form-ingreso-nuevo-tema").removeClass("d-block");


                $('#nuevo-tema-comision').prop('disabled', true);
                $('#nuevo-tema-turno').prop('disabled', true);

                // document.getElementById("nuevo-tema-turno").classList.add("border", "border-danger","bg-danger-subtle")



            } else {
                data_turnos.datos.forEach(function (valor) {


                    var objOpcion = document.createElement("option");
                    objOpcion.setAttribute("value", valor.id_turno);
                    objOpcion.innerHTML = valor.turno;

                    document.getElementById("nuevo-tema-turno").appendChild(objOpcion);
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

};

export function get_comision_select(id_relacion, id_turno) {
    $.ajax({
        url: '../../php/individual_data/get-comisiones.php',
        type: 'POST',
        data: {
            id_relacion: id_relacion,
            id_turno : id_turno
        },

        success: function (respuesta) {
            $("#nuevo-tema-comision").empty();
            crear_primer_opcion('Comision', 'nuevo-tema-comision');
            var data_comisiones = JSON.parse(respuesta);

            if (data_comisiones.success == false) {
                $("#modal-title-respuesta").empty();
                $("#modal-title-respuesta").text(data_comisiones.message);
                $("#modal-title-respuesta").addClass("text-danger");

                // hago visible el modal de respuesta
                $("#modal-container-respuesta").addClass("d-block");

                $('#nuevo-tema-comision').prop('disabled', true);

            } else {
                data_comisiones.datos.forEach(function (valor) {


                    var objOpcion = document.createElement("option");
                    objOpcion.setAttribute("value", valor.id_comision);
                    objOpcion.innerHTML = valor.comision;

                    document.getElementById("nuevo-tema-comision").appendChild(objOpcion);
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

};


// Funcion para crear primeras opciones del select de cada campo / var2 es el id del select
export function crear_primer_opcion(var1, var2) {

    var objOption0 = document.createElement("option");
    objOption0.setAttribute("value", "0");
    objOption0.innerHTML = "Seleccione " + var1;
    document.getElementById(var2).appendChild(objOption0);


}


// ------------------------------
// funciones adaptadas para cualquier form

export function get_carreras_for_select(id_select_carrera) {
    $.ajax({
        url: '../../php/individual_data/get_carreras.php',
        type: 'POST',

        success: function (respuesta) {

            // var objOption0 = document.createElement("option");
            // objOption0.setAttribute("value", "0");
            // objOption0.innerHTML = "Seleccione Carrera";
            // document.getElementById("nuevo-tema-nombre-carrera").appendChild(objOption0);

            $("#"+id_select_carrera).empty();
            crear_primer_opcion('Carrera', id_select_carrera);

            var data_carreras = JSON.parse(respuesta);
            data_carreras.carreras.forEach(function (carrera) {
                var objOpcion = document.createElement("option");
                objOpcion.setAttribute("value", carrera.id_carrera);
                objOpcion.innerHTML = carrera.nombre_carrera;
                document.getElementById(id_select_carrera).appendChild(objOpcion);
            });
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
};

// export function get_anio_carrera_select(id_carrera) {
//     $.ajax({
//         url: '../../php/individual_data/get-anio-carrera.php',
//         type: 'POST',
//         data: { id_carrera: id_carrera },

//         success: function (respuesta) {
//             $("#nuevo-tema-anio-carrera").empty();
//             crear_primer_opcion('Año de Carrera', 'nuevo-tema-anio-carrera');


//             var data_carreras = JSON.parse(respuesta);
//             data_carreras.datos.forEach(function (valor) {
//                 var objOpcion = document.createElement("option");
//                 objOpcion.setAttribute("value", valor.id_anio);
//                 objOpcion.innerHTML = valor.anio;
//                 document.getElementById("nuevo-tema-anio-carrera").appendChild(objOpcion);
//             });
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

// };

// export function get_materias_select(id_carrera, id_anio_carrera) {
//     $.ajax({
//         url: '../../php/individual_data/get-materias.php',
//         type: 'POST',
//         data: {
//             id_carrera: id_carrera,
//             id_anio_carrera: id_anio_carrera

//         },

//         success: function (respuesta) {
//             $("#nuevo-tema-nombre-materia").empty();
//             crear_primer_opcion('Materia', 'nuevo-tema-nombre-materia');

//             var data_materias = JSON.parse(respuesta);
//             data_materias.datos.forEach(function (valor) {
//                 var objOpcion = document.createElement("option");
//                 objOpcion.setAttribute("value", valor.id_relacion);
//                 if (valor.descripcion_materia != "") {
//                     objOpcion.innerHTML = valor.nombre_materia + " (" + valor.descripcion_materia + ")";

//                 } else {
//                     objOpcion.innerHTML = valor.nombre_materia;
//                 }
//                 document.getElementById("nuevo-tema-nombre-materia").appendChild(objOpcion);
//             });
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

// };

// export function get_turno_select(id_relacion) {
//     $.ajax({
//         url: '../../php/individual_data/get-turnos.php',
//         type: 'POST',
//         data: {
//             id_relacion: id_relacion
//         },

//         success: function (respuesta) {
//             $("#nuevo-tema-turno").empty();
//             crear_primer_opcion('Turno', 'nuevo-tema-turno');
//             var data_turnos = JSON.parse(respuesta);

//             if (data_turnos.success == false) {
           
//                 // $("#modal-form-ingreso-nuevo-tema").removeClass("d-block");


//                 // agrego el mensaje de respuesta del servidor
//                 $("#modal-title-respuesta-secundario").empty();
//                 $("#modal-title-respuesta-secundario").text(data_turnos.message);
//                 $("#modal-title-respuesta-secundario").addClass("text-danger");

//                 // hago visible el modal de respuesta
//                 $("#modal-container-respuesta-secundario").addClass("d-block");

//                 // oculto modal de ingreso de nuevo tema
//                 $("#modal-form-ingreso-nuevo-tema").removeClass("d-block");


//                 $('#nuevo-tema-comision').prop('disabled', true);
//                 $('#nuevo-tema-turno').prop('disabled', true);

//                 // document.getElementById("nuevo-tema-turno").classList.add("border", "border-danger","bg-danger-subtle")



//             } else {
//                 data_turnos.datos.forEach(function (valor) {


//                     var objOpcion = document.createElement("option");
//                     objOpcion.setAttribute("value", valor.id_turno);
//                     objOpcion.innerHTML = valor.turno;

//                     document.getElementById("nuevo-tema-turno").appendChild(objOpcion);
//                 });

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

// };

// export function get_comision_select(id_relacion, id_turno) {
//     $.ajax({
//         url: '../../php/individual_data/get-comisiones.php',
//         type: 'POST',
//         data: {
//             id_relacion: id_relacion,
//             id_turno : id_turno
//         },

//         success: function (respuesta) {
//             $("#nuevo-tema-comision").empty();
//             crear_primer_opcion('Comision', 'nuevo-tema-comision');
//             var data_comisiones = JSON.parse(respuesta);

//             if (data_comisiones.success == false) {
//                 $("#modal-title-respuesta").empty();
//                 $("#modal-title-respuesta").text(data_comisiones.message);
//                 $("#modal-title-respuesta").addClass("text-danger");

//                 // hago visible el modal de respuesta
//                 $("#modal-container-respuesta").addClass("d-block");

//                 $('#nuevo-tema-comision').prop('disabled', true);

//             } else {
//                 data_comisiones.datos.forEach(function (valor) {


//                     var objOpcion = document.createElement("option");
//                     objOpcion.setAttribute("value", valor.id_comision);
//                     objOpcion.innerHTML = valor.comision;

//                     document.getElementById("nuevo-tema-comision").appendChild(objOpcion);
//                 });

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

// };
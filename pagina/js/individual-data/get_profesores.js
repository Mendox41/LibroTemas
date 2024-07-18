import * as funciones_get_data_form from '../individual-data/funciones-get-data-form.js';


export function get_profesores_for_select(){
    $.ajax({
        url: '../../php/individual_data/get_profesor_id.php',
        type: 'POST',

        success: function (respuesta) {
            // var objOption0 = document.createElement("option");
            // objOption0.setAttribute("value", "0");
            // objOption0.innerHTML = "Seleccione profesor";
            // document.getElementById("nuevo-tema-nombre-carrera").appendChild(objOption0);

            $("select-profesor-asociado").empty();

            var data_profesores = JSON.parse(respuesta);
            data_profesores.profesores.forEach(function (dato) {
                var objOpcion = document.createElement("option");
                objOpcion.setAttribute("value", dato.id_profesor);
                objOpcion.innerHTML = dato.apellido_nombre;
                document.getElementById("select-profesor-asociado").appendChild(objOpcion);
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
}

export function get_profesores_for_select_modal(id_select){
    $.ajax({
        url: '../../php/individual_data/get_profesor_id.php',
        type: 'POST',

        success: function (respuesta) {
            // var objOption0 = document.createElement("option");
            // objOption0.setAttribute("value", "0");
            // objOption0.innerHTML = "Seleccione profesor";
            // document.getElementById("nuevo-tema-nombre-carrera").appendChild(objOption0);

            $("#"+id_select).empty();

            funciones_get_data_form.crear_primer_opcion('Profesor', 'modify-curso-profesor');

            var data_profesores = JSON.parse(respuesta);
            data_profesores.profesores.forEach(function (dato) {
                var objOpcion = document.createElement("option");
                objOpcion.setAttribute("value", dato.id_profesor);
                objOpcion.innerHTML = dato.apellido_nombre;
                document.getElementById(id_select).appendChild(objOpcion);
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
}

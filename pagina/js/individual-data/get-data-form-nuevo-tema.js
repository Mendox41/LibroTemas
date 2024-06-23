export function get_carreras_select() {
    $.ajax({
        url: '../../php/individual_data/data_carreras.php',
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
        data: {id_carrera: id_carrera},

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

};

export function get_comision_select(id_carrera, id_anio_carrera, id_materia) {

};

export function get_turno_select() {

};

// Funcion para crear primeras opciones del select de cada campo / var2 es el id del select
export function crear_primer_opcion(var1, var2) {

    var objOption0 = document.createElement("option");
    objOption0.setAttribute("value", "0");
    objOption0.innerHTML = "Seleccione " + var1;
    document.getElementById(var2).appendChild(objOption0);


}
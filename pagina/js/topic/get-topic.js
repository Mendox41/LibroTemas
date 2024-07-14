
export function fill_table_ver_datos_topic(valor) {
    $.ajax({
        url: '../../php/individual_data/get-datos-tema.php',
        type: 'POST',
        data: { id_libro_tema: valor },
        success: function (respuesta) {
            var data_respuesta = JSON.parse(respuesta);

            if (data_respuesta.success == true) {
                if (data_respuesta.curso && data_respuesta.curso.length > 0) {
                    var curso = data_respuesta.curso[0];
                    // console.log('Datos del curso:', curso);

                    document.getElementById('ver-tema-td-carrera').innerHTML = curso.carrera || 'N/A';
                    document.getElementById('ver-tema-td-anio-carrera').innerHTML = curso.anio || 'N/A';
                    document.getElementById('ver-tema-td-materia').innerHTML = curso.materia || 'N/A';
                    document.getElementById('ver-tema-td-turno').innerHTML = curso.turno || 'N/A';
                    document.getElementById('ver-tema-td-comision').innerHTML = curso.comision || 'N/A';

                    document.getElementById('ver-tema-td-ciclo').innerHTML = curso.c_anio || 'N/A';
                    document.getElementById('ver-tema-td-semestre').innerHTML = curso.semestre || 'N/A';


                    document.getElementById('ver-tema-td-usuario-profesor').innerHTML = curso.usuario || 'N/A';
                    document.getElementById('ver-tema-td-nombre-profesor').innerHTML = curso.nombre_apellido || 'N/A';
                    document.getElementById('ver-tema-td-fecha-tema').innerHTML = curso.fecha || 'N/A';
                    document.getElementById('ver-tema-td-fecha-registrado').innerHTML = curso.fecha_ingreso || 'N/A';
                    document.getElementById('ver-tema-td-fecha-modificacion').innerHTML = curso.fecha_modif || 'N/A';
                    document.getElementById('ver-tema-td-titulo-tema').innerHTML = curso.tema || 'N/A';
                    document.getElementById('ver-tema-td-descripcion-tema').innerHTML = curso.descripcion || 'N/A';
                } else {
                    console.error('No se encontraron datos del curso en la respuesta.');
                }
            } else {
                console.error('Error: ' + data_respuesta.message);
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
}


export function fill_form_modify_topic(valor) {
    $.ajax({
        url: '../../php/individual_data/get-datos-tema.php',
        type: 'POST',
        data: { id_libro_tema: valor },
        success: function (respuesta) {
            var data_respuesta = JSON.parse(respuesta);

            if (data_respuesta.success == true) {
                if (data_respuesta.curso && data_respuesta.curso.length > 0) {
                    var curso = data_respuesta.curso[0];
                    // console.log('Datos del curso:', curso);

                    $('#tema-nombre-carrera-modal-modify').val(curso.carrera);
                    $('#tema-anio-carrera-modal-modify').val(curso.anio);
                    $('#tema-nombre-materia-modal-modify').val(curso.materia);
                    $('#tema-turno-modal-modify').val(curso.turno);
                    $('#tema-comision-modal-modify').val(curso.comision);

                    $('#fecha-tema-modal-modify').val(curso.fecha);
                    $('#titulo-tema-modal-modify').val(curso.tema);
                    $('#descripcion-tema-modal-modify').val(curso.descripcion);

                } else {
                    console.error('No se encontraron datos del curso en la respuesta.');
                }
            } else {
                console.error('Error: ' + data_respuesta.message);
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
}






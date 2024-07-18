import * as funciones_get_data_form from '../individual-data/funciones-get-data-form.js';



export function fill_table_ver_datos_course(valor) {
    $.ajax({
        url: '../../php/individual_data/get_datos_curso.php',
        type: 'POST',
        data: { id_curso: valor },
        success: function (respuesta) {
            var data_respuesta = JSON.parse(respuesta);

            if (data_respuesta.success == true) {
                if (data_respuesta.curso && data_respuesta.curso.length > 0) {
                    var curso = data_respuesta.curso[0];
                    // console.log('Datos del curso:', curso);

                    document.getElementById('ver-curso-td-carrera').innerHTML = curso.carrera || 'N/A';
                    document.getElementById('ver-curso-td-anio-carrera').innerHTML = curso.anio || 'N/A';
                    document.getElementById('ver-curso-td-materia').innerHTML = curso.materia || 'N/A';
                    document.getElementById('ver-curso-td-turno').innerHTML = curso.turno || 'N/A';
                    document.getElementById('ver-curso-td-comision').innerHTML = curso.comision || 'N/A';

                    document.getElementById('ver-curso-td-ciclo').innerHTML = curso.c_anio || 'N/A';
                    document.getElementById('ver-curso-td-semestre').innerHTML = curso.semestre || 'N/A';


                    document.getElementById('ver-curso-td-usuario-profesor').innerHTML = curso.usuario || 'N/A';
                    document.getElementById('ver-curso-td-nombre-profesor').innerHTML = curso.nombre_apellido || 'N/A';
                    document.getElementById('ver-curso-td-fecha-curso').innerHTML = curso.fecha || 'N/A';
                    document.getElementById('ver-curso-td-fecha-registrado').innerHTML = curso.fecha_ingreso || 'N/A';
                    document.getElementById('ver-curso-td-fecha-modificacion').innerHTML = curso.fecha_modif || 'N/A';
                    document.getElementById('ver-curso-td-titulo-curso').innerHTML = curso.curso || 'N/A';
                    document.getElementById('ver-curso-td-descripcion-curso').innerHTML = curso.descripcion || 'N/A';
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


export function fill_form_modify_course(valor) {
    $.ajax({
        url: '../../php/individual_data/get_datos_curso.php',
        type: 'POST',
        data: { id_curso: valor },
        success: function (respuesta) {
            var data_respuesta = JSON.parse(respuesta);
            if (data_respuesta.success && data_respuesta.curso && data_respuesta.curso.length > 0) {
                var curso = data_respuesta.curso[0];

                // Función para establecer el valor de un select después de un breve retraso
                function setSelectValueWithDelay(selectId, value, delay) {
                    return new Promise(resolve => {
                        setTimeout(() => {
                            $(`#${selectId}`).val(value).trigger('change');
                            resolve();
                        }, delay);
                    });
                }

                // Cargar los selects dependientes
                funciones_get_data_form.get_anio_carrera_for_select(curso.id_carrera, "modify-curso-anio-carrera");
                funciones_get_data_form.get_materias_for_select(curso.id_carrera, curso.id_anio, "modify-curso-nombre-materia");
                funciones_get_data_form.get_semestre_for_select(curso.id_carrera, curso.id_anio, curso.id_materia, "modify-curso-semestre");

                // Establecer los valores con retrasos más cortos
                Promise.all([
                    setSelectValueWithDelay("modify-curso-nombre-carrera", curso.id_carrera, 100),
                    setSelectValueWithDelay("modify-curso-anio-carrera", curso.id_anio, 150),
                    setSelectValueWithDelay("modify-curso-nombre-materia", curso.id_materia, 200),
                    setSelectValueWithDelay("modify-curso-turno", curso.id_turno, 50),
                    setSelectValueWithDelay("modify-curso-comision", curso.id_comision, 50),
                    setSelectValueWithDelay("modify-curso-semestre", curso.id_semestre, 250),
                    setSelectValueWithDelay("modify-curso-ciclo", curso.c_anio, 50),
                    setSelectValueWithDelay("modify-curso-profesor", curso.id_profesor, 50),
                    setSelectValueWithDelay("modify-curso-estado", curso.isActive, 50)

                ]).then(() => {
                    // Todos los valores han sido establecidos
                });

            } else {
                console.error('No se encontraron datos del curso o hubo un error en la respuesta.');
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.error('Error en la solicitud:', textStatus, errorThrown);
            alert('Error al obtener los datos del curso. Por favor, intenta de nuevo.');
        }
    });
}

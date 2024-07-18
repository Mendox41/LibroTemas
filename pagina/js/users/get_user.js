// export function fill_table_ver_datos_user(valor) {
//     $.ajax({
//         url: '../../php/individual_data/get-datos-usuario.php',
//         type: 'POST',
//         data: { id_usuario: valor },
//         success: function (respuesta) {
//             var data_respuesta = JSON.parse(respuesta);

//             if (data_respuesta.success == true) {
//                 if (data_respuesta.usuario && data_respuesta.usuario.length > 0) {
//                     var usuario = data_respuesta.usuario[0];
//                     // console.log('Datos del usuario:', usuario);

//                     document.getElementById('ver-usuario-td-carrera').innerHTML = usuario.carrera || 'N/A';
//                     document.getElementById('ver-usuario-td-anio-carrera').innerHTML = usuario.anio || 'N/A';
//                     document.getElementById('ver-usuario-td-materia').innerHTML = usuario.materia || 'N/A';
//                     document.getElementById('ver-usuario-td-turno').innerHTML = usuario.turno || 'N/A';
//                     document.getElementById('ver-usuario-td-comision').innerHTML = usuario.comision || 'N/A';

//                     document.getElementById('ver-usuario-td-ciclo').innerHTML = usuario.c_anio || 'N/A';
//                     document.getElementById('ver-usuario-td-semestre').innerHTML = usuario.semestre || 'N/A';


//                     document.getElementById('ver-usuario-td-usuario-profesor').innerHTML = usuario.usuario || 'N/A';
//                     document.getElementById('ver-usuario-td-nombre-profesor').innerHTML = usuario.nombre_apellido || 'N/A';
//                     document.getElementById('ver-usuario-td-fecha-usuario').innerHTML = usuario.fecha || 'N/A';
//                     document.getElementById('ver-usuario-td-fecha-registrado').innerHTML = usuario.fecha_ingreso || 'N/A';
//                     document.getElementById('ver-usuario-td-fecha-modificacion').innerHTML = usuario.fecha_modif || 'N/A';
//                     document.getElementById('ver-usuario-td-titulo-usuario').innerHTML = usuario.usuario || 'N/A';
//                     document.getElementById('ver-usuario-td-descripcion-usuario').innerHTML = usuario.descripcion || 'N/A';
//                 } else {
//                     console.error('No se encontraron datos del usuario en la respuesta.');
//                 }
//             } else {
//                 console.error('Error: ' + data_respuesta.message);
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
// }


export function fill_form_modify_user(valor) {
    $.ajax({
        url: '../../php/individual_data/get-data-usuario.php',
        type: 'POST',
        data: { id_usuario: valor },
        success: function (respuesta) {
            var data_respuesta = JSON.parse(respuesta);

            if (data_respuesta.success == true) {
                if (data_respuesta.usuarios && data_respuesta.usuarios.length > 0) {
                    var usuario = data_respuesta.usuarios[0];
                    // console.log('Datos del usuario:', usuario);

                    $('#nombre-usuario-modal-modify').val(usuario.usuario);
                  

                } else {
                    console.error('No se encontraron datos del usuario en la respuesta.');
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
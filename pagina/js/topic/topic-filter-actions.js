$(document).ready(function () {


    // $("#btn-buscar-tema").click(function () {
    //     // Escuchar clic en el botón de búsqueda de temas
    //     $.ajax({
    //         url: '../../php/topic/get-topics2.php',
    //         type: 'GET',
    //         dataType: 'json',
    //         beforeSend: function (xhr) {
    //             xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    //         },
    //         success: function (response) {
    //             console.log('Respuesta del servidor:', response);
    //             if (response && response.message && response.timestamp) {
    //                 alert('Éxito: ' + response.message + '\nTimestamp: ' + response.timestamp);
    //             } else {
    //                 console.error('La respuesta no tiene el formato esperado:', response);
    //                 alert('La respuesta no tiene el formato esperado');
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


    // });


    $("#btn-buscar-tema").click(function () {
        // Escuchar clic en el botón de búsqueda de temas
        $.ajax({
            url: '../../php/topic/get-topics.php',
            type: 'POST',
            data: {
                nombre_carrera: $("#nombre-carrera").val(),
                anio_carrera: $("#anio-carrera").val(),
                nombre_materia: $("#nombre-materia").val(),
                comision: $("#comision").val(),
                turno: $("#turno").val(),
                nombre_usuario: $("#nombre-usuario").val(),
                nombre_profesor: $("#nombre-profesor").val(),
                apellido_profesor: $("#apellido-profesor").val(),
                fecha_tema: $("#fecha-tema").val(),
                titulo_tema: $("#titulo-tema").val(),
                descripcion_tema: $("#descripcion-tema").val()
            },
            success: function (respuesta) {

                var data_filtro_temas = JSON.parse(respuesta);
                // alert(data_filtro_temas.respuesta);

                if (!(data_filtro_temas.success)) {
                    alert("Error: no se encontraron temas");
                }else{
                    $('#btn-filtro-tema').prop('disabled', false);
                    $('#form-filtro-tema').hide();


                 
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

$(document).ready(function () {


    // contenedor de filtro de temas inicial
    var container_filtro_temas = document.getElementById('container-filtro-temas');

    var btn_filtro_tema = document.getElementById('btn-filtro-tema');

    $('#btn-buscar-tema').click(function () {

        $.ajax({
            url: '../../php/topic/get-topics.php',
            method: 'POST',
            data: {
                nombre_carrera: $("#nombre-carrera").val(),
                anio_carrera: $("#anio-carrera").val(),
                nombre_materia: $("#nombre-materia").val(),
                comision: $("#comision").val(),
                turno: $("#turno").val(),
                nombre_profesor: $("#nombre-profesor").val(),
                apellido_profesor: $("#apellido-profesor").val(),
                fecha_tema: $("#fecha-tema").val(),
                titulo_tema: $("#titulo-tema").val(),
                descripcion_tema: $("#descripcion-tema").val()
            },

            success: function (respuesta) {

                var data_libro_temas = JSON.parse(respuesta);
                console.log(data_libro_temas.cant_temas);

                if (data_libro_temas.success == true && data_libro_temas.cant_temas > 0) {

                    // oculto container del filtro de temas
                    container_filtro_temas.hide();
                    // habilito el boton del filtro
                    btn_filtro_tema.prop('disabled', false);



                } else {
                    alert('No se encontraron temas con esos datos');

                }


            },
            error: function (xhr, status, error) {
                console.log('Error en la solicitud AJAX');
                console.log('Estado:', status);
                console.log('Error:', error);
                console.log('XHR:', xhr);

            }
        });

    });


});
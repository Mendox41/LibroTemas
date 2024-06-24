$(document).ready(function () {

    $("#btn-ingreso-tema").click(function () {
        var fecha_tema = $("#fecha-tema").val();
        var titulo_tema = $("#titulo-tema").val();
        var descripcion_tema = $("#descripcion-tema").val();

        // si uno de los campos esta vacio entra aca
        if (fecha_tema == 0 || titulo_tema == "" || descripcion_tema == "") {

            $("#errorMessage").empty();
            $("#errorMessage").text('Todos los campos deben ser completados');
            $("#errorMessage").removeClass("oculto");


            // $("#fecha-tema").classList.add("border", "border-danger");
            // $("#fecha-tema").addClass("border");
            // $("#fecha-tema").addClass("border-danger");


            // $("#modal-title-respuesta").empty();
            // $("#modal-title-respuesta").text("Todos los campos deben ser completados");
            // $("#modal-title-respuesta").addClass("text-danger");

            // $("#header").addClass("opacity-25");
            // $("#main-container").addClass("opacity-25");
            // $("#modal-container-ingreso-nuevo-tema").addClass("opacity-0");
            // $("#body").addClass("fondo-desactivado");

            // $("#modal-container-respuesta").addClass("d-block");

        } else if (!validacion_fecha(fecha_tema) ){
            $("#errorMessage").empty();
            $("#errorMessage").text('La fecha ingresada debe ser menor o igual que la fecha actual');
          
            $("#fecha-tema").addClass('bg-danger-subtle');
            $("#fecha-tema").addClass("text-danger-emphasis");
            $("#fecha-tema").addClass("border-danger");

        
            $("#errorMessage").removeClass("oculto");

        } else {
            // si todos los campos estan completos entra aca
            // $("#header").addClass("opacity-25");
            // $("#main-container").addClass("opacity-25");
            // $("#modal-container-ingreso-nuevo-tema").addClass("opacity-0");
            // $("#body").addClass("fondo-desactivado");

            $("#modal-form").removeClass("d-block");
            $("#modal-container-confirm-ingreso-tema").addClass("d-block");

        };

    });


    $("#btn-confirm-ingreso-tema").click(function () {
        var id_curso = $("#id-curso").val();
        var titulo_tema = $("#titulo-tema").val();
        var descripcion_tema = $("#descripcion-tema").val();
        var fecha_tema = $("#fecha-tema").val();

        var objAjax = $.ajax({
            type: "post",
            url: "../../php/topic/new-topic.php",
            data: {
                new_id_curcom: id_curso,
                new_tema: titulo_tema,
                new_descripcion: descripcion_tema,
                new_time: fecha_tema

            },
            success: function (respuesta) {
                var data = JSON.parse(respuesta);

                // oculto el modal del formy del de confirmar ingreso de un nuevo tema
                $("#modal-form").removeClass("d-block");
                $("#modal-container-confirm-ingreso-tema").removeClass("d-block");

                // agrego el mensaje de respuesta del servidor
                $("#modal-title-respuesta").empty();
                $("#modal-title-respuesta").text(data.message);
                // $("#modal-title-respuesta").addClass("text-danger");

                // hago visible el modal de respuesta
                $("#modal-container-respuesta").addClass("d-block");

                // if (data.success == true) {

                // } else {

                // }

            }, error: function (error) {
                console.log(error);
            }


        });

    });

    function validacion_fecha(fecha_ingresada) {

        // Crear un objeto Date con la fecha del input
        var fechaIngresada_d = new Date(fecha_ingresada);

        // Crear un objeto Date con la fecha actual (solo con año, mes y día)
        var hoy = new Date();
        var fechaActual = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());


        if (fechaIngresada_d.getTime() <= fechaActual.getTime()) {
            // La fecha seleccionada es igual a la fecha actual.
            return true;

        } else {
            // La fecha seleccionada es posterior a la fecha actual
            return false;
        };



    };



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
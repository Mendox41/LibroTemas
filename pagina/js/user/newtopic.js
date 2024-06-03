$(document).ready(function () {


    $("#btn-ingreso-tema").click(function () {
        var fecha_tema = $("#fecha-tema").val();
        var titulo_tema = $("#titulo-tema").val();
        var descripcion_tema = $("#descripcion-tema").val();


        // si uno de los campos esta vacio entra aca
        if (fecha_tema == 0 || titulo_tema == "" || descripcion_tema == "") {
            $("#modal-title-respuesta").empty();
            $("#modal-title-respuesta").text("Todos los campos deben ser completados");
            $("#modal-title-respuesta").addClass("text-danger");

            $("#header").addClass("opacity-25");
            $("#main-container").addClass("opacity-25");
            $("#modal-container-ingreso-nuevo-tema").addClass("opacity-0");
            $("#body").addClass("prueba-back");

            $("#modal-container-respuesta").addClass("d-block");

        } else {
            // si todos los campos estan completos entra aca
            // $("#header").addClass("opacity-25");
            // $("#main-container").addClass("opacity-25");
            // $("#modal-container-ingreso-nuevo-tema").addClass("opacity-0");
            // $("#body").addClass("prueba-back");
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
            url: "",
            data: {
                id_curso: id_curso,
                titulo_tema: titulo_tema,
                descripcion_tema: descripcion_tema,
                fecha_tema: fecha_tema

            },
            success: function (respuesta) {
                var data = JSON.parse(respuesta);
                if (data.success == true) {

                } else {

                }

            }, error: function (error) {
                console.log(error);
            }


        });

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






    function fill_form(idCurso) {
        $.ajax({
            type: "get",
            url: "php/get-json-auto.php",
            data: {
                idCurso: idCurso
            },
            success: function (respuestaDelServer) {
                // alert(respuestaDelServer);
                var objJson = JSON.parse(respuestaDelServer);
                $('#idModAuto').val(objJson.id);
                $('#inputMarca-modal-modif').val(objJson.marca);
                $('#modeloMod').val(objJson.modelo);
                $('#descripMod').val(objJson.descripcion);
                $('#anoMod').val(objJson.anio);
                $('#valorMod').val(objJson.valor);
                // $('#pdfMod').val(objJson.archivo_binario);   

            }

        });
    }






});
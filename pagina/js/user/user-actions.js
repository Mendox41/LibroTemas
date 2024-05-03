$(document).ready(function () {

    var id_usuario;
    var usuario;
    var active;
    var admin;


    $.ajax({
        url: '../../php/session/get-session.php',
        type: 'GET',

        success: function (respuesta) {

            var dataSession = JSON.parse(respuesta);
            id_usuario = dataSession.id_usuario;
            usuario = dataSession.usuario;
            active = dataSession.active;
            admin = dataSession.admin;
            alert(id_usuario);

            $.ajax({
                url: '../../php/user/related-subjects.php',
                method: 'POST', 
                data: {'id_usuario' : id_usuario}, 
                success: function(segunda_respuesta) {
                    var data_related_subjects = JSON.parse(segunda_respuesta);
                    alert(data_related_subjects.success)

                },
                error: function(error) {
                    console.log(error);
                }
            });








        }, error: function (error) {
            console.log(error);
        }
    });

   





});
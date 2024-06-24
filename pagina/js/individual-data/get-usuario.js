export function get_usuario() {
    // variables para almacenar valores de la sesion
    var id_usuario;
 
    $.ajax({
        url: '../../php/session/get-session.php',
        type: 'GET',

        success: function (respuesta) {

            var dataSession = JSON.parse(respuesta);

            if (dataSession.success == true && dataSession.id_usuario !== null && dataSession.id_usuario !== undefined) {
                id_usuario = dataSession.id_usuario;
                return id_usuario;
            } else {
                return false;
            }

        }
    })
};

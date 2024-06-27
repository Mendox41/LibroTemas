export function get_usuario() {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: '../../php/session/get-session.php',
            type: 'GET',
            success: function (respuesta) {
                var dataSession = JSON.parse(respuesta);
                if (dataSession.success == true && dataSession.id_usuario !== null && dataSession.id_usuario !== undefined) {
                    resolve(dataSession.id_usuario);
                } else {
                    resolve(false);
                }
            },
            error: function(error) {
                reject(error);
            }
        });
    });
}
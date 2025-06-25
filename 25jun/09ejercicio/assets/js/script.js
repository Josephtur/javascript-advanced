// funcion que devuelve una promesa para optener la geolocalizacion

function obtenerUbicacion(){
    return new Promise((resolve, reject) =>{
    // llamada al API de geolocalizacion del navegador
    navigator.geolocation.getCurrentPosition(
        //callback de exito - recibo posicion
        pos => {
            // extraemos latitud y longitud de las cordenadas
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            //resolvemos la promesa enviando un objeto con lat ylon
            resolve({lat,lon});
        },
        //callback de error: reibe un objeto positionerror
        err =>{
            // rechazamos la promesa con un mensaje de error
            reject(' No se pudo obtener la ubicacion: ' + err.message);
        }
    );
    })
}

const btn = document.getElementById('locate');
const output = document.getElementById('output');

// añadimos un listener al boton para evento click 
btn.addEventListener('click', () =>{
    // indicamos al usuario que comenzamos
    output.textContent = 'obteniendo ubicacion';

    //llamamos a la funcion que devuelve la promesa
    obtenerUbicacion()
    .then(({lat,lon}) => {
        //cuando la promesa resuelve
        output.textContent = `Latitud: ${lat.toFixed(6)}, Longitud: ${lon.toFixed(6)}`;

    })
    .catch(err => {
        //si rechaza
        output.textContent = err;
    });
});
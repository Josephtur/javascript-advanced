// funcion que devuelve una promesa para simular una carga de datos

function simularCarga(){
    return new Promise((resolve,reject) => {
        // simular un retraso de 1.5seg
        setTimeout(() => {
            const ok = Math.random() > 0.3; // 70% de probabilidad de exito

            ok
             ? resolve({ usuario: 'Juan', edad: 28})
             // si ok es false, se rechaza la promesa con mensaje de error
             : reject ('Error en la carga');
        }, 1500);
    });
}

// agregar un evento al boton  id btncargar

document
.getElementById('btnCargar')
.addEventListener('click', () => {
    // al hacer clic muestra el mensaje cargando
    document.getElementById('datos').textContent = 'Cargando...';

    // llama la funcion que devuelve la promesa
    simularCarga()
    //si la promesa se resuelve, dira exito
    .then(info =>{
        document.getElementById('datos').textContent =
        `Usuario: ${info.usuario}\nEdad : ${info.edad}`;
    })
    // si la promesa falla (error)
    .catch(err =>{
        document.getElementById('datos').textContent = err;
    });
});





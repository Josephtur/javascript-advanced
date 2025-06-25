// accede al elemento del dom con 'id btnmensaje'
document
    .getElementById('btnMensaje')
    .addEventListener('click', () =>{
        // al hacer click cambia el contenido del div con id retardo
        document.getElementById('retardo').textContent = '...pensando...';

        // inicia un temporizador de 2000 milisegundos
        setTimeout(() => {
            //cuando pasan los dos segundos cambia el contenido del div
            document.getElementById('retardo').textContent = '¡Ya esta listo';
        },2000);
    });
// referencia al texarea
const editor = document.getElementById('editor');
const statusDiv = document.getElementById('status');

// variable para almacenar el identifficador del temporizador

let timerId;

// cada vez que el usuario escriba algo en el textarea
editor.addEventListener('input', () =>{
// mostramos en el sistema que esta detectando la escritura
statusDiv.textContent = 'Escribiendo...';

// si ya habia un temporizador pendiente lo cancelamos
clearTimeout(timerId);

//programamos un nuevo guardado para dentro de dos segundos
timerId = setTimeout(() =>{
    // aqui iria la llamada real del servidor para guardar contenido
    console.log('Guardado: ', editor.value);
    //actualizamos el estado a que ya hemos guardado el borrador
    statusDiv.textContent = 'Borrador guardado';
    }, 2000);
});
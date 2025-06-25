// declaramos una variable que contendra al identifiacador
// del temporizador

let temporizador;

//seleccionamos el input con id 'buscador'
document
.getElementById('buscador')
.addEventListener('input', e => {
// cada vez que el usuario escribe algo,
// cancelamos el temporizador
clearTimeout(temporizador);

//programamos un nuevo temporizador que tras 600 ms sin mas
//pulsaciones ejectua la funcion de busqueda
    temporizador = setTimeout(()=>{
        // cuando pasan 500ms sin mas eventos input
        //actualizamos el div con id log mostando
        //el texto buscando valor actual
        document.getElementById('log').textContent =
        'buscando: ' + e.target.value;

    },500); //500 ms de espera tras la ultima pulsacion
});
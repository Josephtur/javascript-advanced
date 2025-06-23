// Referenciar el id="counBtn"
const btnContar = document.querySelector('#countBtn');
// obtener la referencia del span id="count" para mostrar el contador
const spanCount = document.querySelector('#count');

// Se inicializa una variable llamada "contador" con valor 0

let contador = 0;
 // se inicia el evento listener clic, cuando el usuario haga clic
    // se ejecuta esa funcion

btnContar.addEventListener('click', () => {
    // contador  = contador + 1
    contador += 1;
    //text content te muestra el contenido
    spanCount.textContent = contador;
});

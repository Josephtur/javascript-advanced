// variable que contara los segundos
let seg = 0;
//selecciona el elemento span con id contador
const span = document.getElementById('contador');

// inicia un temporizador que se ejecuta cada 1000 ms
const id = setInterval(()=>{
    seg++; // aumenta el contador en 1
    span.textContent = seg;
},1000); // cada segundo

// cuando el usuario hace clic con el boton detener
document
.getElementById('btnDetener')
//detiene el contador
.addEventListener('click', () => clearInterval(id));

//setInterval = es como un bucle temporizado
// ejecuta una funcion cada cierto tiempo (1s)
// clear interval= detiene el intervalo
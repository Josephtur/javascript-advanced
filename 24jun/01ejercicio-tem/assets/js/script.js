// 1. Seleccion de elementos del DOM
const form = document.querySelector('#loginForm');
const email = document.querySelector('#email');
const pwd = document.querySelector('#password');
const msg = document.querySelector('#LoginMsg');
//  todos los inputs dentro del formulario
const inputs = form.querySelector('input');
const display = document.querySelector('#timerDisplay');

// 2. Variables para controlar el temporizador
const TOTAL_SECONDS = 30; // Duracion total en segundos del contador
let timeLeft = TOTAL_SECONDS; // segundos restantes ( inicialmente igual a total_seconds)
let timeoutId, //ID que devuelve settimeout para poder cancerlarlo
    intervalId; //ID que devuelve setinterval para poder cancelarlo

// 3. Funcion que se ejecuta cuando el tiempo se agota
function onTimeout(){
    msg.textContent = 'Tiempo agotado. Recarga la pagina'; //Mostrar msj de tiempo expirado
    inputs.forEach(i => i.disabled = true); //deshabilitar todos los inputs
    form.querySelector('button').disabled = true; // deshabilitar el boton de envio
    clearInterval(intervalId); // detener el interval que actualiza el contador
}

// 4. Funcion que reinicia tanto el coutdown (interval)como el timeout final

function resetTimers(){
    clearTimeout(timeoutId); // Cancelar cualquier timeout pendiente
    clearInterval(intervalId); // cancelar cualquier interval pendiente

    timeLeft = TOTAL_SECONDS; // resetear los segundos restantes a la duracion total
    display.textContent = timeLeft; // mostrar el valor iniciial en pantalla

    // cada segundo decremente timeLeft y actualiza display
    intervalId = setInterval(() => {
        timeLeft--; // restar un segundo
        display.textContent = timeLeft; //actualizar el texto del contador
        if(timeLeft <= 0){ // si llega a cero
            clearInterval(intervalId); // detener el interval evita numeros negativos
        }
    }, 1000); // 1000 ms  = 1 segundo
    //Programar la funcion OnTimeout() para que ejecute tras TOTAL_SECONDS segundo
    timeoutId = setTimeout(onTimeout,TOTAL_SECONDS * 1000);
}

// 5. Al cargar la pagina, arrancamos el temporizador por primera vez
resetTimers();

// 6. Cada vez que el usuario interactua con cualquiera de los inputs, 
// reiniciamos los temporizadores para empezar la cuenta de nuevo
inputs.forEach(input => {
    //1. recorremos todos los elementos inputs
    ['input','keydown','focus'].forEach(evt =>
       // 2. para cada uno de estos tres nombres de evento
       // - 'input' (cuando cambia el valor del campo)
       // - 'keydown' (cuando se pulsa una tecla)
       // - 'focus' (cuando el campo recibe foco)
  
       input.addEventListener(evt, resetTimers)
       // añadimos un listener para ejecutar el resetTimers() cada vez que ocurra ese evento en el input
    );
});

// 7. Manejo del envio del formulario
form.addEventListener('submit', e => {
  e.preventDefault(); // Prevenir el envío normal para manejarlo con JS

  const correo = email.value.trim(); // Leer y recortar espacios del email
  const clave  = pwd.value;          // Leer la contraseña (sin trim para respetar espacios)

  // Validación del correo: debe contener "@"
  if (!correo.includes('@')) {
    msg.textContent = 'Introduce un correo válido.'; 
    resetTimers();  // Si falla, reiniciamos el temporizador
    return;         // Salimos sin continuar
  }

  // Validación de la contraseña: al menos 6 caracteres
  if (clave.length < 6) {
    msg.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    resetTimers();  // Si falla, reiniciamos el temporizador
    return;         // Salimos sin continuar
  }

  // Si ambas validaciones pasan:
  clearTimeout(timeoutId);    // Cancelar el timeout final
  clearInterval(intervalId);  // Cancelar el interval del countdown
  msg.textContent = `¡Bienvenido, ${correo}!`; // Mensaje de bienvenida

  // Aquí podrías enviar el formulario con AJAX o con form.submit()
});
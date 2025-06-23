//selecciona el boton con id 'showBtn' y lo guarda en la constante btn
const btn = document.querySelector('#showBtn');
//Selecciona el parrafo con id="msg"
const msg = document.querySelector('#msg');

// añade un lestener al boton que al hacer clic cambia el texto del parrafo
btn.addEventListener('click', () => {
    msg.textContent = 'Hola, Mundo';
});

// selecciona el div con la clase "hover-box"
const box = document.querySelector('.hover-box');

//añade un listener que detecta cuando el raton entra en el area del div
box.addEventListener('mouseover', () =>{
    //cambia el texto del div para indicar que hay hover 
    box.textContent = 'Me estas haciendo cover 🍔';
});

//añade un listener que detecta cuando el raton sale del area del div
box.addEventListener('mouseout', () =>{
    //restablece el texto original de div
    box.textContent = ' Pasa el raton por aqui';
});

//se obtiene el boton que alternara el menu con id="toggleMenu"
const btnToggle = document.querySelector('#toggleMenu');
// se obtiene el menu de navegacion con id="mainNav"
const nav = document.querySelector('#mainNav');
// se agrega el evento cuando se hace clic al boyon
btnToggle.addEventListener('click', () =>{
    // se comprueba si el menu actualmente esta visible 
    const abierto = nav.style.display === 'block';
//si esta abierto lo oculta si esta oculto lo muestra
    nav.style.display = abierto ? 'none' :  'block';
// cambia el texto del boton segun el estado actual del menu
    btnToggle.textContent = abierto? 'Mostrar Menu' : 'Ocultar Menu';

});
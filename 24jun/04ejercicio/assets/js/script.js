// Seleccionar el formulario con los id correspondientes 

const subForm = document.querySelector('#subForm');
const email = document.querySelector('#sEmail');
const agree = document.querySelector('#agree');


const errS = document.querySelector('#errSEmail');
const errA = document.querySelector('#errAgree');

const subResult = document.querySelector('#subResult');

//Añadir un listener al evento 'submit'

subForm.addEventListener('submit', e =>{
    e.preventDefault(); // permite que se no refresque la web
// Limpia cualquier mensaje de error previo de email
    errS.textContent = '';
// limpia cualquier mensaje de error previo del checkbox
    errA.textContent = '';
    // Limpia cualquier mensaje previo resultado
    subResult.textContent = '';

    // variable que controlara si todo es valido 
    let valid = true;

    // usar la validacion nativa del input email:
    //check validity() devuelve false si el valor no cumple con type email o required
    if(!sEmail.checkValidity()){
        errS.textContent = 'Email no valido' ;
        valid = false;
    }
   
const checkbox = document.getElementById('agree');

if(!agree.checked){
        errA.textContent = 'Debes aceptar los términos para suscribirte';
        valid = false;
    }

    if(valid){
        subResult.textContent='¡GRACIAS POR SUSCRIBIRTE!';
    }
});
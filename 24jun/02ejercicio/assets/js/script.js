// seleccionamos los elementos del formulario y sus campos por su ID

const form = document.querySelector('#regForm');
const user = document.querySelector('#user');
const email = document.querySelector('#email');
const pdw = document.querySelector('#pdw');
const pdw2 = document.querySelector('#pd2');
const result = document.querySelector('#result');

// Elementos para mostrar errores junto a cada campo

const errUser = document.querySelector('#errUser');
const errEmail = document.querySelector('#errEmail');
const errPdw = document.querySelector('#errPdw');
const errPdw2 = document.querySelector('#errPdw2');


// añadimos un listener al evento submit

form.addEventListener('submit', e =>{
    // evita que el formulario se recargue al enviar
    e.preventDefault();

    //1. Limpiar mensaje de error y resultado anterior 
     [errUser, errEmail, errPwd, errPwd2].forEach(el => el.textContent = '');
    result.textContent = '';
    // Bandera que indicara si todos los campos pasan la validacion 
    let ok = true;
    // 2.validacion del usuario de al menos 3 caracteres  sin contar los espacios en blanco
    // al inicio y al final
    if (user.value.trim().length < 3) {
        errUser.textContent = 'Minimo 3 caracteres.';
        ok = false;
    }
    // 3. Validacion del email usando la validacion nativa del HTML5
    if (!email.checkValidity()){
        errEmail.textContent = 'Email no valido.';
        ok = false;
    }

    //4. Validacion de la contraseña: al menos 8 caracteres
    if (pwd.value.length < 8 ){
        errPwd.textContent = 'Al menos 8 caracteres.';
        ok = false;
    }
    // 5. Validacion de confirmacion de contraseña coincidir pwd / pwd2

    if (pwd2.value !== pwd.value) {
        errPwd2.textContent = 'No coincide con la contraseña.';
        ok = false;
        
    }

    // 6. Si esta todo correcto mostrar mensaje de exito.
    if(ok) {
        result.textContent = 'Registro correcto';
    }

});
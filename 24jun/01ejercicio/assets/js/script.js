const form = document.querySelector('#loginForm');
const email = document.querySelector('#email');
const pwd = document.querySelector('#password');
const msg = document.querySelector('#LoginMsg');


// no lleva parentesis porque la funcion flecha recibe un unico parametro
// form.addEventListener('submit'), function(e){}
// e es la variable donde entra el objeto event del anvegador

form.addEventListener('submit', e => {
    //Evita la recarga automatica de la pagina al enviar formulario
    e.preventDefault();
    // obtengo el valor del correo y le quitamos espacios en blanco al inicio y al final 
    const correo = email.value.trim();
    //Obtenemos el valor de la contraseña
    //(sin trim, para no eliminar espacios internos si los hay)
    const clave = pwd.value;
// el correo debe tener al menos una @
    if(!correo.includes('@')){
        msg.textContent = 'Introduce un correo valido.';
    }

    //validacion 2 la contraseña dene tener al menos 6 caracteres
     if(clave.lenght < 6) {
        msg.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return;
    }

    // SI AMBAS VALIDACIONES PASA MOSTRAMOS MENSAJE DE BIENVENIDA
    msg.textContent = `¡Bienvenido, ${correo}!`;

});
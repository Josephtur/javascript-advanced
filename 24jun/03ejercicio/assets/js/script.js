// Selecciona el elemento del DOM con id="cName" (input para el nombre) y lo guarda en la constante cName
const cName  = document.querySelector('#cName');

// Selecciona el elemento del DOM con id="cEmail" (input para el email) y lo guarda en la constante cEmail
const cEmail = document.querySelector('#cEmail');

// Selecciona el elemento del DOM con id="cMsg" (textarea para el mensaje) y lo guarda en la constante cMsg
const cMsg   = document.querySelector('#cMsg');

// Selecciona el elemento del DOM con id="eName" (span donde mostrar error de nombre) y lo guarda en eName
const eName  = document.querySelector('#eName');

// Selecciona el elemento del DOM con id="eEmail" (span donde mostrar error de email) y lo guarda en eEmail
const eEmail = document.querySelector('#eEmail');

// Selecciona el elemento del DOM con id="eMsg" (span donde mostrar error de mensaje) y lo guarda en eMsg
const eMsg   = document.querySelector('#eMsg');


// Función genérica para validar un campo:
// - field: el input/textarea a validar
// - errorEl: el elemento donde se mostrará el mensaje de error
// - validator: función que recibe el valor y devuelve true si es válido
// - msg: mensaje de error a mostrar si no pasa la validación
function validateField(field, errorEl, validator, msg) {
  // Llama a validator con el valor actual del campo
  if (validator(field.value)) {
    // Si es válido, añade la clase 'valid'
    field.classList.add('valid');
    // Y quita la clase 'invalid' por si estaba puesta
    field.classList.remove('invalid');
    // Limpia cualquier mensaje de error previo
    errorEl.textContent = '';
  } else {
    // Si NO pasa la validación, añade la clase 'invalid'
    field.classList.add('invalid');
    // Quita la clase 'valid' por si estaba puesta
    field.classList.remove('valid');
    // Muestra el mensaje de error proporcionado
    errorEl.textContent = msg;
  }
}


// Añade un listener al evento 'blur' de cName (cuando pierde el foco)
// La función flecha se ejecuta al dispararse el evento
cName.addEventListener('blur', () => {
  // Valida que el valor no sea solo espacios en blanco
  validateField(
    cName,                  // campo a validar
    eName,                  // elemento de error
    v => v.trim() !== '',   // validator: devuelve true si no está vacío
    'Obligatorio'           // mensaje si falla
  );
});

// Añade un listener al evento 'blur' de cEmail
cEmail.addEventListener('blur', () => {
  // Valida que el valor tenga formato de email básico con regex
  validateField(
    cEmail,                              // campo a validar
    eEmail,                              // elemento de error
    v => /\S+@\S+\.\S+/.test(v),         // validator: regex para email
    'Email no válido'                    // mensaje si falla
  );
});

// Añade un listener al evento 'blur' de cMsg
cMsg.addEventListener('blur', () => {
  // Valida que el mensaje tenga al menos 20 caracteres (sin contar espacios fuera)
  validateField(
    cMsg,                                // campo a validar
    eMsg,                                // elemento de error
    v => v.trim().length >= 20,          // validator: mínimo 20 caracteres
    'Mínimo 20 caracteres'               // mensaje si falla
  );
});



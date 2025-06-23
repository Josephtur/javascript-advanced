const form = document.querySelector('#myform');
const input = document.querySelector('#textInput');
const output = document.querySelector ('#output');

// añade un listener al formulario

form.addEventListener ('submit', e =>{
    //evita que el formulario recargue la pagina
    e.preventDefault();
    const texto = input.value.trim();

    if (texto){
        //si el usuario escribio algo (texto no vacio)
        //muestra el texto introducido dentro del elemento output
        output.textContent = `Has escrito: ${texto}`;
        input.value = '';
    } else {
        //si el usuario no escribio nada o solo espacios en blanco
        output.textContent = ' Por favor, escribe algo';
    }
});
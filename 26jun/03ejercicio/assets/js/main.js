import { callAPI } from "./api.js";

const form = document.getElementById("form-post");
const output = document.getElementById("output");

form.addEventListener('submit', e =>{
    e.preventDefault(); // evita que el formulario recargue la pagina

    // creamos el objeto data con valores introducidos en el formulario
    const data = {
        title: form.title.valueOf, //titulo del post
        body: form.body.value, //contenido del post
        userId: Number(form.userId.value) // ID de usuario(convertido en numero)
    };

    // llamamos a callAPI para enviar un POST a  "/posts"
    callAPI("/posts", {
        method: "POST", // metodo HTTP
        body: JSON.stringify(data) // cuerpo de la peticion
    })
    //JSONPlaceholder simula la creacion y siempre devuelve un objeto
    //con un nuevo id, que por convecion nde prueba es 101 api de prueba
    .then(created => {
        output.textContent = 
        "Creado (id esperado 101):\n" +
        JSON.stringify(created, null,2);
    })
    .catch(err => {
        //si algo falla
        output.textContent = "Error: " + err.message;
    });
});
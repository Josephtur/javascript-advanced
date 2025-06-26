// importar la funcion generica del callapi
import { callAPI } from "./api.js";

const btnListar = document.getElementById('btn-listar');
const output = document.getElementById("output");

// iniciamos el evento click
btnListar.addEventListener("click", () => {
    callAPI("/posts")
    // si la llamada es exitosa, recibimos los datos en formato JSON
    .then(data =>{
        // convertimos el objeto data a texto legible y le mostramos en el contenedor
        // output Json.strinfigy recibe objeto replacer espacios de identacion
        output.textContent = JSON.stringify(data,null,2);
    })
    // SI OCURRE ALGUN ERROR
    .catch(err =>{
        output.textContent = "Error: " + err.message;
    });
});
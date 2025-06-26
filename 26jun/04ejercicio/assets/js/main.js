import { callAPI } from "./api.js";

const btnError = document.getElementById("btn-error");
const output = document.getElementById("output");

btnError.addEventListener('click', () => {
    //Llamamos al callApi con ruta que no existe en la api
    callAPI("/neoland")
    // si por alguna razon la llamada no falla,mostramos datos  recibdos
    .then(data => {
        output.textContent = JSON.stringify(data, null,2);
    })
    //cuando callapi lanza un error fallo en la red o no existe
    .catch(err =>{
        output.textContent = "¡Hay un error en el sistema!" + err.message;
    });
});
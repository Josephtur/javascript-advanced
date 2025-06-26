import { callAPI } from "./api.js";

// NO TE OLVIDES REFERENCIAR 
const btnVer = document.getElementById('btn-ver');
const posId = document.getElementById('postId');
const output = document.getElementById('output');

btnVer.addEventListener('click', () => {
    // Leemos y limpiamos el valor introducido en el campo postId
    const id = posId.value.trim();

    if(!id){
        output.textContent = "Introduce un ID valido.";
        return; // Detiene le ejecucion
    }

    // si el ID es valido, contruimos la ruta dinamica post/{id}

    callAPI(`/posts/${id}`)
    // cuando la promesa se resuelve correctamente, recibimos el objeto post
    // lo convertimos a texto con sangria para que sea visible
    .then(post => {
        output.textContent = JSON.stringify(post, null,2);
    })
    .catch(err =>{
        // si ocurre cualquier error/capturamos aqui y mostramos el mensaje
        output.textContent = "Error: " + err.message;
    });
});
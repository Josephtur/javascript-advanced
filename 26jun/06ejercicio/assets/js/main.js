import { callAPI } from "./api.js";

const delId = document.getElementById("delId");
const btnDel = document.getElementById("btn-delate");
const output = document.getElementById("output");

btnDel.addEventListener('click', async () =>{
    // lee y limpiamos el valor del input 
    const id = delId.value.trim();

    if (!id){
        output.textContent = "Introduce unID validor para borrar.";
        return;
    }
    try{
        // llamamos al callapi con el metodo delete para simular borrado
        // await pausa la ejecucion hasta que la promesa del api se resuelva
        await callAPI(`/posts/${id}`, {method: "DELETE"});
        output.textContent = `Post ${id} borrado (simulado).`;

    }catch (err){
        output.textContent = "Error al borrar: " + err.message;
    }
});
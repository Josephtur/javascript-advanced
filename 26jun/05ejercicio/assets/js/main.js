import { callAPI } from "./api.js";

const btnListar = document.getElementById("btn-listar");
const output = document.getElementById("output");

    //añadido un listener al boton listar
    // asignado el async en el callback : convertimos en asincronico
    // permitiendonos usar el await dentro de ella
btnListar.addEventListener('click', async() =>{
    try{
        // aqui usamos el await para pausar la ejecucion hasta el api se resuelva
        // callAPI "(/posts") devuelve una promesa que al resolverse trae el array post
        const data = await callAPI("/posts");
        //una vez resuleta, mostramos los datos en forma JSON
        output.textContent = JSON.stringify(data, null, 2);
    }catch(err){
        // si callapi lanza un error muestrame mensaje error
        output.textContent = "Error: " + err.message;
    }
});

// -> el usuario hace clic en listar
// -> se dispara el listener asincronico 
// -> el codigo hace la peticion da la appi y espera sin bloquear el resto de la interfaz
// hasta que lleguen los datos.
//

///async en el callback
// al aclarar la funcion event listener cono async()=>
// indicara que esta funcion que trabaje de forma asincronica
// habilita el await esperar resultados de otras promesas dentro de ella

//await: suspende la ejecucion dde este bloque hasta que la promesa se complete
// y asigna el resultado (array de posts)
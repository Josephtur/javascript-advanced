// LLAMA A LA CONSTANTE BASEURL
import { baseURL } from "./config.js";

// la palabra clave async antes declaracion de la funcion
// convierte a `callAPI' en una funcion asincronica
// en programacion, asincronico se refiere a operaciones que no
//bloquean la ejecucion del resto de programas mientras espera
//a que ocurra algun evento.
// no bloquea el hilo principal

export async function callAPI(path, options = {} ) {
    const url = `${baseURL}${path}`;

    // await pausa la ejecucion de esta funcion asincronica
    // hasta que la promesa devuelta por fetch(url...)
    // esto nos permite escribir codigo que parece sincronico
    //pero que no bloquea el hilo principal 
    try{
        const res = await fetch(url, {
            // header: especificamos que se enviaran y esperamos datos en formato json
            
            headers: {"Content-Type": "application/json"},
            ...options
        });
        if(!res.ok) throw new Error(`Error ${res.status}`);

        // volvemos a usar el away para esperar que la promesa de res.json()
        // se resuelva obteniendo un objeto json
        return await res.json();
    } catch (err){
        console.error("API Error:", err);
        throw err;
    }

}
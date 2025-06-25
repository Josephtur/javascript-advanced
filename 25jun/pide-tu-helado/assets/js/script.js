// 1. Pedir un helado y recibirlo despues de 3 segundos con SetTimeout
console.log("Hola, quiero un helado🍨​🍧​🍦​");
setTimeout(() => {
    console.log("Toma tu helado 🍨​🍨, despues de 3 seg ");
},2000);


// 2. Pedir un helado y que te llamen cuando este listo con callback

function pedirHelado(callback){
    console.log("Helado pedido ...");
    setTimeout(() => {
        console.log("Helado listo");
        callback();
    }, 4000);
}

function avisar(){
    console.log("tu helado🍨​🍧​🍦​ ha llegado");
}

pedirHelado(avisar);


// pedir un helado y que te prometan que te avisaran si esta listo o si hubo unproblema con promesa

let promesaHelado = new Promise ((resolve, reject) =>{
    let heladoListo = false;

    setTimeout(()=>{
        if (heladoListo) {
            resolve("Tu helado esta hecho 🍨​🍧​🍦​")
        } else {
            reject("Se derritio el helado 😢")
        }
    }, 5000);
});

promesaHelado
    // resolve
    .then((mensaje)=> {
        console.log("Exito: ", mensaje);
    })
    // reject
    .catch((error)=> {
        console.log("Error:",error);
    });

//CALLBACK
//quiero una pizza. cuando este lista por favor mandame un mensaje

function pedirPizza(callback){
    console.log("Pizza pedida ...");
    setTimeout(() => {
        console.log("Pizza lista");
        callback();
    }, 2000);
}

function avisar(){
    console.log("tu pizza ha llegado");
}

pedirPizza(avisar);

// 2. setTimeout = "esperar un rato y luego hacer algo"

console.log("Inicio");
setTimeout(() => {
    console.log("Han pasado 3 segundos");
},3000);
console.log("Fin");

// 3. Promesa = "Te prometo que te aviso si la pizza esta lista o 
// si hay un problema una promesa es un contrato"

let promesaPizza = new Promise ((resolve, reject) =>{
    let pizzaLista = true;

    setTimeout(()=>{
        if (pizzaLista) {
            resolve("Tu pizza esta lista 🍕")
        } else {
            reject("Se quemo la piza 😢")
        }
    }, 5000);
});

promesaPizza
    // resolve
    .then((mensaje)=> {
        console.log("Exito: ", mensaje);
    })
    // reject
    .catch((error)=> {
        console.log("Error:",error);
    });
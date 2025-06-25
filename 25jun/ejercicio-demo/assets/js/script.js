//CALL BACK
// HE DEFINIDO UNA FUNCION CON DOS PARAMETROS
//nombre : nombre de la persona
// callback una funcion que se ejecutara despues de saludar


function saludar(nombre, callback){
    console.log("Hola " + nombre);
// permite ejecutar codigo adicional
    callback();
}
// definimos la funcion despedirse sin parametros
//esta funcion solo da el mensaje de despedida

function despedirse(){
    console.log("Adios");
}
// la funcion despedirse esta como callback, para que se ejecute tras el saludo
saludar("Daniel",despedirse);


// define la funcion leerArchivo y recibe un parametro callback
function leerArchivo(callback){
    setTimeout(() => {
        console.log("Archivo leido");
        callback();
    }, 2000);
}

// llamamos a leerarchivo, pasando un callback anonimo
leerArchivo(()=>{
    console.log("Siguiente paso")
});

//SETTIMEOUT programa una funcion para que se ejecute mas tarde

console.log("Antes");
// programado un settimeout para que se ejectue 3 segundo mas tarde
//permite que el programa corra sin pausar los otros comandos
setTimeout(()=>{
    console.log("Despues de 3 segundos")
}, 3000);

console.log("Despues");

// PROMESAS (promises)
// creamos una nueva promesa y le asignamos a la variable promesa 
// el constructor de Promise recibe la funcion con dos parametros
// - resolve : cuando la operacion es exitosa 
// - reject : cuando hay un error
let promesa = new Promise((resolve,reject) => {
    // simulamos una condicion de exito o fracaso
    let exito = true

    setTimeout(() =>{
        // usamos el setTimeout para emular la operacion exitosa
        if (exito){
            resolve("¡Exito!");
        }else {
            reject("Error");
        }
    }, 5000);
});

promesa
.then((resultado) =>{
    // este callback recibe como argumento el valor pasado a resolve()
    console.log("Resultado:" + resultado);
})
.catch((error) => {
    // este callback recibe como argumento el valor pasado a reject
    console.error("Error : " + error);

});
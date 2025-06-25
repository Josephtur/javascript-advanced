// funcion que recibe un nombre y un callback
function saludar(nombre, cb){
    // se construye un mensaje d saludo con el nombre
    const mensaje = `¡Hola!, ${nombre}!`;
    // se ejecuta la funcion callback, pasandole el msj
    cb(mensaje);
}

// se accede al boton id (btnSaludo)
document
.getElementById('btnSaludo')
.addEventListener('click', () => {
    // cuando se hace clic se llama  ala funcion saludar
    // con el nombre ana y una fuincion anonima como callback
    //esta funcion msg => document.getbydisalida
    //ambas hacen lo mismo solo que la version con =>
        // es mas moderna
    saludar('Ana', msg => {
        document.getElementById('salida').textContent = msg;
    });
});
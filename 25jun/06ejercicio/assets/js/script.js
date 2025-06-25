// esperamos que el el dom este cargado
document.addEventListener ('DOMContentLoaded',() =>{
    // obtenemos las referencias spinner y el mensaje
    const spinner = document.getElementById('spinner');
    const welcome = document.getElementById('welcome');

    //retrasamos 3 segundos la ejecucion
    setTimeout(() => {
        // ocultamos el sppiner
        spinner.classList.add('hidden');
        //mostramos el mensaje de bienvenida
        welcome.classList.remove('hidden');
    },3000);
})
// esta funcion se ejecuta automaticamente cuando la pagina ha terminado en cargarse
window.onload = () => {
    // se obtiene todos los elementos <div> de la pagina
    // devuelve una coleccion HTML
    const divs = document.getElementsByTagName("div");
    // se comprueba si hay al menos dos elementos div
    if (divs.length >= 2){
        // se accede al segundo div(indice 1, porque los indices comenzan en 0)
    const segundoDiv = divs[1];
    //dentro del segundo div se obtiene todos los elementos p
    const listaP = segundoDiv.getElementsByTagName("p");

    //se muestra una alerta con la cantidad de p encontrados en el segundo
    alert("Numero de parrafos en el 2º <div> en la pagina: " + listaP.length);
    } else{
        // Si no hay al menos dos div se muestra la alerta
        alert("no hay al menos dos <div> en la pagina");
        }
};


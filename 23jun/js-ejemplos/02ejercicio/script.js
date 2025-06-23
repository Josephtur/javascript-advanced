// esta funcion se ejecuta automaticamente cuando la pagina ha terminado en cargarse
window.onload = () => {
    // 1. Obtiene referencia al elemento<p> con id ="p1"
    const miParrafo = document.getElementById('p1');

    // Se comprueba si el elemento fue encontrado
    if (miParrafo !==null){
        //si existe, muestra el nombre del nodo
        alert("nodeName:" + miParrafo.nodeName);
        // Muestra el objeto del parrafo
        alert(miParrafo);
    } else {
        //si no existe, muestra mensaje de error
        alert("El elemento con id 'p1' no existe ");
    }
};


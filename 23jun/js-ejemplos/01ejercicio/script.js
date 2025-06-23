// esta funcion se ejecuta automaticamente cuando la pagina ha terminado en cargarse
window.onload = () => {
    // 1. Obtiene referencia al elemento<p> con id ="p1"
    const miParrafo = document.getElementById('p1');
    // 2. Se muestra la alerta el nombre del nodo, este caso sera p
    alert("nodeName: " + miParrafo.nodeName);
    // 3. Se muestra en una alerta el objeto del parrafo completo
    alert(miParrafo);
};


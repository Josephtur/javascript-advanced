// se selecciona todos los elementos span que estan dentro de p
// aqui nombramos a la variable 'spans'
const spans = document.querySelectorAll('p span');

// se recorre cada span encontrado
spans.forEach(span => {
    // se agrega un evento de click a cada span
    span.addEventListener('click', () =>{
        // se obtiene el estilo computado actual del span. incluye su tamaño de fuente actual
        const estilo = window.getComputedStyle(span);
        // se extrae el valor numero del tamaño de la fuente
        // por ejemplo 16px --> 16
        const size = parseFloat(estilo.fontSize);

        span.style.fontSize = (size + 2) + 'px'; 
    });
});
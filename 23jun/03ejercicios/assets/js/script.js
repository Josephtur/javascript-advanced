// se seleccionan todos los elementos con la clase thumb (imagenes en miniatura)
const thumbs = document.querySelectorAll('.thumb');

// se recorre cada uno de los elementos seleccionados 
thumbs.forEach(img => {
    // se agrega un evento cuando el mouse pasa por encima de la imagen 
    img.addEventListener('mouseover', () =>{
        // se reduce la opacidad de la imagen al 50% ( se vuelve transparente)
        img.style.opacity = '0.5';
    });
    // se agrega un evento cuando el mouse sale de la imagen 
    img.addEventListener('mouseout', () =>{
        // se restablece la opacidad de la imagen al 100%(totalmente visible)
        img.style.opacity = '1';
    });

});
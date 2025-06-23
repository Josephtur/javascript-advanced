// se selecciona el elemento ul con id itemlist
const ul = document.querySelector('#itemList');

// se añade un evento para cuando se hace clic en elemento dentro del ul
ul.addEventListener('click', e =>{
//Si el elemento cliclado es un li
if(e.target.tagName === 'LI'){
    // alterna la clase  'selected' en ese li
    // si la tiene, se la quita sino se la agrega 
    e.target.classList.toggle('selected');
    }
});

// se añade un evento que cuando se hace doble clic en un li
ul.addEventListener('dblclick', e =>{
    // si el elemento clicado es un li
    if(e.target.tagName === 'LI'){
        // SE ELIMINA ESE LI DE LA LISTA
        e.target.remove();
    }
});
// Array son listas / arreglos (cuidades disponibles)
const cities = [
    'Madrid',
    'Barcelona',
    'Valencia',
    'Sevilla',
    'Zaragoza',
    'Malaga',
    'Murcia',
    'Palma',
    'Bilbao',
    'Alicante'
];

const search = document.querySelector('#search');
const sugg = document.querySelector('#suggestions');

search.addEventListener('input', () =>{
    // 1. tomamos el valor actual y lo pasamos a minisculas
    const term = search.value.toLowerCase();
    // 2. vaciamos las sugerencias previas
    sugg.innerHTML = '';
    // 3. SI EL TERMINO ESTA VACIO, SALIMOS DE LA FUNCION
    if(!term) return;
    // 4. filtramos las cuidades que empiecen por el termino introducido
    cities
    .filter(ci =>
        //convertimos cada cuidad en minusculas y comprobamos el .starsWith
        ci.toLowerCase().startsWith(term)
    )
    // 5. nos quedamos solo con las primeras 5 coincidencias
    .slice(0,5)
    // 6. por cada cuidad coincidente:
    .forEach(ci => {
        // 6.1 creamos un nuevo li
        const li = document.createElement('li');
        // 6.2 le asignamos el texto de la cuidad
        li.textContent = ci;
        // 6.3 y lo añadimos al ul de sugerencias
        sugg.appendChild(li);
    });
});

// SELECCION DE UNA SUGERENCIA (mousedown)

// usamos el mousedown en lugar que click para capturar la seleccion
// antes que el input pierda el foco..
sugg.addEventListener('mousedown', e => {
    // 1. comprobamos que el elemento sobre el que se hace el mousedownes un li 
    if(e.target.tagName === 'LI'){
    // 2. rellenamos el input con el texto li seleccionado
    search.value = e.target.textContent;
    // 3. vaciamos la lista de sugerencias para ocultarla
    sugg.innerHTML = '';
    }
});

//array contiene los testimonios a mostrar
const testimonials = [
    {text: 'Servicio excelente💯​', author: 'Maria'},
    {text: 'Muy facil de usar💯​', author: 'Petra'},
    {text: 'recomendado 100%💯​', author: 'Kevin'},
    { text: 'La atención al cliente fue rápida y amable💯​', author: 'Lucía'},
    { text: 'Mi pedido llegó antes de lo esperado💯​', author: 'Carlos'},
    { text: 'Excelente variedad de productos para mascotas💯​', author: 'Ingrid'},
    { text: 'Fácil de navegar y comprar💯​', author: 'Samuel'},
    { text: 'Precios justos y buena calidad💯​', author: 'Valentina'}
];

// referencias a los elementos DOM
const block = document.getElementById('testimonial');
const auth = document.getElementById('author');
const btnPause = document.getElementById('pause');
const btnResume = document.getElementById('resume');

let idx = 0; // indice que señala el testimonio en el array
let intervalId = null; // guardara el Id de setInterval

// muestre el testimonio correspondiente al indice acual,
//luego avanza el indice en bucle vuelve a 0 al llegar al final

function showTestimonial(){
    const t = testimonials[idx]; // obtiene el objeto {text, author}
    block.textContent = `"${t.text}"`; // mostrar el texto en comillas
    auth.textContent = `-${t.author}`; // mostrar el nombre del author

    // avanzar al indice al cliclar al inicio y usar modulo
    idx = (idx + 1) % testimonials.length;
}


// iniciar el carrusel:
// 1. Llama inmediatamente a showTestimonial()
//2. programa showTestimonial()cada 4 segundos

function startCarousel(){
    showTestimonial(); //primera llamada inmediata
    intervalId = setInterval(showTestimonial, 2000); // repite cada 4s
}

// detener el carrusel 

function stopCarousel(){
    clearInterval(intervalId);
}

//asociar los botones

btnPause.addEventListener('click', stopCarousel);
btnResume.addEventListener('click', startCarousel);

//arrancar el carrusel

startCarousel();
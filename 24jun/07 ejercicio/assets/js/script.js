const slider = document.querySelector('#volumen');
const valor = document.querySelector('#valor');

slider.addEventListener('input', () =>{
    const v = slider.value;

    valor.textContent = v; // muestra los valores 0 - 100
    // mapeamos el valor del 0-100 a escala de grid 0-255
    // para gris: R = G = B = G
    // G = 255 (BLANCO) cuando v = 0
    // g=0 (negro) cuando v = 100
    // formula : g = 255 - (v*2.55)
    const g = 255 - Math.round(v*2.55);
    // cambiar el fondo ndel body
    document.main.style.backgroundColor = `rgb(${g},${g},${g})`;
});
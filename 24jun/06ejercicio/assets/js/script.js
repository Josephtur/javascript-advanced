const imgInput = document.querySelector('#imgInput');
const preview = document.querySelector('#preview');
const errorMsg = document.querySelector('#errorMsg');

imgInput.addEventListener('change', () => {
    // Limpiar previsualización y errores previos
    preview.style.display = 'none';
    preview.src = '';
    errorMsg.style.display = 'none';
    errorMsg.textContent = '';

    const file = imgInput.files[0]; // ✅ Corrección aquí
    if (!file) return;

    // Validar que sea una imagen
    if (!file.type.startsWith('image/')) {
        errorMsg.textContent = 'Error: por favor selecciona un archivo de imagen.';
        errorMsg.style.display = 'block';
        return;
    }

    // Mostrar la imagen
    const reader = new FileReader();
    reader.onload = () => {
        preview.src = reader.result;
        preview.style.display = 'block';
    };

    reader.readAsDataURL(file);
});

// esta funcion se ejecuta automaticamente cuando la pagina ha terminado en cargarse
window.onload = () => {
    //1. Primer div: se busca el elemento con id: "intro"
    const divIntro = document.getElementById("intro");
//Si el div con id=intro se le asigna color de fon do amarillo
    if (divIntro){
        divIntro.style.backgroundColor = "green";
    }
    // se accede al siguiente hermano del div intro, es decir, al segundo div
    const segundoDiv = divIntro?.nextElementSibling;

    // 2. Se accede div existe , se cambia el color del texto azul.
    if (segundoDiv){
        segundoDiv.style.color = 'blue';
    }
};




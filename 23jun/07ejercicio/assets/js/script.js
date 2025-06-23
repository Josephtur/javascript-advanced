const btnSend = document.querySelector ('#sendBtn');

let clicks = 0;

btnSend.addEventListener ('click', ()=>{
clicks++;

if (clicks > 3){
    alert('Calma, por vavor');
}

btnSend.textContent = 'Enviado';

btnSend.disabled = true;

setTimeout(() => {
    button.textContent = 'Enviado';
    button.disabled = true;
    }, 1000);
});
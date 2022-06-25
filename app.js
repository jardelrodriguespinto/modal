const modal = document.querySelector('.modal');
const abrirModalBtn = document.querySelector('.button');
const fecharBtn = document.querySelector('.fechar');

abrirModalBtn.addEventListener('click', () => {
    modal.style.visibility = "visible"
})
fecharBtn.addEventListener('click', () => {
    modal.style.visibility = "hidden"
})
window.addEventListener('click', (event) =>{
    if(event.target == modal){
        modal.style.visibility = "hidden"
    }
})
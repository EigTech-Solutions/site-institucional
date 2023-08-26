// Configurando a função de translate do header
const header = document.getElementById("header");

function rolagem() {
        header.classList.toggle("ativa", scrollY > 0);
}

window.addEventListener('scroll', rolagem);
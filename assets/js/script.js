// Configurando a função de translate do header
const header = document.getElementById("header");

function rolagem() {
        header.classList.toggle("ativa", scrollY > 0);
}

window.addEventListener('scroll', rolagem);

// Configuração do menu hamburguer - responsivo
const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.dropdown');

hamburger.addEventListener('click', () => {
    dropdown.classList.toggle('active');
});

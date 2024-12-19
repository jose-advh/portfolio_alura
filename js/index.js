const btnAbrirLista = document.querySelector('.header__link--email');
const contenidoLista = document.querySelector('.header__list--none');

function abrirListaResponsive(e) {
    e.preventDefault();
    contenidoLista.classList.toggle('header__list--none');
}

btnAbrirLista.addEventListener('click', (e) => {
    abrirListaResponsive(e);
});
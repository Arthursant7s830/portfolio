// ANIMAÇÃO AO ROLAR A PÁGINA
const elementos = document.querySelectorAll('.reveal');

function animarAoScroll() {
  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight * 0.85;
    if (posicao < alturaTela) el.classList.add('ativo');
  });
}

window.addEventListener('scroll', animarAoScroll);

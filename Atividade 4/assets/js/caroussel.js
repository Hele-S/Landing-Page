// SLIDES QUARTOS
let slideIndex = 0;
const slides = document.getElementsByClassName('itemCarrossel');

function mostrarSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('selecionado');
  }
  slides[slideIndex].classList.add('selecionado');
}

function antSlide() {
  slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.length - 1;
  mostrarSlides();
}

function proxSlide() {
  slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
  mostrarSlides();
  //   alert("teste")
}

// Inicializa a primeira imagem ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  mostrarSlides();

  // Adiciona os manipuladores de evento aos botões
  document.querySelector('.proximo').addEventListener('click', antSlide);
  document.querySelector('.anterior').addEventListener('click', proxSlide);
});
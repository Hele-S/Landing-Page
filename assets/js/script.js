submitSent() {
    document.getElementById(userPassword) = teste
}

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
}

mostrarSlides();
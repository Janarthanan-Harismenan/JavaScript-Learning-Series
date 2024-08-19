const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let interValid = null;

// initializer();
document.addEventListener("DOMContentLoaded", initializer);

function initializer() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    interValid = setInterval(nextSlide, 5000);
  }
}

function showSlide() {
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}
function nextSlide() {
  slideIndex++;
  showSlide();
}
function prevSlide() {
  clearInterval(interValid);
  slideIndex--;
  showSlide();
}

const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slider-item');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
});
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
});

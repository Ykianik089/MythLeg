const images = [
    "../a/a.jpg",
    "./picters/мэнцзян.jpg",
    "./picters/китай.jpg",
    "./picters/япония.jpg",
    "./picters/греция2.jpg",
    "./picters/италия.jpg"
];

const imgSlider = document.getElementById('imgSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

images.forEach((image, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.classList.add('image-content');
    if (index === 0) imgElement.classList.add('active');
    imgSlider.appendChild(imgElement);

    imgElement.onerror = () => console.error(`Ошибка загрузки: ${image}`);
    imgElement.onload = () => console.log(`Загружено: ${image}`);
});

function updateSlider(index) {
    const allImages = document.querySelectorAll('.image-content');
    allImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider(currentIndex);
});

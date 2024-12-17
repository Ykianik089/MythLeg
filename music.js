// Обработчик клика на всей странице
document.addEventListener("click", function(event) { // event добавлен сюда
    window.location.href = "MythLeg/Путешествие.html";
});


const music = document.getElementById('backgroundMusic');
const musicToggle = document.getElementById('musicToggle');

musicToggle.addEventListener('click', (event) => { // event добавлен сюда
    event.stopPropagation();
    const music = document.getElementById('backgroundMusic');
    if (music.paused) {
        music.muted = false;
        music.play();
        musicToggle.classList.remove('off');
        // musicToggle.textContent = 'Отключить музыку';
    } else {
        music.pause();
        // musicToggle.textContent = 'Включить музыку';
        musicToggle.classList.add('off'); // Добавляем класс "off" — показываем "выключено"
    }
});

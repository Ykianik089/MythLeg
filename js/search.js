function filterMyths() {
    const input = document.getElementById('searchInput'); // Поле ввода
    const filter = input.value.toLowerCase(); // Приводим введенный текст к нижнему регистру
    const cards = document.querySelectorAll('.myth-card'); // Получаем все карточки

    // Итерируем по каждой карточке
    cards.forEach((card) => {
        const regex = new RegExp(filter, 'i'); // Регулярное выражение (нечувствительное к регистру)
        if (regex.test(title)) { // Проверка соответствия
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}

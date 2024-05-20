document.addEventListener('DOMContentLoaded', () => {
    // Размер шага прокрутки
    const scrollStep = 1500; // Настройте это значение в соответствии с вашими потребностями

    // Обработчик события прокрутки колесика
    window.addEventListener('wheel', (event) => {
        event.preventDefault(); // Предотвращение стандартной прокрутки

        if (event.deltaY < 0) {
            // Прокрутка вверх
            window.scrollBy({
                top: -scrollStep,
                left: 0,
                behavior: 'smooth'
            });
        } else {
            // Прокрутка вниз
            window.scrollBy({
                top: scrollStep,
                left: 0,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('.tab__link').forEach((link) => { // Перебрать все таб-ссылки
    link.addEventListener('click', function(e) { // Повесить на них обработчик нажатия
        const id = e.target.getAttribute('href').replace('#','');
         // Преобразование href ссылки в id блока, на который она указывает
        e.preventDefault(); // Остановка перехода в строке браузера
        document.querySelectorAll('.tab__link').forEach((tabLink) => 
            tabLink.classList.remove('tab__link--active')); // Убрать со всех таб-ссылок класс активности
        document.querySelectorAll('.tab__block').forEach((block) => 
            block.classList.remove('tab__block--active')); // Убрать со всех таб-блоков класс активности

        document.querySelectorAll('.tab').forEach((tab) => { // Перебрать все таб-меню (их 2)
            tab.querySelectorAll('.tab__link').forEach((l) => { // В каждом из них перебрать все таб-ссылки
                if (l.getAttribute('href').replace('#','') == id) // Если id и href ссылки совпадают
                    l.classList.add('tab__link--active'); // Добавить этой ссылке класс активности
            });
        });

        document.getElementById(id).classList.add('tab__block--active');
         // Добавить класс активности нужному таб-блоку
    });
});

document.addEventListener("DOMContentLoaded", () => { // При загрузке страницы
    document.querySelector('.tab__link').click(); // Нажать первую таб-ссылку
});
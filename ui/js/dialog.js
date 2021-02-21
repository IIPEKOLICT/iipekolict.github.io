/* ----- МОДУЛЬ ДЛЯ ДИАЛОГОВЫХ ОКОН ----- */

// Общие переменные

let dia = $('#dialog'); // Вся зона
let diaCont = $('#dialog-container'); // Контейнер-спойлер
let diaBtn = $('#dialog-btn'); // Кнопка-скрывашка
let diaBlocks = $('.dialog__block'); // Блоки в спойлере
const sClass = 'shown'; // Класс для показа элементов

// Функция скрытия диалогового окна

function hideInteractive() {
    if (dia.hasClass(sClass)) { // Если зона показывается
        dia.removeClass(sClass); // Скрыть всю зону
        for (let i = 0; i < diaBlocks.length; i++) // Перебор всех блоков
            if (diaBlocks.eq(i).hasClass(sClass)) diaBlocks.eq(i).removeClass(sClass);
             // Нахождение и скрытие показ.
    }
}

// Скрытие диал. окна при нажатии на кнопку или незадействованную зону

dia.click(function(e) { // Событие клика по области диалогового окна
    if (!diaCont.is(e.target) && diaCont.has(e.target).length === 0) hideInteractive()
    else if (diaBtn.is(e.target)) hideInteractive();
    // Если производится клик вне контейнера или по кнопке-скрывашке - скрыть диалоговое окно
});

// Функция показа диалогового окна (вешать на ссылки)

function showInteractive(blockId) {
    if (dia.hasClass(sClass) == false) { // Если зона не показывается
        dia.addClass(sClass); // Показать всю зону

        for (let i = 0; i < diaBlocks.length; i++) { // Перебор всех блоков
            if (diaBlocks.eq(i).attr('id') == blockId) { // Блок, на который ссылались
                if (diaBlocks.eq(i).hasClass(sClass) == false) diaBlocks.eq(i).addClass(sClass);
                // Если он скрыт - показать
            } else if (diaBlocks.eq(i).hasClass(sClass)) diaBlocks.eq(i).removeClass(sClass);
             // Скрыть лишние блоки
        }
    }
}

$(document).ready(function() { if (dia.hasClass(sClass)) hideInteractive() });
 // Скрытие при перезагрузке страницы

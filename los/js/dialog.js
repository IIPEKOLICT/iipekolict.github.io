/*------------------------------------------------------------*/
/*---МОДУЛЬ ДЛЯ ДИАЛОГОВЫХ ОКОН-------------------------------*/
/*------------------------------------------------------------*/

// Общие переменные

let dialogArea = document.querySelector('#dialog-area'); // Вся зона
let dialogContainer = document.querySelector('#dialog-container'); // Контейнер-спойлер
let dialogBtn = document.querySelector('#dialog-btn'); // Кнопка-скрывашка
let dialogBlocks = document.querySelectorAll('.dialog-block'); // Блоки в спойлере
const shClass = 'shown'; // Класс для показа элементов

// Функция скрытия диалогового окна

function hideDialog() {
  if (dialogArea.classList.contains(shClass) == true) { // Если зона показывается
    dialogArea.classList.remove(shClass); // Скрыть всю зону

    if (dialogContainer.classList.contains(shClass) == true) {
      dialogContainer.classList.remove(shClass); // Если контейнер показывается - скрыть контейнер

      if (dialogBtn.classList.contains(shClass) == true) dialogBtn.classList.remove(shClass);
       // Если кнопка показывается - скрыть кнопку
      for (let i = 0; i < dialogBlocks.length; i++) // Перебор всех блоков
        if (dialogBlocks[i].classList.contains(shClass) == true) dialogBlocks[i].classList.remove(shClass);
         // Нахождение и скрытие показ.
    }
  }
}

// Скрытие диал. окна при нажатии на кнопку или незадействованную зону

dialogArea.addEventListener('click', function(e) { // Событие
  if (dialogArea.contains(e.target) && !dialogContainer.contains(e.target)) hideDialog(); // Для нез. зоны
  else if (dialogBtn.contains(e.target)) hideDialog(); // Для кнопки-скрывашки
});

// Функция показа диалогового окна (вешать на ссылки)

function showDialog(blockId) {
  if (dialogArea.classList.contains(shClass) == false) { // Если зона не показывается
    dialogArea.classList.add(shClass); // Показать всю зону

    if (dialogContainer.classList.contains(shClass) == false) { // Если конт. не показ.
      dialogContainer.classList.add(shClass); // Показать контенер

      if (dialogBtn.classList.contains(shClass) == false)
      dialogBtn.classList.add(shClass); // Если кнопка не показывается - показать кнопку

      for (let i = 0; i < dialogBlocks.length; i++) { // Перебор всех блоков
        if (dialogBlocks[i].getAttribute('id') == blockId) { // Блок, на который ссылались
          if (dialogBlocks[i].classList.contains(shClass) == false) dialogBlocks[i].classList.add(shClass);
           // Если он скрыт - показать
        } else if (dialogBlocks[i].classList.contains(shClass) == true) dialogBlocks[i].classList.remove(shClass);
         // Скрыть лишние блоки
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => { // Скрытие при перезагрузке страницы
  if (dialogArea.classList.contains(shClass) == true) hideDialog(); // Скрыть спойлер, если был открыт
});
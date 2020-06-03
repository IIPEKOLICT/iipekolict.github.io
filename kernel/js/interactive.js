/*------------------------------------------------------------*/
/*---МОДУЛЬ ДЛЯ ИНТЕРАКТИВНОГО СПОЙЛЕРА-----------------------*/
/*------------------------------------------------------------*/

// Общие переменные

var interactive = document.getElementById('interactive'); // Вся зона
var interactiveContainer = interactive.querySelector('#interactive-container'); // Контейнер-спойлер
var interactiveButton = interactive.querySelector('#interactive-button'); // Кнопка-скрывашка
var interactiveBlocks = interactiveContainer.querySelectorAll('.interactive-block'); // Блоки в спойлере

// Функция скрытия спойлера (вешать на незадействованную зону и кнопку-скрывашку)

function hideInteractive() {

  if (interactive.classList.contains('interactive_shown') == true) { // Если зона показывается
    interactive.classList.remove('interactive_shown'); // Скрыть всю зону

    if (interactiveContainer.classList.contains('interactive-container_shown') == true) { // Если контейнер показывается
      interactiveContainer.classList.remove('interactive-container_shown'); // Скрыть контейнер

      if (interactiveButton.classList.contains('interactive-button_shown') == true) interactiveButton.classList.remove('interactive-button_shown'); // Если кнопка показывается - скрыть кнопку

      for (var j = 0; j < interactiveBlocks.length; j++) { // Перебор всех блоков
        if (interactiveBlocks[j].classList.contains('interactive-block_shown') == true) interactiveBlocks[j].classList.remove('interactive-block_shown'); // Нахождение и скрытие показываемого
      }
    }
  }
}

// Скрытие спойлера при нажатии на кнопку или незадействованную зону

interactive.addEventListener('click', function(event) { // Событие
  if (interactive.contains(event.target) && !interactiveContainer.contains(event.target)) { // Для нез. зоны
    hideInteractive();
  } else if (interactiveButton.contains(event.target)) hideInteractive(); // Для кнопки-скрывашки
});

// Функция показа спойлера (вешать на ссылки)

function showInteractive(blockName) {

  if (interactive.classList.contains('interactive_shown') == false) { // Если зона не показывается
    interactive.classList.add('interactive_shown'); // Показать всю зону

    if (interactiveContainer.classList.contains('interactive-container_shown') == false) { // Если конт. не показ.
      interactiveContainer.classList.add('interactive-container_shown'); // Показать контенер

      if (interactiveButton.classList.contains('interactive-button_shown') == false) interactiveButton.classList.add('interactive-button_shown'); // Если кнопка не показывается - показать кнопку

      for (var i = 0; i < interactiveBlocks.length; i++) { // Перебор всех блоков
        if (interactiveBlocks[i].id == blockName) { // Блок, на который ссылались
          if (interactiveBlocks[i].classList.contains('interactive-block_shown') == false) interactiveBlocks[i].classList.add('interactive-block_shown'); // Если он скрыт - показать
        } else if (interactiveBlocks[i].classList.contains('interactive-block_shown') == true) interactiveBlocks[i].classList.remove('interactive-block_shown'); // Скрыть лишние блоки
      }
    }
  }
}

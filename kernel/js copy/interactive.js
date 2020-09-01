/*------------------------------------------------------------*/
/*---МОДУЛЬ ДЛЯ ДИАЛОГОВЫХ ОКОН-------------------------------*/
/*------------------------------------------------------------*/

// Общие переменные

var int = $('#interactive'); // Вся зона
var intContainer = $('#interactive-container'); // Контейнер-спойлер
var intButton = $('#interactive-button'); // Кнопка-скрывашка
var intBlocks = $('.interactive-block'); // Блоки в спойлере
var sClass = 'shown'; // Класс для показа элементов

// Функция скрытия спойлера (вешать на незадействованную зону и кнопку-скрывашку)

function hideInteractive() {
  if (int.hasClass(sClass)) { // Если зона показывается
    int.removeClass(sClass); // Скрыть всю зону

    if (intContainer.hasClass(sClass)) {
      intContainer.removeClass(sClass); // Если контейнер показывается - скрыть контейнер

      if (intButton.hasClass(sClass)) intButton.removeClass(sClass); // Если кнопка показывается - скрыть кнопку
      for (var j = 0; j < intBlocks.length; j++) // Перебор всех блоков
        if (intBlocks.eq(j).hasClass(sClass)) intBlocks.eq(j).removeClass(sClass); // Нахождение и скрытие показ.
    }
  }
}

// Скрытие спойлера при нажатии на кнопку или незадействованную зону

int.click(function(e) { // Событие клика по области диалогового окна
  if (!intContainer.is(e.target) && intContainer.has(e.target).length === 0) hideInteractive()
  else if (intButton.is(e.target)) hideInteractive();
    // Если производится клик вне контейнера или по кнопке-скрывашке - скрыть диалоговое окно
});

// Функция показа спойлера (вешать на ссылки)

function showInteractive(blockId) {
  if (int.hasClass(sClass) == false) { // Если зона не показывается
    int.addClass(sClass); // Показать всю зону

    if (intContainer.hasClass(sClass) == false) { // Если конт. не показ.
      intContainer.addClass(sClass); // Показать контенер

      if (intButton.hasClass(sClass) == false) 
      intButton.addClass(sClass); // Если кнопка не показывается - показать кнопку

      for (var i = 0; i < intBlocks.length; i++) { // Перебор всех блоков
        if (intBlocks.eq(i).attr('id') == blockId) { // Блок, на который ссылались
          if (intBlocks.eq(i).hasClass(sClass) == false) intBlocks.eq(i).addClass(sClass);
           // Если он скрыт - показать
        } else if (intBlocks.eq(i).hasClass(sClass)) intBlocks.eq(i).removeClass(sClass); // Скрыть лишние блоки
      }
    }
  }
}

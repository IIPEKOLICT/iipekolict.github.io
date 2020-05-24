/*------------------------------------------------------------*/
/*---ДОПОЛНИТЕЛЬНЫЙ МОДУЛЬ ДВИЖКА ТЕМ (ТОЛЬКО ДЛЯ НАСТРОЕК)---*/
/*------------------------------------------------------------*/

// Проверки локального хранилища

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы

  // Расстановка checked-инпутов

  if(localStorage.getItem('checkedAccentNo')) { // Если в ЛХ есть ключ номера выбранного акц-инпута
    var checkedAccentNo = localStorage.getItem('checkedAccentNo');
    document.querySelector('input[name="accent-color"][id="' + checkedAccentNo + '"]')
    .setAttribute('checked','checked'); // Отметить как выбраннный
  } else {
    localStorage.setItem('checkedAccentNo', 'ac1'); // Дефолтные значения, если нет
    document.querySelector('input[name="accent-color"][id="ac1"]')
    .setAttribute('checked','checked');
  }
  if(localStorage.getItem('checkedColorSchemeNo')) { // Если в ЛХ есть ключ номера выбранного CS-инпута
    var checkedColorSchemeNo = localStorage.getItem('checkedColorSchemeNo');
    document.querySelector('input[name="color-scheme"][id="' + checkedColorSchemeNo + '"]')
    .setAttribute('checked','checked'); // Отметить как выбраннный
  } else {
    localStorage.setItem('checkedColorSchemeNo', 'cs1'); // Дефолтные значения, если нет
    document.querySelector('input[name="color-scheme"][id="cs1"]')
    .setAttribute('checked','checked');
  }

  // Покраска инпутов с цветами акцента

  var coloredLabels = document.querySelectorAll('.label_custom-colored'); // Все крашенные value лейблы

  for (var i = 0; i < coloredLabels.length; i++) { // Цикл опроса всех крашеных лейблов
    var labelColor = coloredLabels[i].querySelector('input').value; // Извлечение value из инпута
    coloredLabels[i].style.setProperty('--accent-color', labelColor); // Установка цвета кнопки
  }
});

// Запись инфы в ЛХ о checked-инпуте (его id)

const accentInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="accent-color"]')); // Все инпуты, меняющие цвет акцента
const colorSchemeInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="color-scheme"]')); // Все инпуты, меняющие цветовую схему

for (var i = 0; i < accentInputs.length; i++) { // Цикл опроса всех акц-инпутов
  accentInputs[i].onclick = function() { // Если инпут нажат
    localStorage.setItem('checkedAccentNo', this.id); // Сохранить ключ номера акц-инпута
  }
}
for (var i = 0; i < colorSchemeInputs.length; i++) { // Цикл опроса всех CS-инпутов
  colorSchemeInputs[i].onclick = function() { // Если инпут нажат
    localStorage.setItem('checkedColorSchemeNo', this.id); // Сохранить ключ номера CS-инпута
  }
}

// Функция смены цвета акцента

accentInputs.forEach(input => input.addEventListener('change', changeAccent(acp1))); // Прослушка акц-инпутов
function changeAccent(acp1) { // Функция смены акцента (при нажатии на акц-инпут)
  document.documentElement.style.setProperty('--accent-color', acp1); // Смена цвета
  localStorage.setItem('accentColor', acp1); // Сохранить ключ
  location.reload();
}

// Функция смены цветовой схемы

colorSchemeInputs.forEach(input => input.addEventListener
  ('change', changeColorScheme(csp1,csp2,csp3,csp4,csp5,csp6,csp7,csp8,csp9))); // Прослушка CS-инпутов
function changeColorScheme(csp1,csp2,csp3,csp4,csp5,csp6,csp7,csp8,csp9) {
  // Функция смены цветовой схемы (при нажатии на CS-инпут)
  document.documentElement.style.setProperty('--main_bg-color', csp1);
  document.documentElement.style.setProperty('--secondary_bg-color', csp2);
  document.documentElement.style.setProperty('--additional_bg-color', csp3);
  document.documentElement.style.setProperty('--icon_bg-color', csp4);
  document.documentElement.style.setProperty('--hover_bg-color', csp5);
  document.documentElement.style.setProperty('--main_text-color', csp6);
  document.documentElement.style.setProperty('--secondary_text-color', csp7);
  document.documentElement.style.setProperty('--main_border-color', csp8);
  document.documentElement.style.setProperty('--radio_nonactive-color', csp9);
  localStorage.setItem('mainBgColor', csp1);
  localStorage.setItem('secondaryBgColor', csp2);
  localStorage.setItem('additionalBgColor', csp3);
  localStorage.setItem('iconBgColor', csp4);
  localStorage.setItem('hoverBgColor', csp5);
  localStorage.setItem('mainTextColor', csp6);
  localStorage.setItem('secondaryTextColor', csp7);
  localStorage.setItem('mainBorderColor', csp8);
  localStorage.setItem('radioNonactiveColor', csp9);
  location.reload();
}

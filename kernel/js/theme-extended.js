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
  if(localStorage.getItem('checkedHeaderStyleNo')) { // Если в ЛХ есть ключ номера выбранного инпута стиля шапки
    var checkedHeaderStyleNo = localStorage.getItem('checkedHeaderStyleNo');
    document.querySelector('input[name="header-style"][id="' + checkedHeaderStyleNo + '"]')
    .setAttribute('checked','checked'); // Отметить как выбраннный
  } else {
    localStorage.setItem('checkedHeaderStyleNo', 'hs1'); // Дефолтные значения, если нет
    document.querySelector('input[name="header-style"][id="hs1"]')
    .setAttribute('checked','checked');
  }
  if(localStorage.getItem('checkedUiStyleNo')) { // Если в ЛХ есть ключ номера выбранного инпута стиля UI
    var checkedUiStyleNo = localStorage.getItem('checkedUiStyleNo');
    document.querySelector('input[name="ui-style"][id="' + checkedUiStyleNo + '"]')
    .setAttribute('checked','checked'); // Отметить как выбраннный
  } else {
    localStorage.setItem('checkedUiStyleNo', 'us1'); // Дефолтные значения, если нет
    document.querySelector('input[name="ui-style"][id="us1"]')
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
const headerStyleInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="header-style"]')); // Все инпуты, меняющие стиль шапки
const uiStyleInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="ui-style"]')); // Все инпуты, меняющие стиль UI

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
for (var i = 0; i < headerStyleInputs.length; i++) { // Цикл опроса всех инпутов стиля шапки
  headerStyleInputs[i].onclick = function() { // Если инпут нажат
    localStorage.setItem('checkedHeaderStyleNo', this.id); // Сохранить ключ номера инпута
  }
}
for (var i = 0; i < uiStyleInputs.length; i++) { // Цикл опроса всех инпутов стиля UI
  uiStyleInputs[i].onclick = function() { // Если инпут нажат
    localStorage.setItem('checkedUiStyleNo', this.id); // Сохранить ключ номера инпута
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

// Функция смены стиля шапки

headerStyleInputs.forEach(input => input.addEventListener('change', changeHeaderStyle(checkedHS))); // Прослушка
function changeHeaderStyle(checkedHS) { // Функция смены
  for (var i = 0; i < headers.length; i++) {
    if (headers[i].classList.contains(checkedHS) == false) {
      headers[i].classList.add(checkedHS);

      for (var j = 0; j < headerStyles.length; j++) {
        if (headers[i].classList.contains(headerStyles[j]) == true && checkedHS != headerStyles[j]) headers[i].classList.remove(headerStyles[j]);
      }
    }
  }
  localStorage.setItem('headerStyle', checkedHS); // Сохранить ключ
  location.reload();
}

// Функция смены стиля UI

uiStyleInputs.forEach(input => input.addEventListener('change', changeUiStyle(usp1))); // Прослушка
function changeUiStyle(usp1) { // Функция смены
  if (page.classList.contains(usp1) == false) {
    page.classList.add(usp1);
    localStorage.setItem('uiStyle', usp1); // Сохранить ключ

    for (var i = 0; i < uiStyles.length; i++) {
      if (page.classList.contains(uiStyles[i]) == true && usp1 != uiStyles[i]) page.classList.remove(uiStyles[i]);
    }

    location.reload();
  }
}

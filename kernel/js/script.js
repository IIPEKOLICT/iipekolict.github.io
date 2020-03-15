// Переменные

var coloredLabels = document.querySelectorAll('.label_custom-colored'); // Все крашенные value лейблы
const accentInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="accent-color"]')); // Все инпуты, меняющие цвет акцента
const colorSchemeInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="color-scheme"]')); // Все инпуты, меняющие цветовую схему

// Проверки локального хранилища

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы
  if(localStorage.getItem('accentColor')) { // Если в ЛХ есть ключ цвета акцента
    var accentColor = localStorage.getItem('accentColor');
    document.documentElement.style.setProperty('--accent-color', accentColor); // Установить цвет
  } else {
    localStorage.setItem('accentColor', '#80cbc4'); // Дефолтный ключ, если сохраненного не было
  }
  if(localStorage.getItem('defaultBgColor')) { // Если в ЛХ есть ключ основного цвета фона
    var defaultBgColor = localStorage.getItem('defaultBgColor');
    document.documentElement.style.setProperty('--default_bg-color', defaultBgColor); // Установить цвет
  } else {
    localStorage.setItem('defaultBgColor', 'black'); // Дефолтный ключ, если сохраненного не было
  }
  if(localStorage.getItem('defaultTextColor')) { // Если в ЛХ есть ключ основного цвета текста
    var defaultTextColor = localStorage.getItem('defaultTextColor');
    document.documentElement.style.setProperty('--default_text-color', defaultTextColor); // Установить цвет
  } else {
    localStorage.setItem('defaultTextColor', 'white'); // Дефолтный ключ, если сохраненного не было
  }
  if(localStorage.getItem('defaultBorderColor')) { // Если в ЛХ есть ключ основного цвета бордеров
    var defaultBorderColor = localStorage.getItem('defaultBorderColor');
    document.documentElement.style.setProperty('--default_border-color', defaultBorderColor); // Установить цвет
  } else {
    localStorage.setItem('defaultBorderColor', '#212121'); // Дефолтный ключ, если сохраненного не было
  }
  if(localStorage.getItem('menuItemBgColor')) { // Если в ЛХ есть ключ цвета кружочков для иконок в меню
    var menuItemBgColor = localStorage.getItem('menuItemBgColor');
    document.documentElement.style.setProperty('--menu-item_bg-color', menuItemBgColor); // Установить цвет
  } else {
    localStorage.setItem('menuItemBgColor', '#141414'); // Дефолтный ключ, если сохраненного не было
  }
  if(localStorage.getItem('secondaryTextColor')) { // Если в ЛХ есть ключ второстепенного цвета текста
    var secondaryTextColor = localStorage.getItem('secondaryTextColor');
    document.documentElement.style.setProperty('--secondary_text-color', secondaryTextColor); // Установить цвет
  } else {
    localStorage.setItem('secondaryTextColor', '#bbb'); // Дефолтный ключ, если сохраненного не было
  }
  if(localStorage.getItem('siteHoverBgColor')) { // Если в ЛХ есть ключ цвета выделенных плашек
    var siteHoverBgColor = localStorage.getItem('siteHoverBgColor');
    document.documentElement.style.setProperty('--site-hover_bg-color', siteHoverBgColor); // Установить цвет
  } else {
    localStorage.setItem('siteHoverBgColor', '#282828'); // Дефолтный ключ, если сохраненного не было
  }
  if(localStorage.getItem('siteHeaderBorderColor')) { // Если в ЛХ есть ключ цвета бордера в плашке
    var siteHeaderBorderColor = localStorage.getItem('siteHeaderBorderColor');
    document.documentElement.style.setProperty('--site-header_border-color', siteHeaderBorderColor); // Установить цвет
  } else {
    localStorage.setItem('siteHeaderBorderColor', '#383838'); // Дефолтный ключ, если сохраненного не было
  }
  if(localStorage.getItem('footerTextColor')) { // Если в ЛХ есть ключ цвета текста в футере
    var footerTextColor = localStorage.getItem('footerTextColor');
    document.documentElement.style.setProperty('--footer_text-color', footerTextColor); // Установить цвет
  } else {
    localStorage.setItem('footerTextColor', '#808080'); // Дефолтный ключ, если сохраненного не было
  }
  if(localStorage.getItem('headerBackButton')) { // Если в ЛХ есть ключ кнопки назад из хедера
    var headerBackButton = localStorage.getItem('headerBackButton');
    document.documentElement.style.setProperty('--header-back_button', headerBackButton); // Установить кнопку
  } else {
    localStorage.setItem('headerBackButton', 'url(../icons/back-white.png)'); // Дефолтный ключ, если сохраненного не было
  }

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

  for (var i = 0; i < coloredLabels.length; i++) { // Цикл опроса всех крашеных лейблов
    var labelColor = coloredLabels[i].querySelector('input').value; // Извлечение value из инпута
    coloredLabels[i].style.setProperty('--accent-color', labelColor); // Установка цвета кнопки
  }
});

// Движок тем

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

accentInputs.forEach(input => input.addEventListener('change', changeAccent(a))); // Прослушка акц-инпутов
function changeAccent(a) { // Функция смены акцента (при нажатии на акц-инпут)
  document.documentElement.style.setProperty('--accent-color', a); // Смена цвета
  localStorage.setItem('accentColor', a); // Сохранить ключ
}

colorSchemeInputs.forEach(input => input.addEventListener
  ('change', changeColorScheme(p1,p2,p3,p4,p5,p6,p7,p8,p9))); // Прослушка CS-инпутов
function changeColorScheme(p1,p2,p3,p4,p5,p6,p7,p8,p9) {
  // Функция смены цветовой схемы (при нажатии на CS-инпут)
  document.documentElement.style.setProperty('--default_bg-color', p1);
  document.documentElement.style.setProperty('--default_text-color', p2);
  document.documentElement.style.setProperty('--default_border-color', p3);
  document.documentElement.style.setProperty('--menu-item_bg-color', p4);
  document.documentElement.style.setProperty('--secondary_text-color', p5);
  document.documentElement.style.setProperty('--site-hover_bg-color', p6);
  document.documentElement.style.setProperty('--site-header_border-color', p7);
  document.documentElement.style.setProperty('--footer_text-color', p8);
  document.documentElement.style.setProperty('--header-back_button', p9);
  localStorage.setItem('defaultBgColor', p1);
  localStorage.setItem('defaultTextColor', p2);
  localStorage.setItem('defaultBorderColor', p3);
  localStorage.setItem('menuItemBgColor', p4);
  localStorage.setItem('secondaryTextColor', p5);
  localStorage.setItem('siteHoverBgColor', p6);
  localStorage.setItem('siteHeaderBorderColor', p7);
  localStorage.setItem('footerTextColor', p8);
  localStorage.setItem('headerBackButton', p9);
}

/*

*/

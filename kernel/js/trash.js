/*

let page = !localStorage.getItem('.page');
let themeButton = !localStorage.getItem('.theme-button');
themeButton.onclick = function() {
  page.classList.toggle('dark');
  page.classList.toggle('light');
};

// Изменение цвета акцента

$(function() {
  if(!localStorage.getItem('theme_akcent')) {
    $('#theme_akcent').attr('href', 'kernel/css/akc/akc1.css');
  } else {
    $('#theme_akcent').attr('href', 'kernel/css/akc/akc' + localStorage.getItem('theme_akcent') + '.css');
  };
});
function change_akcent(a) {
  if(a == 1) {
    $('#theme_akcent').attr('href', 'kernel/css/akc/akc1.css');
    localStorage.removeItem('theme_akcent');
  } else {
    $('#theme_akcent').attr('href', 'kernel/css/akc/akc' + a + '.css');
    localStorage.setItem('theme_akcent', a);
  };
};

var element = document.querySelector('.accent-color');
var input = document.querySelector('.input');

input.addEventListener('change', function(){
  element.style.setProperty('--accent-color', input.value);
})
}

function changeAccent(a) {
    $(':root').changeCss('--accent-color', function(index,a){return a;});
  localStorage.setItem('changeAccent', a);
};

if(localStorage.getItem('accentColor')) {
  var checkedAccentColor = localStorage.getItem('accentColor');
  document.documentElement.style.setProperty('--accent-color', checkedAccentColor);
  alert(localStorage.getItem('accentColor'));
}

alert(localStorage.getItem('accentColor'));

$(function() {
  if(!localStorage.getItem('accentColor')) {
    a = !localStorage.getItemValue('accentColor');
    $(':root').css('--accent-color', a);
  };
});

var test = document.getElementsByName('test');
for (var i = 0; i < test.length; i++) {
  test[i].onclick = function() {
    localStorage.setItem('testCheckedItem', this.id);
  }
}

// Функции-оптимизаторы

function setRootColor(element, color) {
  document.documentElement.style.setProperty('"' + element + '"', color);
}

function test1(key,parametr,default) {
  if(localStorage.getItem("'" + key + "'")) { // Если в ЛХ есть ключ цвета акцента
    document.documentElement.style.setProperty("'" + parametr + "'", key); // Установить цвет
  } else {
    localStorage.setItem("'" + key + "'", "'" + default + "'"); // Дефолтный ключ, если сохраненного не было
  }
}

// Функции-оптимизаторы

function checkLSKey(key,parametr,default) {
  if(localStorage.getItem("'" + key + "'")) { // Если в ЛХ есть ключ цвета акцента
    var keyValue = localStorage.getItem("'" + key + "'");
    document.documentElement.style.setProperty("'" + key + "'", keyValue); // Установить цвет
  } else {
    localStorage.setItem("'" + key + "'", "'" + default + "'"); // Дефолтный ключ, если сохраненного не было
  }
}

*/

/*

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

  if(localStorage.getItem('mainBgColor')) { // Если в ЛХ есть ключ основного цвета фона
    var mainBgColor = localStorage.getItem('mainBgColor');
    document.documentElement.style.setProperty('--main_bg-color', mainBgColor); // Установить цвет
  } else {
    localStorage.setItem('mainBgColor', 'black'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--main_bg-color', 'black');
  }
  if(localStorage.getItem('secondaryBgColor')) { // Если в ЛХ есть ключ основного цвета текста
    var secondaryBgColor = localStorage.getItem('secondaryBgColor');
    document.documentElement.style.setProperty('--secondary_bg-color', secondaryBgColor); // Установить цвет
  } else {
    localStorage.setItem('secondaryBgColor', '#141414'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--secondary_bg-color', '#141414');
  }
  if(localStorage.getItem('hoverBgColor')) { // Если в ЛХ есть ключ цвета акцента
    var hoverBgColor = localStorage.getItem('hoverBgColor');
    document.documentElement.style.setProperty('--hover_bg-color', hoverBgColor); // Установить цвет
  } else {
    localStorage.setItem('hoverBgColor', '#282828'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--hover_bg-color', '#282828');
  }
  if(localStorage.getItem('mainTextColor')) { // Если в ЛХ есть ключ цвета акцента
    var mainTextColor = localStorage.getItem('mainTextColor');
    document.documentElement.style.setProperty('--main_text-color', mainTextColor); // Установить цвет
  } else {
    localStorage.setItem('mainTextColor', 'white'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--main_text-color', 'white');
  }
  if(localStorage.getItem('secondaryTextColor')) { // Если в ЛХ есть ключ цвета акцента
    var secondaryTextColor = localStorage.getItem('secondaryTextColor');
    document.documentElement.style.setProperty('--secondary_text-color', secondaryTextColor); // Установить цвет
  } else {
    localStorage.setItem('secondaryTextColor', '#bbb'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--secondary_text-color', '#bbb');
  }
  if(localStorage.getItem('mainBorderColor')) { // Если в ЛХ есть ключ цвета акцента
    var mainBorderColor = localStorage.getItem('mainBorderColor');
    document.documentElement.style.setProperty('--main_border-color', mainBorderColor); // Установить цвет
  } else {
    localStorage.setItem('mainBorderColor', '#212121'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--main_border-color', '#212121');
  }
  if(localStorage.getItem('headerBackButton')) { // Если в ЛХ есть ключ кнопки назад из хедера
    var headerBackButton = localStorage.getItem('headerBackButton');
    document.documentElement.style.setProperty('--header-back_button', headerBackButton); // Установить кнопку
  } else {
    localStorage.setItem('headerBackButton', 'url(../icons/back-white.png)'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--header-back_button', 'url(../icons/back-white.png)');
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

accentInputs.forEach(input => input.addEventListener('change', changeAccent(acp1))); // Прослушка акц-инпутов
function changeAccent(acp1) { // Функция смены акцента (при нажатии на акц-инпут)
  document.documentElement.style.setProperty('--accent-color', acp1); // Смена цвета
  localStorage.setItem('accentColor', acp1); // Сохранить ключ
}

colorSchemeInputs.forEach(input => input.addEventListener
  ('change', changeColorScheme(csp1,csp2,csp3,csp4,csp5,csp6,csp7))); // Прослушка CS-инпутов
function changeColorScheme(csp1,csp2,csp3,csp4,csp5,csp6,csp7) {
  // Функция смены цветовой схемы (при нажатии на CS-инпут)
  document.documentElement.style.setProperty('--main_bg-color', csp1);
  document.documentElement.style.setProperty('--secondary_bg-color', csp2);
  document.documentElement.style.setProperty('--hover_bg-color', csp3);
  document.documentElement.style.setProperty('--main_text-color', csp4);
  document.documentElement.style.setProperty('--secondary_text-color', csp5);
  document.documentElement.style.setProperty('--main_border-color', csp6);
  document.documentElement.style.setProperty('--header-back_button', csp7);
  localStorage.setItem('mainBgColor', csp1);
  localStorage.setItem('secondaryBgColor', csp2);
  localStorage.setItem('hoverBgColor', csp3);
  localStorage.setItem('mainTextColor', csp4);
  localStorage.setItem('secondaryTextColor', csp5);
  localStorage.setItem('mainBorderColor', csp6);
  localStorage.setItem('headerBackButton', csp7);
}

*/

/*

// Изменение цвета акцента

$(function() {
  if(!localStorage.getItem('theme_akcent')) {
    $('#theme_akcent').attr('href', 'kernel/css/akc/akc1.css');
  } else {
    $('#theme_akcent').attr('href', 'kernel/css/akc/akc' + localStorage.getItem('theme_akcent') + '.css');
  };
});
function change_akcent(a) {
  if(a == 1) {
    $('#theme_akcent').attr('href', 'kernel/css/akc/akc1.css');
    localStorage.removeItem('theme_akcent');
  } else {
    $('#theme_akcent').attr('href', 'kernel/css/akc/akc' + a + '.css');
    localStorage.setItem('theme_akcent', a);
  };
};

// Изменение цвета фона

$(function() {
  if(!localStorage.getItem('theme_background')) {
    $('#theme_background').attr('href', 'root/css/background/bg1.css');
  } else {
    $('#theme_background').attr('href', 'root/css/background/bg' + localStorage.getItem('theme_background') + '.css');
  };
});
function change_background(a) {
  if(a == 1) {
    $('#theme_background').attr('href', 'root/css/background/bg1.css');
    localStorage.removeItem('theme_background');
  } else {
    $('#theme_background').attr('href', 'root/css/background/bg' + a + '.css');
    localStorage.setItem('theme_background', a);
  };
};

// Включение/выключение закруглений

$(function() {
  if(!localStorage.getItem('theme_krug')) {
    $('#theme_krug').attr('href', 'root/css/krug/kr1.css');
  } else {
    $('#theme_krug').attr('href', 'root/css/krug/kr' + localStorage.getItem('theme_krug') + '.css');
  };
});
function change_krug(a) {
  if(a == 1) {
    $('#theme_krug').attr('href', 'root/css/krug/kr1.css');
    localStorage.removeItem('theme_krug');
  } else {
    $('#theme_krug').attr('href', 'root/css/krug/kr' + a + '.css');
    localStorage.setItem('theme_krug', a);
  };
};

*/

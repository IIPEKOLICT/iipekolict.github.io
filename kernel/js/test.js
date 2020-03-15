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

*/

// Переменные

var coloredLabels = document.querySelectorAll('.label_custom-colored'); // Все крашенные value лейблы
const accentInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="accent-color"]')); // Все инпуты, меняющие цвет акцента

// Проверки локального хранилища

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы
  if(localStorage.getItem('accentColor')) { // Если в ЛХ есть ключ цвета акцента
    var accentColor = localStorage.getItem('accentColor');
    document.documentElement.style.setProperty('--accent-color', accentColor); // Установить цвет
  } else {
    localStorage.setItem('accentColor', '#80cbc4'); // Дефолтный ключ, если сохраненного не было
  }
  if(localStorage.getItem('checkedAccentNo')) { // Если в ЛХ есть ключ номера выбранного акц-инпута
    var checkedAccentNo = localStorage.getItem('checkedAccentNo');
    document.querySelector('input[name="accent-color"][id="' + checkedAccentNo + '"]')
    .setAttribute('checked','checked'); // Отметить как выбраннный
  } else {
    localStorage.setItem('checkedAccentNo', '1'); // Дефолтные значения, если нет
    document.querySelector('input[name="accent-color"][id="1"]')
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
accentInputs.forEach(input => input.addEventListener('change', changeAccent(a))); // Прослушка акц-инпутов
function changeAccent(a) { // Функция смены акцента (при нажатии на акц-инпут)
  document.documentElement.style.setProperty('--accent-color', a); // Смена цвета
  localStorage.setItem('accentColor', a); // Сохранить ключ
}

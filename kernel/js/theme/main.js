/*------------------------------------------------------------*/
/*---УНИВЕРСАЛЬНЫЙ МОДУЛЬ-ЗАГРУЗЧИК (ЧТЕНИЕ ИНФЫ ИЗ ЛХ)-------*/
/*------------------------------------------------------------*/

// Функции

function reload() { location.reload() } // Функция перезагрузки страницы

function showElement(el) { // Универсальная функция для показа нужного элемента
  if ($(el).hasClass('shown') == false) $(el).addClass('shown')
}

if (localStorage.getItem('preloader') != 'theme') showElement('#default-preloader');
else showElement('#theme-preloader'); // Для отображения правильного прелоадера ("применение..."/аним. загрузки)

function varRead(array) { // Считыватель css-переменных из ЛХ
  for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array[i][1].length; j++) {
      if (localStorage.getItem(array[i][1][j])) 
        document.documentElement.style.setProperty(array[i][1][j], localStorage.getItem(array[i][1][j]));
    }
}

function varRecord(vars, values) { // Установщик css-переменных (в ЛХ и в root)
  for (let i = 0; i < vars.length; i++) {
    document.documentElement.style.setProperty(vars[i], values[i]);
    localStorage.setItem(vars[i], values[i]);
  }
} 

function classSwitch(inputArray, value) { // Переключатель класса (один из массива вариантов)
  for (let i = 0; i < inputArray[1].length; i++)
    for (let j = 0; j < inputArray[1][i].length; j++) // перебор всех модифицируемых элементов
      if (inputArray[1][i][j].classList.contains(value) == false) { // если нет нужного класса-стиля
        inputArray[1][i][j].classList.add(value); // добавить
    
        for (let k = 0; k < inputArray[2].length; k++) // перебор всех вариантов класса
          if (inputArray[1][i][j].classList.contains(inputArray[2][k]) && value != inputArray[2][k]) 
            inputArray[1][i][j].classList.remove(inputArray[2][k]); // если есть лишние классы - убрать
      }
}

function styleRead(array) { // Установщик классов
  if (localStorage.getItem(array[0].valueKey)) classSwitch(array, localStorage.getItem(array[0].valueKey));
  else {
    localStorage.setItem(array[0].valueKey, array[0].valueStock);
    classSwitch(array, array[0].valueStock);
  }
}

function markInput(key, name, id) { // Функция для принудительной отметки инпута
  document.querySelector('input[name="' + name + '"][id="' + id + '"]').setAttribute('checked','checked');
  localStorage.setItem(key, id); // сохранить ключ в ЛХ
}

function setOpacityAccent() { // Установщик бледного акцента на основе инфы о цвете акцента из ЛХ
  if (localStorage.getItem('--accent-color')) {
    const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) =>
    '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
     // преобразователь из hex в rgb-массив, поддерживает и 3-значные
    let accentRGB = hexToRgb(localStorage.getItem('--accent-color')); // преобразуем в массив [r,g,b]
    let opacityAccent = 'rgba(' + accentRGB[0] + ',' + accentRGB[1] + ',' + accentRGB[2] + ',0.5)';
     // сборка значения бледного акцента
    localStorage.setItem('--accent_opacity-color', opacityAccent); // запись в ЛХ
  }
}

function svgColor(array) { // Установщик цветов g-элементам (покраска SVG-иконок)
  for (let i = 0; i < array.length; i++) for (let j = 0; j < array.length; j++)
  for (let k = 0; k < document.querySelectorAll('.g' + i + j).length; k++) { // перебор всех g-элементов
    document.querySelectorAll('.g' + i + j)[k].style.setProperty('fill', array[i]);
    document.querySelectorAll('.g' + i + j)[k].style.setProperty('stroke', array[j]);
  }
}

function wbAccent(array) { // Проверка цвета акцента на равенство основному цвету фона
  if (localStorage.getItem('--accent-color') == array[0].color) for (let i = 0; i < array[1].length; i++)
   // если цвет акцента - исследуемый цвет => перебор всех светлых/темных зн. осн. цвета фона
    if (localStorage.getItem('--main_bg-color') == array[1][i]) { // если ОЦФ равен одному из них
      varRecord(['--accent-color'], ['#80cbc4']); // сток акцент
      markInput(themeKernel[0][0][0].checkedKey, themeKernel[0][0][0].name, 'ac-0'); // отметить правильный инпут
    }
}

// Событие загрузки страницы

$(document).ready(function() {
  setOpacityAccent();
  varRead(themeKernel[0]);
  varRead(themeKernel[2]);
  wbAccent(themeKernel[4][1][0]);
  wbAccent(themeKernel[4][1][1]);
  svgColor(themeKernel[4][0]);
  for (let i = 0; i < themeKernel[1].length; i++) styleRead(themeKernel[1][i]);
  for (let i = 0; i < themeKernel[3].length; i++) styleRead(themeKernel[3][i]);

  if ($(window).scrollTop() > 0) { // Если имеется скроллинг вниз страницы
    // забираем скроллинг-класс у шапки и майна
    if ($('.header.OneUI-mode').hasClass('scroll') == false) $('.header.OneUI-mode').addClass('scroll');
    if ($('.main.OneUI-mode').hasClass('scroll') == false) $('.main.OneUI-mode').addClass('scroll');
 }

  let anime = 0.5;
  if (localStorage.getItem('animationDurationValue') > 0.5) anime = localStorage.getItem('animationDurationValue');

  setTimeout(function() { // Отключение прелоадера спустя некоторое врем после загрузки страницы
    if ($('.loader').hasClass('shown')) $('.loader').removeClass('shown');
    if (localStorage.getItem('preloader') != 'default') localStorage.setItem('preloader', 'default');
  }, anime * 1000);
});

// Скроллинг страницы

$(window).scroll(function() { // Функция для OneUI mode, событие при скроллинге
  if ($(window).scrollTop() > 0) { // если есть скроллинг вниз страницы
     // добавляем класс шапке и майну
    if ($('.header.OneUI-mode').hasClass('scroll') == false) $('.header.OneUI-mode').addClass('scroll');
    if ($('.main.OneUI-mode').hasClass('scroll') == false) $('.main.OneUI-mode').addClass('scroll');
  } else { // когда в самом верху страницы (скроллинга нет)
     // забираем класс у шапки и майна
    if ($('.header.OneUI-mode').hasClass('scroll')) $('.header.OneUI-mode').removeClass('scroll');
    if ($('.main.OneUI-mode').hasClass('scroll')) $('.main.OneUI-mode').removeClass('scroll');
  }
});
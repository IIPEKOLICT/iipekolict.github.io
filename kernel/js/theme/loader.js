/*------------------------------------------------------------*/
/*---УНИВЕРСАЛЬНЫЙ МОДУЛЬ-ЗАГРУЗЧИК (ЧТЕНИЕ ИНФЫ ИЗ ЛХ)-------*/
/*------------------------------------------------------------*/

// Функции

function varRead(array) { // Считыватель css-переменных
  for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array[i][1].length; j++) {
      if (localStorage.getItem(array[i][1][j])) 
        document.documentElement.style.setProperty(array[i][1][j], localStorage.getItem(array[i][1][j]));
    }
}

function varRecord(vars, values) {
  for (let i = 0; i < vars.length; i++) {
    //$(':root').get(0).style.setProperty(vars[i], values[i]);
    document.documentElement.style.setProperty(vars[i], values[i]);
    localStorage.setItem(vars[i], values[i]);
  }
} 

function classSwitch(inputArray, value) { // Переключатель класса
  for (let i = 0; i < inputArray[1].length; i++)
    for (let j = 0; j < inputArray[1][i].length; j++) // Перебор всех модифицируемых элементов
      if (inputArray[1][i][j].classList.contains(value) == false) { // если нет нужного класса-стиля
        inputArray[1][i][j].classList.add(value); // добавить
    
        for (let k = 0; k < inputArray[2].length; k++) // перебор всех вариантов стилей
          if (inputArray[1][i][j].classList.contains(inputArray[2][k]) && value != inputArray[2][k]) 
            inputArray[1][i][j].classList.remove(inputArray[2][k]); // если есть лишние классы - убрать
      }
}

function styleRead(array) { // Считыватель классов
  if (localStorage.getItem(array[0].valueKey)) classSwitch(array, localStorage.getItem(array[0].valueKey));
  else {
    localStorage.setItem(array[0].valueKey, array[0].valueStock);
    classSwitch(array, array[0].valueStock);
  }
}

function markInput(key, name, id) {
  document.querySelector('input[name="' + name + '"][id="' + id + '"]').setAttribute('checked','checked');
   // Отметить как выбраннный
  localStorage.setItem(key, id); // Сохранить ключ в ЛХ
}

/*

function markInput(array, id) {
  document.querySelector('input[name="' + array[0].name + '"][id="' + id + '"]').setAttribute('checked','checked');
   // Отметить как выбраннный
  localStorage.setItem(array[0].checkedKey, id); // Сохранить ключ в ЛХ
}

*/

function setOpacityAccent() {
  if (localStorage.getItem('--accent-color')) { // если есть ключ цвета акцента
    const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) =>
    '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
     // перобразователь из hex в rgb, поддерживает и 3-значные
    let accentRGB = hexToRgb(localStorage.getItem('--accent-color')); // преобразуем в массив [r,g,b]
    let opacityAccent = 'rgba(' + accentRGB[0] + ',' + accentRGB[1] + ',' + accentRGB[2] + ',0.6)';
     // сборка значения бледного акцента
    localStorage.setItem('--accent_opacity-color', opacityAccent); // запись в ЛХ
  }
}

function svgColor(array) {
  for (let i = 0; i < array.length; i++) for (let j = 0; j < array.length; j++)
   // Перебор всех идентификаторов
  for (let k = 0; k < document.querySelectorAll('.g' + i + j).length; k++) { // Перебор всех элементов массива
    document.querySelectorAll('.g' + i + j)[k].style.setProperty('fill', array[i]);
     // Установить цвет заливки
    document.querySelectorAll('.g' + i + j)[k].style.setProperty('stroke', array[j]);
     // Установить цвет обводки
  }
}

function wbAccent(accent, bgVariants) {
  if (localStorage.getItem('--accent-color') == accent) for (let i = 0; i < bgVariants.length; i++)
   // Если цвет акцента - исследуемый цвет => перебор всех светлых/темных зн. осн. цвета фона
    if (localStorage.getItem('--main_bg-color') == bgVariants[i]) {
      varRecord(['--accent-color'], ['#80cbc4']);
      markInput(themeKernel[0][0][0].checkedKey, themeKernel[0][0][0].name, 'ac-0');
    }
}

// Событие загрузки страницы

document.addEventListener("DOMContentLoaded", () => {
  setOpacityAccent();
  varRead(themeKernel[0]);
  varRead(themeKernel[2]);
  wbAccent(themeKernel[4][1][0].black, themeKernel[4][1][1]); // Проверка на равенство цвета акцента и ОЦФ (для ч. и б.)
  wbAccent(themeKernel[4][1][0].white, themeKernel[4][1][2]); // Если да - меняет цвет акцента на стоковый
  svgColor(themeKernel[4][0]);
  for (let i = 0; i < themeKernel[1].length; i++) styleRead(themeKernel[1][i]);
  for (let i = 0; i < themeKernel[3].length; i++) styleRead(themeKernel[3][i]);
});

/*
setInterval(function() {
  console.log(localStorage.getItem('headerStyleValue'));
  console.log(localStorage.getItem('uiStyleValue'));
  console.log(localStorage.getItem('interactiveStyleValue'));
  console.log(localStorage.getItem('switchStyleValue'));
}, 300);
*/
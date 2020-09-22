/*------------------------------------------------------------*/
/*---МОДУЛЬ СПЕЦИАЛЬНО ДЛЯ SVG-ФАЙЛОВ-------------------------*/
/*------------------------------------------------------------*/

// Массив с параметрами движка тем

const themeKernelSvg = [
  [ // Radio (переменные)
    [ // цвет акцента
      {name: 'accent-color'}, // параметры группы инпутов
      ['--accent-color'] // переменные
    ],
    [ // цветовая схема
      {name: 'color-scheme'}, // параметры группы инпутов
      ['--main_bg-color','--secondary_bg-color','--icon_bg-color','--hover_bg-color',
      '--main_text-color','--secondary_text-color','--main_border-color','--radio_nonactive-color',
      '--switch_nonactive-color','--switch-before_nonactive-color'] // переменные
    ]
  ],
  [ // Radio (классы)
    [ // стиль шапки
      {name: 'header-style', valueKey: 'headerStyleValue', valueStock: 'HEADER_stock'}, // параметры группы инпутов
      [document.querySelectorAll('.svg_header')], // модифицируемые элементы
      ['HEADER_stock','HEADER_OOSColor','HEADER_RUI','HEADER_OneUI','HEADER_ZenUI'] // варианты класса-стиля
    ],
    [ // стиль UI
      {name: 'ui-style', valueKey: 'uiStyleValue', valueStock: 'UI_OOS'}, // параметры группы инпутов
      [document.querySelectorAll('.svg_header'),document.querySelectorAll('.svg_settings')], // модифицируемые элементы
      ['UI_OOS','UI_RUI','UI_OneUI','UI_ZenUI'] // варианты класса-стиля
    ]
  ],
  [ // Другое
    ['none','var(--accent-color)','var(--main_bg-color)','var(--secondary_bg-color)','var(--icon_bg-color)',
    'var(--main_text-color)','var(--secondary_text-color)','var(--main_border-color)',
    'var(--radio_nonactive-color)'] // массив для покраски svg
  ]
]

// Функции

function varRead(array) { // Считыватель css-переменных
  for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array[i][1].length; j++) {
      if (localStorage.getItem(array[i][1][j])) 
        document.documentElement.style.setProperty(array[i][1][j], localStorage.getItem(array[i][1][j]));
    }
}

function classSwitch(inputArray, value) { // Переключатель класса
  for (let i = 0; i < inputArray[1].length; i++)
    for (let j = 0; j < inputArray[1][i].length; j++) // перебор всех модифицируемых элементов
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

function svgColor(array) {
  for (let i = 0; i < array.length; i++) for (let j = 0; j < array.length; j++)
   // перебор всех идентификаторов
  for (let k = 0; k < document.querySelectorAll('.g' + i + j).length; k++) { // перебор всех элементов массива
    document.querySelectorAll('.g' + i + j)[k].style.setProperty('fill', array[i]);
     // установить цвет заливки
    document.querySelectorAll('.g' + i + j)[k].style.setProperty('stroke', array[j]);
     // установить цвет обводки
  }
}

// Событие загрузки страницы

document.addEventListener("DOMContentLoaded", () => {
  varRead(themeKernelSvg[0]);
  svgColor(themeKernelSvg[2][0]);
  for (let i = 0; i < themeKernelSvg[1].length; i++) styleRead(themeKernelSvg[1][i]);
});
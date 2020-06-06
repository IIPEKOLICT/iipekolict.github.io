/*------------------------------------------------------------*/
/*---ОБЯЗАТЕЛЬНЫЙ МОДУЛЬ ДВИЖКА ТЕМ---------------------------*/
/*------------------------------------------------------------*/

// Элементы

var pages = document.querySelectorAll('.page'); // <body>, класс в нем задает стиль UI
var headers = document.querySelectorAll('.header'); // все шапки
var headerNames = document.querySelectorAll('.header-name'); // все заголовки в шапках
var settingsSvgs = document.querySelectorAll('.svg_settings'); // все <svg> на стартовой настроек
var headerSvgs = document.querySelectorAll('.svg_header'); // все <svg> в шапках
var aboutContainers = document.querySelectorAll('.about-container'); // все контейнеры в нижней секции about
var aboutHeader = document.querySelectorAll('.about-header'); // верхняя секция about

var vars = [ // Массив с параметрами переменных
  [ // Акцент
    ['--accent-color'], // Переменные
    ['#80cbc4'] // Стоковые значения
  ],
  [ // Цветовая схема
    ['--main_bg-color','--secondary_bg-color','--icon_bg-color','--hover_bg-color',
    '--main_text-color','--secondary_text-color','--main_border-color','--radio_nonactive-color'], // Переменные
    ['black','#424242','#141414','#1a1a1a','white','#7a7a7a','#1e1e1e','#898989'] // Стоковые значения
  ]
]

var styles = [ // Массив с параметрами переключателей классов
  [ // Стиль шапки
    ['headerStyle'], // Ключ в ЛХ
    [headers,headerNames,headerSvgs], // Модифицируемые элементы
    ['HEADER_stock','HEADER_RUI','HEADER_ZenUI','HEADER_OOSColor'] // Возможные значения
  ],
  [ // Стиль UI
    ['uiStyle'], // Ключ в ЛХ
    [pages,settingsSvgs,headerSvgs,aboutContainers,aboutHeader], // Модифицируемые элементы
    ['UI_OOS','UI_ZenUI','UI_OneUI','UI_RUI'] // Возможные значения
  ]
]

// Функции-оптимизаторы

function reload() { location.reload() } // функция перезагрузки страницы

function varRead(varArray) { // функция для чтения инфы о переменной из ЛХ и ее установки
  for (var i = 0; i < varArray.length; i++) {
    for (var j = 0; j < varArray[i][0].length; j++) { // перебор всех названий переменных (массив)
      if (localStorage.getItem(varArray[i][0][j])) { // если сеть ключ
        var varValue = localStorage.getItem(varArray[i][0][j]); // извлечь
        document.documentElement.style.setProperty(varArray[i][0][j], varValue);
          // установить переменной значение ключа
      } else { // если нет ключа
        localStorage.setItem(varArray[i][0][j], varArray[i][1][j]); // дефолтный ключ
        document.documentElement.style.setProperty(varArray[i][0][j], varArray[i][1][j]);
          // установить пер. стоковое значение
      }
    }
  }
}

function styleRead(styleArray) { // функция для установки классов-стилей при загрузке страницы
  if (localStorage.getItem(styleArray[0][0])) { // Если в ЛХ есть ключ
    var style = localStorage.getItem(styleArray[0][0]); // извлечение
    classSwith(styleArray,style);
  } else {
    localStorage.setItem(styleArray[0][0], styleArray[2][0]); // Дефолтный ключ, если сохраненного не было
    classSwith(styleArray,styleArray[2][0]);
  }
}

function classSwith(classArray,targetClass) { // функция для раздачи нужного класса из определенного массива
  for (var i = 0; i < classArray[1].length; i++) { // Перебор всех модифицируемых элементов
    var target = classArray[1][i]; // Извлечение из массива переменной-массива

    for (var j = 0; j < target.length; j++) { // перебор всех элементов этого типа
      if (target[j].classList.contains(targetClass) == false) { // если нет нужного класса-стиля
        target[j].classList.add(targetClass); // добавить

        for (var k = 0; k < classArray[2].length; k++) { // перебор всех вариантов стилей
          if (target[j].classList.contains(classArray[2][k]) == true && targetClass != classArray[2][k]) target[j].classList.remove(classArray[2][k]); // если есть лишние классы - убрать
        }
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы
  varRead(vars); // установка переменных
  for (var i = 0; i < styles.length; i++) styleRead(styles[i]); // Установка всех стилей-классов
});

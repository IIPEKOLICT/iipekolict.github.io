/*------------------------------------------------------------*/
/*---ОБЯЗАТЕЛЬНЫЙ МОДУЛЬ ДВИЖКА ТЕМ---------------------------*/
/*------------------------------------------------------------*/

// Элементы

var pages = document.querySelectorAll('.page'); // <body>, класс в нем задает стиль UI
var headers = document.querySelectorAll('.header'); // все шапки
var headerNames = document.querySelectorAll('.header-name'); // все заголовки в шапках
var headerSvgs = document.querySelectorAll('.svg_header'); // все <svg> в шапках
var settingsSvgs = document.querySelectorAll('.svg_settings'); // все <svg> на стартовой настроек
var aboutHeader = document.querySelectorAll('.about-header'); // верхняя секция about
var aboutHeaderImage = document.querySelectorAll('.about-header_img'); // изображение устройства в разделе #about
var aboutSecondaryTexts = document.querySelectorAll('.about_secondary-text'); // второстепенные текста в #about
var aboutContainers = document.querySelectorAll('.about-container'); // все контейнеры в нижней секции about
var aboutSections = document.querySelectorAll('.about-section'); // все секции в нижней секции about
var interactive = document.querySelectorAll('.interactive'); // диалоговые окна (мат. блок)
var interactiveContainers = document.querySelectorAll('.interactive-container'); // контейнеры-диалоговые окна
var interactiveButtons = document.querySelectorAll('.interactive-button'); // кнопки-скрывашки в диал. окнах
var interactiveLinks = document.querySelectorAll('.interactive-link'); // ссылки на блоки в диалоговых окнах
var mainSections = document.querySelectorAll('.main-section'); // все секции
var mainHeaders = document.querySelectorAll('.main-header'); // все заголовки секций
var menuItems = document.querySelectorAll('.menu-item'); // все дефолтные пункты меню
var menuItemIcons = document.querySelectorAll('.menu-item_icon'); // все иконки в пунктах меню
var menuTiles = document.querySelectorAll('.menu-tile'); // все элементы плиточного меню

var vars = [ // Массив с параметрами переменных
  [ // Акцент
    ['--accent-color'], // Переменные
    ['#80cbc4'] // Стоковые значения
  ],
  [ // Цветовая схема
    ['--main_bg-color','--secondary_bg-color','--icon_bg-color','--hover_bg-color',
    '--main_text-color','--secondary_text-color','--main_border-color','--radio_nonactive-color'], // Переменные
    ['black','#424242','#141414','#1a1a1a','white','#7a7a7a','#1e1e1e','#898989'] // Стоковые значения
  ],
  [ // Радиус закруглений
    ['--main_border-radius','--interactive_border-radius','--button_border-radius'], // Переменные
    ['0.5em','1em','0.25em'] // Стоковые значения
  ],
  [ // Форма иконок
    ['--icon_border-radius'], // Переменные
    ['50%'] // Стоковые значения
  ],
  [ // Шрифт
    ['--main_font-family'], // Переменные
    ['Arial'] // Стоковые значения
  ]
]

var styles = [ // Массив с параметрами переключателей классов
  [ // Стиль шапки
    ['headerStyle'], // Ключ в ЛХ
    [headers,headerNames,headerSvgs], // Модифицируемые элементы
    ['HEADER_stock','HEADER_OOSColor','HEADER_RUI','HEADER_ZenUI'] // Возможные значения
  ],
  [ // Стиль UI
    ['uiStyle'], // Ключ в ЛХ
    [pages,headers,headerSvgs,settingsSvgs,aboutHeader,aboutHeaderImage,aboutSecondaryTexts,aboutContainers,
    aboutSections,interactiveLinks,mainSections,mainHeaders,menuItems,menuItemIcons,menuTiles],
     // Модифицируемые элементы
    ['UI_OOS','UI_RUI','UI_OneUI','UI_ZenUI'] // Возможные значения
  ],
  [ // Стиль диалоговых окон
    ['interactiveStyle'], // Ключ в ЛХ
    [interactive,interactiveContainers,interactiveButtons], // Модифицируемые элементы
    ['interactive_OOS','interactive_RUI','interactive_OneUI','interactive_ZenUI'] // Возможные значения
  ]
]

var colorsSVG = [ // Массив с параметрами классов для покраски svg
  ['0','1','2','3','4','5','6','7','8'], // Идентификаторы цветов
  ['none','var(--accent-color)','var(--main_bg-color)','var(--secondary_bg-color)','var(--icon_bg-color)',
  'var(--main_text-color)','var(--secondary_text-color)','var(--main_border-color)',
  'var(--radio_nonactive-color)'] // Значения, соответствующие своим идентификаторам
]

var mainBgColorValues = [ // Массив с возможными вариантами значений основного цвета фона
  ['black','#161616'],['white','#fafafa','#f2f2f2'] // 0 строка - темные, 1 - светлые
]

var checkedInputs = [ // Массив с параметрами отмеченных элементов
  ['checkedAccentNo','checkedColorSchemeNo','checkedHeaderStyleNo','checkedUiStyleNo','checkedBorderRadiusNo',
  'checkedIconShapeNo','checkedFontFamilyNo','checkedInteractiveStyleNo'], // Ключи в ЛХ
  ["accent-color","color-scheme","header-style","ui-style","border-radius","icon-shape","font-family",
  "interactive-style"], // Name-группы инпутов
  ["ac1","cs1","hs1","us1","br1","is1","ff1","ias1"] // Стоковые значения id
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

function varRecord(varArray,varValues) { // функция для записи переменной и ключа ЛХ
  for (var j = 0; j < varArray[0].length; j++) { // перебор всех названий переменных (массив)
    document.documentElement.style.setProperty(varArray[0][j], varValues[j]); // установка установка переменным соотв. зачений (2 массив со значениями)
    localStorage.setItem(varArray[0][j], varValues[j]); // запись инфы в ЛХ
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

function markInput(inputKey,inputName,inputId) { // Функция, отмечающая определенный инпут
  document.querySelector('input[name=' + inputName + '][id=' + inputId + ']')
  .setAttribute('checked','checked'); // Отметить как выбраннный
  localStorage.setItem(inputKey, inputId); // Сохранить ключ в ЛХ
}

function whiteBlackAccent(neededAccent,bgVariantsArray) {
    // Функция для черного/белого акцента при переключении ЦС (меняет на сток акцент, если ЦА == ОЦФ)
  if (localStorage.getItem(vars[0][0][0]) == neededAccent) { // Если цвет акцента - исследуемый цвет
    for (var i = 0; i < bgVariantsArray.length; i++) { // Перебор всех светлых/темных зн. осн. цвета фона
      if (localStorage.getItem(vars[1][0][0]) == bgVariantsArray[i]) {
         // Если основной цвет фона равен 1 из них
        varRecord(vars[0],vars[0][1]); // Смена цвета акцента на стоковый
        markInput(checkedInputs[0][0],checkedInputs[1][0],checkedInputs[2][0]); // Отметить стоковый инпут ЦА
      } 
    }
  }
}

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы
  varRead(vars); // установка переменных
  for (var i = 0; i < styles.length; i++) styleRead(styles[i]); // Установка всех стилей-классов

  // Покраска элементов в svg

  for (var i = 0; i < colorsSVG[0].length; i++) { // Перебор всех идентификаторов
    for (var j = 0; j < colorsSVG[0].length; j++) {
      var g = document.querySelectorAll('.g' + i + j); // Массив со всеми элементами этого класса-покрасчика

      for (var k = 0; k < g.length; k++) { // Перебор всех элементов массива
        g[k].style.setProperty('fill', colorsSVG[1][i]); // Установить цвет заливки
        g[k].style.setProperty('stroke', colorsSVG[1][j]); // Установить цвет обводки
      }
    }
  }

  whiteBlackAccent('black',mainBgColorValues[0]); // Проверка на равенство цвета акцента и ОЦФ (для ч. и б.)
  whiteBlackAccent('white',mainBgColorValues[1]); // Если да - меняет цвет акцента на стоковый
});

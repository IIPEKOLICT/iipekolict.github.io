/*------------------------------------------------------------*/
/*---ОБЯЗАТЕЛЬНЫЙ МОДУЛЬ ДВИЖКА ТЕМ---------------------------*/
/*------------------------------------------------------------*/

// Элементы

var aboutContainers = document.querySelectorAll('.about-container'); // все контейнеры в нижней секции about
var aboutHeader = document.querySelectorAll('.about-header'); // верхний раздел about
var aboutHeaderImage = document.querySelectorAll('.about-header_img'); // изображение устройства в разделе #about
var aboutSecondaryTexts = document.querySelectorAll('.about_secondary-text'); // второстепенные текста в #about
var aboutSections = document.querySelectorAll('.about-section'); // все секции в нижнем разделе about
var headerNames = document.querySelectorAll('.header-name'); // все заголовки в шапках
var headers = document.querySelectorAll('.header'); // все шапки
var headerSvgs = document.querySelectorAll('.svg_header'); // все <svg> в шапках
var interactive = document.querySelectorAll('.interactive'); // диалоговые окна (мат. блок)
var interactiveButtons = document.querySelectorAll('.interactive-button'); // кнопки-скрывашки в диал. окнах
var interactiveContainers = document.querySelectorAll('.interactive-container'); // контейнеры-диалоговые окна
var mainArticleMultiples = document.querySelectorAll('.main-article_multiple'); // все разделы с 2+ секциями внутри
var mainArticles = document.querySelectorAll('.main-article'); // все разделы
var mainHeaders = document.querySelectorAll('.main-header'); // все заголовки разделов
var menuIcons = document.querySelectorAll('.menu-icon'); // все иконки в секциях-пунктах меню
var menuTiles = document.querySelectorAll('.menu-tile'); // все элементы плиточного меню
var pages = document.querySelectorAll('.page'); // <body>, класс в нем задает стиль UI
var sectionInteractives = document.querySelectorAll('.section_interactive'); // все секции-ссылки на диал. окна
var sectionMenus = document.querySelectorAll('.section_menu'); // все секции-пункты меню
var sections = document.querySelectorAll('.section'); // все секции
var settingsSvgs = document.querySelectorAll('.svg_settings'); // все <svg> на стартовой настроек

// Массивы с параметрами

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
    ['HEADER_stock','HEADER_OOSColor','HEADER_RUI','HEADER_OneUI','HEADER_ZenUI'] // Возможные значения
  ],
  [ // Стиль UI
    ['uiStyle'], // Ключ в ЛХ
    [aboutContainers,aboutHeader,aboutHeaderImage,aboutSecondaryTexts,aboutSections,headers,headerSvgs,
    mainArticleMultiples,mainArticles,mainHeaders,menuIcons,menuTiles,pages,sectionInteractives,sectionMenus,
    sections,settingsSvgs], // Модифицируемые элементы
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

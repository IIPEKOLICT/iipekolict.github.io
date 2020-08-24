/*------------------------------------------------------------*/
/*---ОБЯЗАТЕЛЬНЫЙ МОДУЛЬ ДВИЖКА ТЕМ---------------------------*/
/*------------------------------------------------------------*/

// Элементы

var aboutContainer = document.querySelectorAll('.about-container'); // все контейнеры в нижней секции about
var aboutHeader = document.querySelectorAll('.about-header'); // верхний раздел about
var aboutHeaderImage = document.querySelectorAll('.about-header_img'); // изображение устройства в разделе #about
var aboutSecondaryText = document.querySelectorAll('.about_secondary-text'); // второстепенные текста в #about
var aboutSection = document.querySelectorAll('.about-section'); // все секции в нижнем разделе about
var article = document.querySelectorAll('.article'); // все артикли
var articleHeader = document.querySelectorAll('.article-header'); // все заголовки артиклей
var articleMultiple = document.querySelectorAll('.article_multiple'); // все множественные артикли
var headerName = document.querySelectorAll('.header-name'); // все заголовки в шапках
var header = document.querySelectorAll('.header'); // все шапки
var headerSvg = document.querySelectorAll('.svg_header'); // все <svg> в шапках
var interactive = document.querySelectorAll('.interactive'); // диалоговые окна (мат. блок)
var interactiveButton = document.querySelectorAll('.interactive-button'); // кнопки-скрывашки в диал. окнах
var interactiveContainer = document.querySelectorAll('.interactive-container'); // контейнеры-диалоговые окна
var main = document.querySelectorAll('.main'); // все <main>
var menuIcon = document.querySelectorAll('.menu-icon'); // все иконки в секциях-пунктах меню
var menuTile = document.querySelectorAll('.menu-tile'); // все элементы плиточного меню
var page = document.querySelectorAll('.page'); // <body>, класс в нем задает стиль UI
var range = document.querySelectorAll('.range'); // все ползунки
var sectionInteractive = document.querySelectorAll('.section_interactive'); // все секции-ссылки на диал. окна
var sectionMenu = document.querySelectorAll('.section_menu'); // все секции-пункты меню
var section = document.querySelectorAll('.section'); // все секции
var settingsSvg = document.querySelectorAll('.svg_settings'); // все <svg> на стартовой настроек
var switches = document.querySelectorAll('.switch'); // все переключатели

// Массивы с параметрами

var vars = [ // Массив с параметрами переменных
  [ // Акцент
    ['--accent-color','--accent_opacity-color'], // Переменные
    ['#80cbc4','rgba(128,203,196,0.7)'] // Стоковые значения
  ],
  [ // Цветовая схема
    ['--main_bg-color','--secondary_bg-color','--icon_bg-color','--hover_bg-color',
    '--main_text-color','--secondary_text-color','--main_border-color','--radio_nonactive-color',
    '--switch_nonactive-color','--switch-before_nonactive-color'], // Переменные
    ['black','#424242','#141414','#1a1a1a','white','#7a7a7a','#1e1e1e','#898989','#4d4d4d','#b9b9b9'] // Стоковые значения
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
  ],
  [ // Длительность анимации
    ['--main_animation-duration'], // Переменные
    ['0.3s'] // Стоковые значения
  ],
  [ // Масштаб интерфейса (базовый размер шрифта)
    ['--pc_font-size','--tablet_font-size','--mobile_font-size'], // Переменные
    ['4vh','4vw','5vw'] // Стоковые значения
  ]
]

var styles = [ // Массив с параметрами переключателей классов
  [ // Стиль шапки
    ['headerStyle'], // Ключ в ЛХ
    [header,headerName,headerSvg], // Модифицируемые элементы
    ['HEADER_stock','HEADER_OOSColor','HEADER_RUI','HEADER_OneUI','HEADER_ZenUI'] // Возможные значения
  ],
  [ // Стиль UI
    ['uiStyle'], // Ключ в ЛХ
    [aboutContainer,aboutHeader,aboutHeaderImage,aboutSecondaryText,aboutSection,article,articleHeader,
    articleMultiple,header,headerSvg,menuIcon,menuTile,page,range,sectionInteractive,sectionMenu,section,
    settingsSvg], // Модифицируемые элементы
    ['UI_OOS','UI_RUI','UI_OneUI','UI_ZenUI'] // Возможные значения
  ],
  [ // Стиль диалоговых окон
    ['interactiveStyle'], // Ключ в ЛХ
    [interactive,interactiveContainer,interactiveButton], // Модифицируемые элементы
    ['interactive_OOS','interactive_RUI','interactive_OneUI','interactive_ZenUI'] // Возможные значения
  ],
  [ // Стиль переключателей
    ['switchStyle'], // Ключ в ЛХ
    [switches], // Модифицируемые элементы
    ['switch_OOS','switch_RUI','switch_OneUI','switch_ZenUI'] // Возможные значения
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
  'checkedIconShapeNo','checkedFontFamilyNo','checkedInteractiveStyleNo','checkedSwitchStyleNo'],
   // Ключи в ЛХ
  ["accent-color","color-scheme","header-style","ui-style","border-radius","icon-shape","font-family",
  "interactive-style","switch-style"], // Name-группы инпутов
  ["ac1","cs1","hs1","us1","br1","is1","ff1","ias1","ss1"] // Стоковые значения id
]

var checkboxParametres = [ // массив с параметрами чекбоксов
  [ // OneUI mode
    ['OneUI-mode'], // ключ в ЛХ
    [header,main], // модифицируемые элементы
    ['OneUI-mode'], // присваиваемые классы
    ["OneUI-mode"] // id чекбокса
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

function setOpacityAccent() {
  if (localStorage.getItem('--accent-color')) {
    const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) => 
    '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));

    let accentRGB = hexToRgb(localStorage.getItem('--accent-color'));
    let opacityAccent = 'rgba(' + accentRGB[0] + ',' + accentRGB[1] + ',' + accentRGB[2] + ',0.6)';
    localStorage.setItem('--accent_opacity-color', opacityAccent);
  }
}

// Слайдер масштаба интерфейса

var scaleRange = document.getElementById("interface-scale-range"); // Слайдер для изменения масштаба интерфейса
var scaleDemo = document.getElementById("interface-scale-demo"); // Демка оного слайдера

if (scaleRange != null && scaleDemo != null) {
  scaleRange.oninput = function() {
    var interfaceScale = this.value;
  
    localStorage.setItem('interfaceScale',interfaceScale); // сохранить в ЛХ ключ
    varRecord(vars[6],[(interfaceScale * 0.04) + 'vh',(interfaceScale * 0.04) + 'vw',(interfaceScale * 0.05) + 'vw']);
    scaleDemo.textContent = interfaceScale + '% от стокового'; // установить значение демки слайдера
  }
}

// Слайдер длительности анимации

var animeRange = document.getElementById("animation-duration-range"); // Слайдер для изменения длит анимации
var animeDemo = document.getElementById("animation-duration-demo"); // Демка оного слайдера

if (animeRange != null && animeDemo != null) {
  animeRange.oninput = function() {
    var animationDuration = this.value;
  
    localStorage.setItem('animationDuration',animationDuration); // сохранить в ЛХ ключ
    varRecord(vars[5],[animationDuration + 's']);
    animeDemo.textContent = animationDuration + ' сек.'; // установить значение демки слайдера
  }
}

// универсальные функции для чекбоксов

function changeCheckbox(arrayForCheckbox) { // универсальная, вешать на инпуты чекбоксов
  for (var i = 0; i < arrayForCheckbox[3].length; i++) { // на случай, если сделаю несколько чекбоксов для 1 задачи
    if (document.getElementById(arrayForCheckbox[3][i]).checked) { // если активен чекбокс
      localStorage.setItem(arrayForCheckbox[0][0],'on'); // Сохранить ключ
      addClassByCheckbox(arrayForCheckbox); // раздача классов элементам
    } else {
      localStorage.setItem(arrayForCheckbox[0][0],'off'); // Сохранить ключ
      removeClassByCheckbox(arrayForCheckbox); // убираем классы у элементов
    }
  }
}

function addClassByCheckbox(array) { // функция для раздачи классов элементам
  for (var j = 0; j < array[1].length; j++) {
    for (var k = 0; k < array[1][j].length; k++) {
      for (var l = 0; l < array[2].length; l++) {
        if (array[1][j][k].classList.contains(array[2][l]) == false) 
        array[1][j][k].classList.add(array[2][l]);
      }
    }
  }
}

function removeClassByCheckbox(array) { // функция, отбирающая классы у элементов
  for (var j = 0; j < array[1].length; j++) {
    for (var k = 0; k < array[1][j].length; k++) {
      for (var l = 0; l < array[2].length; l++) {
        if (array[1][j][k].classList.contains(array[2][l]) == true) 
        array[1][j][k].classList.remove(array[2][l])
      }
    }
  }
}

function checkboxClasses(checkboxArray) { // функция для раздачи классов чекбоксами
  for (var i = 0; i < checkboxArray.length; i++) {
    if (localStorage.getItem(checkboxArray[i][0][0]) == 'on') addClassByCheckbox(checkboxArray[i])
     // если активен - раздать классы
    else if (localStorage.getItem(checkboxArray[i][0][0]) == 'off') removeClassByCheckbox(checkboxArray[i])
     // если не активен, но есть ключ - забрать классы
    else { // если нет ключа / в ключе дичь
      localStorage.setItem(checkboxArray[i][0][0],'off'); // Сохранить ключ
      removeClassByCheckbox(checkboxArray[i]); // забрать классы
    }
  }
}

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы
  setOpacityAccent();
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

  if (localStorage.getItem('interfaceScale')) { // если сеть ключ
    var interfaceScale = localStorage.getItem('interfaceScale'); // извлечь

    varRecord(vars[6],[(interfaceScale * 0.04) + 'vh',(interfaceScale * 0.04) + 'vw',(interfaceScale * 0.05) + 'vw']);

    if (scaleRange != null) scaleRange.value = interfaceScale; // установить значение слайдера
    if (scaleDemo != null) scaleDemo.textContent = interfaceScale + '% от стокового';
     // установить значение демки слайдера
  } else { // если нет ключа
    localStorage.setItem('interfaceScale', '100'); // дефолтный ключ
    varRecord(vars[6],['4vh','4vw','5vw']); // установить пер. стоковое значение
    if (scaleRange != null) scaleRange.value = '100'; // установить значение слайдера
    if (scaleDemo != null) scaleDemo.textContent = '100% от стокового'; // установить значение демки слайдера
  }

  if (localStorage.getItem('animationDuration')) { // если сеть ключ
    var animationDuration = localStorage.getItem('animationDuration'); // извлечь

    varRecord(vars[5],[animationDuration + 's']);
    if (animeRange != null) animeRange.value = animationDuration; // установить значение слайдера
    if (animeDemo != null) animeDemo.textContent = animationDuration + ' сек.';
     // установить значение демки слайдера
  } else { // если нет ключа
    localStorage.setItem('animationDuration','0.3s'); // дефолтный ключ
    varRecord(vars[5],['0.3s']); // установить пер. стоковое значение
    if (animeRange != null) animeRange.value = '0.3'; // установить значение слайдера
    if (animeDemo != null) animeDemo.textContent = '0.3 сек.'; // установить значение демки слайдера
  }

  checkboxClasses(checkboxParametres); // раздача классов чекбоксами
});

// скроллинг-функция OneUI mode (не универсальная)

$(window).scroll(function() { // событие скроллинга => функция
  if ($(window).scrollTop() > 0) { // скроллинг вниз страницы
    $('.header.OneUI-mode').addClass('scroll'); // добавляем класс шапке и майну
    $('.main.OneUI-mode').addClass('scroll');
  } else { // когда в самом верху страницы (скроллинга нет)
    $('.header.OneUI-mode').removeClass('scroll'); // забираем класс у шапки и майна
    $('.main.OneUI-mode').removeClass('scroll');
  }
});
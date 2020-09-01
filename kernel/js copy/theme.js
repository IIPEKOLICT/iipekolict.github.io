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
var radioButton = document.querySelectorAll('.radio-button'); // все радиокнопки
var range = document.querySelectorAll('.range'); // все ползунки
var sectionInteractive = document.querySelectorAll('.section_interactive'); // все секции-ссылки на диал. окна
var sectionMenu = document.querySelectorAll('.section_menu'); // все секции-пункты меню
var section = document.querySelectorAll('.section'); // все секции
var settingsSvg = document.querySelectorAll('.svg_settings'); // все <svg> на стартовой настроек
var switches = document.querySelectorAll('.switch'); // все переключатели

var animeDemo = document.getElementById("animation-duration-demo"); // Демка ползунка изменения длит анимации
var animeRange = document.getElementById("animation-duration-range"); // Ползунок для изменения длит анимации
var oneuiHeightDemo = document.getElementById("oneui-height-demo"); // Демка ползунка изменения высоты шапки при OM
var oneuiHeightRange = document.getElementById("oneui-height-range"); // Ползунок для изменения высоты шапки при OM
var scaleDemo = document.getElementById("interface-scale-demo"); // Демка ползунка изменения масштаба интерфейса
var scaleRange = document.getElementById("interface-scale-range"); // Ползунок для изменения масштаба интерфейса

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
    ['#000','#424242','#141414','#1a1a1a','white','#7a7a7a','#1e1e1e','#898989','#4d4d4d','#b9b9b9'] // Стоковые значения
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
  ],
  [ // Высота шапки при включенном OneUI mode
    ['--oneui-mode_header-height'], // Переменные
    ['50vh'] // Стоковые значения
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
    articleMultiple,header,headerSvg,menuIcon,menuTile,page,radioButton,range,sectionInteractive,sectionMenu,
    section,settingsSvg], // Модифицируемые элементы
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
  ['#000','#161616'],['#fff','#fafafa','#f2f2f2'] // 0 строка - темные, 1 - светлые
]

var checkedInputs = [ // Массив с параметрами отмеченных элементов
  ['checkedAccentNo','checkedColorSchemeNo','checkedHeaderStyleNo','checkedUiStyleNo','checkedBorderRadiusNo',
  'checkedIconShapeNo','checkedFontFamilyNo','checkedInteractiveStyleNo','checkedSwitchStyleNo'],
   // Ключи в ЛХ
  ["accent-color","color-scheme","header-style","ui-style","border-radius","icon-shape","font-family",
  "interactive-style","switch-style"], // Name-группы инпутов
  ["ac1","cs1","hs1","us1","br1","is1","ff1","ias1","ss1"] // Стоковые значения id
]

var rangeParametres = [ // массив с параметрами ползунков
  [ // длительность анимации
    [
      [animeRange],[animeDemo],['animationDuration'],[vars[5]],[' сек.'],['0.3'],['0.3s']
    ], // 0 - range-элемент, 1 - demo-элемент, 2 - ключ в ЛХ, 3 - массив с зап. перем., 4 - допись в демке,
       // 5 - сток value, 6 - сток значения переменных
    [
      [['1'],['s']]
    ] // множитель и допись, для каждой переменной
  ],
  [ // масштаб интерфейса
    [
      [scaleRange],[scaleDemo],['interfaceScale'],[vars[6]],['% от стокового'],['100'],['4vh','4vw','5vw']
    ], // 0 - range-элемент, 1 - demo-элемент, 2 - ключ в ЛХ, 3 - массив с зап. перем., 4 - допись в демке,
       // 5 - сток value, 6 - сток значения переменных
    [
      [['0.04'],['vh']],
      [['0.04'],['vw']],
      [['0.05'],['vw']]
    ] // множитель и допись, для каждой переменной
  ],
  [ // высота шапки при активном OneUI mode
    [
      [oneuiHeightRange],[oneuiHeightDemo],['oneuiHeight'],[vars[7]],['% от высоты окна браузера'],['50'],['50vh']
    ], // 0 - range-элемент, 1 - demo-элемент, 2 - ключ в ЛХ, 3 - массив с зап. перем., 4 - допись в демке,
       // 5 - сток value, 6 - сток значения переменных
    [
      [['1'],['vh']]
    ] // множитель и допись, для каждой переменной
  ]
]

var checkboxParametres = [ // массив с параметрами чекбоксов
  [ // OneUI mode
    ['OneUI-mode'], // ключ в ЛХ
    [header,main], // модифицируемые элементы
    ['OneUI-mode'], // присваиваемые классы
    ["OneUI-mode1","OneUI-mode2"] // id чекбоксов
  ]
]

// функции для переключателей переменных

function varRead(varArray) { // функция для чтения инфы о переменной из ЛХ и ее установки
  for (var i = 0; i < varArray.length; i++) for (var j = 0; j < varArray[i][0].length; j++) {
   // перебор всех названий переменных (массив)
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

function varRecord(varArray,varValues) { // функция для записи переменной и ключа ЛХ
  for (var j = 0; j < varArray[0].length; j++) { // перебор всех названий переменных (массив)
    document.documentElement.style.setProperty(varArray[0][j], varValues[j]);
     // установка установка переменным соотв. зачений (2 массив со значениями)
    localStorage.setItem(varArray[0][j], varValues[j]); // запись инфы в ЛХ
  }
}

// функции для переключателей классов (на радиокнопках)

function classSwith(classArray,targetClass) { // функция для переключения строго одного класса из массива
  for (var i = 0; i < classArray[1].length; i++) // Перебор всех модифицируемых элементов
    for (var j = 0; j < classArray[1][i].length; j++) // перебор всех элементов этого типа
      if (classArray[1][i][j].classList.contains(targetClass) == false) { // если нет нужного класса-стиля
        classArray[1][i][j].classList.add(targetClass); // добавить
        for (var k = 0; k < classArray[2].length; k++) // перебор всех вариантов стилей
          if (classArray[1][i][j].classList.contains(classArray[2][k]) == true && targetClass != classArray[2][k]) 
          classArray[1][i][j].classList.remove(classArray[2][k]) // если есть лишние классы - убрать
      }
}

function styleRead(styleArray) { // функция для установки классов-стилей при загрузке страницы
  if (localStorage.getItem(styleArray[0][0])) classSwith(styleArray,localStorage.getItem(styleArray[0][0]))
  else {
    localStorage.setItem(styleArray[0][0], styleArray[2][0]); // Дефолтный ключ, если сохраненного не было
    classSwith(styleArray,styleArray[2][0]); // установка сток значений
  }
}

function markInput(inputKey,inputName,inputId) { // Функция, отмечающая определенный инпут
  document.querySelector('input[name=' + inputName + '][id=' + inputId + ']').setAttribute('checked','checked');
   // Отметить как выбраннный
  localStorage.setItem(inputKey, inputId); // Сохранить ключ в ЛХ
}

// другое

function reload() {location.reload()} // функция перезагрузки страницы

function whiteBlackAccent(neededAccent,bgVariantsArray) {
    // Функция для черного/белого акцента при переключении ЦС (меняет на сток акцент, если ЦА == ОЦФ)
  if (localStorage.getItem(vars[0][0][0]) == neededAccent) for (var i = 0; i < bgVariantsArray.length; i++)
   // Если цвет акцента - исследуемый цвет => перебор всех светлых/темных зн. осн. цвета фона
    if (localStorage.getItem(vars[1][0][0]) == bgVariantsArray[i]) { // Если основной цвет фона равен 1 из них
      varRecord(vars[0],vars[0][1]); // Смена цвета акцента на стоковый
      markInput(checkedInputs[0][0],checkedInputs[1][0],checkedInputs[2][0]); // Отметить стоковый инпут ЦА
    }
}

function setOpacityAccent() { // функция для записи бледного акцента (для тумблеров)
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

// универсальные функции для ползунков

function rangeSetValue(rangeArray) { // функция для записи переменных ползунками
  if (rangeArray[0][0][0] != null && rangeArray[0][1][0] != null) rangeArray[0][0][0].oninput = function() {
    var convertedValues = []; // если range и его демка существуют + создать пустой массив для преобр. пер.
    localStorage.setItem(rangeArray[0][2][0],this.value); // сохранить в ЛХ ключ
    for (var i = 0; i < rangeArray[1].length; i++) // перебор 2-го массива с множителями и дописями
      convertedValues.push((this.value * rangeArray[1][i][0]) + rangeArray[1][i][1]);
       // преобразование каждой переменной в нужный вид и запись в качестве элемента в массив
    varRecord(rangeArray[0][3][0],convertedValues); // запись элементов оного массива в систему (:root)
    rangeArray[0][1][0].textContent = this.value + rangeArray[0][4][0]; // установить значение демки слайдера
  }
}

function rangeReadValue(rangeArray) { // функция для чтения инфы из ЛХ и записи переменных
  for (var i = 0; i < rangeArray.length; i++) if (localStorage.getItem(rangeArray[i][0][2][0])) { // если есть ключ
    var rangeValue = localStorage.getItem(rangeArray[i][0][2][0]); // извлечь
    var convertedValues = []; // создать пустой массив для преобр. пер.
    for (var j = 0; j < rangeArray[i][1].length; j++) // перебор 2-го массива с множителями и дописями
      convertedValues.push((rangeValue * rangeArray[i][1][j][0]) + rangeArray[i][1][j][1]);
      // преобразование каждой переменной в нужный вид и запись в качестве элемента в массив
    varRecord(rangeArray[i][0][3][0],convertedValues); // запись элементов оного массива в систему (:root)
  } else { // если нет ключа
    localStorage.setItem(rangeArray[i][0][2][0], rangeArray[i][0][5][0]); // дефолтный ключ
    varRecord(rangeArray[i][0][3][0],rangeArray[i][0][6]); // установить пер. стоковое значение
  }
}

// универсальные функции для чекбоксов

function onCheckboxInput(checkboxIdArray) { // функция, активирующая все чекбоксы одной функции
  for (var m = 0; m < checkboxIdArray.length; m++) if (document.getElementById(checkboxIdArray[m]).checked == false)
    document.getElementById(checkboxIdArray[m]).setAttribute('checked','checked')
}

function offCheckboxInput(checkboxIdArray) { // функция, деактивирующая все чекбоксы одной функции
  for (var m = 0; m < checkboxIdArray.length; m++) if (document.getElementById(checkboxIdArray[m]).checked)
    document.getElementById(checkboxIdArray[m]).removeAttribute('checked')
}

function addMultipleClass(array) { // функция для раздачи всех классов из массива
  for (var j = 0; j < array[1].length; j++)
    for (var k = 0; k < array[1][j].length; k++)
      for (var l = 0; l < array[2].length; l++) if (array[1][j][k].classList.contains(array[2][l]) == false)
        array[1][j][k].classList.add(array[2][l])
}

function removeMultipleClass(array) { // функция, отбирающая все классы из массива
  for (var j = 0; j < array[1].length; j++)
    for (var k = 0; k < array[1][j].length; k++)
      for (var l = 0; l < array[2].length; l++) if (array[1][j][k].classList.contains(array[2][l]) == true)
        array[1][j][k].classList.remove(array[2][l])
}

function changeCheckbox(arrayForCheckbox) { // универсальная, вешать на инпуты чекбоксов
  for (var i = 0; i < arrayForCheckbox[3].length; i++) { // на случай, если сделаю несколько чекбоксов для 1 задачи
    if (document.getElementById(arrayForCheckbox[3][i]).checked) { // если активен чекбокс
      localStorage.setItem(arrayForCheckbox[0][0],'on'); // Сохранить ключ
      addMultipleClass(arrayForCheckbox); // раздача классов элементам
      onCheckboxInput(arrayForCheckbox[3]); // чекбоксы активны
    } else {
      localStorage.setItem(arrayForCheckbox[0][0],'off'); // Сохранить ключ
      removeMultipleClass(arrayForCheckbox); // убираем классы у элементов
      offCheckboxInput(arrayForCheckbox[3]); // чекбоксы неактивны
    }
  }
}

function checkboxClasses(checkboxArray) { // функция для раздачи классов чекбоксами
  for (var i = 0; i < checkboxArray.length; i++) {
    if (localStorage.getItem(checkboxArray[i][0][0]) == 'on') addMultipleClass(checkboxArray[i])
     // если активен - раздать классы
    else if (localStorage.getItem(checkboxArray[i][0][0]) == 'off') removeMultipleClass(checkboxArray[i])
     // если не активен, но есть ключ - забрать классы
    else { // если нет ключа / в ключе дичь
      localStorage.setItem(checkboxArray[i][0][0],'off'); // Сохранить ключ
      removeMultipleClass(checkboxArray[i]); // забрать классы
    }
  }
}

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы
  setOpacityAccent(); // установка бледного акцента
  varRead(vars); // установка переменных
  for (var i = 0; i < styles.length; i++) styleRead(styles[i]); // Установка всех стилей-классов
  whiteBlackAccent('#000',mainBgColorValues[0]); // Проверка на равенство цвета акцента и ОЦФ (для ч. и б.)
  whiteBlackAccent('#fff',mainBgColorValues[1]); // Если да - меняет цвет акцента на стоковый
  rangeReadValue(rangeParametres); // установка переменных ползунков на основании инфы в ЛХ
  checkboxClasses(checkboxParametres); // установка переменных чекбоксов на основании инфы в ЛХ

  // Покраска элементов в svg

  for (var i = 0; i < colorsSVG[0].length; i++) for (var j = 0; j < colorsSVG[0].length; j++)
   // Перебор всех идентификаторов
  for (var k = 0; k < document.querySelectorAll('.g' + i + j).length; k++) { // Перебор всех элементов массива
    document.querySelectorAll('.g' + i + j)[k].style.setProperty('fill', colorsSVG[1][i]);
     // Установить цвет заливки
    document.querySelectorAll('.g' + i + j)[k].style.setProperty('stroke', colorsSVG[1][j]);
     // Установить цвет обводки
  }
});

for (var i = 0; i < rangeParametres.length; i++) rangeSetValue(rangeParametres[i]);
 // запись ползунками их переменных при изменении значения range (в режиме реального времени)

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

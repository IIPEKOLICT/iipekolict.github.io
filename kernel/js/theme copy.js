/*------------------------------------------------------------*/
/*---ОБЯЗАТЕЛЬНЫЙ МОДУЛЬ ДВИЖКА ТЕМ---------------------------*/
/*------------------------------------------------------------*/

/*------------------------------------------------------------*/
/*--- Массивы с параметрами ----------------------------------*/
/*------------------------------------------------------------*/

let vars = [ // Массив с параметрами переменных
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

// Массив с параметрами переключателей классов

let styles = [
  [ // Стиль шапки
    ['headerStyle'], // Ключ в ЛХ
    [$('.header'),$('.header-name'),$('.svg_header')], // Модифицируемые элементы
    ['HEADER_stock','HEADER_OOSColor','HEADER_RUI','HEADER_OneUI','HEADER_ZenUI'] // Возможные значения
  ],
  [ // Стиль UI
    ['uiStyle'], // Ключ в ЛХ
    [$('.about-container'),$('.about-header'),$('.about-header_img'),$('.about_secondary-text'),
    $('.about-section'),$('.article'),$('.article-header'),$('.article_multiple'),$('.header'),
    $('.menu-icon'),$('.menu-tile'),$('.page'),$('.radio-button'),$('.section'),
    $('.section_interactive'),$('.section_menu'),$('.svg_header'),$('.svg_settings')], // Модифицируемые элементы
    ['UI_OOS','UI_RUI','UI_OneUI','UI_ZenUI'] // Возможные значения
  ],
  [ // Стиль диалоговых окон
    ['interactiveStyle'], // Ключ в ЛХ
    [$('.interactive'),$('.interactive-button'),$('.interactive-container')], // Модифицируемые элементы
    ['interactive_OOS','interactive_RUI','interactive_OneUI','interactive_ZenUI'] // Возможные значения
  ],
  [ // Стиль переключателей
    ['switchStyle'], // Ключ в ЛХ
    [$('.switch')], // Модифицируемые элементы
    ['switch_OOS','switch_RUI','switch_OneUI','switch_ZenUI'] // Возможные значения
  ]
]

// Массив с параметрами классов для покраски svg

let colorsSVG = [
  ['0','1','2','3','4','5','6','7','8'], // Идентификаторы цветов
  ['none','var(--accent-color)','var(--main_bg-color)','var(--secondary_bg-color)','var(--icon_bg-color)',
  'var(--main_text-color)','var(--secondary_text-color)','var(--main_border-color)',
  'var(--radio_nonactive-color)'] // Значения, соответствующие своим идентификаторам
]

// Массив с возможными вариантами значений основного цвета фона

let mainBgColorValues = [['#000','#161616'],['#fff','#fafafa','#f2f2f2']] // 0 строка - темные, 1 - светлые

// Массив с параметрами отмеченных элементов

let checkedInputs = [
  ['checkedAccentNo','checkedColorSchemeNo','checkedHeaderStyleNo','checkedUiStyleNo','checkedBorderRadiusNo',
  'checkedIconShapeNo','checkedFontFamilyNo','checkedInteractiveStyleNo','checkedSwitchStyleNo'],
   // Ключи в ЛХ
  ["accent-color","color-scheme","header-style","ui-style","border-radius","icon-shape","font-family",
  "interactive-style","switch-style"], // Name-группы инпутов
  ["ac1","cs1","hs1","us1","br1","is1","ff1","ias1","ss1"] // Стоковые значения id
]

// массив с параметрами ползунков

let rangeParametres = [
  [ // длительность анимации
    [
      [$('#animation-duration-range')],[$('#animation-duration-demo')],['animationDuration'],[vars[5]],
      [' сек.'],['0.3'],['0.3s']
    ], // 0 - range-элемент, 1 - demo-элемент, 2 - ключ в ЛХ, 3 - массив с зап. перем., 4 - допись в демке,
       // 5 - сток value, 6 - сток значения переменных
    [
      [['1'],['s']]
    ] // множитель и допись, для каждой переменной
  ],
  [ // масштаб интерфейса
    [
      [$('#interface-scale-range')],[$('#interface-scale-demo')],['interfaceScale'],[vars[6]],
      ['% от стокового'],['100'],['4vh','4vw','5vw']
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
      [$('#oneui-height-range')],[$('#oneui-height-demo')],['oneuiHeight'],[vars[7]],
      ['% от высоты окна браузера'],['50'],['50vh']
    ], // 0 - range-элемент, 1 - demo-элемент, 2 - ключ в ЛХ, 3 - массив с зап. перем., 4 - допись в демке,
       // 5 - сток value, 6 - сток значения переменных
    [
      [['1'],['vh']]
    ] // множитель и допись, для каждой переменной
  ]
]

// массив с параметрами чекбоксов

let checkboxParametres = [
  [ // OneUI mode
    ['OneUI-mode'], // ключ в ЛХ
    [$('.header'),$('.main')], // модифицируемые элементы
    ['OneUI-mode'], // присваиваемые классы
    ["OneUI-mode1","OneUI-mode2"], // id чекбоксов
    ["oneui-height-range"] // id элементов, которые disabled при неактивном чекбоксе
  ]
]

/*------------------------------------------------------------*/
/*--- Функции для переключателей переменных ------------------*/
/*------------------------------------------------------------*/

// функция для чтения инфы о переменной из ЛХ и ее установки

function varRead(varArray) {
  for (let i = 0; i < varArray.length; i++) for (let j = 0; j < varArray[i][0].length; j++) {
   // перебор всех названий переменных (массив)
    if (localStorage.getItem(varArray[i][0][j])) { // если сеть ключ
      let varValue = localStorage.getItem(varArray[i][0][j]); // извлечь
      document.documentElement.style.setProperty(varArray[i][0][j], varValue);
       // установить переменной значение ключа
    } else { // если нет ключа
      localStorage.setItem(varArray[i][0][j], varArray[i][1][j]); // дефолтный ключ
      document.documentElement.style.setProperty(varArray[i][0][j], varArray[i][1][j]);
       // установить пер. стоковое значение
    }
  }
}

// функция для записи переменной и ключа ЛХ

function varRecord(varArray,varValues) {
  for (let i = 0; i < varArray[0].length; i++) { // перебор всех названий переменных (массив)
    document.documentElement.style.setProperty(varArray[0][i], varValues[i]);
     // установка установка переменным соотв. зачений (2 массив со значениями)
    localStorage.setItem(varArray[0][i], varValues[i]); // запись инфы в ЛХ
  }
}

/*------------------------------------------------------------*/
/*--- Функции для переключателей классов (на радиокнопках) ---*/
/*------------------------------------------------------------*/

// функция для переключения строго одного класса из массива

function classSwith(classArray,targetClass) {
  for (let i = 0; i < classArray[1].length; i++) // Перебор всех модифицируемых элементов
    for (let j = 0; j < classArray[1][i].length; j++) // перебор всех элементов этого типа
      if (classArray[1][i][j].classList.contains(targetClass) == false) { // если нет нужного класса-стиля
        classArray[1][i][j].classList.add(targetClass); // добавить
        for (let k = 0; k < classArray[2].length; k++) // перебор всех вариантов стилей
          if (classArray[1][i][j].classList.contains(classArray[2][k]) == true && targetClass != classArray[2][k]) 
          classArray[1][i][j].classList.remove(classArray[2][k]) // если есть лишние классы - убрать
      }
}

// функция для установки классов-стилей при загрузке страницы

function styleRead(styleArray) {
  if (localStorage.getItem(styleArray[0][0])) classSwith(styleArray,localStorage.getItem(styleArray[0][0]))
  else {
    localStorage.setItem(styleArray[0][0], styleArray[2][0]); // Дефолтный ключ, если сохраненного не было
    classSwith(styleArray, styleArray[2][0]); // установка сток значений
  }
}

// Функция, отмечающая определенный инпут

function markInput(inputKey, inputName, inputId) {
  document.querySelector('input[name=' + inputName + '][id=' + inputId + ']').setAttribute('checked','checked');
   // Отметить как выбраннный
  localStorage.setItem(inputKey, inputId); // Сохранить ключ в ЛХ
}

/*------------------------------------------------------------*/
/*--- Другое -------------------------------------------------*/
/*------------------------------------------------------------*/

function reload() { location.reload() } // функция перезагрузки страницы

// Функция для черного/белого акцента при переключении ЦС (меняет на сток акцент, если ЦА == ОЦФ)

function whiteBlackAccent(neededAccent,bgVariantsArray) {
  if (localStorage.getItem(vars[0][0][0]) == neededAccent) for (let i = 0; i < bgVariantsArray.length; i++)
   // Если цвет акцента - исследуемый цвет => перебор всех светлых/темных зн. осн. цвета фона
    if (localStorage.getItem(vars[1][0][0]) == bgVariantsArray[i]) { // Если основной цвет фона равен 1 из них
      varRecord(vars[0], vars[0][1]); // Смена цвета акцента на стоковый
      markInput(checkedInputs[0][0], checkedInputs[1][0], checkedInputs[2][0]); // Отметить стоковый инпут ЦА
    }
}

// функция для записи бледного акцента (для тумблеров)

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

/*------------------------------------------------------------*/
/*--- Универсальные функции для ползунков --------------------*/
/*------------------------------------------------------------*/

// функция для преобразования значений ползунков к необходимому виду

function convertValues(array, stockValue) {
  // 1. создать пустой массив для преобреобразования переменных
  // 2. преобразование каждой переменной в нужный вид и запись в качестве элемента в свежесозданный массив
  let convertedValues = []; 
  $.each(array, function() { convertedValues.push((stockValue * this[0][0]) + this[1][0]) });
  return convertedValues;
}

// функция для записи переменных ползунками

function rangeSetValue(rangeArray) {
  if (rangeArray[0][0][0] != null) $(rangeArray[0][0][0]).on('click', function() {
    let value = this.value; // значение ползунка при нажатии
    localStorage.setItem(rangeArray[0][2][0], value); // сохранить в ЛХ ключ
    varRecord(rangeArray[0][3][0], convertValues(rangeArray[1], value)); // запись перем. в систему (:root)
    $(rangeArray[0][1][0]).text(value + rangeArray[0][4][0]); // установить значение демки ползунка
  });
}

// функция для чтения инфы из ЛХ и записи переменных

function rangeReadValue(rangeArray) {
  for (let i = 0; i < rangeArray.length; i++) if (localStorage.getItem(rangeArray[i][0][2][0])) { // если есть ключ
    let value = localStorage.getItem(rangeArray[i][0][2][0]); // извлечь
    varRecord(rangeArray[i][0][3][0], convertValues(rangeArray[i][1], value)); // запись перем. в систему (:root)
  } else { // если нет ключа
    localStorage.setItem(rangeArray[i][0][2][0], rangeArray[i][0][5][0]); // дефолтный ключ
    varRecord(rangeArray[i][0][3][0], rangeArray[i][0][6]); // установить пер. стоковое значение
  }
}

/*------------------------------------------------------------*/
/*--- Универсальные функции для чекбоксов --------------------*/
/*------------------------------------------------------------*/

// функция, активирующая все чекбоксы одной функции

function onCheckboxInput(checkboxArray) {
  for (let i = 0; i < checkboxArray[3].length; i++) 
    if (document.getElementById(checkboxArray[3][i]).checked == false) {
      document.getElementById(checkboxArray[3][i]).setAttribute('checked','checked')
    }
  for (let j = 0; j < checkboxArray[4].length; j++) // раздача disabled зависящим от чекбокса элементам
    if (document.getElementById(checkboxArray[4][j]).hasAttribute('disabled'))
      document.getElementById(checkboxArray[4][j]).removeAttribute('disabled');
}

// функция, деактивирующая все чекбоксы одной функции

function offCheckboxInput(checkboxArray) {
  for (let i = 0; i < checkboxArray[3].length; i++) if (document.getElementById(checkboxArray[3][i]).checked) {
    document.getElementById(checkboxArray[3][i]).removeAttribute('checked');
  }
  for (let j = 0; j < checkboxArray[4].length; j++) // раздача disabled зависящим от чекбокса элементам
    if (document.getElementById(checkboxArray[4][j]).hasAttribute('disabled') == false)
      document.getElementById(checkboxArray[4][j]).setAttribute('disabled','disabled');
}

// функция для раздачи всех классов из массива

function addMultipleClass(array) {
  for (let i = 0; i < array[1].length; i++)
    for (let j = 0; j < array[1][i].length; j++)
      for (let k = 0; k < array[2].length; k++) 
        if ($(array[1][i][j]).hasClass(array[2][k]) == false) $(array[1][i][j]).addClass(array[2][k])
}

// функция, отбирающая все классы из массива

function removeMultipleClass(array) {
  for (let i = 0; i < array[1].length; i++)
    for (let j = 0; j < array[1][i].length; j++)
      for (let k = 0; k < array[2].length; k++) 
        if ($(array[1][i][j]).hasClass(array[2][k])) $(array[1][i][j]).removeClass(array[2][k])
}

// универсальная, вешать на инпуты чекбоксов

function changeCheckbox(arrayForCheckbox) {
  for (let i = 0; i < arrayForCheckbox[3].length; i++) { // на случай, если сделаю несколько чекбоксов для 1 задачи
    if (document.getElementById(arrayForCheckbox[3][i]).checked) { // если активен чекбокс
      localStorage.setItem(arrayForCheckbox[0][0], 'on'); // Сохранить ключ
      addMultipleClass(arrayForCheckbox); // раздача классов элементам
      onCheckboxInput(arrayForCheckbox); // чекбоксы активны
    } else {
      localStorage.setItem(arrayForCheckbox[0][0], 'off'); // Сохранить ключ
      removeMultipleClass(arrayForCheckbox); // убираем классы у элементов
      offCheckboxInput(arrayForCheckbox); // чекбоксы неактивны
    }
  }
}

// функция для раздачи классов чекбоксами

function checkboxClasses(checkboxArray) {
  for (let i = 0; i < checkboxArray.length; i++) {
    if (localStorage.getItem(checkboxArray[i][0][0]) == 'on') addMultipleClass(checkboxArray[i])
     // если активен - раздать классы
    else if (localStorage.getItem(checkboxArray[i][0][0]) == 'off') removeMultipleClass(checkboxArray[i])
     // если не активен, но есть ключ - забрать классы
    else { // если нет ключа / в ключе дичь
      localStorage.setItem(checkboxArray[i][0][0], 'off'); // Сохранить ключ
      removeMultipleClass(checkboxArray[i]); // забрать классы
    }
  }
}

/*------------------------------------------------------------*/
/*--- Событие загузки страницы -------------------------------*/
/*------------------------------------------------------------*/

$(document).ready(function() {
  setOpacityAccent(); // установка бледного акцента
  varRead(vars); // установка переменных
  for (var i = 0; i < styles.length; i++) styleRead(styles[i]); // Установка всех стилей-классов
  whiteBlackAccent('#000', mainBgColorValues[0]); // Проверка на равенство цвета акцента и ОЦФ (для ч. и б.)
  whiteBlackAccent('#fff', mainBgColorValues[1]); // Если да - меняет цвет акцента на стоковый
  // rangeReadValue(rangeParametres); // установка переменных ползунков на основании инфы в ЛХ
  checkboxClasses(checkboxParametres); // установка переменных чекбоксов на основании инфы в ЛХ

  // Покраска элементов в svg

  for (let i = 0; i < colorsSVG[0].length; i++) for (let j = 0; j < colorsSVG[0].length; j++)
   // Перебор всех идентификаторов
  for (let k = 0; k < document.querySelectorAll('.g' + i + j).length; k++) { // Перебор всех элементов массива
    document.querySelectorAll('.g' + i + j)[k].style.setProperty('fill', colorsSVG[1][i]);
     // Установить цвет заливки
    document.querySelectorAll('.g' + i + j)[k].style.setProperty('stroke', colorsSVG[1][j]);
     // Установить цвет обводки
  }
});

/*------------------------------------------------------------*/
/*--- Неуниверсальные функции --------------------------------*/
/*------------------------------------------------------------*/

// запись ползунками их переменных при изменении значения range (в режиме реального времени)

$.each(rangeParametres, function() { rangeSetValue($(this)) });

// скроллинг-функция OneUI mode (не универсальная)

$(window).scroll(function() { // событие скроллинга => функция
  if ($(window).scrollTop() > 0) { // скроллинг вниз страницы
     // добавляем класс шапке и майну
    if ($('.header.OneUI-mode').hasClass('scroll') == false) $('.header.OneUI-mode').addClass('scroll');
    if ($('.main.OneUI-mode').hasClass('scroll') == false) $('.main.OneUI-mode').addClass('scroll');
  } else { // когда в самом верху страницы (скроллинга нет)
     // забираем класс у шапки и майна
    if ($('.header.OneUI-mode').hasClass('scroll')) $('.header.OneUI-mode').removeClass('scroll');
    if ($('.main.OneUI-mode').hasClass('scroll')) $('.main.OneUI-mode').removeClass('scroll');
  }
});

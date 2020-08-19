/*------------------------------------------------------------*/
/*---ДОПОЛНИТЕЛЬНЫЙ МОДУЛЬ ДВИЖКА ТЕМ (ТОЛЬКО ДЛЯ НАСТРОЕК)---*/
/*------------------------------------------------------------*/

var uiParametres = [ // Массив с параметрами UI
  [ // Для стиля UI "UI_OOS"
    [
      ["cs1"],['black','#424242','#141414','#1a1a1a','white','#7a7a7a','#1e1e1e','#898989'], // Темная тема
      ["cs2"],['#fafafa','white','white','#efefef','#191919','#969696','#e6e6e6','#999'] // Светлая тема
    ],
    [
      ["hs1"],['HEADER_stock'] // Дефолтный стиль шапки
    ],
    [
      ["br1"],['0.4em','0.6em','0.25em'] // Дефолтные закругления
    ],
    [
      ["ias1"],['interactive_OOS'] // Дефолтный стиль диалоговых окон
    ]
  ],
  [ // Для стиля UI "UI_RUI"
    [
      ["cs3"],['black','#333','#141414','#252525','white','#8c8c8c','#333333','#666'], // Темная тема
      ["cs4"],['white','white','#ddd','#f7f7f7','black','#737373','#e5e5e5','#ccc'] // Светлая тема
    ],
    [
      ["hs3"],['HEADER_RUI'] // Дефолтный стиль шапки
    ],
    [
      ["br2"],['0.6em','1.2em','0.5em'] // Дефолтные закругления
    ],
    [
      ["ias2"],['interactive_RUI'] // Дефолтный стиль диалоговых окон
    ]
  ],
  [ // Для стиля UI "UI_OneUI"
    [
      ["cs5"],['black','#252525','#252525','#333','#fafafa','#909090','#3f3f3f','#797979'], // Темная тема
      ["cs6"],['#f2f2f2','#fcfcfc','white','#e3e3e3','#161616','#989898','#ececec','#b3b3b3'], // Светлая тема
    ],
    [
      ["hs4"],['HEADER_OneUI'] // Дефолтный стиль шапки
    ],
    [
      ["br3"],['1em','1.2em','1.25em'] // Дефолтные закругления
    ],
    [
      ["ias3"],['interactive_OneUI'] // Дефолтный стиль диалоговых окон
    ]
  ],
  [ // Для стиля UI "UI_ZenUI"
    [
      ["cs7"],['#161616','#424242','#252525','#505050','white','#b9b9b9','#323232','#c1c1c1'], // Темная тема
      ["cs8"],['#fafafa','white','#ddd','#ededed','#202020','#787878','#dcdcdc','#989898'] // Светлая тема
    ],
    [
      ["hs5"],['HEADER_ZenUI'] // Дефолтный стиль шапки
    ],
    [
      ["br4"],['0.5em','0.5em','1.25em'] // Дефолтные закругления
    ],
    [
      ["ias4"],['interactive_ZenUI'] // Дефолтный стиль диалоговых окон
    ]
  ]
]

// Функции-оптимизаторы

function readCheckedNo(checkedArray) { // Функция чтения из ЛХ инфы об отмеченных инпутах
  for (var i = 0; i < checkedArray[0].length; i++) { // Перебор всех ключей
    if (localStorage.getItem(checkedArray[0][i])) { // Если в ЛХ есть ключ номера выбранного акц-инпута
      var checkedNo = localStorage.getItem(checkedArray[0][i]); // Извлечение
      document.querySelector('input[name=' + checkedArray[1][i] + '][id=' + checkedNo + ']')
      .setAttribute('checked','checked'); // Отметить как выбраннный
    } else {
      localStorage.setItem(checkedArray[0][i], checkedArray[2][i]); // Дефолтные значения, если нет
      document.querySelector('input[name=' + checkedArray[1][i] + '][id=' + checkedArray[2][i] + ']')
      .setAttribute('checked','checked');
    }
  }
}

function recordCheckedNo(inputConst,key) { // Функция записи инфы в ЛХ об отмеченном инпуте
  for (var i = 0; i < inputConst.length; i++) { // Цикл опроса всех инпутов
    inputConst[i].onclick = function() { // Если инпут нажат
      localStorage.setItem(key, this.id); // Сохранить ключ номера акц-инпута
    }
  }
}

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы

  readCheckedNo(checkedInputs); // Расстановка checked-инпутов

  // Покраска инпутов с цветами акцента

  var coloredLabels = document.querySelectorAll('.label_custom-colored'); // Все крашенные value лейблы

  for (var i = 0; i < coloredLabels.length; i++) { // Цикл опроса всех крашеных лейблов
    var labelColor = coloredLabels[i].querySelector('input').value; // Извлечение value из инпута
    coloredLabels[i].style.setProperty('--accent-color', labelColor); // Установка цвета кнопки
  }

  var bgColorValue = localStorage.getItem(vars[1][0][0]); // извлечь
  var blackAccentLabel = document.getElementById('black-accent_label'); // лейбл черного акц.
  var whiteAccentLabel = document.getElementById('white-accent_label'); // лейбл белого акц.

  for (var i = 0; i < mainBgColorValues[0].length; i++) { // Перебор темных вариаций осн. цв. фона
    if (bgColorValue == mainBgColorValues[0][i]) blackAccentLabel.classList.add('hidden-label')
     // Если основной увет фона - один из них, то скрыть лейбл с черным акцентом
  }

  for (var i = 0; i < mainBgColorValues[1].length; i++) { // Перебор светлых вариаций осн. цв. фона
    if (bgColorValue == mainBgColorValues[1][i]) whiteAccentLabel.classList.add('hidden-label')
    // Если основной увет фона - один из них, то скрыть лейбл с белым акцентом
  }
});

// Запись инфы в ЛХ о checked-инпуте (его id)

const accentInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="accent-color"]')); // Все инпуты, меняющие цвет акцента
recordCheckedNo(accentInputs,checkedInputs[0][0]);

const colorSchemeInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="color-scheme"]')); // Все инпуты, меняющие цветовую схему
recordCheckedNo(colorSchemeInputs,checkedInputs[0][1]);

const headerStyleInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="header-style"]')); // Все инпуты, меняющие стиль шапки
recordCheckedNo(headerStyleInputs,checkedInputs[0][2]);

const uiStyleInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="ui-style"]')); // Все инпуты, меняющие стиль UI
recordCheckedNo(uiStyleInputs,checkedInputs[0][3]);

const borderRadiusInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="border-radius"]')); // Все инпуты, меняющие радиус закруглений
recordCheckedNo(borderRadiusInputs,checkedInputs[0][4]);

const iconShapeInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="icon-shape"]')); // Все инпуты, меняющие форму иконок
recordCheckedNo(iconShapeInputs,checkedInputs[0][5]);

const fontFamilyInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="font-family"]')); // Все инпуты, меняющие шрифт
recordCheckedNo(fontFamilyInputs,checkedInputs[0][6]);

const interactiveStyleInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="interactive-style"]')); // Все инпуты, меняющие стиль диалоговых окон
recordCheckedNo(interactiveStyleInputs,checkedInputs[0][7]);

const animationDurationInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="animation-duration"]')); // Все инпуты, меняющие скорость анимации
recordCheckedNo(animationDurationInputs,checkedInputs[0][8]);

const fontSizeInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="font-size"]')); // Все инпуты, меняющие масштаб интерфейса (баз размер шрифта)
recordCheckedNo(fontSizeInputs,checkedInputs[0][9]);

// Функция смены цвета акцента

accentInputs.forEach(input => input.addEventListener('change', changeAccent(targetAC))); // Прослушка акц-инпутов
function changeAccent(targetAC) { // Функция смены акцента (при нажатии на акц-инпут)
  varRecord(vars[0],targetAC); // запись переменных
}

// Функция смены цветовой схемы

colorSchemeInputs.forEach(input => input.addEventListener ('change', changeColorScheme(targetCS,typeCS)));
  // Прослушка CS-инпутов
function changeColorScheme(targetCS,typeCS) { // Функция смены цветовой схемы (при нажатии на CS-инпут)
  varRecord(vars[1],targetCS); // запись переменных
  localStorage.setItem('colorSchemeType', typeCS); // Сохранить ключ типа ЦС (если темная/светлая)
}

// Функция смены стиля шапки

headerStyleInputs.forEach(input => input.addEventListener('change', changeHeaderStyle(targetHS,typeHS)));
  // Прослушка инпутов, меняющих стиль шапки
function changeHeaderStyle(targetHS,typeHS) { // Функция смены стиля шапки
  classSwith(styles[0],targetHS);
  localStorage.setItem(styles[0][0], targetHS); // Сохранить ключ стиля шапки
  localStorage.setItem('headerStyleType', typeHS); // Сохранить ключ типа СШ (дефолтный/кастомный)
}

// Функция смены стиля UI

uiStyleInputs.forEach(input => input.addEventListener('change', changeUiStyle(targetUI,uiParametresArray)));
 // Прослушка инпутов, меняющих стиль UI
function changeUiStyle(targetUI,uiParametresArray) { // Функция смены стиля UI
  classSwith(styles[1],targetUI);
  localStorage.setItem(styles[1][0], targetUI); // Сохранить ключ

  // Проверка на светлую/темную тему, если активна была стоковая для прошлого UI

  var colorSchemeType = localStorage.getItem('colorSchemeType'); // Извлечение ключа типа активной ЦС

  if (colorSchemeType != 'light' && colorSchemeType != 'custom') { // Если активна была темная ЦС
    varRecord(vars[1],uiParametresArray[0][1]); // Установка из массива нужной для данного UI ЦС
    markInput(checkedInputs[0][1],checkedInputs[1][1],uiParametresArray[0][0][0]); // Отметить нужн. инпут
  } else if (colorSchemeType != 'dark' && colorSchemeType != 'custom') { // Если активна была светлая ЦС
    varRecord(vars[1],uiParametresArray[0][3]); // Установка из массива нужной для данного UI ЦС
    markInput(checkedInputs[0][1],checkedInputs[1][1],uiParametresArray[0][2][0]); // Отметить нужн. инпут
  }

  // Проверка на стиль шапки, если был активен один из дефолтных

  var headerStyleType = localStorage.getItem('headerStyleType'); // Извлечение ключа из ЛХ

  if (headerStyleType != 'custom') { // Если активен был дефолтный набор рз, либо ключ пуст
    classSwith(styles[0],uiParametresArray[1][1][0]); // Изменить стиль диалоговых окон на дефолтный для данного UI
    markInput(checkedInputs[0][2],checkedInputs[1][2],uiParametresArray[1][0][0]); // Отметить нужн. инпут
    localStorage.setItem(styles[0][0],uiParametresArray[1][1][0]); // Сохранить ключ стиля диалоговых окон
  }

  // Проверка на радиус закруглений, если был активен один из дефолтных

  var borderRadiusType = localStorage.getItem('borderRadiusType'); // Извлечение ключа из ЛХ

  if (borderRadiusType != 'custom') { // Если активен был дефолтный набор рз, либо ключ пуст
    varRecord(vars[2],uiParametresArray[2][1]); // Установка из массива нужного для данного UI радуиса закруглений
    markInput(checkedInputs[0][4],checkedInputs[1][4],uiParametresArray[2][0][0]); // Отметить нужн. инпут
    localStorage.setItem('borderRadiusType', 'default'); // Запись инфы в ЛХ
  }

  // Автоподхват стиля диалоговых окон
  
  classSwith(styles[2],uiParametresArray[3][1][0]); // Изменить стиль диалоговых окон на дефолтный для данного UI
  markInput(checkedInputs[0][7],checkedInputs[1][7],uiParametresArray[3][0][0]); // Отметить нужн. инпут
  localStorage.setItem(styles[2][0],uiParametresArray[3][1][0]); // Сохранить ключ стиля диалоговых окон
}

// Функция смены радиуса закруглений

borderRadiusInputs.forEach(input => input.addEventListener('change', changeBorderRadius(targetBR,radiusType)));
 // Прослушка радиус-инпутов
function changeBorderRadius(targetBR,radiusType) { // Функция радиуса закруглений (при нажатии на рз-инпут)
  varRecord(vars[2],targetBR); // запись переменных
  localStorage.setItem('borderRadiusType', radiusType); // Сохранить ключ типа РЗ (default/custom)
}

// Функция смены формы иконок

iconShapeInputs.forEach(input => input.addEventListener('change', changeIconShape(targetIS)));
 // Прослушка инпутов для смены формы иконок
function changeIconShape(targetIS) { // Функция формы иконок (при нажатии на фи-инпут)
  varRecord(vars[3],targetIS); // запись переменных
}

// Функция смены шрифта

fontFamilyInputs.forEach(input => input.addEventListener('change', changeFontFamily(targetFF)));
 // Прослушка инпутов для смены шрифта
function changeFontFamily(targetFF) { // Функция смены шрифта (при нажатии на сш-инпут)
  varRecord(vars[4],targetFF); // запись переменных
}

// Функция смены стиля диалоговых окон

interactiveStyleInputs.forEach(input => input.addEventListener('change', changeInteractiveStyle(targetIaS)));
  // Прослушка инпутов, меняющих стиль диалоговых окон
function changeInteractiveStyle(targetIaS) { // Функция смены стиля диалоговых окон
  classSwith(styles[2],targetIaS);
  localStorage.setItem(styles[2][0], targetIaS); // Сохранить ключ стиля диалоговых окон
}

// Функция смены цвета акцента

animationDurationInputs.forEach(input => input.addEventListener('change', changeAnimationDuration(targetAD)));
 // Прослушка инпутов длительности анимации
function changeAnimationDuration(targetAD) { // Функция смены длит анимации
  varRecord(vars[5],targetAD); // запись переменных
}

// Функция смены масштаба интерфейса (баз размера шрифта)

fontSizeInputs.forEach(input => input.addEventListener('change', changeFontSize(targetFS)));
 // Прослушка инпутов масштаба интерфейса
function changeFontSize(targetFS) { // Функция смены масштаба интерфейса (баз размера шрифта)
  varRecord(vars[6],targetFS); // запись переменных
}
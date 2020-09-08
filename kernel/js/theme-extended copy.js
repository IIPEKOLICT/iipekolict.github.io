/*------------------------------------------------------------*/
/*---ДОПОЛНИТЕЛЬНЫЙ МОДУЛЬ ДВИЖКА ТЕМ (ТОЛЬКО ДЛЯ НАСТРОЕК)---*/
/*------------------------------------------------------------*/

/*------------------------------------------------------------*/
/*--- Массивы с параметрами ----------------------------------*/
/*------------------------------------------------------------*/

// Массив с параметрами UI

let uiParametres = [
  [ // Для стиля UI "UI_OOS"
    [ // Темная/светлая тема
      ["cs1"],['#000','#424242','#141414','#1a1a1a','white','#7a7a7a','#1e1e1e','#898989','#4d4d4d','#b9b9b9'],
      ["cs2"],['#fafafa','white','white','#efefef','#191919','#969696','#e6e6e6','#999','#e1e1e1','#ececec']
    ],
    [["hs1"],['HEADER_stock']], // Дефолтный стиль шапки
    [["br1"],['0.4em','0.6em','0.25em']], // Дефолтные закругления
    [["ias1"],['interactive_OOS']], // Дефолтный стиль диалоговых окон
    [["ss1"],['switch_OOS']] // Дефолтный стиль переключателей
  ],
  [ // Для стиля UI "UI_RUI"
    [ // Темная/светлая тема
      ["cs3"],['#000','#333','#141414','#252525','white','#8c8c8c','#333333','#666','#757575','#fff'],
      ["cs4"],['#fff','white','#ddd','#f7f7f7','black','#737373','#e5e5e5','#ccc','#e5e5e5','#fff']
    ],
    [["hs3"],['HEADER_RUI']], // Дефолтный стиль шапки
    [["br2"],['0.6em','1.2em','0.5em']], // Дефолтные закругления
    [["ias2"],['interactive_RUI']], // Дефолтный стиль диалоговых окон
    [["ss2"],['switch_RUI']] // Дефолтный стиль переключателей
  ],
  [ // Для стиля UI "UI_OneUI"
    [ // Темная/светлая тема
      ["cs5"],['#000','#252525','#252525','#333','#fafafa','#909090','#3f3f3f','#797979','#505050','#fafafa'],
      ["cs6"],['#f2f2f2','#fcfcfc','white','#e3e3e3','#161616','#989898','#ececec','#b3b3b3','#a9a9a9','#fcfcfc']
    ],
    [["hs4"],['HEADER_OneUI']], // Дефолтный стиль шапки
    [["br3"],['1em','1.2em','1.25em']], // Дефолтные закругления
    [["ias3"],['interactive_OneUI']], // Дефолтный стиль диалоговых окон
    [["ss3"],['switch_OneUI']] // Дефолтный стиль переключателей
  ],
  [ // Для стиля UI "UI_ZenUI"
    [ // Темная/светлая тема
      ["cs7"],['#161616','#424242','#252525','#505050','white','#b9b9b9','#323232','#c1c1c1','#696969','#b4b4b4'],
      ["cs8"],['#fafafa','white','#ddd','#ededed','#202020','#787878','#dcdcdc','#989898','#ccc','#e7e7e7']
    ],
    [["hs5"],['HEADER_ZenUI']], // Дефолтный стиль шапки
    [["br4"],['0.5em','0.5em','1.25em']], // Дефолтные закругления
    [["ias4"],['interactive_ZenUI']], // Дефолтный стиль диалоговых окон
    [["ss4"],['switch_ZenUI']] // Дефолтный стиль переключателей
  ]
]

/*------------------------------------------------------------*/
/*--- Функции для расстановки отмеченных инпутов -------------*/
/*------------------------------------------------------------*/

// Функция чтения из ЛХ инфы об отмеченных инпутах

function readCheckedNo(checkedArray) {
  for (let i = 0; i < checkedArray[0].length; i++) { // Перебор всех ключей
    if (localStorage.getItem(checkedArray[0][i])) { // Если в ЛХ есть ключ номера выбранного акц-инпута
      let checkedNo = localStorage.getItem(checkedArray[0][i]); // Извлечение
      document.querySelector('input[name=' + checkedArray[1][i] + '][id=' + checkedNo + ']')
      .setAttribute('checked','checked'); // Отметить как выбраннный
    } else {
      localStorage.setItem(checkedArray[0][i], checkedArray[2][i]); // Дефолтные значения, если нет
      document.querySelector('input[name=' + checkedArray[1][i] + '][id=' + checkedArray[2][i] + ']')
      .setAttribute('checked','checked');
    }
  }
}

// Функция записи инфы в ЛХ об отмеченном инпуте

function recordCheckedNo(inputConst,key) {
  for (let i = 0; i < inputConst.length; i++) // Цикл опроса всех инпутов
    inputConst[i].onclick = function() { // Если инпут нажат
      localStorage.setItem(key, this.id); // Сохранить ключ номера акц-инпута
    }
}

/*------------------------------------------------------------*/
/*--- Универсальные функции для ползунков --------------------*/
/*------------------------------------------------------------*/

// функция для чтения инфы из ЛХ и отметки/подписи ползунков и их демок

function rangeChecked(rangeArray) {
  for (let i = 0; i < rangeArray.length; i++) if (localStorage.getItem(rangeArray[i][0][2][0])) { // если есть ключ
    rangeArray[i][0][0][0].val(localStorage.getItem(rangeArray[i][0][2][0])); // установить значение ползунка
    rangeArray[i][0][1][0].text(localStorage.getItem(rangeArray[i][0][2][0]) + rangeArray[i][0][4][0]);
     // установить значение демки слайдера
  } else { // если нет ключа
    rangeArray[i][0][0][0].val(rangeArray[i][0][5][0]); // установить сток значение слайдера
    rangeArray[i][0][1][0].text(rangeArray[i][0][5][0] + rangeArray[i][0][4][0]);
     // установить сток значение демки слайдера
  }
}

/*------------------------------------------------------------*/
/*--- Универсальные функции для чекбоксов --------------------*/
/*------------------------------------------------------------*/

// функция, отмечающая инпуты чекбоксов

function checkboxChecked(checkboxArray) {
  for (let i = 0; i < checkboxArray.length; i++) {
    if (localStorage.getItem(checkboxArray[i][0][0]) == 'on') onCheckboxInput(checkboxArray[i])
     // если есть в ключе инфа о том, что активен - отметить все чекбоксы
    else offCheckboxInput(checkboxArray[i]) // если нет - чекбоксы не активны
  }
}

/*------------------------------------------------------------*/
/*--- Универсальные функции для автоподхвата дефолтных пар. --*/
/*------------------------------------------------------------*/

// Автоподхват переменных

function setDefaultUiVars(typeKey,varArray,defaultParArray,inputKey,inputName) {
  if (localStorage.getItem(typeKey) != 'custom') { // Если активен был дефолтный вариант, либо ключ пуст
    localStorage.setItem(typeKey, 'default'); // Запись инфы в ЛХ о типе стиля (дефолтный)
    varRecord(varArray, defaultParArray[1]); // Установка из массива нужных для данного UI переменных
    markInput(inputKey, inputName, defaultParArray[0][0]); // Отметить нужн. инпут
  }
}

// Автоподхват стилей (классы)

function setDefaultUiClass(typeKey,classArray,defaultParArray,inputKey,inputName) {
  if (localStorage.getItem(typeKey) != 'custom') { // Если активен был дефолтный вариант, либо ключ пуст
    localStorage.setItem(typeKey, 'default'); // Запись инфы в ЛХ о типе стиля (дефолтный)
    localStorage.setItem(classArray[0], defaultParArray[1][0]); // Сохранить ключ стиля
    markInput(inputKey, inputName, defaultParArray[0][0]); // Отметить нужн. инпут
  }
}

/*------------------------------------------------------------*/
/*--- Событие загузки страницы -------------------------------*/
/*------------------------------------------------------------*/

$(document).ready(function() {
  readCheckedNo(checkedInputs); // расстановка checked-инпутов
  rangeChecked(rangeParametres); // расстановка range-значений
  checkboxChecked(checkboxParametres); // расстановка чекбоксов (отмечен/нет)

  // Покраска инпутов с цветами акцента

  $.each($('.label_custom-colored'), function () { $(this).css('--accent-color', $(this).find('input').val()) });

  // Скрытие белого/черного цвета акцента в зависимости от цветовой схемы

  $.each(mainBgColorValues[0], function (name, value) {
    if (localStorage.getItem(vars[1][0][0]) == value) $('#black-accent_label').addClass('hidden-label')
  });
  $.each(mainBgColorValues[1], function (name, value) {
    if (localStorage.getItem(vars[1][0][0]) == value) $('#white-accent_label').addClass('hidden-label')
  });
});

/*------------------------------------------------------------*/
/*--- Запись инфы в ЛХ о checked-инпуте (его id) -------------*/
/*------------------------------------------------------------*/

// Все инпуты, меняющие цвет акцента

const accentInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="accent-color"]'));
recordCheckedNo(accentInputs, checkedInputs[0][0]);

// Все инпуты, меняющие цветовую схему

const colorSchemeInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="color-scheme"]'));
recordCheckedNo(colorSchemeInputs, checkedInputs[0][1]);

// Все инпуты, меняющие стиль шапки

const headerStyleInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="header-style"]'));
recordCheckedNo(headerStyleInputs, checkedInputs[0][2]);

// Все инпуты, меняющие стиль UI

const uiStyleInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="ui-style"]'));
recordCheckedNo(uiStyleInputs, checkedInputs[0][3]);

// Все инпуты, меняющие радиус закруглений

const borderRadiusInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="border-radius"]'));
recordCheckedNo(borderRadiusInputs, checkedInputs[0][4]);

// Все инпуты, меняющие форму иконок

const iconShapeInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="icon-shape"]'));
recordCheckedNo(iconShapeInputs, checkedInputs[0][5]);

// Все инпуты, меняющие шрифт

const fontFamilyInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="font-family"]'));
recordCheckedNo(fontFamilyInputs, checkedInputs[0][6]);

// Все инпуты, меняющие стиль диалоговых окон

const interactiveStyleInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="interactive-style"]'));
recordCheckedNo(interactiveStyleInputs, checkedInputs[0][7]);

// Все инпуты, меняющие стиль переключателей

const switchStyleInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="switch-style"]'));
recordCheckedNo(switchStyleInputs, checkedInputs[0][8]);

/*------------------------------------------------------------*/
/*--- Функции на радиокнопках --------------------------------*/
/*------------------------------------------------------------*/

// Функция смены цвета акцента

accentInputs.forEach(input => input.addEventListener('change', changeAccent(targetAC))); // Прослушка акц-инпутов
function changeAccent(targetAC) { // Функция смены акцента (при нажатии на акц-инпут)
  varRecord(vars[0], targetAC); // запись переменных
}

// Функция смены цветовой схемы

colorSchemeInputs.forEach(input => input.addEventListener ('change', changeColorScheme(targetCS, typeCS)));
  // Прослушка CS-инпутов
function changeColorScheme(targetCS, typeCS) { // Функция смены цветовой схемы (при нажатии на CS-инпут)
  varRecord(vars[1], targetCS); // запись переменных
  localStorage.setItem('typeCS', typeCS); // Сохранить ключ типа ЦС (если темная/светлая)
}

// Функция смены стиля шапки

headerStyleInputs.forEach(input => input.addEventListener('change', changeHeaderStyle(targetHS, typeHS)));
  // Прослушка инпутов, меняющих стиль шапки
function changeHeaderStyle(targetHS, typeHS) { // Функция смены стиля шапки
  localStorage.setItem(styles[0][0], targetHS); // Сохранить ключ стиля шапки
  localStorage.setItem('typeHS', typeHS); // Сохранить ключ типа СШ (дефолтный/кастомный)
}

// Функция смены стиля UI

uiStyleInputs.forEach(input => input.addEventListener('change', changeUiStyle(targetUI, uiParametresArray)));
 // Прослушка инпутов, меняющих стиль UI
function changeUiStyle(targetUI, uiParametresArray) { // Функция смены стиля UI
  localStorage.setItem(styles[1][0], targetUI); // Сохранить ключ

  // Проверка на светлую/темную тему, если активна была стоковая для прошлого UI

  let colorSchemeType = localStorage.getItem('typeCS'); // Извлечение ключа типа активной ЦС

  if (colorSchemeType != 'light' && colorSchemeType != 'custom') { // Если активна была темная ЦС
    varRecord(vars[1], uiParametresArray[0][1]); // Установка из массива нужной для данного UI ЦС
    markInput(checkedInputs[0][1], checkedInputs[1][1], uiParametresArray[0][0][0]); // Отметить нужн. инпут
  } else if (colorSchemeType != 'dark' && colorSchemeType != 'custom') { // Если активна была светлая ЦС
    varRecord(vars[1], uiParametresArray[0][3]); // Установка из массива нужной для данного UI ЦС
    markInput(checkedInputs[0][1], checkedInputs[1][1], uiParametresArray[0][2][0]); // Отметить нужн. инпут
  }

  // Проверка на стиль шапки, если был активен один из дефолтных

  setDefaultUiClass('typeHS', styles[0], uiParametresArray[1], checkedInputs[0][2], checkedInputs[1][2]);

  // Проверка на радиус закруглений, если был активен один из дефолтных

  setDefaultUiVars('typeBR', vars[2], uiParametresArray[2], checkedInputs[0][4], checkedInputs[1][4]);

  // Автоподхват стиля диалоговых окон

  setDefaultUiClass('typeIaS', styles[2], uiParametresArray[3], checkedInputs[0][7], checkedInputs[1][7]);

  // Автоподхват стиля переключателей

  setDefaultUiClass('typeSS', styles[3], uiParametresArray[4], checkedInputs[0][8], checkedInputs[1][8]);
}

// Функция смены радиуса закруглений

borderRadiusInputs.forEach(input => input.addEventListener('change', changeBorderRadius(targetBR, typeBR)));
 // Прослушка радиус-инпутов
function changeBorderRadius(targetBR, typeBR) { // Функция радиуса закруглений (при нажатии на рз-инпут)
  varRecord(vars[2], targetBR); // запись переменных
  localStorage.setItem('typeBR', typeBR); // Сохранить ключ типа РЗ (default/custom)
}

// Функция смены формы иконок

iconShapeInputs.forEach(input => input.addEventListener('change', changeIconShape(targetIS)));
 // Прослушка инпутов для смены формы иконок
function changeIconShape(targetIS) { // Функция формы иконок (при нажатии на фи-инпут)
  varRecord(vars[3], targetIS); // запись переменных
}

// Функция смены шрифта

fontFamilyInputs.forEach(input => input.addEventListener('change', changeFontFamily(targetFF)));
 // Прослушка инпутов для смены шрифта
function changeFontFamily(targetFF) { // Функция смены шрифта (при нажатии на сш-инпут)
  varRecord(vars[4], targetFF); // запись переменных
}

// Функция смены стиля диалоговых окон

interactiveStyleInputs.forEach(input => input.addEventListener('change', changeInteractiveStyle(targetIaS, typeIaS)));
 // Прослушка инпутов, меняющих стиль диалоговых окон
function changeInteractiveStyle(targetIaS, typeIaS) { // Функция смены стиля диалоговых окон
  localStorage.setItem(styles[2][0], targetIaS); // Сохранить ключ стиля диалоговых окон
  localStorage.setItem('typeIaS', typeIaS); // Сохранить ключ типа РЗ (default/custom)
}

// Функция смены стиля переключателей

switchStyleInputs.forEach(input => input.addEventListener('change', changeSwitchStyle(targetSS, typeSS)));
  // Прослушка инпутов, меняющих стиль переключателей
function changeSwitchStyle(targetSS, typeSS) { // Функция смены стиля переключателей
  localStorage.setItem(styles[3][0], targetSS); // Сохранить ключ стиля переключателей
  localStorage.setItem('typeSS', typeSS); // Сохранить ключ типа РЗ (default/custom)
}

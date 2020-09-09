/*------------------------------------------------------------*/
/*---МОДУЛЬ ДЛЯ СТРАНИЦЫ С НАСТРОЙКАМИ------------------------*/
/*------------------------------------------------------------*/

// Функции-считыватели инфы об отмеченных инпутах

function radioChecked(array) {
  for (let i = 0; i < array.length; i++) { // Перебор всех ключей
    if (localStorage.getItem(array[i][0].checkedKey))
      document.querySelector('input[name=' + array[i][0].name + '][id=' + 
      localStorage.getItem(array[i][0].checkedKey) + ']').setAttribute('checked','checked');
       // Отметить как выбраннный
    else {
      localStorage.setItem(array[i][0].checkedKey, array[i][0].checkedStock); // Дефолтные значения, если нет
      document.querySelector('input[name="' + array[i][0].name + '"][id="' + 
      array[i][0].checkedStock + '"]').setAttribute('checked','checked');
    }
  }
}

function rangeChecked(array) {
  for (let i = 0; i < array.length; i++) if (localStorage.getItem(array[i][0].valueKey)) { // если есть ключ
    $('#' + array[i][0].rangeId).val(localStorage.getItem(array[i][0].valueKey)); // установить значение ползунка
    $('#' + array[i][0].demoId).text(localStorage.getItem(array[i][0].valueKey) + array[i][0].text);
     // установить значение демки слайдера
  } else { // если нет ключа
    $('#' + array[i][0].rangeId).val(array[i][0].valueStock); // установить сток значение слайдера
    $('#' + array[i][0].demoId).text(array[i][0].valueStock + array[i][0].text);
     // установить сток значение демки слайдера
  }
}

function checkboxChecked(array) {
  for (let i = 0; i < array.length; i++) {
    let checkbox = $('input[type = "checkbox"][name="' + array[i][0].name + '"]');

    if (localStorage.getItem(array[i][0].valueKey) == array[i][2][0]) {
      for (let j = 0; j < checkbox.length; j++) if (checkbox[j].checked == false) 
          checkbox[j].setAttribute('checked','checked');
      for (let k = 0; k < array[i][3].length; k++) if (array[i][3][k].get(0).hasAttribute('disabled')) 
          array[i][3][k].get(0).removeAttribute('disabled');
    } else {
      for (let j = 0; j < checkbox.length; j++) if (checkbox[j].checked) checkbox[j].removeAttribute('checked');
      for (let k = 0; k < array[i][3].length; k++) if (array[i][3][k].get(0).hasAttribute('disabled') == false)
          array[i][3][k].get(0).setAttribute('disabled','disabled');
    }
  }
}

// Другое

function wbAccentInput(accent,bgVariants) {
  if (localStorage.getItem(vars[0][0][0]) == accent) for (let i = 0; i < bgVariants.length; i++)
   // Если цвет акцента - исследуемый цвет => перебор всех светлых/темных зн. осн. цвета фона
    if (localStorage.getItem('--main_bg-color') == bgVariants[i])
      markInput(checkedInputs[0][0], checkedInputs[1][0], checkedInputs[2][0]); // Отметить стоковый инпут ЦА
}

function convertValues(array, stockValue) {
  // 1. создать пустой массив для преобреобразования переменных
  // 2. преобразование каждой переменной в нужный вид и запись в качестве элемента в свежесозданный массив
  let convertedValues = []; 
  $.each(array, function() { convertedValues.push((stockValue * this[0][0]) + this[1][0]) });
  return convertedValues;
}

function defaultUiVar(array, uiValue) {
  if (localStorage.getItem(array[0].defaultKey) != 'custom') { // Если активен был дефолтный вариант, либо ключ пуст
    localStorage.setItem(array[0].defaultKey, 'default'); // Запись инфы в ЛХ о типе стиля (дефолтный)

    for (let i = 1; i < array.length; i++) if (array[i].ui == uiValue) {
      varRecord(array[0].var, array[i].value); // Установка из массива нужных для данного UI переменных
      markInput(array[0].checkedKey, array[0].name, array[i].id); // Отметить нужн. инпут
    }
  }
}

function defaultUiClass(array, uiValue, classArray) {
  if (localStorage.getItem(array[0].defaultKey) != 'custom') { // Если активен был дефолтный вариант, либо ключ пуст
    localStorage.setItem(array[0].defaultKey, 'default'); // Запись инфы в ЛХ о типе стиля (дефолтный)

    for (let i = 1; i < array.length; i++) if (array[i].ui == uiValue) {
      localStorage.setItem(array[i].valueKey, array[i].value); // Сохранить ключ стиля
      classSwitch(classArray, array[i].value);
      markInput(array[0].checkedKey, array[0].name, array[i].id); // Отметить нужн. инпут
    }
  }
}

// Функции-обработчики выбора инпута

for (let i = 0; i < themeKernel[0].length; i++) {
  $('input[name="' + themeKernel[0][i][0].name + '"]').on('change', function() {
    for (let j = 0; j < themeKernel[0][i][2].length; j++)
      if (themeKernel[0][i][0].prefix + '-' + j == this.id) {
        varRecord(themeKernel[0][i][1], themeKernel[0][i][2][j][0]);
        localStorage.setItem(themeKernel[0][i][0].defaultKey, themeKernel[0][i][2][j][1]);
        localStorage.setItem(themeKernel[0][i][0].checkedKey, this.id);
        reload();
      }  
  });
}

for (let i = 0; i < themeKernel[1].length; i++) {
  $('input[name="' + themeKernel[1][i][0].name + '"]').on('change', function() {
    for (let j = 0; j < themeKernel[1][i][3].length; j++)
      if (themeKernel[1][i][0].prefix + '-' + j == this.id) {
        localStorage.setItem(themeKernel[1][i][0].valueKey, themeKernel[1][i][3][j][0]);
        localStorage.setItem(themeKernel[1][i][0].defaultKey, themeKernel[1][i][3][j][1]);
        localStorage.setItem(themeKernel[1][i][0].checkedKey, this.id);

        console.log(themeKernel[1][i][0].valueKey);
        console.log(themeKernel[1][i][0].defaultKey);
        console.log(themeKernel[1][i][0].checkedKey);

        if (themeKernel[1][i][0].name == 'ui-style') {
          let csType = localStorage.getItem(themeKernel[4][2][0][0].defaultKey);
          let currentUi = localStorage.getItem(themeKernel[1][1][0].valueKey);

          if (csType != 'light' && csType != 'custom')
            for (let k = 1; k < themeKernel[4][2][0].length; k++)
            console.log(themeKernel[4][2][0][k]);
              if (themeKernel[4][2][0][k].ui == currentUi) {
                varRecord(themeKernel[0][1][1], themeKernel[4][2][0][k].darkTheme);
                markInput(themeKernel[4][2][0][0].checkedKey, themeKernel[4][2][0][0].name, 
                themeKernel[4][2][0][k].darkThemeId);
              }
          else if (csType != 'dark' && csType != 'custom')
            for (let k = 1; k < themeKernel[4][2][0].length; k++)
            console.log(themeKernel[4][2][0][k]);
              if (themeKernel[4][2][0][k].ui == currentUi) {
                varRecord(themeKernel[0][1][1], themeKernel[4][2][0][k].lightTheme);
                markInput(themeKernel[4][2][0][0].checkedKey, themeKernel[4][2][0][0].name, 
                themeKernel[4][2][0][k].lightThemeId);
              }
            
          defaultUiClass(themeKernel[4][2][1], currentUi, themeKernel[1][0]);
          defaultUiVar(themeKernel[4][2][2], currentUi)
          defaultUiClass(themeKernel[4][2][3], currentUi, themeKernel[1][2]);
          defaultUiClass(themeKernel[4][2][4], currentUi, themeKernel[1][3]);
        }

        //reload();
      }
  });
}

for (let i = 0; i < themeKernel[2].length; i++) {
  $('#' + themeKernel[2][i][0].rangeId).on('change', function() {
    let value = this.value; // значение ползунка при нажатии
    localStorage.setItem(themeKernel[2][i][0].valueKey, value); // сохранить в ЛХ ключ
    varRecord(themeKernel[2][i][1], convertValues(themeKernel[2][i][2], value));
    $('#' + themeKernel[2][i][0].demoId).text(value + themeKernel[2][i][0].text); // установить значение демки ползунка
  });
}

for (let i = 0; i < themeKernel[3].length; i++) {
  $('input[name="' + themeKernel[3][i][0].name + '"]').on('change', function() {
    for (let j = 0; j < $('input[name="' + themeKernel[3][i][0].name + '"]').length; j++) {
      if (this.checked) {
        localStorage.setItem(themeKernel[3][i][0].valueKey, themeKernel[3][i][2][0]);
        reload();
      } else {
        localStorage.setItem(themeKernel[3][i][0].valueKey, themeKernel[3][i][2][1]);
        reload();
      }
    }
  });
}

// Событие загрузки страницы

$(document).ready(function() {
  radioChecked(themeKernel[0]);
  radioChecked(themeKernel[1]);
  rangeChecked(themeKernel[2]);
  checkboxChecked(themeKernel[3]);

  // Покраска инпутов с цветами акцента

  $.each($('.label_custom-colored'), function () { $(this).css('--accent-color', $(this).find('input').val()) });

  // Скрытие белого/черного цвета акцента в зависимости от цветовой схемы

  $.each(themeKernel[4][1][1], function (name, value) {
    if (localStorage.getItem('--main_bg-color') == value) $('#black-accent_label').addClass('hidden-label')
  });
  $.each(themeKernel[4][1][2], function (name, value) {
    if (localStorage.getItem('--main_bg-color') == value) $('#white-accent_label').addClass('hidden-label')
  });
});

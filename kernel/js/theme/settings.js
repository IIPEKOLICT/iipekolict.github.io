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

// Функции-обработчики выбора инпута

function varRecord(vars, values) {
  for (let i = 0; i < vars.length; i++) {
    //$(':root').get(0).style.setProperty(vars[i], values[i]);
    document.documentElement.style.setProperty(vars[i], values[i]);
    localStorage.setItem(vars[i], values[i]);
  }
}

for (let i = 0; i < testParametres[0].length; i++) {
  $('input[name="' + testParametres[0][i][0].name + '"]').on('change', function() {
    for (let j = 0; j < testParametres[0][i][2].length; j++)
      if (testParametres[0][i][0].prefix + '-' + j == this.id) {
        varRecord(testParametres[0][i][1], testParametres[0][i][2][j][0]);
        localStorage.setItem(testParametres[0][i][0].defaultKey, testParametres[0][i][2][j][1]);
        localStorage.setItem(testParametres[0][i][0].checkedKey, this.id);
      }  
  });
}

for (let i = 0; i < testParametres[1].length; i++) {
  $('input[name="' + testParametres[1][i][0].name + '"]').on('change', function() {
    for (let j = 0; j < testParametres[1][i][3].length; j++)
      if (testParametres[1][i][0].prefix + '-' + j == this.id) {
        localStorage.setItem(testParametres[1][i][0].valueKey, testParametres[1][i][3][j][0]);
        localStorage.setItem(testParametres[1][i][0].defaultKey, testParametres[1][i][3][j][1]);
        localStorage.setItem(testParametres[1][i][0].checkedKey, this.id);
        reload();
      }
  });
}

function convertValues(array, stockValue) {
  // 1. создать пустой массив для преобреобразования переменных
  // 2. преобразование каждой переменной в нужный вид и запись в качестве элемента в свежесозданный массив
  let convertedValues = []; 
  $.each(array, function() { convertedValues.push((stockValue * this[0][0]) + this[1][0]) });
  return convertedValues;
}

for (let i = 0; i < testParametres[2].length; i++) {
  $('#' + testParametres[2][i][0].rangeId).on('change', function() {
    let value = this.value; // значение ползунка при нажатии
    localStorage.setItem(testParametres[2][i][0].valueKey, value); // сохранить в ЛХ ключ
    varRecord(testParametres[2][i][1], convertValues(testParametres[2][i][2], value));
    $('#' + testParametres[2][i][0].demoId).text(value + testParametres[2][i][0].text); // установить значение демки ползунка
  });
}

for (let i = 0; i < testParametres[3].length; i++) {
  $('input[name="' + testParametres[3][i][0].name + '"]').on('change', function() {
    for (let j = 0; j < $('input[name="' + testParametres[3][i][0].name + '"]').length; j++) {
      if (this.checked) {
        localStorage.setItem(testParametres[3][i][0].valueKey, testParametres[3][i][2][0]);
        reload();
      } else {
        localStorage.setItem(testParametres[3][i][0].valueKey, testParametres[3][i][2][1]);
        reload();
      }
    }
  });
}

// Другое

function markInput(inputKey, inputName, inputId) {
  document.querySelector('input[name=' + inputName + '][id=' + inputId + ']').setAttribute('checked','checked');
   // Отметить как выбраннный
  localStorage.setItem(inputKey, inputId); // Сохранить ключ в ЛХ
}

function wbAccentInput(neededAccent,bgVariantsArray) {
  if (localStorage.getItem(vars[0][0][0]) == neededAccent) for (let i = 0; i < bgVariantsArray.length; i++)
   // Если цвет акцента - исследуемый цвет => перебор всех светлых/темных зн. осн. цвета фона
    if (localStorage.getItem(vars[1][0][0]) == bgVariantsArray[i])
      markInput(checkedInputs[0][0], checkedInputs[1][0], checkedInputs[2][0]); // Отметить стоковый инпут ЦА
}

// Событие загрузки страницы

$(document).ready(function() {
  radioChecked(testParametres[0]);
  radioChecked(testParametres[1]);
  rangeChecked(testParametres[2]);
  checkboxChecked(testParametres[3]);

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

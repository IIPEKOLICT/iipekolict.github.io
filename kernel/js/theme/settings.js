/*------------------------------------------------------------*/
/*---МОДУЛЬ ДЛЯ СТРАНИЦЫ С НАСТРОЙКАМИ------------------------*/
/*------------------------------------------------------------*/

// Функции-считыватели инфы об отмеченных инпутах

function radioChecked(array) { // Установка отмеченных радиокнопок (на основании инфы из ЛХ)
  for (let i = 0; i < array.length; i++) { // перебор всех групп инпутов
    if (localStorage.getItem(array[i][0].checkedKey)) // если есть ключ отмеченной радиокнопки
      document.querySelector('input[name=' + array[i][0].name + '][id=' + 
      localStorage.getItem(array[i][0].checkedKey) + ']').setAttribute('checked','checked'); // отметить как выб.
    else { // если нет
      localStorage.setItem(array[i][0].checkedKey, array[i][0].checkedStock); // дефолтные значения в ЛХ
      document.querySelector('input[name="' + array[i][0].name + '"][id="' + 
      array[i][0].checkedStock + '"]').setAttribute('checked','checked'); // и отметить дефолтный инпут
    }
  }
}

function rangeChecked(array) { // Установка отмеченных ползунков (на основании инфы из ЛХ)
  for (let i = 0; i < array.length; i++) if (localStorage.getItem(array[i][0].valueKey)) { // если есть ключ value
    $('#' + array[i][0].rangeId).val(localStorage.getItem(array[i][0].valueKey)); // установить value ползунка
    $('#' + array[i][0].demoId).text(localStorage.getItem(array[i][0].valueKey) + array[i][0].text);
     // установить значение демки ползунка
  } else { // если нет ключа
    $('#' + array[i][0].rangeId).val(array[i][0].valueStock); // установить сток value слайдера
    $('#' + array[i][0].demoId).text(array[i][0].valueStock + array[i][0].text);
     // установить сток значение демки ползунка
  }
}

function checkboxChecked(array) { // Установка отмеченных чекбоксов (на основании инфы из ЛХ)
  for (let i = 0; i < array.length; i++) { // перебор всех групп инпутов
    let checkbox = $('input[type = "checkbox"][name="' + array[i][0].name + '"]');

    if (localStorage.getItem(array[i][0].valueKey) == array[i][2][0]) { // если есть ключ активного класса
      for (let j = 0; j < checkbox.length; j++) if (checkbox[j].checked == false)
          checkbox[j].setAttribute('checked','checked'); // отметить все чекб. группы, если еще не отмечены
      for (let k = 0; k < array[i][3].length; k++) {
        if (array[i][3][k].get(0).hasAttribute('disabled')) array[i][3][k].get(0).removeAttribute('disabled');
         // убрать disabled у всех dis-эл., если уже есть оное
        if (array[i][3][k].hasClass('disabled')) array[i][3][k].removeClass('disabled'); // - класс
      } 
    } else { // если нет
      for (let j = 0; j < checkbox.length; j++) if (checkbox[j].checked) checkbox[j].removeAttribute('checked');
      for (let k = 0; k < array[i][3].length; k++) {
        if (array[i][3][k].get(0).hasAttribute('disabled') == false) 
          array[i][3][k].get(0).setAttribute('disabled','disabled'); // disabled всем dis-эл., если еще нет оного
        if (array[i][3][k].hasClass('disabled') == false) 
          array[i][3][k].addClass('disabled'); // + класс (аттрибут не сработает с не инпутами)
      }
    }
  }
}

// Другое

function convertValues(array, stockValue) { // Преобразователь value ползунков в необходимые значения css-пер.
  // 1. создать пустой массив для преобреобразования переменных
  // 2. преобразование каждой переменной в нужный вид и запись в качестве элемента в свежесозданный массив
  let convertedValues = []; 
  $.each(array, function() { convertedValues.push((stockValue * this[0][0]) + this[1][0]) });
  return convertedValues;
}

function autoPickupVar_2(array, uiValue) { // Автоподхват css-переменных при смене UI, 2 типа инпута
  if (localStorage.getItem(array[0].defaultKey) != array[0].valueType1) { // если не 2-й тип инпута
    localStorage.setItem(array[0].defaultKey, array[0].valueType0); // значит, 1-й тип инпута
    
    for (let i = 0; i < array[2].length; i++) // перебор всех инпутов группы
      if (array[2][i][1].type == array[0].valueType0 && array[2][i][1].ui == uiValue) {
        // если оный имеет 1-й тип инпута и значение UI, равное установленному в данный момент
        varRecord(array[1], array[2][i][0]); // установка из массива нужных для данного UI переменных
        markInput(array[0].checkedKey, array[0].name, array[0].prefix + '-' + i); // отметить нужн. инпут
      }
  }
}

function autoPickupVar_3(array, uiValue) { // Автоподхват css-переменных при смене UI, 2 типа инпута
  let type = localStorage.getItem(array[0].defaultKey);

  if (type != array[0].valueType1 && type != array[0].valueType2) { // если не 2-й/3-й тип инпута
    localStorage.setItem(array[0].defaultKey, array[0].valueType0); // значит, 1-й тип инпута
    
    for (let i = 0; i < array[2].length; i++) // перебор всех инпутов группы
      if (array[2][i][1].type == array[0].valueType0 && array[2][i][1].ui == uiValue) {
         // если оный имеет 1-й тип инпута и значение UI, равное установленному в данный момент
        varRecord(array[1], array[2][i][0]); // установка из массива нужных для данного UI переменных
        markInput(array[0].checkedKey, array[0].name, array[0].prefix + '-' + i); // отметить нужн. инпут
      }
  } else if (type != array[0].valueType0 && type != array[0].valueType2) { // если не 1-й/3-й тип инпута
    localStorage.setItem(array[0].defaultKey, array[0].valueType1); // значит, 2-й тип инпута

    for (let i = 0; i < array[2].length; i++) // перебор всех инпутов группы
      if (array[2][i][1].type == array[0].valueType1 && array[2][i][1].ui == uiValue) {
         // если оный имеет 2-й тип инпута и значение UI, равное установленному в данный момент
        varRecord(array[1], array[2][i][0]); // установка из массива нужных для данного UI переменных
        markInput(array[0].checkedKey, array[0].name, array[0].prefix + '-' + i); // отметить нужн. инпут
      }
  }
}

function autoPickupClass_2(array, uiValue) { // Автоподхват классов-стилей при смене UI, 2 типа инпута
  if (localStorage.getItem(array[0].defaultKey) != array[0].valueType1) { // если не 2-й тип инпута
    localStorage.setItem(array[0].defaultKey, array[0].valueType0); // значит, 1-й тип инпута
    
    for (let i = 0; i < array[3].length; i++) // перебор всех инпутов группы
      if (array[3][i][1] == array[0].valueType0)
        for (let j = 0; j < array[3][i][2].length; j++) if (array[3][i][2][j] == uiValue) {
          // если оный имеет 1-й тип инпута и значение UI, равное установленному в данный момент
          localStorage.setItem(array[0].valueKey, array[3][i][0]); // установка из массива нужных для данного UI переменных
          markInput(array[0].checkedKey, array[0].name, array[0].prefix + '-' + i); // отметить нужн. инпут
        }
  }
}

// Функции-обработчики выбора инпута

for (let i = 0; i < themeKernel[0].length; i++) { // Перебор всех групп инпутов радиокнопок для переменных
  $('input[name="' + themeKernel[0][i][0].name + '"]').on('change', function() { // при выборе оных
    localStorage.setItem('preloader', 'theme');
    showElement('#theme-preloader');
    for (let j = 0; j < themeKernel[0][i][2].length; j++) // перебор всех инпутов группы
      if (themeKernel[0][i][0].prefix + '-' + j == this.id) { // если найдена выбранная
        varRecord(themeKernel[0][i][1], themeKernel[0][i][2][j][0]); // запись ее переменных в root
        localStorage.setItem(themeKernel[0][i][0].defaultKey, themeKernel[0][i][2][j][1].type); // ее ключ дефолта
        localStorage.setItem(themeKernel[0][i][0].checkedKey, this.id); // ее id - в ключ отмеченного инпута
      }
    reload();
  });
}

for (let i = 0; i < themeKernel[1].length; i++) { // Перебор всех групп инпутов радиокнопок для классов-стилей
  $('input[name="' + themeKernel[1][i][0].name + '"]').on('change', function() { // при выборе оных
    localStorage.setItem('preloader', 'theme');
    showElement('#theme-preloader');
    for (let j = 0; j < themeKernel[1][i][3].length; j++) // перебор всех инпутов группы
      if (themeKernel[1][i][0].prefix + '-' + j == this.id) { // если найдена выбранная
        localStorage.setItem(themeKernel[1][i][0].valueKey, themeKernel[1][i][3][j][0]); // значие - в ЛХ (класс)
        localStorage.setItem(themeKernel[1][i][0].defaultKey, themeKernel[1][i][3][j][1]); // ее ключ дефолта
        localStorage.setItem(themeKernel[1][i][0].checkedKey, this.id); // ее id - в ключ отмеченного инпута

        if (themeKernel[1][i][0].name == 'ui-style') { // если выбранная кнопка переключает стиль UI
          let currentUi = localStorage.getItem(themeKernel[1][1][0].valueKey);

          autoPickupVar_3(themeKernel[0][1], currentUi); // автоподхват цветовой схемы
          autoPickupVar_2(themeKernel[0][2], currentUi); // автоподхват радиуса закруглений
          autoPickupClass_2(themeKernel[1][0], currentUi); // автоподхват стиля шапки
          autoPickupClass_2(themeKernel[1][2], currentUi); // автоподхват стиля диалоговых окон
          autoPickupClass_2(themeKernel[1][3], currentUi); // автоподхват стиля тумблеров-переключателей
        }
      }
    reload();
  });
}

for (let i = 0; i < themeKernel[2].length; i++) { // Перебор всех групп инпутов ползунков
  $('#' + themeKernel[2][i][0].rangeId).on('change', function() { // при изменении значения ползунка
    let value = this.value; // извлечь значение ползунка
    localStorage.setItem(themeKernel[2][i][0].valueKey, value); // сохранить в ЛХ ключ значения ползунка
    varRecord(themeKernel[2][i][1], convertValues(themeKernel[2][i][2], value)); // запись преобр. переменных
    $('#' + themeKernel[2][i][0].demoId).text(value + themeKernel[2][i][0].text); // уст. значение демки ползунка
  });
}

for (let i = 0; i < themeKernel[3].length; i++) { // Перебор всех групп инпутов чекбоксов
  $('input[name="' + themeKernel[3][i][0].name + '"]').on('change', function() { // при выборе оного
    localStorage.setItem('preloader', 'theme');
    showElement('#theme-preloader');
    for (let j = 0; j < $('input[name="' + themeKernel[3][i][0].name + '"]').length; j++) { // пер. всех инп. группы
      if (this.checked) { // если нажат - установить в ЛХ 1-е значение из массива
        localStorage.setItem(themeKernel[3][i][0].valueKey, themeKernel[3][i][2][0]);
      } else { // если нет - установить в ЛХ 2-е значение из массива
        localStorage.setItem(themeKernel[3][i][0].valueKey, themeKernel[3][i][2][1]);
      }
    }
    reload();
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
  $.each(themeKernel[4][1][0][1], function (name, value) {
    if (localStorage.getItem('--main_bg-color') == value || localStorage.getItem('--main_bg-color') == null)
      $('#black-accent_label').addClass('hidden-label')
  });
  $.each(themeKernel[4][1][1][1], function (name, value) {
    if (localStorage.getItem('--main_bg-color') == value) $('#white-accent_label').addClass('hidden-label')
  });
});

// Функия для раздачи нужных классов артиклям с главными чекбоксами

if (localStorage.getItem('--accent-color') != themeKernel[4][1][0][0].color && 
localStorage.getItem('--accent-color') != themeKernel[4][1][1][0].color) // если цвет акцента != черный/белый
  $.each($('.article_single.important'), function () { // перебор всех артиклей с главными тумблерами
    for (let i = 0; i < themeKernel[3].length; i++) // перебор всех групп инпутов чекбоксов
      if (themeKernel[3][i][0].name == $(this).find('input').attr('name')) // если name оного == тому, что в инпуте в арт.
        if (localStorage.getItem(themeKernel[3][i][0].valueKey) == themeKernel[3][i][2][0]) { // если не отмечен инпут
          if ($(this).hasClass('checked') == false) $(this).addClass('checked'); // дать класс артиклю, что отмечен
        } else { // если отмечен инпут
          if ($(this).hasClass('checked')) $(this).removeClass('checked') // убрать класс у артикля, что отмечен
        }
  });
else // если цвет акцента == черный/белый
  $.each($('.article_single.important'), function () { // перебор всех артиклей с главными тумблерами
    if ($(this).hasClass('important')) $(this).removeClass('important') // убрать класс-идентификатор
  });
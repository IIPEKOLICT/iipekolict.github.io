/* ----- МОДУЛЬ ДЛЯ СТРАНИЦЫ С НАСТРОЙКАМИ ----- */

// Оптимизация

function onCheckbox(checkbox, inputArray) {
    for (let i = 0; i < checkbox.length; i++) if (checkbox[i].checked == false)
        checkbox[i].setAttribute('checked','checked'); // отметить все чекб. группы, если еще не отмечены
    for (let j = 0; j < inputArray.length; j++) {
        if (inputArray[j].get(0).hasAttribute('disabled')) inputArray[j].get(0).removeAttribute('disabled');
            // убрать disabled у всех dis-эл., если уже есть оное
        if (inputArray[j].hasClass('disabled')) inputArray[j].removeClass('disabled'); // - класс
    }
}

function offCheckbox(checkbox, inputArray) {
    for (let i = 0; i < checkbox.length; i++) if (checkbox[i].checked) checkbox[i].removeAttribute('checked');
    for (let j = 0; j < inputArray.length; j++) {
        if (inputArray[j].get(0).hasAttribute('disabled') == false) 
            inputArray[j].get(0).setAttribute('disabled','disabled'); // disabled всем dis-эл., если еще нет оного
        if (inputArray[j].hasClass('disabled') == false) 
            inputArray[j].addClass('disabled'); // + класс (аттрибут не сработает с не инпутами)
    }
}

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

function checkboxVarChecked(array) { // Установка отмеченных чекбоксов (на основании инфы из ЛХ)
    for (let i = 0; i < array.length; i++) { // перебор всех групп инпутов
        let checkbox = $('input[type = "checkbox"][name="' + array[i][0].name + '"]');

        if (!localStorage.getItem(array[i][0].valueKey))
            if (array[i][0].checkedStock == 'on') onCheckbox(checkbox, array[i][4])
            else offCheckbox(checkbox, array[i][4]);
        else if (localStorage.getItem(array[i][0].valueKey) == array[i][3][0])
         // если есть ключ активного класса
            onCheckbox(checkbox, array[i][4])
        else offCheckbox(checkbox, array[i][4]); // если нет
    }
}

function checkboxChecked(array) { // Установка отмеченных чекбоксов (на основании инфы из ЛХ)
    for (let i = 0; i < array.length; i++) { // перебор всех групп инпутов
        let checkbox = $('input[type = "checkbox"][name="' + array[i][0].name + '"]');

        if (!localStorage.getItem(array[i][0].valueKey))
            if (array[i][0].checkedStock == 'on') onCheckbox(checkbox, array[i][3])
            else offCheckbox(checkbox, array[i][3]);
        else if (localStorage.getItem(array[i][0].valueKey) == array[i][2][0])
         // если есть ключ активного класса
            onCheckbox(checkbox, array[i][3])
        else offCheckbox(checkbox, array[i][3]); // если нет
    }
}

function rangeChecked(array) { // Установка отмеченных ползунков (на основании инфы из ЛХ)
    for (let i = 0; i < array.length; i++) if (localStorage.getItem(array[i][0].valueKey)) {
         // если есть ключ value
        $('#' + array[i][0].rangeId).val(localStorage.getItem(array[i][0].valueKey));
         // установить value ползунка
        $('#' + array[i][0].demoId).text(localStorage.getItem(array[i][0].valueKey) + array[i][0].text);
        // установить значение демки ползунка
    } else { // если нет ключа
        $('#' + array[i][0].rangeId).val(array[i][0].valueStock); // установить сток value слайдера
        $('#' + array[i][0].demoId).text(array[i][0].valueStock + array[i][0].text);
        // установить сток значение демки ползунка
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

const setRangeFill = () => { // Заливка левой части ползунка
    $('.range__container').each(function() { // Перебор всех контейнеров для ползунков
        let input = $(this).find('.range__input');
        let fillWidth = (input.val() - input.prop('min')) * 100 / (input.prop('max') - input.prop('min'));
        $(this).find('.range__fill').css('width', fillWidth + '%');
    });
}
    
$('.range').on('input', setRangeFill); // Установка обработчика
setRangeFill();

// Функции-обработчики выбора инпута

for (let i = 0; i < themePar[0].length; i++) { // Перебор всех групп инпутов радиокнопок для переменных
    $('input[name="' + themePar[0][i][0].name + '"]').on('change', function() { // при выборе оных
        localStorage.setItem('preloader', 'theme');
        showElement('#theme-preloader');
        
        for (let j = 0; j < themePar[0][i][2].length; j++) // перебор всех инпутов группы
            if (themePar[0][i][0].prefix + '-' + j == this.id) { // если найдена выбранная
                varRecord(themePar[0][i][1], themePar[0][i][2][j]); // запись ее переменных в root
                localStorage.setItem(themePar[0][i][0].checkedKey, this.id);
                 // ее id - в ключ отмеченного инпута
            }
        
        reload();
    });
}

for (let i = 0; i < themePar[2].length; i++) { // Перебор всех групп инпутов чекбоксов (перем)
    $('input[name="' + themePar[2][i][0].name + '"]').on('change', function() { // при выборе оного
        localStorage.setItem('preloader', 'theme');
        showElement('#theme-preloader');
        for (let j = 0; j < $('input[name="' + themePar[2][i][0].name + '"]').length; j++) {
             // пер. всех инп. группы
            if (this.checked) { // если нажат - установить в ЛХ 1-е значение из массива
                varRecord(themePar[2][i][1], themePar[2][i][2][0]); // запись ее переменных в root
                localStorage.setItem(themePar[2][i][0].valueKey, themePar[2][i][3][0]);
            } else { // если нет - установить в ЛХ 2-е значение из массива
                varRecord(themePar[2][i][1], themePar[2][i][2][1]); // запись ее переменных в root
                localStorage.setItem(themePar[2][i][0].valueKey, themePar[2][i][3][1]);
            }
        }
        reload();
    });
}

for (let i = 0; i < themePar[3].length; i++) { // Перебор всех групп инпутов чекбоксов (класс)
    $('input[name="' + themePar[3][i][0].name + '"]').on('change', function() { // при выборе оного
        localStorage.setItem('preloader', 'theme');
        showElement('#theme-preloader');
        for (let j = 0; j < $('input[name="' + themePar[3][i][0].name + '"]').length; j++) {
             // пер. всех инп. группы
            if (this.checked) { // если нажат - установить в ЛХ 1-е значение из массива
                localStorage.setItem(themePar[3][i][0].valueKey, themePar[3][i][2][0]);
            } else { // если нет - установить в ЛХ 2-е значение из массива
                localStorage.setItem(themePar[3][i][0].valueKey, themePar[3][i][2][1]);
            }
        }
        reload();
    });
}

for (let i = 0; i < themePar[4].length; i++) { // Перебор всех групп инпутов ползунков
    $('#' + themePar[4][i][0].rangeId).on('change', function() { // при изменении значения ползунка
        let value = this.value; // извлечь значение ползунка
        localStorage.setItem(themePar[4][i][0].valueKey, value); // сохранить в ЛХ ключ значения ползунка
        varRecord(themePar[4][i][1], convertValues(themePar[4][i][2], value)); // запись преобр. переменных
        $('#' + themePar[4][i][0].demoId).text(value + themePar[4][i][0].text);
         // уст. значение демки ползунка
    });
}

$(document).ready(function() {
    radioChecked(themePar[0]);
    checkboxVarChecked(themePar[2]);
    checkboxChecked(themePar[3]);
    rangeChecked(themePar[4]);
    setRangeFill();

    $.each($('.label__colored'), function () { 
        $(this).css('--accent_color', $(this).find('input').val()) 
    });

    if (localStorage.getItem('--main_bg-color') == '#f2f2f2') 
        $.each($('#accent-color label'), function () {
            if ($(this).find('input').val() == '#fff') $(this).css("display", "none")
        });
    else $.each($('#accent-color label'), function () {
            if ($(this).find('input').val() == '#000') $(this).css("display", "none")
        });

    if (localStorage.getItem('--accent_color') == '#000' || localStorage.getItem('--accent_color') == '#fff')
        $('#about').css('--accent_color', '#eb0028');
});



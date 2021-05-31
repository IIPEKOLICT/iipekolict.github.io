// TODO: ФУНКЦИИ

const addRow = () => { // Функция для добавления строки в таблицу
    let row = $('<tr></tr>'); // Создаем экземпляр строки
    row.append($('<td></td>').text($('#name').val())); // Запихиваем туда ячейку с названием товара
    row.append($('<td></td>').text($('#quantity').val())); // Запихиваем туда ячейку с количеством
    row.append($('<td></td>').text($('#cost').val())); // Запихиваем туда ячейку с ценой 1 штуки
    row.append($('<td></td>').text($('#quantity').val() * $('#cost').val())); // 4 ячейка с расчитанной стоимостью
    return row; // Собранная строчка
}

const tdHover = () => { // Обработчик положения мыши для ячеек со стоимостью
    $('#rez tr:not(:first-of-type)').each(function() { // Перебрать все строки таблицы, кроме первой
        $(this).find('td:last-child').on('mouseover', function() { // Если мышь над ячейкой стоимости
            $(this).css('background', 'lightyellow'); // Изменить цвет фона
        });
        $(this).find('td:last-child').on('mouseout', function() { // Если мышь не над ячейкой стоимости
            $(this).css('background', 'transparent'); // Убрать цвет фона
        });
    });
}

// TODO: ОБРАБОТЧИКИ ДЛЯ КНОПОК В ФОРМЕ

$('#reset').on('click', function(e) { // Обработчик нажатия на кнопку сброса
    e.preventDefault(); // Останавливаем переход по ссылке
    $('#rez').empty(); // Очищаем блок с таблицей
});

$('#calc').on('click', function(e) { // Обработчик нажатия на кнопку расчета стоимости
    e.preventDefault(); // Останавливаем переход по ссылке
    let sum = 0; // Счетчик для подсчета итоговой суммы

    if ($('#name').val() != '' && $('#quantity').val() != '' && $('#cost').val() != '') { // Проверка на пустоту полей формы
        if ($('#rez').html() == '') { // Если таблица еще не создана
            let table = $('<table></table>'); // Создаем экземпляр таблицы
            table.append($('<caption>Заказ</caption>')); // Впихиваем в него описание
            table.append($('<tr><th>Название</th><th>Количество</th><th>Стоимость 1 шт., руб.</th>><th>Суммарная стоимость, руб.</th></tr>'));
                // Впихиваем в него заглавную строку
            table.append(addRow()); // Впихиваем строку с нынешними параметрами формы
            $('#rez').append(table); // Впихиваем полчившуюся таблицу в блок с результатом
        } else { // Если таблица уже существует
            $('#summary').remove(); // Удаляем строку с итоговой стоимостью
            $('#rez table').append(addRow()); // Впихиваем строку с нынешними параметрами формы
        }
        
        $('#rez tr:not(:first-of-type)').each(function() { // Перебираем все ячейки 4 столбика
            sum += Number($(this).find('td:last-child').text()); // Складываем их значения, дабы найти итоговую стоимость
        });
    
        $('#rez table').append($('<tr id="summary"><td colspan="3">Сумма заказа:</td><td>' + sum + '</td></tr>'));
            // Добавляем в таблицу строчку с итоговой стоимостью заказа
        tdHover();
    } else alert('СИНИЙ ЭКРАН: не введены обязательные параметры'); // Если поля пустые - ошибка
});
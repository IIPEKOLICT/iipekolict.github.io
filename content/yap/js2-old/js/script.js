const name = document.getElementById('name'); // Поле ввода названия товара
const quantity = document.getElementById('quantity'); // Поле ввода количества
const cost = document.getElementById('cost'); // Поле ввода стоимости за единицу
let sum = 0; // Переменная для подсчета суммарной стоимости заказа

function appendRow() { // Функция для создания строк таблицы
    let row = document.createElement('tr'); // Создаем экземпляр строки
    let td1 = document.createElement('td'); // Создание 4 ячеек
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    td4.classList.add('summary'); // У последней ячейки спец класс
    
    td1.appendChild(document.createTextNode(name.value)); // Заполнение ячеек информацией из формы (название)
    td2.appendChild(document.createTextNode(quantity.value)); // (количество)
    td3.appendChild(document.createTextNode(cost.value)); // Стоимость 1 шт
    td4.appendChild(document.createTextNode(quantity.value * cost.value)); // Сумма по данному товару
    sum += quantity.value * cost.value; // Увеличиваем суммарную стоимость

    row.appendChild(td1); // Добавляем ячейки в строку
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    return row; // Собранная строчка
}

const tdHover = () => { // Обработчик для наведения мышью над 4 столбцом
    document.querySelectorAll('.summary').forEach((item) => {
        item.addEventListener('mouseover', function () { // При наведении мыши
            this.style.background = 'red';
        });
        item.addEventListener('mouseout', function () { // Мышь покидает элемент
            this.style.background = 'transparent';
        });
    });
}

document.getElementById('reset').onclick = function(event) { // Обработчик нажатия кнопки "очистить"
    event.preventDefault(); // Остановка перехода по ссылке
    document.getElementById('rezult').innerHTML = ''; // Очистка содержимого блока rezult
    sum = 0; // Сброс суммарной стоимости
};

document.getElementById('calc').onclick = function(event) { // Обработчик нажатия на кнопку "добавить"
    event.preventDefault(); // Остановка перехода по ссылке
    
    if (name.value != '' && quantity.value != '' && cost.value != '') { // Если поля форм не пустые
        if (document.getElementById('rezult').innerHTML === '') { // Если таблица еще не существует
            sum = 0; // Сброс суммы

            let table = document.createElement('table'); // создаем экземпляр таблицы
            let caption = document.createElement('caption'); // создаем экз названия таблицы
            let header = document.createElement('tr'); // заглавная строчка

            let th1 = document.createElement('th'); // создание 4 ячеек заглавной строчки
            let th2 = document.createElement('th');
            let th3 = document.createElement('th');
            let th4 = document.createElement('th');

            caption.appendChild(document.createTextNode('Заказ')); // заполнение текстом навзвания таблицы

            th1.appendChild(document.createTextNode('Название')); // заполнение текстом 4 ячеек
            th2.appendChild(document.createTextNode('Количество'));
            th3.appendChild(document.createTextNode('Стоимость 1 шт.'));
            th4.appendChild(document.createTextNode('Суммарная стоимость, руб.'));

            header.appendChild(th1); // сборка заглавной строчки
            header.appendChild(th2);
            header.appendChild(th3);
            header.appendChild(th4);

            table.appendChild(caption); // добавить в таблицу название
            table.appendChild(header); // добавить в таблицу заглавную строчку
            table.appendChild(appendRow()); // добавить пользовательскую строчку
            document.getElementById('rezult').appendChild(table); // добавить таблицу в блок rezult
        } else { // Если таблица существует
            document.querySelector('#rezult table').removeChild(document.getElementById('total'));
             // Удалить итогов строку
            document.querySelector('#rezult table').appendChild(appendRow()); // Добавить пользовательскую строку
        }

        let total = document.createElement('tr'); // Сборка итоговой строчки
        let total1 = document.createElement('td');
        let total2 = document.createElement('td');

        total.setAttribute('id', 'total');
        total1.setAttribute('colspan', '3'); // 1 ячейка в 3 раза длинее обычных
        total2.classList.add('summary'); // у 2 есть спецкласс для подсветки при наведении

        total1.appendChild(document.createTextNode('Сумма заказа:'));
        total2.appendChild(document.createTextNode(sum)); // заполнение 2 ячейки суммарной стоимостью

        total.appendChild(total1);
        total.appendChild(total2);
        document.querySelector('#rezult table').appendChild(total); // сборка и добавление строчки в таблицу
        tdHover(); // отслеживание наведения мыши на 4 стобец
    } else alert('Не введены обязательные параметры!'); // ошибка, если поля пустые
};
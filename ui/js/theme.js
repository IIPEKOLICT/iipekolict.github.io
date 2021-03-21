/* ----- ОСНОВНОЙ МОДУЛЬ ДВИЖКА ТЕМ ----- */

// Массив с параметрами движка тем

const themePar = [
    [ // Radio (переменные)
        [ // Цвет акцента
            {name: 'accent-color', prefix: 'ac', checkedKey: 'ACChecked', checkedStock: 'ac-0'}, // Параметры группы инпутов
            ['--accent_color','--accent_opacity-color'], // Названия переменных
            [['#42a5f6'],['#9675ce'],['#eb0028'],['#cc6f4e'],['#25c6da'],['#4461d6'],['#e5a544'],
            ['#f06292'],['#208559'],['#7dc32f'],['#b968c7'],['#000'],['#fff']]
        ]
    ],
    [ // Radio (классы)

    ],
    [ // Checkbox (переменные)
        [ // Темная/светлая тема
            {name: 'dark-mode', valueKey: 'darkModeValue', checkedStock: 'on'},
            ['--main_bg-color','--secondary_bg-color','--icon_bg-color','--hover_bg-color',
            '--main_text-color','--secondary_text-color','--divider_color','--radio_nonactive-color',
            '--switch_nonactive-color','--switch-before_nonactive-color'],
            [
                ['#000','#1f1f1f','#141414','#1a1a1a','#d8d8d8','#898989','#1e1e1e','#c7c7c7','#3d3d3d','#d1d1d1'],
                ['#f2f2f2','white','#dcdcdc','#eaeaea','#262626','#969696','#e6e6e6','#757575','#e1e1e1','#c4c4c4']
            ],
            ['dark','light'],
            []
        ]
    ],
    [ // Checkbox (классы)
        [ // Режим OneUI
            {name: 'oneui-mode', valueKey: 'oneuiModeValue', checkedStock: 'off'}, // Параметры группы инпутов
            [$('.header'),$('.main')], // Модифицируемые элементы
            ['OneUI-mode',''], // Варианты класса-модификатора
            [$('#oneui-height-range')] // Элементы с аттрибутом disabled при откл чекбоксе
        ]
    ],
    [ // Range (переменные)
        [ // Высота шапки в режиме OneUI
            {rangeId: 'oneui-height-range', demoId: 'oneui-height-demo', valueKey: 'oneuiHeightValue', 
            valueStock: '47.5', text: '% от высоты окна браузера'}, // параметры группы инпутов
            ['--oneui_header-height'], // переменные
            [ // модификаторы для преобразования value к необходимому виду
                [['1'],['vh']]
            ]
        ],
        [ // Масштаб интерфейса
            {rangeId: 'interface-scale-range', demoId: 'interface-scale-demo', valueKey: 'interfaceScaleValue', 
            valueStock: '100', text: '% от стокового'}, // параметры группы инпутов
            ['--pc_font-size','--tab_font-size','--mob_font-size'], // переменные
            [ // модификаторы для преобразования value к необходимому виду
                [['0.02'],['vh']],
                [['0.02'],['vw']],
                [['0.03'],['vw']]
            ]
        ]
    ],
    [ // Другое
        ['none','var(--accent_color)','var(--main_bg-color)','var(--secondary_bg-color)',
        'var(--icon_bg-color)','var(--main_text-color)','var(--secondary_text-color)',
        'var(--main_border-color)'] // Массив для покраски svg
    ]
]

// Функции

function reload() { location.reload() } // Функция перезагрузки страницы

function showElement(el) { // Универсальная функция для показа нужного элемента
    if ($(el).hasClass('shown') == false) $(el).addClass('shown')
}

function hideElement(el) { // Универсальная функция для скрытия нужного элемента
    if ($(el).hasClass('shown')) $(el).removeClass('shown')
}

function varRead(array) { // Считыватель css-переменных из ЛХ
    for (let i = 0; i < array.length; i++)
        for (let j = 0; j < array[i][1].length; j++) {
            if (localStorage.getItem(array[i][1][j])) 
                document.documentElement.style.setProperty(array[i][1][j], localStorage.getItem(array[i][1][j]));
        }
}

function varRecord(vars, values) { // Установщик css-переменных (в ЛХ и в root)
    for (let i = 0; i < vars.length; i++) {
        document.documentElement.style.setProperty(vars[i], values[i]);
        localStorage.setItem(vars[i], values[i]);
    }
}

function classSwitch(inputArray, value) { // Переключатель класса (один из массива вариантов)
    for (let i = 0; i < inputArray[1].length; i++)
        for (let j = 0; j < inputArray[1][i].length; j++) // перебор всех модифицируемых элементов
            if (inputArray[1][i][j].classList.contains(value) == false) { // если нет нужного класса-стиля
                inputArray[1][i][j].classList.add(value); // добавить
            
                for (let k = 0; k < inputArray[2].length; k++) // перебор всех вариантов класса
                    if (inputArray[1][i][j].classList.contains(inputArray[2][k]) && value != inputArray[2][k]) 
                        inputArray[1][i][j].classList.remove(inputArray[2][k]); // если есть лишние классы - убрать
            }
}

function styleRead(array) { // Установщик классов
    if (localStorage.getItem(array[0].valueKey)) classSwitch(array, localStorage.getItem(array[0].valueKey));
    else {
        localStorage.setItem(array[0].valueKey, array[0].valueStock);
        classSwitch(array, array[0].valueStock);
    }
}

function markInput(key, name, id) { // Функция для принудительной отметки инпута
    document.querySelector('input[name="' + name + '"][id="' + id + '"]').setAttribute('checked','checked');
    localStorage.setItem(key, id); // сохранить ключ в ЛХ
}

function setOpacityAccent() { // Установщик бледного акцента на основе инфы о цвете акцента из ЛХ
    if (localStorage.getItem('--accent_color')) {
        const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(m, r, g, b) =>
        '#' + r + r + g + g + b + b).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));
        // преобразователь из hex в rgb-массив, поддерживает и 3-значные
        let accentRGB = hexToRgb(localStorage.getItem('--accent_color')); // преобразуем в массив [r,g,b]
        let opacityAccent = 'rgba(' + accentRGB[0] + ',' + accentRGB[1] + ',' + accentRGB[2] + ',0.5)';
        // сборка значения бледного акцента
        localStorage.setItem('--accent_opacity-color', opacityAccent); // запись в ЛХ
    }
}

function svgColor(array) { // Установщик цветов g-элементам (покраска SVG-иконок)
    for (let i = 0; i < array.length; i++) for (let j = 0; j < array.length; j++)
    for (let k = 0; k < document.querySelectorAll('.g' + i + j).length; k++) { // перебор всех g-элементов
        document.querySelectorAll('.g' + i + j)[k].style.setProperty('fill', array[i]);
        document.querySelectorAll('.g' + i + j)[k].style.setProperty('stroke', array[j]);
    }
}

function wbAccent() { // Проверка цвета акцента на равенство основному цвету фона
    if ((localStorage.getItem('--accent_color') == '#000' && 
    localStorage.getItem('--main_bg-color') == '#000') ||
    (localStorage.getItem('--accent_color') == '#fff' && 
    localStorage.getItem('--main_bg-color') == '#f2f2f2')) {
        varRecord(['--accent_color'], ['#42a5f6']);
        markInput(themePar[0][0][0].checkedKey, themePar[0][0][0].name, themePar[0][0][0].checkedStock);
        reload();
    }
}

// Загрузка страницы

$(document).ready(function() {
    setOpacityAccent();
    varRead(themePar[0]);
    varRead(themePar[2]);
    varRead(themePar[4]);
    for (let i = 0; i < themePar[1].length; i++) styleRead(themePar[1][i]);
    for (let i = 0; i < themePar[3].length; i++) styleRead(themePar[3][i]);
    svgColor(themePar[5][0]);
    wbAccent();
  
    window.scrollTo({top: 0});

    $('.header').each(function() {
        if ($(this).find('.header__top').html() === '')
            $(this).find('.header__top').text($(this).find('.header__bottom .header__name').text())
    });
    /*
    $('.menu-item').each(function(index) {
        if ($(this).find('.menu-item__icon').html() === '')
            $(this).find('.menu-item__icon').text(index + 1)
    });
    */
    $('.menu').each(function() {
        $(this).find('.menu-item').each(function(index) {
            if ($(this).find('.menu-item__icon').html() === '')
                $(this).find('.menu-item__icon').text(index + 1)
        });
    });

    setTimeout(function() { // Отключение прелоадера спустя некоторое врем после загрузки страницы
        hideElement('.preloader');
        if (localStorage.getItem('preloader') != 'default') localStorage.setItem('preloader', 'default');
    }, 300);
});

// Скроллинг страницы

$(window).scroll(function() { // Функция для OneUI mode, событие при скроллинге
    if ($(window).scrollTop() > 0) { // если есть скроллинг вниз страницы
        // добавляем класс шапке и майну
        $('.header.OneUI-mode').addClass('scroll');
        $('.main.OneUI-mode').addClass('scroll');
    } else { // когда в самом верху страницы (скроллинга нет)
        // забираем класс у шапки и майна
        $('.header.OneUI-mode').removeClass('scroll');
        $('.main.OneUI-mode').removeClass('scroll');
    }
});

// Прелоадер

if (localStorage.getItem('preloader') != 'theme') showElement('#default-preloader');
else showElement('#theme-preloader');
 // Для отображения правильного прелоадера ("применение..."/аним. загрузки)
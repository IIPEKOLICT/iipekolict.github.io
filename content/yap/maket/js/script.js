// TODO: КАРУСЕЛИ

let pos_1 = pos_2 = car_id = i = i_backup = 0, // Числовые переменные
    clicker_1 = clicker_2 = true; // Булевые

const   itemWidth_1 = () => $('#car-1 .slider__item__container').width(),
        itemWidth_2 = () => $('#car-2 .slider__item__container').width(),

        car_1 = $('#car-1'),
        car_2 = $('#car-2'),

        track_1 = car_1.find('.slider__track'),
        track_2 = car_2.find('.slider__track'),

        btnPrev_1 = car_1.find('.slider__btn__prev'),
        btnPrev_2 = car_2.find('.slider__btn__prev'),

        btnNext_1 = car_1.find('.slider__btn__next'),
        btnNext_2 = car_2.find('.slider__btn__next'),

        ind_1 = car_1.find('.slider__ind'),
        ind_2 = car_2.find('.slider__ind');

/*
Сверху вниз:
- длина элемента карусели, 1 и 2, соответственно;
- карусель 1 и 2;
- трек 1 и 2;
- кнопки вперед/назад 1 и 2 карусели, соответственно;
- индикаторы каруселей.

Далее следует универсальный обработчик нажатий для кнопок обоих каруселей,
затем функция, в зависимости от параметров меняющая значение позиции, 
двигающая трек, расставляющая при необходимости дисаблед и отмечающая 
активным необходимый индикатор.
*/

$('.slider__btn').on('click', function() {
    if ($(this).parent().parent().prop('id') == car_1.prop('id')) {
        // 1 карусель
        car_id = 1;
        if ($(this).hasClass('slider__btn__prev')) {
            // Кнопка назад
            btn('prev', car_id);
        } else {
            // Кнопка вперед
            btn('next', car_id);
        }
    } else if ($(this).parent().parent().prop('id') == car_2.prop('id')) {
        // 2 карусель
        car_id = 2;
        if ($(this).hasClass('slider__btn__prev')) {
            // Кнопка назад
            btn('prev', car_id);
        } else {
            // Кнопка вперед
            btn('next', car_id);
        }
    }
});

function btn(type, id) {
    if (id == 1) {
        if (type == 'next') {
            pos_1 -= itemWidth_1(); // Уменьшение константы позиции на шаг прокрутки
        } else {
            pos_1 += itemWidth_1(); // Увеличение константы позиции на шаг прокрутки
        }
        track_1.css('transform', `translateX(${pos_1}px)`);
        if (pos_1 === 0) {
            btnPrev_1.prop('disabled', true);
            btnNext_1.prop('disabled', false);
        } else if (pos_1 <= -itemWidth_1()) {
            btnPrev_1.prop('disabled', false);
            btnNext_1.prop('disabled', true);
        }
        $.each(ind_1, function(index) {
            if ((Math.abs(pos_1) / itemWidth_1()) == index) {
                if (!$(this).hasClass('slider__ind--active')) 
                    $(this).addClass('slider__ind--active');
            } else if ($(this).hasClass('slider__ind--active')) 
                $(this).removeClass('slider__ind--active');
        });
    } else {
        if (type == 'next') {
            pos_2 -= itemWidth_2(); // Уменьшение константы позиции на шаг прокрутки
        } else {
            pos_2 += itemWidth_2(); // Увеличение константы позиции на шаг прокрутки
        }
        track_2.css('transform', `translateX(${pos_2}px)`);
        if (Math.round(pos_2) == 0) btnPrev_2.prop('disabled', true)
        else btnPrev_2.prop('disabled', false);
        if (pos_2 <= -3 * itemWidth_2()) btnNext_2.prop('disabled', true)
        else btnNext_2.prop('disabled', false);
        $.each(ind_2, function(index) {
            if ((Math.abs(pos_2) / itemWidth_2()) == index) {
                if (!$(this).hasClass('slider__ind--active')) 
                    $(this).addClass('slider__ind--active');
            } else if ($(this).hasClass('slider__ind--active')) 
                $(this).removeClass('slider__ind--active');
        });
    }
}

/*
Обработчики для положения мыши относительно каждой из каруселей.
Логика заключается в том, что по дефолту автокликеры работают и слайды сменяются,
но как только пользователь наводит мышь на карусель, оная "замирает", покуда
мышь не покинет ее зону.
*/

car_1.on('mouseover', function() { // Если мышь над 1 каруселью
    clicker_1 = false; // Отключение автокликера 1 карусели
});

car_2.on('mouseover', function() { // Если мышь над 2 каруселью
    clicker_2 = false; // Отключение автокликера 2 карусели
    i_backup = i; // Сохранение счетчика
});

car_1.on('mouseout', function() { // Если мышь не над 1 каруселью
    clicker_1 = true; // Включение автокликера 1 карусели
});

car_2.on('mouseout', function() { // Если мышь не над 2 каруселью
    clicker_2 = true; // Включение автокликера 2 карусели
    let itemNumber_2 = Math.round(pos_2 / -itemWidth_2());
     // Вычисление текущей фактической позиции

    if (i_backup % 6 != itemNumber_2) i = itemNumber_2
    else i = i_backup;
    /*
    Если сохраненное значение счетчика не совпадает с позицией
    (пользователь кликал) - присвоить фактическое значение счетчику.
    Если совпадает - присвоить счетчику забекапленное значение.
    */
});

$(document).ready(function() { // При загрузке страницы
    btnPrev_1.prop('disabled', true); // Скрыть кнопку назад 1 карусели
    btnPrev_2.prop('disabled', true); // Скрыть кнопку назад 2 карусели
    ind_1.eq(0).addClass('slider__ind--active'); // Отметить 1 индикатор 1 карусели
    ind_2.eq(0).addClass('slider__ind--active'); // Отметить 1 индикатор 2 карусели
    
    setInterval(function() { // Автокликеры для каруселей
        if (clicker_1) { // Если автокликер 1 карусели активен
            if (pos_1 === 0) { // Если 1 слайд
                btnNext_1.click(); // Иммитация нажатия кнопки вперед
            } else { // Если 2 слайд
                btnPrev_1.click(); // Иммитация нажатия кнопки назад
            }
        }
        if ($('html').width() < 560 && (clicker_2)) {
             // Если мобильная версия и автокликер 2 карусели активен
            i++; // Счетчик для корректной работы

            /*
            Значение счетчика делится по модулю на 6 (3 шага назад и 3 шага вперед)
            если значение кратно 1, 2, 3 - иммитируется клик по кнопке вперед;
            в противном случае наоборот.
            */

            if (i % 6 == 1 || i % 6 == 2 || i % 6 == 3) btnNext_2.click();
            else if (i % 6 == 4 || i % 6 == 5 || i % 6 == 0) btnPrev_2.click();
        }
    }, 2000);
});

// TODO: НАВИГАЦИЯ ИЗ ШАПКИ

$('a[href^="#"]').on('click', function(e) {
     // При нажатии всех ссылок, у которых в href есть символ #
    e.preventDefault(); // Остановка перехода по ссылке в адресной строке
    $('html, body').animate({ // Плавный скроллинг до нужного элемента
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'swing');
});

// TODO: ЯКОРЬ

// Заливка обводки якоря пропорционально скроллу по оси Х

/*

const   path = $('.scroll__svg__path'), // Обводка (элемент)
        length = path.get(0).getTotalLength(); // Ее длина

*/

const   path = $('.scroll__path'), // Обводка (элемент)
        length = path.get(0).getTotalLength();// * Math.PI; // Ее длина

        //console.log(path.get(0).getTotalLength());

path.css('stroke-dasharray', `${length} ${length}`); // Вид пунктирной обводки
path.css('transition', 'stroke-dashoffset 20ms'); // Анимация заливки обводки

const dashOffset = () => { // Функция-заливатор
    const   height = $(document).height() - $(window).height(),
            dash = length - ($(window).scrollTop() * length / height);

    path.css('stroke-dashoffset', dash); // Отступ незакрашенной части обводки
}

$(window).scroll(function() { // Событие скроллинга
    dashOffset(); // Обновление заливки обводки
    /* 
    Если скроллинг больше высоты окна - добавить класс активности к якорю,
    если нет - убрать
    */
    if ($(window).scrollTop() > $(window).height())
        $('.scroll').addClass('scroll--active');
    else $('.scroll').removeClass('scroll--active');
});

$('.scroll').on('click', function() {
     // Событие при клике на якорь (скроллинг в самый верх)
    $('html, body').animate({
        scrollTop: 0
    }, 500, 'swing');
});
/* ----- МОДУЛЬ ДЛЯ ВЫЧИСЛЕНИЯ ТЕКУЩЕГО ВРЕМЕНИ ----- */

setInterval (function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = (hours < 10) ? '0' + hours : hours + ''; // приведение к необходимому формату
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    let hoursNumbers = hours.split(''); // разбиваем число часов на цифры

    if (hoursNumbers[0] == 1) $('.hour:first-child').addClass('accent-text')
    else $('.hour:first-child').removeClass('accent-text');
    if (hoursNumbers[1] == 1) $('.hour:last-child').addClass('accent-text')
    else $('.hour:last-child').removeClass('accent-text');
  
    $('.hour:first-child').html(hoursNumbers[0]); // запись в html первой цифры часов
    $('.hour:last-child').html(hoursNumbers[1]); // запись в html второй цифры часов
    $('.minutes').html(minutes); // запись в html минут
}, 500);

$(document).ready(function() {
    if (localStorage.getItem('--accent_color') == '#000' || localStorage.getItem('--accent_color') == '#fff') {
        $('.header__top__time').css('--accent_color', '#eb0028');
        $('.header__bottom__time').css('--accent_color', '#eb0028');
    }
});


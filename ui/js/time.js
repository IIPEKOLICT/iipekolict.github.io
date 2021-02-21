/* ----- МОДУЛЬ ДЛЯ ВЫЧИСЛЕНИЯ ТЕКУЩЕГО ВРЕМЕНИ ----- */

setInterval (function(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = (hours < 10) ? '0' + hours : hours + ''; // приведение к необходимому формату
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    let hoursNumbers = hours.split(''); // разбиваем число часов на цифры

    if (hoursNumbers[0] == 1) $('.hour:first-child').addClass('red-text')
    else $('.hour:first-child').removeClass('red-text');
    if (hoursNumbers[1] == 1) $('.hour:last-child').addClass('red-text')
    else $('.hour:last-child').removeClass('red-text');
  
    $('.hour:first-child').html(hoursNumbers[0]); // запись в html первой цифры часов
    $('.hour:last-child').html(hoursNumbers[1]); // запись в html второй цифры часов
    $('.minutes').html(minutes); // запись в html минут
}, 500);


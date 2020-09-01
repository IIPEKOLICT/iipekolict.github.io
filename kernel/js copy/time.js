/*------------------------------------------------------------*/
/*---МОДУЛЬ ДЛЯ ВЫЧИСЛЕНИЯ ТЕКУЩЕГО ВРЕМЕНИ-------------------*/
/*------------------------------------------------------------*/

setInterval (function() { // функция установки времени
  let date = new Date(); // извлекаем дату из системы
  let hours = date.getHours(); // извлекаем оттуда часы
  let minutes = date.getMinutes(); // и минуты
  hours = (hours < 10) ? '0' + hours : hours + ''; // приведение к необходимому формату
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  let hoursNumbers = hours.split(''); // разбиваем число часов на цифры

  if (hoursNumbers[0] == 1) $('#hours1').addClass('red-hour')
  else $('#hours1').removeClass('red-hour');
  if (hoursNumbers[1] == 1) $('#hours2').addClass('red-hour')
  else $('#hours2').removeClass('red-hour');
  
  $('#hours1').html(hoursNumbers[0]); // запись в html первой цифры часов
  $('#hours2').html(hoursNumbers[1]); // запись в html второй цифры часов
  $('#minutes').html(minutes); // запись в html минут

  console.log('yes');
}, 300); // повторять с интервалом 0.3 сек
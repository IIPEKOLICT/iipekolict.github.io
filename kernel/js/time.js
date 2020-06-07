/*------------------------------------------------------------*/
/*---МОДУЛЬ ДЛЯ ВЫЧИСЛЕНИЯ ТЕКУЩЕГО ВРЕМЕНИ-------------------*/
/*------------------------------------------------------------*/

var navTime = document.getElementById('nav-time');

setInterval (function() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  navTime.innerHTML = hours + ':' + minutes;
}, 500);

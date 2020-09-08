/*------------------------------------------------------------*/
/*---МОДУЛЬ-РАСШИРЕНИЕ ДЛЯ ВСЕХ HTML-ФАЙЛОВ-------------------*/
/*------------------------------------------------------------*/

function reload() { location.reload() } // функция перезагрузки страницы

$(window).scroll(function() { // событие скроллинга => функция (функция для OneUI mode)
  if ($(window).scrollTop() > 0) { // скроллинг вниз страницы
     // добавляем класс шапке и майну
    if ($('.header.OneUI-mode').hasClass('scroll') == false) $('.header.OneUI-mode').addClass('scroll');
    if ($('.main.OneUI-mode').hasClass('scroll') == false) $('.main.OneUI-mode').addClass('scroll');
  } else { // когда в самом верху страницы (скроллинга нет)
     // забираем класс у шапки и майна
    if ($('.header.OneUI-mode').hasClass('scroll')) $('.header.OneUI-mode').removeClass('scroll');
    if ($('.main.OneUI-mode').hasClass('scroll')) $('.main.OneUI-mode').removeClass('scroll');
  }
});
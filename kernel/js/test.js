/*------------------------------------------------------------*/
/*---ТЕСТОВЫЙ МОДУЛЬ------------------------------------------*/
/*------------------------------------------------------------*/

/*

if (localStorage.getItem('OneUI-mode')) if (localStorage.getItem('OneUI-mode') == 'on') {
  var pageBlock = document.querySelectorAll('.page-block');

  setInterval (function() {
    for (var i = 1; i < pageBlock.length; i++) {
      var pageHeader =  pageBlock[i].querySelector('.header');
      var pageMain = pageBlock[i].querySelector('.main');
    
      var windowHeight = document.documentElement.clientHeight;
      var headerHeight = pageHeader.offsetHeight;
      var mainHeight = pageMain.offsetHeight - headerHeight - 2;
    
      if (mainHeight > (windowHeight - headerHeight)) {
        if (pageHeader.classList.contains('big-page') == false) pageHeader.classList.add('big-page');
        if (pageMain.classList.contains('big-page') == false) pageMain.classList.add('big-page');
        if (pageHeader.classList.contains('small-page') == true) pageHeader.classList.remove('small-page');
        if (pageMain.classList.contains('small-page') == true) pageMain.classList.remove('small-page');
      } else {
        if (pageHeader.classList.contains('big-page') == true) pageHeader.classList.remove('big-page');
        if (pageMain.classList.contains('big-page') == true) pageMain.classList.remove('big-page');
        if (pageHeader.classList.contains('small-page') == false) pageHeader.classList.add('small-page');
        if (pageMain.classList.contains('small-page') == false) pageMain.classList.add('small-page');
      }
    }
  }, 100);
}

*/
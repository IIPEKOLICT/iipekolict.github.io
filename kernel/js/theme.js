/*------------------------------------------------------------*/
/*---ОБЯЗАТЕЛЬНЫЙ МОДУЛЬ ДВИЖКА ТЕМ---------------------------*/
/*------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы

  // Установка цвета акцента

  if(localStorage.getItem('accentColor')) { // Если в ЛХ есть ключ цвета акцента
    var accentColor = localStorage.getItem('accentColor');
    document.documentElement.style.setProperty('--accent-color', accentColor); // Установить цвет
  } else {
    localStorage.setItem('accentColor', '#80cbc4'); // Дефолтный ключ, если сохраненного не было
  }

  // Установка цветовой схемы

  if(localStorage.getItem('mainBgColor')) { // Если в ЛХ есть ключ основного цвета фона
    var mainBgColor = localStorage.getItem('mainBgColor');
    document.documentElement.style.setProperty('--main_bg-color', mainBgColor); // Установить цвет
  } else {
    localStorage.setItem('mainBgColor', 'black'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--main_bg-color', 'black');
  }
  if(localStorage.getItem('secondaryBgColor')) { // Если в ЛХ есть ключ основного цвета текста
    var secondaryBgColor = localStorage.getItem('secondaryBgColor');
    document.documentElement.style.setProperty('--secondary_bg-color', secondaryBgColor); // Установить цвет
  } else {
    localStorage.setItem('secondaryBgColor', '#424242'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--secondary_bg-color', '#424242');
  }
  if(localStorage.getItem('additionalBgColor')) { //
    var additionalBgColor = localStorage.getItem('additionalBgColor');
    document.documentElement.style.setProperty('--additional_bg-color', additionalBgColor); //
  } else {
    localStorage.setItem('additionalBgColor', '#1d1d1d'); //
    document.documentElement.style.setProperty('--additional_bg-color', '#1d1d1d');
  }
  if(localStorage.getItem('iconBgColor')) { //
    var iconBgColor = localStorage.getItem('iconBgColor');
    document.documentElement.style.setProperty('--icon_bg-color', iconBgColor); //
  } else {
    localStorage.setItem('iconBgColor', '#141414'); //
    document.documentElement.style.setProperty('--icon_bg-color', '#141414');
  }
  if(localStorage.getItem('hoverBgColor')) { // Если в ЛХ есть ключ цвета акцента
    var hoverBgColor = localStorage.getItem('hoverBgColor');
    document.documentElement.style.setProperty('--hover_bg-color', hoverBgColor); // Установить цвет
  } else {
    localStorage.setItem('hoverBgColor', '#666'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--hover_bg-color', '#666');
  }
  if(localStorage.getItem('mainTextColor')) { // Если в ЛХ есть ключ цвета акцента
    var mainTextColor = localStorage.getItem('mainTextColor');
    document.documentElement.style.setProperty('--main_text-color', mainTextColor); // Установить цвет
  } else {
    localStorage.setItem('mainTextColor', 'white'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--main_text-color', 'white');
  }
  if(localStorage.getItem('secondaryTextColor')) { // Если в ЛХ есть ключ цвета акцента
    var secondaryTextColor = localStorage.getItem('secondaryTextColor');
    document.documentElement.style.setProperty('--secondary_text-color', secondaryTextColor); // Установить цвет
  } else {
    localStorage.setItem('secondaryTextColor', '#7a7a7a'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--secondary_text-color', '#7a7a7a');
  }
  if(localStorage.getItem('mainBorderColor')) { // Если в ЛХ есть ключ цвета акцента
    var mainBorderColor = localStorage.getItem('mainBorderColor');
    document.documentElement.style.setProperty('--main_border-color', mainBorderColor); // Установить цвет
  } else {
    localStorage.setItem('mainBorderColor', '#1e1e1e'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--main_border-color', '#1e1e1e');
  }
  if(localStorage.getItem('radioNonactiveColor')) { //
    var radioNonactiveColor = localStorage.getItem('radioNonactiveColor');
    document.documentElement.style.setProperty('--radio_nonactive-color', radioNonactiveColor); //
  } else {
    localStorage.setItem('radioNonactiveColor', '#898989'); //
    document.documentElement.style.setProperty('--radio_nonactive-color', '#898989');
  }
});

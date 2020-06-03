/*------------------------------------------------------------*/
/*---ОБЯЗАТЕЛЬНЫЙ МОДУЛЬ ДВИЖКА ТЕМ---------------------------*/
/*------------------------------------------------------------*/

var page = document.querySelector('.page'); // <body>, класс в нем задает стиль UI
var uiStyles = ['UI_OOS','UI_ZenUI','UI_OneUI','UI_RUI']; // массив с возможными стилями UI

var headers = document.querySelectorAll('.header'); // все шапки
var headerSvgs = document.querySelectorAll('.svg_header'); // все <svg> в шапках
var svgs = document.querySelectorAll('.svg'); // все <svg>
var headerStyles = ['HEADER_stock','HEADER_RUI','HEADER_ZenUI','HEADER_OOSColor']; // массив с возможными стилями шапки

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы

  // Установка цвета акцента

  if (localStorage.getItem('accentColor')) { // Если в ЛХ есть ключ цвета акцента
    var accentColor = localStorage.getItem('accentColor');
    document.documentElement.style.setProperty('--accent-color', accentColor); // Установить цвет
  } else {
    localStorage.setItem('accentColor', '#80cbc4'); // Дефолтный ключ, если сохраненного не было
  }

  // Установка цветовой схемы

  if (localStorage.getItem('mainBgColor')) { // Если в ЛХ есть ключ основного цвета фона
    var mainBgColor = localStorage.getItem('mainBgColor');
    document.documentElement.style.setProperty('--main_bg-color', mainBgColor); // Установить цвет
  } else {
    localStorage.setItem('mainBgColor', 'black'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--main_bg-color', 'black');
  }
  if (localStorage.getItem('secondaryBgColor')) { // Если в ЛХ есть ключ второстепенного цвета фона
    var secondaryBgColor = localStorage.getItem('secondaryBgColor');
    document.documentElement.style.setProperty('--secondary_bg-color', secondaryBgColor); // Установить цвет
  } else {
    localStorage.setItem('secondaryBgColor', '#424242'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--secondary_bg-color', '#424242');
  }
  if (localStorage.getItem('additionalBgColor')) { // Если в ЛХ есть ключ дополнительного цвета фона
    var additionalBgColor = localStorage.getItem('additionalBgColor');
    document.documentElement.style.setProperty('--additional_bg-color', additionalBgColor); // Установить цвет
  } else {
    localStorage.setItem('additionalBgColor', '#1d1d1d'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--additional_bg-color', '#1d1d1d');
  }
  if (localStorage.getItem('iconBgColor')) { // Если в ЛХ есть ключ дефолтного цвета фона иконок
    var iconBgColor = localStorage.getItem('iconBgColor');
    document.documentElement.style.setProperty('--icon_bg-color', iconBgColor); // Установить цвет
  } else {
    localStorage.setItem('iconBgColor', '#141414'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--icon_bg-color', '#141414');
  }
  if (localStorage.getItem('hoverBgColor')) { // Если в ЛХ есть ключ цвета фона при выделении
    var hoverBgColor = localStorage.getItem('hoverBgColor');
    document.documentElement.style.setProperty('--hover_bg-color', hoverBgColor); // Установить цвет
  } else {
    localStorage.setItem('hoverBgColor', '#666'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--hover_bg-color', '#666');
  }
  if (localStorage.getItem('mainTextColor')) { // Если в ЛХ есть ключ основного цвета текста
    var mainTextColor = localStorage.getItem('mainTextColor');
    document.documentElement.style.setProperty('--main_text-color', mainTextColor); // Установить цвет
  } else {
    localStorage.setItem('mainTextColor', 'white'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--main_text-color', 'white');
  }
  if (localStorage.getItem('secondaryTextColor')) { // Если в ЛХ есть ключ дополнительного цвета текста
    var secondaryTextColor = localStorage.getItem('secondaryTextColor');
    document.documentElement.style.setProperty('--secondary_text-color', secondaryTextColor); // Установить цвет
  } else {
    localStorage.setItem('secondaryTextColor', '#7a7a7a'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--secondary_text-color', '#7a7a7a');
  }
  if (localStorage.getItem('mainBorderColor')) { // Если в ЛХ есть ключ основного цвета бордеров
    var mainBorderColor = localStorage.getItem('mainBorderColor');
    document.documentElement.style.setProperty('--main_border-color', mainBorderColor); // Установить цвет
  } else {
    localStorage.setItem('mainBorderColor', '#1e1e1e'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--main_border-color', '#1e1e1e');
  }
  if (localStorage.getItem('radioNonactiveColor')) { // Если в ЛХ есть ключ цвета неактивных радиокнопок
    var radioNonactiveColor = localStorage.getItem('radioNonactiveColor');
    document.documentElement.style.setProperty('--radio_nonactive-color', radioNonactiveColor); // Установить цвет
  } else {
    localStorage.setItem('radioNonactiveColor', '#898989'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--radio_nonactive-color', '#898989');
  }

  // Установка стиля шапки

  if (localStorage.getItem('headerStyle')) { // Если в ЛХ есть ключ
    var headerStyle = localStorage.getItem('headerStyle'); // извлечение

    for (var i = 0; i < headers.length; i++) { // перебор всех шапок
      if (headers[i].classList.contains(headerStyle) == false) { // если нет нужного класса-стиля
        headers[i].classList.add(headerStyle); // добавить

        for (var j = 0; j < headerStyles.length; j++) { // перебор всех вариантов стилей
          if (headers[i].classList.contains(headerStyles[j]) == true && headerStyle != headerStyles[j]) headers[i].classList.remove(headerStyles[j]); // если есть лишние классы - убрать
        }
      }
    }

    for (var i = 0; i < headerSvgs.length; i++) { // перебор всех <svg> в шапках
      if (headerSvgs[i].classList.contains(headerStyle) == false) {// если нет нужного класса-стиля
        headerSvgs[i].classList.add(headerStyle); // добавить

        for (var j = 0; j < headerStyles.length; j++) { // перебор всех вариантов стилей
          if (headerSvgs[i].classList.contains(headerStyles[j]) == true && headerStyle != headerStyles[j]) headerSvgs[i].classList.remove(headerStyles[j]); // если есть лишние классы - убрать
        }
      }
    }
  } else {
    localStorage.setItem('headerStyle', 'HEADER_stock'); // Дефолтный ключ, если сохраненного не было

    for (var i = 0; i < headers.length; i++) { // перебор всех шапок
      if (headers[i].classList.contains('HEADER_stock') == false) { // если нет стокового класса-стиля
        headers[i].classList.add('HEADER_stock'); // добавить

        for (var j = 0; j < headerStyles.length; j++) { // перебор всех вариантов стилей
          if (headers[i].classList.contains(headerStyles[j]) == true && 'HEADER_stock' != headerStyles[j]) headers[i].classList.remove(headerStyles[j]); // если есть лишние классы - убрать
        }
      }
    }

    for (var i = 0; i < headerSvgs.length; i++) { // перебор всех <svg> в шапках
      if (headerSvgs[i].classList.contains('HEADER_stock') == false) { // если нет стокового класса-стиля
        headerSvgs[i].classList.add('HEADER_stock'); // добавить

        for (var j = 0; j < headerStyles.length; j++) { // перебор всех вариантов стилей
          if (headerSvgs[i].classList.contains(headerStyles[j]) == true && 'HEADER_stock' != headerStyles[j]) headerSvgs[i].classList.remove(headerStyles[j]); // если есть лишние классы - убрать
        }
      }
    }
  }

  // Установка стиля UI

  if (localStorage.getItem('uiStyle')) { // Если в ЛХ есть ключ
    var uiStyle = localStorage.getItem('uiStyle'); // Извлечь
    if (page.classList.contains(uiStyle) == false) { // если нет нужного класса-стиля
      page.classList.add(uiStyle); // добавить

      for (var i = 0; i < uiStyles.length; i++) { // перебор всех вариантов стилей
        if (page.classList.contains(uiStyles[i]) == true && uiStyle != uiStyles[i]) page.classList.remove(uiStyles[i]);
        // если есть лишние классы - убрать
      }
    }

    for (var i = 0; i < svgs.length; i++) { // перебор всех <svg> в шапках
      if (svgs[i].classList.contains(uiStyle) == false) { // если нет нужного класса-стиля
        svgs[i].classList.add(uiStyle); // добавить

        for (var j = 0; j < uiStyles.length; j++) { // перебор всех вариантов стилей
          if (svgs[i].classList.contains(uiStyles[j]) == true && uiStyle != uiStyles[j]) svgs[i].classList.remove(uiStyles[j]); // если есть лишние классы - убрать
        }
      }
    }
  } else {
    localStorage.setItem('uiStyle', 'UI_OOS'); // Дефолтный ключ, если сохраненного не было
    page.classList.add('UI_OOS'); // дефолтный класс

    for (var i = 0; i < svgs.length; i++) { // перебор всех <svg> в шапках
      if (svgs[i].classList.contains('UI_OOS') == false) { // если нет стокового класса-стиля
        svgs[i].classList.add('UI_OOS'); // добавить

        for (var j = 0; j < uiStyles.length; j++) { // перебор всех вариантов стилей
          if (svgs[i].classList.contains(uiStyles[j]) == true && 'UI_OOS' != uiStyles[j]) svgs[i].classList.remove(uiStyles[j]); // если есть лишние классы - убрать
        }
      }
    }
  }
});

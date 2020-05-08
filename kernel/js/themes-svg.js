document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы

  if(localStorage.getItem('accentColor')) { // Если в ЛХ есть ключ цвета акцента
    var accentColor = localStorage.getItem('accentColor');
    document.documentElement.style.setProperty('--accent-color', accentColor); // Установить цвет
  } else {
    localStorage.setItem('accentColor', '#80cbc4'); // Дефолтный ключ, если сохраненного не было
  }

  if(localStorage.getItem('secondaryBgColor')) { // Если в ЛХ есть ключ основного цвета текста
    var secondaryBgColor = localStorage.getItem('secondaryBgColor');
    document.documentElement.style.setProperty('--secondary_bg-color', secondaryBgColor); // Установить цвет
  } else {
    localStorage.setItem('secondaryBgColor', '#141414'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--secondary_bg-color', '#141414');
  }
  if(localStorage.getItem('mainTextColor')) { // Если в ЛХ есть ключ цвета акцента
    var mainTextColor = localStorage.getItem('mainTextColor');
    document.documentElement.style.setProperty('--main_text-color', mainTextColor); // Установить цвет
  } else {
    localStorage.setItem('mainTextColor', 'white'); // Дефолтный ключ, если сохраненного не было
    document.documentElement.style.setProperty('--main_text-color', 'white');
  }
});

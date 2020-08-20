/*------------------------------------------------------------*/
/*---ТЕСТОВЫЙ МОДУЛЬ------------------------------------------*/
/*------------------------------------------------------------*/

// Слайдер масштаба интерфейса

var scaleRange = document.getElementById("interface-scale-range"); // Слайдер для изменения масштаба интерфейса
var scaleDemo = document.getElementById("interface-scale-demo"); // Демка оного слайдера

scaleRange.oninput = function() {
  var interfaceScale = this.value;

  localStorage.setItem('interfaceScale',interfaceScale); // сохранить в ЛХ ключ
  varRecord(vars[6],[(interfaceScale * 0.04) + 'vh',(interfaceScale * 0.04) + 'vw',(interfaceScale * 0.05) + 'vw']);
  scaleDemo.textContent = interfaceScale + '% от стокового'; // установить значение демки слайдера
}

// Слайдер длительности анимации

var animeRange = document.getElementById("animation-duration-range"); // Слайдер для изменения длит анимации
var animeDemo = document.getElementById("animation-duration-demo"); // Демка оного слайдера

animeRange.oninput = function() {
  var animationDuration = this.value;

  localStorage.setItem('animationDuration',animationDuration); // сохранить в ЛХ ключ
  varRecord(vars[5],[animationDuration + 's']);
  animeDemo.textContent = animationDuration + ' сек.'; // установить значение демки слайдера
}

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы

  if (localStorage.getItem('interfaceScale')) { // если сеть ключ
    var interfaceScale = localStorage.getItem('interfaceScale'); // извлечь

    varRecord(vars[6],[(interfaceScale * 0.04) + 'vh',(interfaceScale * 0.04) + 'vw',(interfaceScale * 0.05) + 'vw']);
    scaleRange.value = interfaceScale; // установить значение слайдера
    scaleDemo.textContent = interfaceScale + '% от стокового'; // установить значение демки слайдера
  } else { // если нет ключа
    localStorage.setItem('interfaceScale', '100'); // дефолтный ключ
    varRecord(vars[6],['4vh','4vw','5vw']); // установить пер. стоковое значение
    scaleRange.value = '100'; // установить значение слайдера
    scaleDemo.textContent = '100% от стокового'; // установить значение демки слайдера
  }

  if (localStorage.getItem('animationDuration')) { // если сеть ключ
    var animationDuration = localStorage.getItem('animationDuration'); // извлечь

    varRecord(vars[5],[animationDuration + 's']);
    animeRange.value = animationDuration; // установить значение слайдера
    animeDemo.textContent = animationDuration + ' сек.'; // установить значение демки слайдера
  } else { // если нет ключа
    localStorage.setItem('animationDuration','0.3s'); // дефолтный ключ
    varRecord(vars[5],['0.3s']); // установить пер. стоковое значение
    animeRange.value = '0.3'; // установить значение слайдера
    animeDemo.textContent = '0.3 сек.'; // установить значение демки слайдера
  }
});
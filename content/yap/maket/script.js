// СЛАЙДЕРЫ (ОБА)

let pos1 = 0; // Позиция прокрутки 1 слайдера
let pos2 = 0; // Позиция прокрутки 2 слайдера

 // Шаги прокрутки 1 и 2 слайдера
const itemWidth1 = () => document.querySelector('#slider-1 .slider-container').clientWidth;
const itemWidth2 = () => document.querySelector('#slider-2 .slider-container').clientWidth;

const track1 = document.querySelector('#slider-1 .slider-track'); // Трек 1 слайдера (полоска с элемантами)
const track2 = document.querySelector('#slider-2 .slider-track'); // Трек 2 слайдера (полоска с элемантами)

const btnNext1 = document.querySelector('#slider-1 .btn-next'); // Кнопка "вперед" для 1 слайдера
const btnPrev1 = document.querySelector('#slider-1 .btn-prev'); // Кнопка "назад" для 1 слайдера
const btnNext2 = document.querySelector('#slider-2 .btn-next'); // Кнопка "вперед" для 2 слайдера
const btnPrev2 = document.querySelector('#slider-2 .btn-prev'); // Кнопка "назад" для 2 слайдера

const ind1 = document.querySelectorAll('#slider-1 .slider-indicator'); // Индикация (кружочки снизу) для 1 слайдера
const ind2 = document.querySelectorAll('#slider-2 .slider-indicator'); // Индикация (кружочки снизу) для 2 слайдера

const act = 'active'; // Класс активности

function btnNext(a) { // Листание вперед (универсальная, в а вписывается номер слайдера), вешать на кнопки
  if (a == 1) pos1 -= itemWidth1(); // Уменьшение константы позиции на шаг прокрутки
  else pos2 -= itemWidth2();
  
  setPos(a); // Сдвиг соответствующего трека на необходимую длину
  checkBtns(a); // Проверка кнопок
  checkInd(a); // Проверка индикаторов
}

function btnPrev(a) { // Листание назад (универсальная, в а вписывается номер слайдера), вешать на кнопки
  if (a == 1) pos1 += itemWidth1(); // Умвеличение константы позиции на шаг прокрутки
  else pos2 += itemWidth2();

  setPos(a); // Сдвиг соответствующего трека на необходимую длину
  checkBtns(a); // Проверка кнопок
  checkInd(a); // Проверка индикаторов
}

const setPos = (a) => { // Сдвиг соответствующего трека на необходимую длину
  if (a == 1) track1.style.transform = `translateX(${pos1}px)`;
  else track2.style.transform = `translateX(${pos2}px)`;
}

const checkBtns = (a) => { // Проверка кнопок
  if (a == 1) {
    btnPrev1.disabled = pos1 === 0; // "назад" неактивна, если позиция = 0
    btnNext1.disabled = pos1 <= -itemWidth1(); // "вперед" неактивна, если позиция = -шагу трека
  } else {
    btnPrev2.disabled = pos2 === 0; // "назад" неактивна, если позиция = 0
    btnNext2.disabled = pos2 <= -3 * itemWidth2(); // "вперед" неактивна, если позиция = -3 шагам трека
  }
  // В зависимости от кол-ва элементов слайдера разные условия для кнопки "вперед"
}

function checkInd(b) { // Проверка индикаторов
  if (b == 1) { // Если 1 слайдер
    for (let i = 0; i < ind1.length; i++) { // Перебор всех индикаторов слайдера
      if ((Math.abs(pos1) / itemWidth1()) == i) { // Если номер показываемого элемента = номеру индикатора
        if (ind1[i].classList.contains(act) == false) ind1[i].classList.add(act); // Добавить класс акт
      } else if (ind1[i].classList.contains(act)) ind1[i].classList.remove(act); // Если нет, удалить
    }
  } else { // Если 2 слайдер
    for (let i = 0; i < ind2.length; i++) { // Перебор всех индикаторов слайдера
      if ((Math.abs(pos2) / itemWidth2()) == i) { // Если номер показываемого элемента = номеру индикатора
        if (ind2[i].classList.contains(act) == false) ind2[i].classList.add(act); // Добавить класс акт
      } else if (ind2[i].classList.contains(act)) ind2[i].classList.remove(act); // Если нет, удалить
    }
  }
}

document.addEventListener("DOMContentLoaded", () => { // Событие при загрузке страницы
  checkBtns(1);
  checkBtns(2);
  checkInd(1);
  checkInd(2);
  // Это нужно, чтобы при первой загрузке страницы были активны правильные кнопки и индикаторы
});

// ЯКОРЬ

const offset = document.documentElement.clientHeight / 2; // Расстояние скролла, при котором показать якорь
const scrollUp = document.querySelector('.scroll-up'); // Собственно, якорь

const getTop = () => window.pageYOffset || document.documentElement.scrollTop; // Считает позицию скролла по У

window.addEventListener('scroll', () => { // Событие при скроллинге страницы
  if (getTop() > offset) scrollUp.classList.add(act); // Если проскроллено больше расстояния скролла - якорь акт
  else scrollUp.classList.remove(act); // Если нет - нет
});

scrollUp.addEventListener('click', () => { // Обработчик клика по якорю (что будет при клике по оном)
  window.scrollTo({ // Проскроллить до самого верха плавно
    top: 0,
    behavior: 'smooth'
  });

  if (scrollUp.classList.contains(act)) scrollUp.classList.remove(act); // Убрать акт класс, если был
  scrollUp.click();
});

// НАВИГАЦИЯ ИЗ ШАПКИ

const links = document.querySelectorAll('.nav a'); // Ссылки на блоки в сайте в шапке

for (let link of links) { // перебор всех ссылок
    link.addEventListener('click', function (e) { // Обработчик клика по каждой
        e.preventDefault(); // Чтобы в строке браузера не начинался переход на др страницу
        const id = link.getAttribute('href'); // Извлечение аттрибута href из ссылки

        document.querySelector(id).scrollIntoView({ // Плавно проскроллить до элемента, на который ссылалась ссылка
            behavior: 'smooth',
            block: 'start'
        });
    });
};
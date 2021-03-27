/* ----- Моя лень ----- */

document.querySelectorAll('.section').forEach((section, id) => {
    if (section.querySelector('.section__header').textContent === '')
        section.querySelector('.section__header').textContent = (id + 1) + ' задача';
});

document.querySelectorAll('.list__item__close').forEach((btn) => {
    if (btn.textContent === '') btn.textContent = 'x';
});

/* ----- 1 Задача ----- */

document.getElementById('z1').addEventListener('click', function() {
    document.getElementById('hide').style.setProperty('display', 'none')
});

/* ----- 2 Задача ----- */

document.getElementById('z2').addEventListener('click', function() {
    this.style.setProperty('display', 'none')
});

/* ----- 3 Задача ----- */

document.querySelectorAll('#z3 .list__item').forEach((item) => {
    item.querySelector('.list__item__close').addEventListener('click', function() {
        item.style.setProperty('display', 'none')
    });
});

/* ----- 4 Задача ----- */

const dialog = document.querySelector('.dialog'); // Диалоговая зона

document.getElementById('z4').addEventListener('click', function() { // Вызов диалогового окна
    dialog.classList.add('dialog--active')
});

dialog.onmouseover = function() { document.body.style.overflow = 'hidden'};
 // Если над диалоговой зоной мышь (а это возможно только когда оная открыта) - отключить прокрутку мышью 
 // для документа
dialog.onmouseout = function() { document.body.style.overflow = 'auto' }; // Если над диалоговой зоной 
 // мыши нет (а это возможно только когда оная скрыта) - включить прокрутку мышью для документа

if (dialog.classList.contains('.dialog--active')) // Если активно диалоговое окно
    document.onkeydown = function(e) { // Обработчик нажатия кнопок клавиатуры
        e = e || window.event; // Событие нажатия
        let c = e.keyCode; // Считывание кода нажатой клавиши
        // Если это pageUp(33), pageDown(34), end(35), home(36), left(37), up(38), right(39), down(40)
        if (c > 32 && c < 41) return false; // - заблокировать нажатие
    }

dialog.onclick = function(e) { // Событие клика в диалоговой зоне
    if (!document.querySelector('.dialog__window').contains(e.target))
     // Если клик произведен вне dialog__window
        dialog.classList.remove('dialog--active'); // Закрыть диалоговое окно
};

/* ----- 5 Задача ----- */

let ul = document.querySelector('#z5 ul');
let lastClickedLi = null;

// обработчики

ul.onclick = function(e) {
    e = e || event;
    let target = e.target || event.srcElement;

    // возможно, клик был внутри списка UL, но вне элементов LI
    if (target.tagName != "LI") return;

    var isMac = navigator.platform.indexOf("Mac") != -1;
    if(isMac ? e.metaKey : e.ctrlKey) { // для Mac проверяем Cmd, т.к. Ctrl + click там контекстное меню
        toggleSelect(target);
    } else if (e.shiftKey) {
        selectFromLast(target);
    } else {
        selectSingle(target);
    }

    lastClickedLi = target;
}

ul.onselectstart = ul.onmousedown = function() {
    return false;
};

// функции для выделения

function toggleSelect(li) {
    li.className = (li.className == 'list__item') ? 'list__item list__item--selected' : 'list__item';
}

function selectFromLast(target) {
    var startElem = lastClickedLi || ul.children[0];
  
    var isLastClickedBefore = compareDocumentPosition(startElem, target) & 4;
  
    if (isLastClickedBefore) {
        for(var elem = startElem; elem != target; elem = elem.nextSibling) {
            elem.className = 'list__item list__item--selected';
        }
    } else {
        for(var elem = startElem; elem != target; elem = elem.previousSibling) {
            elem.className = 'list__item list__item--selected';
        }
    }
    elem.className = 'list__item list__item--selected';
  
}

function selectSingle(li) {
    deselectAll();
    if (!li.classList.contains('list__item--selected'))
        li.classList.add('list__item--selected');
}

// снятие выделения со всех - перебором
// это медленнее, чем запоминать список текущих выделенных,
// но подойдет для не очень больших (до 1000 элементов) списков
function deselectAll() {
    for(var i = 0; i < ul.children.length; i++)
        if (ul.children[i].classList.contains('list__item--selected'))
            ul.children[i].classList.remove('list__item--selected');
}

function compareDocumentPosition(a, b) {
    return a.compareDocumentPosition ?
        a.compareDocumentPosition(b) :
            (a != b && a.contains(b) && 16) +
            (a != b && b.contains(a) && 8) +
            (a.sourceIndex >= 0 && b.sourceIndex >= 0 ?
                (a.sourceIndex < b.sourceIndex && 4) +
                (a.sourceIndex > b.sourceIndex && 2) : 1);
}
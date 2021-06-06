function madeTree(el) { // функция обхода дерева, в качестве параметра - корневой элемент
    let child = el.firstElementChild; // первый дочерний элемент корневого
    let ul = document.createElement('ul'); // создаем список
    i = 0 // переменная для подсчета порядкового номера дочерних элементов

    while(child) { // проходим каждый дочерний корневого (сын)
        let li = document.createElement('li'); // создание элемента списка
        let list = madeTree(child); // рекурсия (повторяем все для дочерних элементов сына (внуки))
        
        i++ // индекс повышается на 1 для каждого последующего элемента
        li.innerHTML = child.tagName; // записываем с элемент списка тег элемента
        li.appendChild(list); // кладем внутрь элемента списка список, сгенерированный для внуков
        ul.appendChild(li); // в материнский список кладем элемент списка
        console.log(i + ' дочерний элемент элемента с тегом ' + el.tagName + ', тег: ' + child.tagName)
         // отладочный вывод в консоль
        child = child.nextElementSibling; // переход к следующему сыну
    }

    el.appendChild(ul); // внутрь материнского элемента кладем получившееся дерево
    return ul;
}

document.getElementById('rezult').append(madeTree(document.body)) // вывод дерева в блоке с id rezult
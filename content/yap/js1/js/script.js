// TODO: Обход дерева элементов страницы

const tree = (root) => { // Рекурсивная функция для обхода
    let ul = $('<ul></ul>'); // Создаем элемент ul, который используется в роли родителя
    root.children().each(function(index) { // Внутри него перебираем все дочерние элементы, считываем их индекс
        let li = $('<li></li>'); // Создаем элемент li для каждого дочернего
        li.text($(this).prop('tagName')); // Присваиваем ему текст-имя тега дочернего элемента
        li.append(tree($(this))); // Собственно, рекурсия (повторяем всю функцию, но уже в качестве корневого используем нынешний li)
        ul.append(li); // Добавляем li в наш ul

        console.log('Тег ' + $(this).prop('tagName') + ', это ' + (index + 1) + 
            ' дочерний элемент элемента ' + root.prop('tagName') + '.'); // Отладочный вывод в консоль
    });
    root.append(ul); // Добавляем собранный ul в корневой элемент
    return ul;
}

$('#rez').append(tree($('html'))); // Вызываем функцию обхода и собранный список запихиваем в блок с id="rez"
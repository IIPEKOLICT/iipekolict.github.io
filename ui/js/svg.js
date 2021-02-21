/* ----- МОДУЛЬ ДВИЖКА ТЕМ ДЛЯ SVG ----- */

// Массив с параметрами движка тем

const themeParSvg = [
    [ // Сss-переменные
        '--accent_color','--main_bg-color','--secondary_bg-color','--icon_bg-color','--hover_bg-color',
        '--main_text-color','--secondary_text-color','--main_border-color'
    ],
    [ // Цвета для автопокраски svg
        'none','var(--accent_color)','var(--main_bg-color)','var(--secondary_bg-color)',
        'var(--icon_bg-color)','var(--main_text-color)','var(--secondary_text-color)',
        'var(--main_border-color)'
    ]
]

// Функции

function varReadSvg(array) { // Считыватель css-переменных
    for (let i = 0; i < array.length; i++) {
        if (localStorage.getItem(array[i])) 
            document.documentElement.style.setProperty(array[i], localStorage.getItem(array[i]));
    }
}

function svgColor(array) {
    for (let i = 0; i < array.length; i++) for (let j = 0; j < array.length; j++)
        // перебор всех идентификаторов
    for (let k = 0; k < document.querySelectorAll('.g' + i + j).length; k++) { 
        // перебор всех элементов массива
        document.querySelectorAll('.g' + i + j)[k].style.setProperty('fill', array[i]);
        // установить цвет заливки
        document.querySelectorAll('.g' + i + j)[k].style.setProperty('stroke', array[j]);
        // установить цвет обводки
    }
}

// Событие загрузки страницы

document.addEventListener("DOMContentLoaded", () => {
    varReadSvg(themeParSvg[0]);
    svgColor(themeParSvg[1]);
});
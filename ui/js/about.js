/* ----- МОДУЛЬ ДЛЯ ЛОГОТИПА В РАЗДЕЛЕ "ИНФОРМАЦИЯ" ----- */

// Общие переменные

let accent = localStorage.getItem('--accent_color');
let mainBg = localStorage.getItem('--main_bg-color');

// Перекраска в красный, если черный/белый акцент

const recolor = () => {
    if (accent == '#000' || accent == '#fff')
        document.getElementById('about-logo').style.setProperty('--accent_color', '#eb0028');
}

// Выполнять при загрузке страницы

document.addEventListener("DOMContentLoaded", () => { recolor() });
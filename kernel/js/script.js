// Переменные

const accentInputs = [].slice.call(document.querySelectorAll
  ('input[type="radio"][name="accent-color"]'));

// Проверки локального хранилища

document.addEventListener("DOMContentLoaded", () => {
  if(localStorage.getItem('accentColor')) {
    var accentColor = localStorage.getItem('accentColor');
    document.documentElement.style.setProperty('--accent-color', accentColor);
  }
  if(localStorage.getItem('checkedAccentNo')) {
    var checkedAccentNo = localStorage.getItem('checkedAccentNo');
    document.querySelector('input[name="accent-color"][id="' + checkedAccentNo + '"]')
    .setAttribute('checked','checked');
  }
});

// Движок тем

for (var i = 0; i < accentInputs.length; i++) {
  accentInputs[i].onclick = function() {
    localStorage.setItem('checkedAccentNo', this.id);
  }
}
accentInputs.forEach(input => input.addEventListener('change', changeAccent(a)));
function changeAccent(a) {
  document.documentElement.style.setProperty('--accent-color', a);
  localStorage.setItem('accentColor', a);
}

/*

*/

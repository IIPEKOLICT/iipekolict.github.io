/*

let page = !localStorage.getItem('.page');
let themeButton = !localStorage.getItem('.theme-button');
themeButton.onclick = function() {
  page.classList.toggle('dark');
  page.classList.toggle('light');
};

// Изменение цвета акцента

$(function() {
  if(!localStorage.getItem('theme_akcent')) {
    $('#theme_akcent').attr('href', 'kernel/css/akc/akc1.css');
  } else {
    $('#theme_akcent').attr('href', 'kernel/css/akc/akc' + localStorage.getItem('theme_akcent') + '.css');
  };
});
function change_akcent(a) {
  if(a == 1) {
    $('#theme_akcent').attr('href', 'kernel/css/akc/akc1.css');
    localStorage.removeItem('theme_akcent');
  } else {
    $('#theme_akcent').attr('href', 'kernel/css/akc/akc' + a + '.css');
    localStorage.setItem('theme_akcent', a);
  };
};

var element = document.querySelector('.accent-color');
var input = document.querySelector('.input');

input.addEventListener('change', function(){
  element.style.setProperty('--accent-color', input.value);
})
}

function changeAccent(a) {
    $(':root').changeCss('--accent-color', function(index,a){return a;});
  localStorage.setItem('changeAccent', a);
};

if(localStorage.getItem('accentColor')) {
  var checkedAccentColor = localStorage.getItem('accentColor');
  document.documentElement.style.setProperty('--accent-color', checkedAccentColor);
  alert(localStorage.getItem('accentColor'));
}

alert(localStorage.getItem('accentColor'));

$(function() {
  if(!localStorage.getItem('accentColor')) {
    a = !localStorage.getItemValue('accentColor');
    $(':root').css('--accent-color', a);
  };
});

var test = document.getElementsByName('test');
for (var i = 0; i < test.length; i++) {
  test[i].onclick = function() {
    localStorage.setItem('testCheckedItem', this.id);
  }
}

*/

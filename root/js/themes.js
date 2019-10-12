// Изменение цвета акцента

$(function() {
  if(!localStorage.getItem('theme_akcent')) {
    $('#theme_akcent').attr('href', 'root/css/akcent/akc1.css');
  } else {
    $('#theme_akcent').attr('href', 'root/css/akcent/akc' + localStorage.getItem('theme_akcent') + '.css');
  };
});
function change_akcent(a) {
  if(a == 1) {
    $('#theme_akcent').attr('href', 'root/css/akcent/akc1.css');
    localStorage.removeItem('theme_akcent');
  } else {
    $('#theme_akcent').attr('href', 'root/css/akcent/akc' + a + '.css');
    localStorage.setItem('theme_akcent', a);
  };
};

// Изменение цвета фона

$(function() {
  if(!localStorage.getItem('theme_background')) {
    $('#theme_background').attr('href', 'root/css/background/bg1.css');
  } else {
    $('#theme_background').attr('href', 'root/css/background/bg' + localStorage.getItem('theme_background') + '.css');
  };
});
function change_background(a) {
  if(a == 1) {
    $('#theme_background').attr('href', 'root/css/background/bg1.css');
    localStorage.removeItem('theme_background');
  } else {
    $('#theme_background').attr('href', 'root/css/background/bg' + a + '.css');
    localStorage.setItem('theme_background', a);
  };
};

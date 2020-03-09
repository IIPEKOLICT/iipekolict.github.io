let page = !localStorage.getItem('.page');
let themeButton = !localStorage.getItem('.theme-button');
themeButton.onclick = function() {
  page.classList.toggle('dark');
  page.classList.toggle('light');
};

/*

let newChangelogForm = document.querySelector('.new-changelog-form');
let changelogList = document.querySelector('.changelog-list');
let changelogField = document.querySelector('.changelog-field');

newChangelogForm.onsubmit = function () {
  let newChangelogNote = document.createElement('li');
  newChangelogNote.classList.add('changelog-note');
  newChangelogNote.textContent = changelogField.value;
  changelogField.value = '';
  changelogList.append(newChangelogNote);
};



let page = document.querySelector('.page'); // нахождение и сохранение в переменную page элемента с классом page (он центральный в данной реализации)
let themeButton = document.querySelector('.theme-button'); // нахождение и сохранение в переменную themeButton кнопки, коя будет переключать

themeButton.onclick = function() {
  page.classList.toggle('light-theme'); // переключение класса (если есть - удаляется, в противном случае добавляется)
  page.classList.toggle('dark-theme'); // в разметке обязательно должен быть только один из классов, иначе не заработает
};


var changelogContainers = document.querySelectorAll('.changelog-container');
for (var i = 0; i < changelogContainers.length; i++) { // Цикл опроса всех контейнеров ченжлога
  changelogContainers[i].querySelector('.button').onclick = function() {
    changelogContainers[i].querySelector('.spoiler').classList.toggle('spoiler-hidden');
    changelogContainers[i].querySelector('.spoiler').classList.toggle('spoiler-shown');
  }

}

*/
/*
var changelogButtons = document.querySelectorAll('.button');
for (var i = 0; i < changelogButtons.length; i++) { // Цикл опроса всех контейнеров ченжлога
  changelogButtons[i].onclick = function() {
    var spoiler = changelogButtons[i].parentElement.parentElement.parentElement.querySelector('.spoiler');

    spoiler.classList.toggle('spoiler-hidden'); // переключение класса (если есть - удаляется, в противном случае добавляется)
    spoiler.classList.toggle('spoiler-shown'); // в разметке обязательно должен быть только один из классов, иначе не заработает
  }
}
alert(changelogButtons);
*/

  function showChangelogSpoiler(sectionNo,releaseNo) {
    var changelogContainer = document.querySelector
    ('.main-content_container:nth-last-of-type(' + sectionNo + ') .changelog-container:nth-last-of-type('
     + releaseNo + ')');
    var spoiler = changelogContainer.querySelector('.spoiler');
    spoiler.classList.toggle('spoiler-hidden'); // переключение класса (если есть - удаляется, в противном случае добавляется)
    spoiler.classList.toggle('spoiler-shown'); // в разметке обязательно должен быть только один из классов, иначе не заработает
  }

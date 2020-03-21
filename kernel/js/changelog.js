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

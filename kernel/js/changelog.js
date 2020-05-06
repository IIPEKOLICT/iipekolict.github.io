// Переменные

var changelogSpoilers = document.querySelectorAll('.spoiler_changelog'); // Все спойлеры (версии)
var allReleaseNotes = document.querySelectorAll('.release-notes'); // Все релизы (для номера сборки)
var buildNo = allReleaseNotes.length; // Счетчик номера сборки
var latestVersion = document.querySelector('.changelog-container:first-of-type h3').textContent;

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы

  // Название релиза

  for (var i = 0; i < changelogSpoilers.length; i++) { // Цикл опроса всех спойлеров
    var spoilerReleases = changelogSpoilers[i].querySelectorAll('.release-notes'); // Все релизы в спойлере
    var releaseNo = spoilerReleases.length; // Счетчик порядкового номера релизов в 1 спойлере

    for (var j = 0; j < spoilerReleases.length; j++) { // Цикл опроса всех релизов в 1 спойлере
      var firstChild = spoilerReleases[j].firstChild; // Первый дочерний в релизе элемент
      var releaseName = document.createElement('span'); // Спан, содержащий название релиза

      if (releaseNo == spoilerReleases.length) {
        releaseName.textContent = 'Stable '; // Стабл, если это первый релиз в спойлере
      } else {
        releaseName.textContent = 'Open Beta ' + releaseNo; // Бета-наименование, если нет
      }

      spoilerReleases[j].insertBefore(releaseName, firstChild); // Вставка спана
      releaseNo--; // Уменьшение счетчика порядкового номера релизов в 1 спойлере
    }
  }

  // Номер сборки

  if (buildNo > 0 || buildNo != undefined) {
    localStorage.setItem('buildNo', '#' + buildNo); // Ключ номера сборки, если не 0вая (нет)
  } else {
    localStorage.setItem('buildNo', 'unknown'); // Ключ номера сборки при ошибке
  }

  for (var k = 0; k < allReleaseNotes.length; k++) { // Цикл опроса абсолютно всех релизов
    var fullReleaseName = allReleaseNotes[k].querySelector('span'); // Поиск уже выданного релизу спана с именем релиза
    var releaseNameText = fullReleaseName.textContent; // Чтение тамошнего текста
    fullReleaseName.textContent = releaseNameText + ' (#' + buildNo + ')'; // Добавление в этот текст номера сборки
    buildNo--; // Уменьшение счетчика номера сборки
  }

  // Название версии

  if (latestVersion != undefined) {
    localStorage.setItem('latestVersion', latestVersion); // Ключ названия версии, если нет ошибок
  } else {
    localStorage.setItem('latestVersion', 'unknown'); // Ключ названия версии при ошибке
  }

  // Проверки локального хранилища

  if (localStorage.getItem('buildNo')) { // Если в ЛХ есть ключ номера сборки
    var aboutBuildNo = document.querySelector('#about #build-number'); // Элемент в "об устройстве"
    aboutBuildNo.textContent = localStorage.getItem('buildNo'); // Присваивание
  }

  if (localStorage.getItem('latestVersion')) { // Если в ЛХ есть ключ названия версии
    var aboutLatestVersion = document.querySelector('#about #latest-version'); // Элемент в "об устройстве"
    aboutLatestVersion.textContent = localStorage.getItem('latestVersion'); // Присваивание
  }
});

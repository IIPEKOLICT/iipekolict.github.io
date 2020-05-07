// Переменные

var allReleaseNotes = document.querySelectorAll('.release-notes'); // Все релизы (для номера сборки)
var buildNo = allReleaseNotes.length; // Счетчик номера сборки

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы

  // Нейминг секции и версий

  var sections = document.querySelectorAll('#changelog .main-content_container'); // Поиск всех секций
  var sectionNo = sections.length; // Счетчик номера секции

  for (var a = 0; a < sections.length; a++) { // Перебор всех секций

    // Дата последней сборки (поиск + ключ)

    var latestBuildDate = sections[0].querySelector('time:first-of-type').textContent;
    localStorage.setItem('latestBuildDate', latestBuildDate);

    // Нейминг заголовков секций

    var sectionHeader = sections[a].querySelector('.main-content_container-name'); // Поиск
    sectionHeader.textContent = sectionNo/10; // Вычисление названия
    var sectionName = sectionHeader.textContent; // Запись названия

    // Нейминг версий

    var sectionVersionNames = sections[a].querySelectorAll('.release-info .menu-item_name'); // Поиск
    var c = sectionVersionNames.length; // Обратный счетчик количесва версий в 1 секции

    for (var b = 0; b < sectionVersionNames.length; b++) { // Перебор версий в 1 секции

      if (sectionVersionNames.length != 1) {
        sectionVersionNames[b].textContent = sectionName + '.' + c; // Если версий в секции не 1
      } else {
        sectionVersionNames[b].textContent = sectionName; // Если в секции 1 версия
      }

      c--; // Уменьшение счетчика версий в 1 секции
    }

    sectionNo--; // Уменьшение счетчика номера секции
  }

  // Нейминг релиза

  var changelogSpoilers = document.querySelectorAll('.spoiler_changelog'); // Все спойлеры (версии)

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

  var latestVersion = document.querySelector('.changelog-container:first-of-type h3').textContent; // Название последней версии

  if (latestVersion != undefined) {
    localStorage.setItem('latestVersion', latestVersion); // Ключ названия версии, если нет ошибок
  } else {
    localStorage.setItem('latestVersion', 'unknown'); // Ключ названия версии при ошибке
  }

  // Запись сгенерированной инфы в "Об устройстве"

  var aboutBuildNo = document.querySelector('#about #build-number'); // Элемент в "об устройстве"
  var aboutLatestVersion = document.querySelector('#about #latest-version'); // Элемент в "об устройстве"
  var aboutLatestBuildDate = document.querySelector('#about #build-date'); // Элемент в "об устройстве"

  if (localStorage.getItem('buildNo')) {
    aboutBuildNo.textContent = localStorage.getItem('buildNo'); // Если в ЛХ есть ключ номера сборки
  } else {
    aboutBuildNo.textContent = 'unknown'; // Если нет
  }

  if (localStorage.getItem('latestVersion')) {
    aboutLatestVersion.textContent = localStorage.getItem('latestVersion'); // Если в ЛХ есть ключ номера сборки
  } else {
    aboutLatestVersion.textContent = 'unknown'; // Если нет
  }

  if (localStorage.getItem('latestBuildDate')) {
    aboutLatestBuildDate.textContent = localStorage.getItem('latestBuildDate'); // Если в ЛХ есть ключ номера сборки
  } else {
    aboutLatestBuildDate.textContent = 'unknown'; // Если нет
  }
});

/*------------------------------------------------------------*/
/*---МОДУЛЬ ДЛЯ АВТОНЕЙМИНГА В ЧЕНЖЛОГЕ-----------------------*/
/*------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы

  // Общие переменные

  var allReleases = document.querySelectorAll('#changelog .release-notes'); // Все релизы (для номера сборки)
  var buildNo = allReleases.length; // Счетчик номера сборки
  var sections = document.querySelectorAll('#changelog .main-section'); // Поиск всех секций
  var sectionNo = sections.length; // Счетчик номера секции

  // Дата последней сборки (поиск + занести в "Об устройстве")

  document.querySelector('#about #build-date').textContent = sections[0].querySelector('#changelog time:first-of-type').textContent;

  for (var a = 0; a < sections.length; a++) { // Перебор всех секций

    // Нейминг заголовков секций

    var sectionHeader = sections[a].querySelector('.main-header'); // Поиск
    sectionHeader.textContent = sectionNo; // Вычисление названия

    // Нейминг версий

    var versions = sections[a].querySelectorAll('.release-info .menu-item_name'); // Поиск
    var versionNo = versions.length; // Обратный счетчик количесва версий в 1 секции

    for (var b = 0; b < versions.length; b++) { // Перебор версий в 1 секции

      if (versions.length != 1) {
        versions[b].textContent = sectionHeader.textContent + '.' + versionNo; // Если версий в секции не 1
      } else versions[b].textContent = sectionHeader.textContent; // Если в секции 1 версия

      versionNo--; // Уменьшение счетчика версий в 1 секции
    }

    sectionNo--; // Уменьшение счетчика номера секции

    // Нейминг релиза

    var changelogSpoilers = sections[a].querySelectorAll('#changelog .spoiler_changelog'); // Все спойлеры (тег details)

    for (var c = 0; c < changelogSpoilers.length; c++) { // Цикл опроса всех спойлеров
      var spoilerReleases = changelogSpoilers[c].querySelectorAll('.release-notes'); // Все релизы в спойлере
      var spoilerOpenReleases = changelogSpoilers[c].querySelectorAll('.release-notes.release_opened');
        // Все open-релизы в сп.
      var releaseNo = spoilerReleases.length; // Счетчик порядкового номера релизов в 1 спойлере
      var openReleaseNo = spoilerOpenReleases.length; // Счетчик порядкового номера open-релизов в 1 спойлере

      for (var d = 0; d < spoilerReleases.length; d++) { // Цикл опроса всех релизов в 1 спойлере
        var firstReleaseChild = spoilerReleases[d].firstChild; // Первый дочерний в релизе элемент
        var releaseName = document.createElement('span'); // Спан, в который будет помещено название релиза

        if (releaseNo == spoilerReleases.length) {
          releaseName.textContent = 'Stable '; // Стабл, если это первый (с конца) релиз в спойлере

          if (spoilerReleases[d].classList.contains('release_opened') == true) openReleaseNo--;
            // Фикс на случай, если забыл в стабле прописать класс release_opened
        } else if (spoilerReleases[d].classList.contains('release_opened') == false) {
          releaseName.textContent = 'Closed Beta ' + releaseNo; // Closed beta, если нет класса-пометки
        } else if (spoilerReleases[d].classList.contains('release_opened') == true) {
          releaseName.textContent = 'Open Beta ' + openReleaseNo; // Open beta, т. к. есть класс-пометка
          openReleaseNo--; // Уменьшение счетчика порядкового номера open-релизов в 1 спойлере
        }

        spoilerReleases[d].insertBefore(releaseName, firstReleaseChild); // Вставка спана
        releaseNo--; // Уменьшение счетчика порядкового номера релизов в 1 спойлере
      }
    }
  }

  // Номер сборки (запись в "Об устройстве" и выставление для каждой из сборок)

  if (buildNo > 0 || buildNo != undefined) {
    document.querySelector('#about #build-number').textContent = '#' + buildNo; // Если нет ошибок
  } else document.querySelector('#about #build-number').textContent = 'unknown'; // Если есть

  for (var e = 0; e < allReleases.length; e++) { // Цикл опроса абсолютно всех релизов
    var fullReleaseName = allReleases[e].querySelector('span'); // Поиск уже выданного релизу спана с именем релиза
    var stockReleaseName = fullReleaseName.textContent; // Чтение тамошнего текста
    fullReleaseName.textContent = stockReleaseName + ' (#' + buildNo + ')'; // Добавление в этот текст номера сборки
    buildNo--; // Уменьшение счетчика номера сборки
  }

  // Название последней версии (поиск и запись в "Об устройстве")

  var latestVersion = document.querySelector('#changelog .spoiler-container:first-of-type h3').textContent;

  if (latestVersion != undefined) {
    document.querySelector('#about #latest-version').textContent = latestVersion; // Если нет ошибок
  } else document.querySelector('#about #latest-version').textContent = 'unknown'; // Если есть
});

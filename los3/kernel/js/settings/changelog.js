/*------------------------------------------------------------*/
/*---МОДУЛЬ ДЛЯ АВТОНЕЙМИНГА В ЧЕНЖЛОГЕ-----------------------*/
/*------------------------------------------------------------*/

$(document).ready(function() {

  // Общие переменные

  let allReleases = $('#changelog .release-notes'); // Все релизы (для номера сборки)
  let buildNo = allReleases.length; // Счетчик номера сборки
  let articles = $('#changelog .article'); // Поиск всех артиклей
  let articleNo = articles.length; // Счетчик номера артикля

  // Дата последней сборки (поиск + занести в "Об устройстве")

  $('#about #build-date').text(articles.eq(0).find('.article_multiple:first-of-type time').text());

  for (let a = 0; a < articles.length; a++) { // Перебор всех артиклей

    // Нейминг заголовков артиклей

    let sectionHeader = articles.eq(a).find('.article-header'); // Поиск
    sectionHeader.text(articleNo); // Вычисление названия

    // Нейминг версий

    let versions = articles.eq(a).find('.release-info .menu-name'); // Поиск
    let versionNo = versions.length; // Обратный счетчик количесва версий в 1 артикле

    for (let b = 0; b < versions.length; b++) { // Перебор версий в 1 артикле
      if (versions.length != 1) versions.eq(b).text(sectionHeader.text() + '.' + versionNo)
       // Если версий в артикле не 1
      else versions.eq(b).text(sectionHeader.text()); // Если в артикле 1 версия

      versionNo--; // Уменьшение счетчика версий в 1 артикле
    }

    articleNo--; // Уменьшение счетчика номера артикля

    // Нейминг релиза

    let changelogSpoilers = articles.eq(a).find('.spoiler_changelog'); // Все спойлеры (тег details)

    for (let c = 0; c < changelogSpoilers.length; c++) { // Цикл опроса всех спойлеров
      let spoilerReleases = changelogSpoilers.eq(c).find('.release-notes'); // Все релизы в спойлере
      let spoilerOpenReleases = changelogSpoilers.eq(c).find('.release-notes.release_opened');
        // Все open-релизы в сп.
      let releaseNo = spoilerReleases.length; // Счетчик порядкового номера релизов в 1 спойлере
      let openReleaseNo = spoilerOpenReleases.length; // Счетчик порядкового номера open-релизов в 1 спойлере

      for (let d = 0; d < spoilerReleases.length; d++) { // Цикл опроса всех релизов в 1 спойлере
        let releaseName = $('<span>'); // Спан, в который будет помещено название релиза

        if (releaseNo == spoilerReleases.length) {
          releaseName.text('Stable '); // Стабл, если это первый (с конца) релиз в спойлере

          if (spoilerReleases.eq(d).hasClass('release_opened')) openReleaseNo--;
            // Фикс на случай, если забыл в стабле прописать класс release_opened
        } else if (spoilerReleases.eq(d).hasClass('release_opened') == false)
          releaseName.text('Closed Beta ' + releaseNo); // Closed beta, если нет класса-пометки
        else if (spoilerReleases.eq(d).hasClass('release_opened')) {
          releaseName.text('Open Beta ' + openReleaseNo); // Open beta, т. к. есть класс-пометка
          openReleaseNo--; // Уменьшение счетчика порядкового номера open-релизов в 1 спойлере
        }

        spoilerReleases.eq(d).prepend(releaseName);
        releaseNo--; // Уменьшение счетчика порядкового номера релизов в 1 спойлере
      }
    }
  }

  // Номер сборки (запись в "Об устройстве" и выставление для каждой из сборок)

  $('#about #build-number').text('#' + buildNo);

  for (let e = 0; e < allReleases.length; e++) { // Цикл опроса абсолютно всех релизов
    allReleases.eq(e).find('span').text(allReleases.eq(e).find('span').text() + ' (#' + buildNo + ')');
     // Добавление в этот текст номера сборки
    buildNo--; // Уменьшение счетчика номера сборки
  }

  // Название последней версии (поиск и запись в "Об устройстве")

  $('#about #latest-version').text($('#changelog .article:first-of-type .article_multiple:first-of-type h3')
  .text());
});

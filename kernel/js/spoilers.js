/*

// Переменные

var changelogSpoilers = document.querySelectorAll('.spoiler_changelog'); // Все

// Проверки локального хранилища

document.addEventListener("DOMContentLoaded", () => { // Событие загузки страницы

  for (var i = 0; i < changelogSpoilers.length; i++) { // Цикл опроса всех
    var releaseNotes = changelogSpoilers[i].querySelectorAll('.release-notes');
    var k = releaseNotes.length;
    for (var j = 0; i < releaseNotes.length; j++) {
      var theFirstChild = releaseNotes[j].firstChild;
      var span = document.createElement('span');
      span.textContent = k;
      releaseNotes[j].insertBefore(span, theFirstChild);
      k = k - 1;
    }
  }
});

*/

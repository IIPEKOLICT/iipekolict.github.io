/*------------------------------------------------------------*/
/*---ТЕСТОВЫЙ МОДУЛЬ------------------------------------------*/
/*------------------------------------------------------------*/

let testParametres = [
  [ // Radio (переменные)
    [
      {name: 'test-radio', prefix: 'test-radio', stockChecked: 'test-radio-0', checkedKey: 'test-radio-no',
      defaultKey: 'test-radio-type',},
      ['--var-1','--var-2','--var-3'],
      ['1','1','1'],
      [
        [['1','1','1'],['default']],
        [['1','2','3'],['custom']]
      ]
    ]
  ],
  [ // Radio (классы)
    [
      {name: 'test-radio-k', prefix: 'test-radio-k', stockChecked: 'test-radio-k-0', stockValue: 'style0', 
      classKey: 'test-style', defaultKey: 'test-style-type', checkedKey: 'test-radio-k-no'},
      [$('.page')],
      ['style0','style1'],
      [
        [['style0'],['default']],
        [['style1'],['custom']]
      ]
    ]
  ],
  [ // Range (переменные)
    [
      {rangeId: 'test-range', demoId: 'test-demo', stockValue: '50', checkedValue: 'test-range-value',
      text: ' %'},
      ['--var-4','--var-5'],
      [
        [['1'],['%']],
        [['2'],['%']]
      ]
    ]
  ],
  [ // Checkbox (классы)
    [
      {name: 'test-checkbox', checkedKey: 'test-checkbox-value'},
      [$('.page')],
      [$('test-range')]
    ]
  ]
]

// --- функции

function varReadNew(array) {
  for (let i = 0; i < array.length; i++)
    for (let j = 0; j < array[i][1].length; j++) {
      if (localStorage.getItem(array[i][1][j])) 
        document.documentElement.style.setProperty(array[i][1][j], localStorage.getItem(array[i][1][j]));
    }
}

//

function classSwitchNew(inputArray, value) {
  for (let i = 0; i < inputArray[1].length; i++)
    for (let j = 0; j < inputArray[1][i].length; j++) // Перебор всех модифицируемых элементов
      if ($(inputArray[1][i][j]).hasClass(value) == false) { // если нет нужного класса-стиля
        $(inputArray[1][i][j]).addClass(value); // добавить
    
        for (let k = 0; k < inputArray[2].length; k++) // перебор всех вариантов стилей
          if ($(inputArray[1][i][j]).hasClass($(inputArray[2][k])) && value != $(inputArray[2][k])) 
            $(inputArray[1][i][j]).removeClass($(inputArray[2][k])) // если есть лишние классы - убрать
      }
}

function styleReadNew(array) {
  if (localStorage.getItem(array[0].classKey)) classSwitchNew(array, localStorage.getItem(array[0].classKey));
  else {
    localStorage.setItem(array[0].classKey, array[0].stockValue);
    classSwitchNew(array, array[0].stockValue);
  }
}

//



// --- Загрузка страницы

$(document).ready(function() {

  varReadNew(testParametres[0]);
  for (let i = 0; i < testParametres[1].length; i++) styleReadNew(testParametres[1][i]);

});

// --- Настройки (функции)

function radioChecked(array) {
  for (let i = 0; i < array.length; i++) { // Перебор всех ключей
    if (localStorage.getItem(array[i][0].checkedKey))
      document.querySelector('input[name=' + array[i][0].name + '][id=' + 
      localStorage.getItem(array[i][0].checkedKey) + ']').setAttribute('checked','checked');
       // Отметить как выбраннный
    else {
      localStorage.setItem(array[i][0].checkedKey, array[i][0].stockChecked); // Дефолтные значения, если нет
      document.querySelector('input[name="' + array[i][0].name + '"][id="' + 
      array[i][0].stockChecked + '"]').setAttribute('checked','checked');
    }
  }
}

//

function varRecordNew(vars, values) {
  for (let i = 0; i < vars.length; i++) {
    //$(':root').get(0).style.setProperty(vars[i], values[i]);
    document.documentElement.style.setProperty(vars[i], values[i]);
    localStorage.setItem(vars[i], values[i]);
  }
}

for (let i = 0; i < testParametres[0].length; i++) {
  $('input[name="' + testParametres[0][i][0].name + '"]').on('change', function() {
    for (let j = 0; j < testParametres[0][i][3].length; j++)
      if (testParametres[0][i][0].prefix + '-' + j == this.id) {
        varRecordNew(testParametres[0][i][1], testParametres[0][i][3][j][0]);
        localStorage.setItem(testParametres[0][i][0].defaultKey, testParametres[0][i][3][j][1]);
        localStorage.setItem(testParametres[0][i][0].checkedKey, this.id);
      }  
  });
}

//

for (let i = 0; i < testParametres[1].length; i++) {
  $('input[name="' + testParametres[1][i][0].name + '"]').on('change', function() {
    for (let j = 0; j < testParametres[1][i][3].length; j++)
      if (testParametres[1][i][0].prefix + '-' + j == this.id) {
        localStorage.setItem(testParametres[1][i][0].classKey, testParametres[1][i][3][j][0]);
        localStorage.setItem(testParametres[1][i][0].defaultKey, testParametres[1][i][3][j][1]);
        localStorage.setItem(testParametres[1][i][0].checkedKey, this.id);
        reload();
      }
  });
}

//

for (let i = 0; i < testParametres[2].length; i++) {
  $('#' + testParametres[2][i][0].rangeId).on('change', function() {
    let value = this.value; // значение ползунка при нажатии
    localStorage.setItem(testParametres[2][i][0].checkedValue, value); // сохранить в ЛХ ключ
    varRecordNew(testParametres[2][i][1], convertValues(testParametres[2][i][2], value));
    $('#' + testParametres[2][i][0].demoId).text(value + testParametres[2][i][0].text); // установить значение демки ползунка
  });
}

//

for (let i = 0; i < testParametres[3].length; i++) {
  $('input[name="' + testParametres[3][i][0].name + '"]').on('change', function() {
    for (let j = 0; j < $('input[name="' + testParametres[3][i][0].name + '"]').length; j++) {
      if (this.checked) {
        localStorage.setItem(testParametres[3][i][0].checkedKey, this.value);
      } else {
        localStorage.setItem(testParametres[3][i][0].checkedKey, '');
      }
    }
  });
}

// --- Загрузка страницы (настройки)

$(document).ready(function() {

  radioChecked(testParametres[0]);
  radioChecked(testParametres[1]);

});

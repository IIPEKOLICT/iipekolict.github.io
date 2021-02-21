/*------------------------------------------------------------*/
/*---МОДУЛЬ С ПАРАМЕТРАМИ ДВИЖКА ТЕМ--------------------------*/
/*------------------------------------------------------------*/

// Массив с параметрами движка тем

const themeKernel = [
  [ // Radio (переменные)
    [ // Цвет акцента
      {name: 'accent-color', prefix: 'ac', checkedKey: 'accentColorChecked', checkedStock: 'ac-2',
      defaultKey: 'accentColorDefault'}, // параметры группы инпутов
      ['--accent-color','--accent_opacity-color'], // переменные
      [ // параметры инпутов
        [['#80cbc4'],{type: 'custom'}],
        [['#2381e1'],{type: 'custom'}],
        [['#42a5f6'],{type: 'custom'}],
        [['#9675ce'],{type: 'custom'}],
        [['#eb0028'],{type: 'custom'}],
        [['#cc6f4e'],{type: 'custom'}],
        [['#25c6da'],{type: 'custom'}],
        [['#4461d6'],{type: 'custom'}],
        [['#e5a544'],{type: 'custom'}],
        [['#f06292'],{type: 'custom'}],
        [['#208559'],{type: 'custom'}],
        [['#7dc32f'],{type: 'custom'}],
        [['#b968c7'],{type: 'custom'}],
        [['#0ff'],{type: 'custom'}],
        [['#800000'],{type: 'custom'}],
        [['#000080'],{type: 'custom'}],
        [['#808000'],{type: 'custom'}],
        [['#008080'],{type: 'custom'}],
        [['#000'],{type: 'custom'}],
        [['#fff'],{type: 'custom'}]
      ]
    ],
    [ // Цветовая схема
      {name: 'color-scheme', prefix: 'cs', checkedKey: 'colorSchemeChecked', checkedStock: 'cs-0',
      defaultKey: 'colorSchemeDefault', valueType0: 'dark', valueType1: 'light', valueType2: 'custom'}, // параметры группы инпутов
      ['--main_bg-color','--secondary_bg-color','--icon_bg-color','--hover_bg-color',
      '--main_text-color','--secondary_text-color','--main_border-color','--radio_nonactive-color',
      '--switch_nonactive-color','--switch-before_nonactive-color'], // переменные
      [ // параметры инпутов
        [['#000','#1f1f1f','#141414','#1a1a1a','#d8d8d8','#898989','#1e1e1e','#c7c7c7','#3d3d3d','#d1d1d1'],
        {type: 'dark', ui: 'UI_LOS'}],
        [['#fafafa','white','#f2f2f2','#e1e1e1','#262626','#969696','#e6e6e6','#757575','#e1e1e1','#c4c4c4'],
        {type: 'light', ui: 'UI_LOS'}],
        [['#000','#1e1e1e','#35363a','#1a1a1a','#fcfcfc','#888','#141416','#36353a','#1f1f1f','#626262'],
        {type: 'dark', ui: 'UI_OOS'}],
        [['#fafafa','white','white','#efefef','#191919','#969696','#e6e6e6','#999','#e1e1e1','#ececec'],
        {type: 'light', ui: 'UI_OOS'}],
        [['#000','#333','#141414','#252525','white','#8c8c8c','#333333','#666','#757575','white'],
        {type: 'dark', ui: 'UI_RUI'}],
        [['#fff','white','#ddd','#f7f7f7','black','#737373','#e5e5e5','#ccc','#e5e5e5','white'],
        {type: 'light', ui: 'UI_RUI'}],
        [['#000','#252525','#252525','#333','#fafafa','#909090','#3f3f3f','#797979','#505050','#fafafa'],
        {type: 'dark', ui: 'UI_OneUI'}],
        [['#f2f2f2','#fcfcfc','white','#e3e3e3','#161616','#989898','#ececec','#b3b3b3','#a9a9a9','#fcfcfc'],
        {type: 'light', ui: 'UI_OneUI'}],
        [['#161616','#424242','#252525','#505050','white','#b9b9b9','#323232','#c1c1c1','#696969','#b4b4b4'],
        {type: 'dark', ui: 'UI_ZenUI'}],
        [['#fafafa','white','#ddd','#ededed','#202020','#787878','#dcdcdc','#989898','#ccc','#e7e7e7'],
        {type: 'light', ui: 'UI_ZenUI'}]
      ]
    ],
    [ // Радиус закруглений
      {name: 'border-radius', prefix: 'br', checkedKey: 'borderRadiusChecked', checkedStock: 'br-0',
      defaultKey: 'borderRadiusDefault', valueType0: 'default', valueType1: 'custom'}, // параметры группы инпутов
      ['--main_border-radius','--interactive_border-radius','--button_border-radius'], // переменные
      [ // параметры инпутов
        [['0.8em','1em','0.4em'],{type: 'default', ui: 'UI_LOS'}],
        [['0.4em','0.6em','0.25em'],{type: 'default', ui: 'UI_OOS'}],
        [['0.6em','1.2em','0.5em'],{type: 'default', ui: 'UI_RUI'}],
        [['1em','1.2em','1.25em'],{type: 'default', ui: 'UI_OneUI'}],
        [['0.5em','0.5em','1.25em'],{type: 'default', ui: 'UI_ZenUI'}],
        [['0','0','0'],{type: 'custom'}]
      ]
    ],
    [ // Форма иконок
      {name: 'icon-shape', prefix: 'is', checkedKey: 'iconShapeChecked', checkedStock: 'is-0',
      defaultKey: 'iconShapeDefault'}, // параметры группы инпутов
      ['--icon_border-radius'], // переменные
      [ // параметры инпутов
        [['50%'],{type: 'custom'}],
        [['25%'],{type: 'custom'}],
        [['10%'],{type: 'custom'}],
        [['0'],{type: 'custom'}]
      ]
    ],
    [ // Шрифт
      {name: 'font-family', prefix: 'ff', checkedKey: 'fontFamilyChecked', checkedStock: 'ff-0',
      defaultKey: 'fontFamilyDefault'}, // параметры группы инпутов
      ['--main_font-family'], // переменные
      [ // параметры инпутов
        [['Arial'],{type: 'custom'}],
        [['Tahoma'],{type: 'custom'}],
        [['Verdana'],{type: 'custom'}],
        [['Roboto Condensed'],{type: 'custom'}],
        [['Impact'],{type: 'custom'}],
        [['Trebuchet MS'],{type: 'custom'}],
        [['Bitter'],{type: 'custom'}],
        [['Times New Roman'],{type: 'custom'}],
        [['Oxygen Mono'],{type: 'custom'}],
        [['OpenGost Type B TT'],{type: 'custom'}],
        [['USSR Stencil'],{type: 'custom'}]
      ]
    ]
  ],
  [ // Radio (классы)
    [ // Стиль шапки
      {name: 'header-style', prefix: 'hs', checkedKey: 'headerStyleChecked', checkedStock: 'hs-0', 
      defaultKey: 'headerStyleDefault', valueKey: 'headerStyleValue', valueStock: 'HEADER_stock',
      valueType0: 'default', valueType1: 'custom'}, // параметры группы инпутов
      [$('.header'),$('.header-name'),$('.svg_header')], // модифицируемые элементы
      ['HEADER_stock','HEADER_OOSColor','HEADER_RUI','HEADER_ZenUI'], // варианты класса-модификатора
      [ // параметры инпутов
        [['HEADER_stock'],['default'],['UI_LOS','UI_OOS','UI_OneUI']],
        [['HEADER_OOSColor'],['custom']],
        [['HEADER_RUI'],['default'],['UI_RUI']],
        [['HEADER_ZenUI'],['default'],['UI_ZenUI']]
      ]
    ],
    [ // Стиль UI
      {name: 'ui-style', prefix: 'us', checkedKey: 'uiStyleChecked', checkedStock: 'us-0', 
      defaultKey: 'uiStyleDefault', valueKey: 'uiStyleValue', valueStock: 'UI_LOS'}, // параметры группы инпутов
      [$('.about-container'),$('.about-header'),$('.about-header_img'),$('.about_primary-text'),
      $('.about_secondary-text'),$('.about-section'),$('.article'),$('.article-header'),$('.article_multiple'),
      $('.header'),$('.menu-icon'),$('.menu-tile'),$('.page'),$('.radio-button'),$('.section'),
      $('.section_interactive'),$('.section_menu'),$('.svg_header'),$('.svg_settings')], // модифицируемые элементы
      ['UI_LOS','UI_OOS','UI_RUI','UI_OneUI','UI_ZenUI'], // варианты класса-модификатора
      [ // параметры инпутов
        [['UI_LOS'],['default']],
        [['UI_OOS'],['default']],
        [['UI_RUI'],['default']],
        [['UI_OneUI'],['default']],
        [['UI_ZenUI'],['default']]

      ]
    ],
    [ // Стиль диалоговых окон
      {name: 'interactive-style', prefix: 'ias', checkedKey: 'interactiveStyleChecked', checkedStock: 'ias-1', 
      defaultKey: 'interactiveStyleDefault', valueKey: 'interactiveStyleValue', valueStock: 'interactive_RUI',
      valueType0: 'default', valueType1: 'custom'}, // параметры группы инпутов
      [$('.interactive'),$('.interactive-button'),$('.interactive-container')], // модифицируемые элементы
      ['interactive_OOS','interactive_RUI','interactive_OneUI','interactive_ZenUI'], // варианты класса-модификатора
      [ // параметры инпутов
        [['interactive_OOS'],['default'],['UI_OOS']],
        [['interactive_RUI'],['default'],['UI_LOS','UI_RUI']],
        [['interactive_OneUI'],['default'],['UI_OneUI']],
        [['interactive_ZenUI'],,['default'],['UI_ZenUI']]
      ]
    ],
    [ // Стиль переключателей
      {name: 'switch-style', prefix: 'ss', checkedKey: 'switchStyleChecked', checkedStock: 'ss-0', 
      defaultKey: 'switchStyleDefault', valueKey: 'switchStyleValue', valueStock: 'switch_LOS',
      valueType0: 'default', valueType1: 'custom'}, // параметры группы инпутов
      [$('.switch')], // модифицируемые элементы
      ['switch_LOS','switch_OOS','switch_RUI','switch_OneUI','switch_ZenUI'], // варианты класса-модификатора
      [ // параметры инпутов
        [['switch_LOS'],['default'],['UI_LOS']],
        [['switch_OOS'],['default'],['UI_OOS']],
        [['switch_RUI'],['default'],['UI_RUI']],
        [['switch_OneUI'],['default'],['UI_OneUI']],
        [['switch_ZenUI'],['default'],['UI_ZenUI']]
      ]
    ]
  ],
  [ // Range (переменные)
    [ // Длительность анимации
      {rangeId: 'animation-duration-range', demoId: 'animation-duration-demo', valueKey: 'animationDurationValue', 
      valueStock: '0.3', text: ' сек.'}, // параметры группы инпутов
      ['--main_animation-duration'], // переменные
      [ // модификаторы для преобразования value к необходимому виду
        [['1'],['s']]
      ]
    ],
    [ // Масштаб интерфейса
      {rangeId: 'interface-scale-range', demoId: 'interface-scale-demo', valueKey: 'interfaceScaleValue', 
      valueStock: '100', text: '% от стокового'}, // параметры группы инпутов
      ['--pc_font-size','--tablet_font-size','--mobile_font-size'], // переменные
      [ // модификаторы для преобразования value к необходимому виду
        [['0.04'],['vh']],
        [['0.04'],['vw']],
        [['0.05'],['vw']]
      ]
    ],
    [ // Высота шапки в режиме OneUI
      {rangeId: 'oneui-height-range', demoId: 'oneui-height-demo', valueKey: 'oneuiHeightValue', 
      valueStock: '50', text: '% от высоты окна браузера'}, // параметры группы инпутов
      ['--oneui-mode_header-height'], // переменные
      [ // модификаторы для преобразования value к необходимому виду
        [['1'],['vh']]
      ]
    ]
  ],
  [ // Checkbox (классы)
    [ // Вкл/выкл режим OneUI
      {name: 'oneui-mode', valueKey: 'oneuiModeValue'}, // параметры группы инпутов
      [$('.header'),$('.main')], // модифицируемые элементы
      ['OneUI-mode',''], // варианты класса-модификатора
      [$('#oneui-height-range'),$('#OM_OneUI'),$('#OM_OOS11'),$('#om-height-article'),$('#om-styles-article')]
       // элементы с аттрибутом disabled при откл чекбоксе
    ],
    [ // Смещение кнопок в шапке в режиме OneUI
      {name: 'oneui-mode_OneUI', valueKey: 'OMOneuiValue'}, // параметры группы инпутов
      [$('.header'),$('.header-icon')], // модифицируемые элементы
      ['OM_OneUI',''], // варианты класса-модификатора
      [] // элементы с аттрибутом disabled при откл чекбоксе
    ],
    [ // Заголовок шапки как в OOS 11 в режиме OneUI
      {name: 'oneui-mode_OOS11', valueKey: 'OMOOS11Value'}, // параметры группы инпутов
      [$('.header')], // модифицируемые элементы
      ['OM_OOS11',''], // варианты класса-модификатора
      [] // элементы с аттрибутом disabled при откл чекбоксе
    ]
  ],
  [ // Другое
    ['none','var(--accent-color)','var(--main_bg-color)','var(--secondary_bg-color)','var(--icon_bg-color)',
    'var(--main_text-color)','var(--secondary_text-color)','var(--main_border-color)',
    'var(--radio_nonactive-color)'], // Массив для покраски svg
    [ // Массивы для контроля черного/белого акцента
      [{color: '#000'},['#000','#161616']], // варианты основного цвета фона при темной теме
      [{color: '#fff'},['#fff','#fafafa','#f2f2f2']] // варианты основного цвета фона при светлой теме
    ]
  ]
]
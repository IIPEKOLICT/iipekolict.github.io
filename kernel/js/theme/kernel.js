/*------------------------------------------------------------*/
/*---МОДУЛЬ С ПАРАМЕТРАМИ ДВИЖКА ТЕМ--------------------------*/
/*------------------------------------------------------------*/

// Массив с параметрами движка тем

let themeKernel = [
  [ // Radio (переменные)
    [ // Цвет акцента
      {name: 'accent-color', prefix: 'ac', checkedKey: 'accentColorChecked', checkedStock: 'ac-0',
      defaultKey: 'accentColorDefault'},
      ['--accent-color','--accent_opacity-color'],
      [
        [['#80cbc4'],['custom']],
        [['#2381e1'],['custom']],
        [['#42a5f6'],['custom']],
        [['#9675ce'],['custom']],
        [['#eb0028'],['custom']],
        [['#cc6f4e'],['custom']],
        [['#25c6da'],['custom']],
        [['#4461d6'],['custom']],
        [['#e5a544'],['custom']],
        [['#f06292'],['custom']],
        [['#208559'],['custom']],
        [['#7dc32f'],['custom']],
        [['#b968c7'],['custom']],
        [['#0ff'],['custom']],
        [['#800000'],['custom']],
        [['#000080'],['custom']],
        [['#808000'],['custom']],
        [['#008080'],['custom']],
        [['#000'],['custom']],
        [['#fff'],['custom']]
      ]
    ],
    [ // Цветовая схема
      {name: 'color-scheme', prefix: 'cs', checkedKey: 'colorSchemeChecked', checkedStock: 'cs-0',
      defaultKey: 'colorSchemeDefault', valueType0: 'dark', valueType1: 'light', valueType2: 'custom'},
      ['--main_bg-color','--secondary_bg-color','--icon_bg-color','--hover_bg-color',
      '--main_text-color','--secondary_text-color','--main_border-color','--radio_nonactive-color',
      '--switch_nonactive-color','--switch-before_nonactive-color'],
      [
        [['#000','#424242','#141414','#1a1a1a','white','#7a7a7a','#1e1e1e','#898989','#4d4d4d','#b9b9b9'],['dark'],['UI_OOS']],
        [['#fafafa','white','white','#efefef','#191919','#969696','#e6e6e6','#999','#e1e1e1','#ececec'],['light'],['UI_OOS']],
        [['#000','#333','#141414','#252525','white','#8c8c8c','#333333','#666','#757575','#fff'],['dark'],['UI_RUI']],
        [['#fff','white','#ddd','#f7f7f7','black','#737373','#e5e5e5','#ccc','#e5e5e5','#fff'],['light'],['UI_RUI']],
        [['#000','#252525','#252525','#333','#fafafa','#909090','#3f3f3f','#797979','#505050','#fafafa'],['dark'],['UI_OneUI']],
        [['#f2f2f2','#fcfcfc','white','#e3e3e3','#161616','#989898','#ececec','#b3b3b3','#a9a9a9','#fcfcfc'],['light'],['UI_OneUI']],
        [['#161616','#424242','#252525','#505050','white','#b9b9b9','#323232','#c1c1c1','#696969','#b4b4b4'],['dark'],['UI_ZenUI']],
        [['#fafafa','white','#ddd','#ededed','#202020','#787878','#dcdcdc','#989898','#ccc','#e7e7e7'],['light'],['UI_ZenUI']],
        [['#000','#212121','#141414','#1a1a1a','#d8d8d8','#8a8a8a','#1e1e1e','#898989','#3e3e3e','#d1d1d1'],['custom']]
      ]
    ],
    [ // Радиус закруглений
      {name: 'border-radius', prefix: 'br', checkedKey: 'borderRadiusChecked', checkedStock: 'br-0',
      defaultKey: 'borderRadiusDefault', valueType0: 'default', valueType1: 'custom'},
      ['--main_border-radius','--interactive_border-radius','--button_border-radius'],
      [
        [['0.4em','0.6em','0.25em'],['default'],['UI_OOS']],
        [['0.6em','1.2em','0.5em'],['default'],['UI_RUI']],
        [['1em','1.2em','1.25em'],['default'],['UI_OneUI']],
        [['0.5em','0.5em','1.25em'],['default'],['UI_ZenUI']],
        [['0','0','0'],['custom']]
      ]
    ],
    [ // Форма иконок
      {name: 'icon-shape', prefix: 'is', checkedKey: 'iconShapeChecked', checkedStock: 'is-0',
      defaultKey: 'iconShapeDefault'},
      ['--icon_border-radius'],
      [
        [['50%'],['custom']],
        [['25%'],['custom']],
        [['10%'],['custom']],
        [['0'],['custom']]
      ]
    ],
    [ // Шрифт
      {name: 'font-family', prefix: 'ff', checkedKey: 'fontFamilyChecked', checkedStock: 'ff-0',
      defaultKey: 'fontFamilyDefault'},
      ['--main_font-family'],
      [
        [['Arial'],['custom']],
        [['Tahoma'],['custom']],
        [['Verdana'],['custom']],
        [['Roboto Condensed'],['custom']],
        [['Impact'],['custom']],
        [['Trebuchet MS'],['custom']],
        [['Bitter'],['custom']],
        [['Times New Roman'],['custom']],
        [['Oxygen Mono'],['custom']],
        [['OpenGost Type B TT'],['custom']],
        [['USSR Stencil'],['custom']]
      ]
    ]
  ],
  [ // Radio (классы)
    [ // Стиль шапки
      {name: 'header-style', prefix: 'hs', checkedKey: 'headerStyleChecked', checkedStock: 'hs-0', 
      defaultKey: 'headerStyleDefault', valueKey: 'headerStyleValue', valueStock: 'HEADER_stock',
      valueType0: 'default', valueType1: 'custom'},
      [$('.header'),$('.header-name'),$('.svg_header')],
      ['HEADER_stock','HEADER_OOSColor','HEADER_RUI','HEADER_OneUI','HEADER_ZenUI'],
      [
        [['HEADER_stock'],['default'],['UI_OOS']],
        [['HEADER_OOSColor'],['custom']],
        [['HEADER_RUI'],['default'],['UI_RUI']],
        [['HEADER_OneUI'],['default'],['UI_OneUI']],
        [['HEADER_ZenUI'],['default'],['UI_ZenUI']]
      ]
    ],
    [ // Стиль UI
      {name: 'ui-style', prefix: 'us', checkedKey: 'uiStyleChecked', checkedStock: 'us-0', 
      defaultKey: 'uiStyleDefault', valueKey: 'uiStyleValue', valueStock: 'UI_OOS'},
      [$('.about-container'),$('.about-header'),$('.about-header_img'),$('.about_secondary-text'),
      $('.about-section'),$('.article'),$('.article-header'),$('.article_multiple'),$('.header'),
      $('.menu-icon'),$('.menu-tile'),$('.page'),$('.radio-button'),$('.section'),
      $('.section_interactive'),$('.section_menu'),$('.svg_header'),$('.svg_settings')],
      ['UI_OOS','UI_RUI','UI_OneUI','UI_ZenUI'],
      [
        [['UI_OOS'],['default']],
        [['UI_RUI'],['default']],
        [['UI_OneUI'],['default']],
        [['UI_ZenUI'],['default']]
      ]
    ],
    [ // Стиль диалоговых окон
      {name: 'interactive-style', prefix: 'ias', checkedKey: 'interactiveStyleChecked', checkedStock: 'ias-0', 
      defaultKey: 'interactiveStyleDefault', valueKey: 'interactiveStyleValue', valueStock: 'interactive_OOS',
      valueType0: 'default', valueType1: 'custom'},
      [$('.interactive'),$('.interactive-button'),$('.interactive-container')],
      ['interactive_OOS','interactive_RUI','interactive_OneUI','interactive_ZenUI'],
      [
        [['interactive_OOS'],['default'],['UI_OOS']],
        [['interactive_RUI'],['default'],['UI_RUI']],
        [['interactive_OneUI'],['default'],['UI_OneUI']],
        [['interactive_ZenUI'],['default'],['UI_ZenUI']]
      ]
    ],
    [ // Стиль переключателей
      {name: 'switch-style', prefix: 'ss', checkedKey: 'switchStyleChecked', checkedStock: 'ss-0', 
      defaultKey: 'switchStyleDefault', valueKey: 'switchStyleValue', valueStock: 'switch_OOS',
      valueType0: 'default', valueType1: 'custom'},
      [$('.switch')],
      ['switch_OOS','switch_RUI','switch_OneUI','switch_ZenUI'],
      [
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
      valueStock: '0.3', text: ' сек.'},
      ['--main_animation-duration'],
      [
        [['1'],['s']]
      ]
    ],
    [ // Масштаб интерфейса
      {rangeId: 'interface-scale-range', demoId: 'interface-scale-demo', valueKey: 'interfaceScaleValue', 
      valueStock: '100', text: '% от стокового'},
      ['--pc_font-size','--tablet_font-size','--mobile_font-size'],
      [
        [['0.04'],['vh']],
        [['0.04'],['vw']],
        [['0.05'],['vw']]
      ]
    ],
    [ // Высота шапки в режиме OneUI
      {rangeId: 'oneui-height-range', demoId: 'oneui-height-demo', valueKey: 'oneuiHeightValue', 
      valueStock: '50', text: '% от высоты окна браузера'},
      ['--oneui-mode_header-height'],
      [
        [['1'],['vh']]
      ]
    ]
  ],
  [ // Checkbox (классы)
    [ // Вкл/выкл режим OneUI
      {name: 'oneui-mode', valueKey: 'oneuiModeValue'},
      [$('.header'),$('.main')],
      ['OneUI-mode',''],
      [$('#oneui-height-range'),$('#OM_OneUI'),$('#OM_OOS11')]
    ],
    [
      {name: 'oneui-mode_OneUI', valueKey: 'OMOneuiValue'},
      [$('.header-icon'),$('.header-name')],
      ['OM_OneUI',''],
      []
    ],
    [
      {name: 'oneui-mode_OOS11', valueKey: 'OMOOS11Value'},
      [$('.header-name')],
      ['OM_OOS11',''],
      []
    ]
  ],
  [ // Другое
    ['none','var(--accent-color)','var(--main_bg-color)','var(--secondary_bg-color)','var(--icon_bg-color)',
    'var(--main_text-color)','var(--secondary_text-color)','var(--main_border-color)',
    'var(--radio_nonactive-color)'], // массив для покраски svg
    [ // массивы для контроля черного/белого акцента
      {b: '#000', w: '#fff'},
      ['#000','#161616'],
      ['#fff','#fafafa','#f2f2f2']
    ]
  ]
]
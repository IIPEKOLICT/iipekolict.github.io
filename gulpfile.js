/*
ПЕРВОНАЧАЛЬНАЯ НАСТРОЙКА В ТЕРМИНАЛЕ:

npm i gulp-cli
npm init
npm i --save-dev gulp gulp-sass gulp-stylus gulp-autoprefixer browser-sync del nib gulp-group-css-media-queries require-dir gulp-inject gulp-concat gulp-clean-css
npm install stylelint gulp-stylelint --save-dev
npm install stylelint-config-standard stylelint-config-recess-order gulp-stylelint --save-dev

ЗАПУСК СЕРВЕРА:

gulp start

ОСТАНОВКА:

CTRL + C

СБОРКА ПРОЕКТА:

gulp build
*/

//'use strict';

const   {series, parallel, watch}   = require('gulp'),
        requireDir                  = require('require-dir'),
        browserSync                 = require('browser-sync').create(),
        tasks                       = requireDir('./gulp/tasks', {recurse: true}),
        patchs                      = require('./gulp/paths');

function watcher() {
    browserSync.init({
        server: {
            baseDir: patchs.server
        },
        notify: false
    });
    watch(patchs.src.html).on('change', 
        series(tasks.html, /*tasks.injectLinks,*/ browserSync.reload)
    );
    watch(patchs.src.cssLibs).on('change', 
        series(tasks.cssLibs, browserSync.reload)
    );
    watch(patchs.src.styl).on('change', 
        series(tasks.compileStylus, browserSync.reload)
    );
    watch([
        patchs.src.sass,
        patchs.src.scss
    ]).on('change', 
        series(tasks.compileSass, browserSync.reload)
    );
    watch(patchs.src.js).on('change', 
        series(tasks.js, browserSync.reload)
    );
    watch(patchs.src.font).on('change', 
        series(tasks.font, browserSync.reload)
    );
    watch(patchs.src.svg).on('change', 
        series(tasks.svg, browserSync.reload)
    );
    watch(patchs.src.img).on('change', 
        series(tasks.img, browserSync.reload)
    );
}

exports.clean_src = tasks.cleanSrc;
exports.clean_server = tasks.cleanServer;
exports.clean_build = tasks.cleanBuild;
exports.clean_all = series(
    tasks.cleanSrc,
    tasks.cleanServer,
    tasks.cleanBuild
)

exports.load = series(
    tasks.cleanSrc,
    tasks.cleanServer,
    tasks.load,
    parallel(
        tasks.html,
        tasks.cssLibs,
        tasks.compileSass, 
        tasks.compileStylus, 
        tasks.js,
        tasks.font,
        tasks.img,
        tasks.svg
    ),
    //tasks.injectLinks,
    watcher
)

exports.start = series(
    tasks.cleanServer,
    parallel(
        tasks.html,
        tasks.cssLibs,
        tasks.compileSass, 
        tasks.compileStylus, 
        tasks.js,
        tasks.font,
        tasks.img,
        tasks.svg
    ),
    //tasks.injectLinks,
    watcher
);

exports.build = series(
    tasks.cleanBuild,
    tasks.cleanServer,
    parallel(
        tasks.html,
        tasks.cssLibs,
        tasks.compileSass, 
        tasks.compileStylus, 
        tasks.js,
        tasks.font,
        tasks.img,
        tasks.svg
    ),
    //tasks.injectLinks,
    tasks.build
)
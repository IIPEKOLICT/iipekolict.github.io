const   gulp    = require('gulp'),
        concat  = require('gulp-concat'),
        cleanCss  = require('gulp-clean-css'),
        patchs  = require('../paths');

function cssLibs() {
    return gulp
        .src(patchs.src.cssLibs)
        .pipe(concat('libs.min.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest(patchs.server.css));
}

module.exports = cssLibs;
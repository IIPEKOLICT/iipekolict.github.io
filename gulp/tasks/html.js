const   gulp    = require('gulp'),
        patchs  = require('../paths');

function html() {
    return gulp
        .src(patchs.src.html)
        .pipe(gulp.dest(patchs.server.html));
}

module.exports = html;
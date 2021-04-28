const   gulp    = require('gulp'),
        patchs  = require('../paths');

function js() {
    return gulp
        .src([
            patchs.src.js,
            '!' + patchs.src.modules
        ])
        .pipe(gulp.dest(patchs.server.js));
}

module.exports = js;
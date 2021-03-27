const   gulp    = require('gulp'),
        patchs  = require('../paths');

function font() {
    return gulp
        .src(patchs.src.font, {
            allowEmpty: true
        })
        .pipe(gulp.dest(patchs.server.font));
}

module.exports = font;
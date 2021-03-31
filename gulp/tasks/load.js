const   gulp    = require('gulp'),
        patchs  = require('../paths');

function load() {
    gulp.src(patchs.load)
        .pipe(gulp.dest(patchs.src.dir));
}

module.exports = load;
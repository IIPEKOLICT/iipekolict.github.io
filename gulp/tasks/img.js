const   gulp    = require('gulp'),
        patchs  = require('../paths');

function img() {
    return gulp
        .src(patchs.src.img, {
            allowEmpty: true
        })
        .pipe(gulp.dest(patchs.server.img));
}

module.exports = img;
const   gulp    = require('gulp'),
        patchs  = require('../paths');

function svg() {
    return gulp
        .src(patchs.src.svg, {
            allowEmpty: true
        })
        .pipe(gulp.dest(patchs.server.svg));
}

module.exports = svg;
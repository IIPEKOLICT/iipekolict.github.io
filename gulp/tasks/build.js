const   gulp    = require('gulp'),
        patchs  = require('../paths');

async function build() {
    gulp.src(patchs.server.all)
        .pipe(gulp.dest(patchs.build.dir));
    gulp.src(patchs.src.scss)
        .pipe(gulp.dest(patchs.build.scss));
    gulp.src(patchs.src.sass)
        .pipe(gulp.dest(patchs.build.sass));
    gulp.src(patchs.src.styl)
        .pipe(gulp.dest(patchs.build.styl));
}

module.exports = build;
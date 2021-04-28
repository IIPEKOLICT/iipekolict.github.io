const   gulp            = require('gulp'),
        sass            = require('gulp-sass'),
        gcmq            = require('gulp-group-css-media-queries'),
        autoprefixer    = require('gulp-autoprefixer'),
        patchs          = require('../paths');

function compileSass() {
    return gulp
        .src([
                patchs.src.scss,
                patchs.src.sass,
                '!' + patchs.src.modules
        ])
        .pipe(sass())
        .pipe(gcmq())
        .pipe(autoprefixer(
                ['last 15 versions', '> 1%', 'ie 8', 'ie 7'], 
                {cascade: true}
        ))
        .pipe(gulp.dest(patchs.server.css));
}

module.exports = compileSass;
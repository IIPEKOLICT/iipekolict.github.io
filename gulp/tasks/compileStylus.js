const   gulp            = require('gulp'),
        stylus          = require('gulp-stylus'),
        gcmq            = require('gulp-group-css-media-queries'),
        autoprefixer    = require('gulp-autoprefixer'),
        nib             = require('nib'),
        patchs          = require('../paths');

function compileStylus() {
    return gulp
        .src(patchs.src.styl)
        .pipe(stylus({
            use: nib()
        }))
        .pipe(gcmq())
        .pipe(autoprefixer(
                ['last 15 versions', '> 1%', 'ie 8', 'ie 7'], 
                {cascade: true}
        ))
        .pipe(gulp.dest(patchs.server.css));
}

module.exports = compileStylus;
const   gulp    = require('gulp'),
        inject  = require('gulp-inject'),
        patchs  = require('../paths');

function injectLinks() {
    return gulp
        .src(patchs.inject.html)
        .pipe(inject(gulp
            .src([
                patchs.inject.css,
                patchs.inject.js
            ], {
                read: false
            }), {
                starttag: '<!-- {{ext}} -->',
                endtag: '<!-- !{{ext}} -->',
                relative:true
            }
        ))
        .pipe(gulp.dest(patchs.server.html))
}

module.exports = injectLinks;
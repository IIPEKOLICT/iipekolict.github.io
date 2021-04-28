const   srcDir      = 'dev/src/',
        serverDir   = 'dev/server/',
        buildDir    = 'content/new/',
        loadDir     = 'content/new/',

        htmlDir     = '',
        cssDir      = 'css/',
        cssLibsDir  = 'css-libs/',
        scssDir     = 'scss/',
        sassDir     = 'sass/',
        stylDir     = 'styl/',
        jsDir       = 'js/',
        fontDir     = 'font/',
        imgDir      = 'img/',
        svgDir      = 'svg/',

        allFiles    = '**/*',
        htmlFiles   = '**/*.html',
        cssFiles    = '**/*.css',
        scssFiles   = '**/*.scss',
        sassFiles   = '**/*.sass',
        stylFiles   = '**/*.styl',
        jsFiles     = '**/*.js',
        moduleFiles = '**/_*';

module.exports = {
    src: {
        dir: srcDir,

        html: srcDir + htmlDir + htmlFiles,
        cssLibs: srcDir + cssLibsDir + cssFiles,
        scss: srcDir + scssDir + scssFiles,
        sass: srcDir + sassDir + sassFiles,
        styl: srcDir + stylDir + stylFiles,
        js: srcDir + jsDir + jsFiles,
        font: srcDir + fontDir + allFiles,
        img: srcDir + imgDir + allFiles,
        svg: srcDir + svgDir + allFiles,
        
        modules: srcDir + moduleFiles,
    },
    server: {
        dir: serverDir,
        all: serverDir + allFiles,

        html: serverDir + htmlDir,
        css: serverDir + cssDir,
        js: serverDir + jsDir,
        font: serverDir + fontDir,
        img: serverDir + imgDir,
        svg: serverDir + svgDir
    },
    build: {
        dir: buildDir,

        scss: buildDir + scssDir,
        sass: buildDir + sassDir,
        styl: buildDir + stylDir
    },
    inject: {
        html: serverDir + htmlDir + htmlFiles,
        css: serverDir + cssDir + cssFiles,
        js: serverDir + jsDir + jsFiles
    },
    load: loadDir + allFiles
}
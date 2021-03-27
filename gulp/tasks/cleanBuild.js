const   del     = require('del'),
        patchs  = require('../paths');

function cleanBuild() {
    return del(patchs.build.dir);
}

module.exports = cleanBuild;
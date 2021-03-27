const   del     = require('del'),
        patchs  = require('../paths');

function cleanSrc() {
    return del(patchs.src.dir);
}

module.exports = cleanSrc;
const   del     = require('del'),
        patchs  = require('../paths');

function cleanServer() {
    return del(patchs.server.dir);
}

module.exports = cleanServer;
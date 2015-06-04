var clock = require('./clock');

module.exports = {
    info: function(message) {
        console.log('[' + clock.now() + ']', message);
    }
};

var moment = require('moment-timezone');

module.exports = {
    bedTime: function() {
        var hourOfDay = parseInt(moment().tz('Australia/Sydney').format('H'));
        return hourOfDay < 9 || hourOfDay > 18;
    }
};

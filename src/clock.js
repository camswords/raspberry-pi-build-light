var moment = require('moment-timezone');

module.exports = {
    now: function() {
        return moment().tz('Australia/Sydney').format();
    },
    bedTime: function() {
        console.log('bed time?');
        var hourOfDay = parseInt(moment().tz('Australia/Sydney').format('H'));
        console.log('bed time?, hour of day is', hourOfDay);
        return hourOfDay < 8 || hourOfDay > 18;
    }
};

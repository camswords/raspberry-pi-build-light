var exec = require('child_process').exec;

module.exports = {
    turnOnLightOne: function() {    exec('/usr/bin/send 001000001111101000001110 0 2'); },
    turnOffLightOne: function() {   exec('/usr/bin/send 001000001111101000000110 0 2'); },
    turnOnLightTwo: function() {    exec('/usr/bin/send 001000001111101000001100 0 2'); },
    turnOffLightTwo: function() {   exec('/usr/bin/send 001000001111101000000100 0 2'); },
    turnOnLightThree: function() {  exec('/usr/bin/send 001000001111101000001010 0 2'); },
    turnOffLightThree: function() { exec('/usr/bin/send 001000001111101000000010 0 2'); },
    turnAllLightsOn: function() {   exec('/usr/bin/send 001000001111101000001001 0 2'); },
    turnAllLightsOff: function() {
        exec('/usr/bin/send 001000001111101000000110 0 2');
        exec('/usr/bin/send 001000001111101000000100 0 2');
        exec('/usr/bin/send 001000001111101000000010 0 2');
    }
};



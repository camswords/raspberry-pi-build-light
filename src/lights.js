var exec = require('child_process').exec;

var execy = function(command) {
    exec(command, function(error, stdout, stderr) {
        console.log('error', error);
        console.log('stdout', stdout);
        console.log('stderr', stderr);
    });
};


module.exports = {
    turnOnLightOne: function() {    execy('/usr/bin/send 001000001111101000001110 0 2'); },
    turnOffLightOne: function() {   execy('/usr/bin/send 001000001111101000000110 0 2'); },
    turnOnLightTwo: function() {    execy('/usr/bin/send 001000001111101000001100 0 2'); },
    turnOffLightTwo: function() {   execy('/usr/bin/send 001000001111101000000100 0 2'); },
    turnOnLightThree: function() {  execy('/usr/bin/send 001000001111101000001010 0 2'); },
    turnOffLightThree: function() { execy('/usr/bin/send 001000001111101000000010 0 2'); },
    turnAllLightsOn: function() {   execy('/usr/bin/send 001000001111101000001001 0 2'); },
    turnAllLightsOff: function() { execy('/usr/bin/send 001000001111101000000100 0 2'); }
};



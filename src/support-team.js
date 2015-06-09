var projectsRepository = require('./projects-repository');
var lights = require('./lights');
var clock = require('./clock');
var logger = require('./logger');

module.exports = {
    notify: function() {
        
        console.log('notify support!');
        
        if (clock.bedTime()) {
            console.log(' -- notify support -- bed time, turn all lights off');
            lights.turnAllLightsOff();
        }
        
        var projects = projectsRepository.retrieve();

        var building = function() {
            console.log(' -- notify support -- check building');

            if (projects.hasBuildingBuild()) {
                console.log(' -- notify support -- check building : building');
                logger.info('building');
                lights.turnOnLightOne();
            } else {
                console.log(' -- notify support -- check building : not building');
                lights.turnOffLightOne();
            }
        };

        var successful = function() {
            console.log(' -- notify support -- check success');

            if (projects.hasSuccessfulBuild()) {
                console.log(' -- notify support -- check success : success!');
                logger.info('success');
                lights.turnOnLightTwo();
            } else {
                console.log(' -- notify support -- check success : not success!');
                lights.turnOffLightTwo();
            }
        };

        var failed = function() {
            console.log(' -- notify support -- check failure');

            if (projects.hasFailedBuild()) {
                console.log(' -- notify support -- check failure : failure!');
                logger.info('failure');
                lights.turnOnLightThree();
            } else {
                console.log(' -- notify support -- check failure : not failure!');
                lights.turnOffLightThree();
            }
        };

        building();
        setTimeout(successful, 1000);
        setTimeout(failed, 2000);
    }
};

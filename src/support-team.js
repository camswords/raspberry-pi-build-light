var projectsRepository = require('./projects-repository');
var lights = require('./lights');
var clock = require('./clock');

module.exports = {
    notify: function() {
        
        if (clock.bedTime()) {
            lights.turnAllLightsOff();
        }
        
        var projects = projectsRepository.retrieve();

        var building = function() {
            if (projects.hasBuildingBuild()) {
                console.log('building');
                lights.turnOnLightOne();
            } else {
                lights.turnOffLightOne();
            }
        };

        var successful = function() {
            if (projects.hasSuccessfulBuild()) {
                console.log('success');
                lights.turnOnLightTwo();
            } else {
                lights.turnOffLightTwo();
            }
        };

        var failed = function() {
            if (projects.hasFailedBuild()) {
                console.log('failure');
                lights.turnOnLightThree();
            } else {
                lights.turnOffLightThree();
            }
        };

        building();
        setTimeout(successful, 1000);
        setTimeout(failed, 2000);
    }
};

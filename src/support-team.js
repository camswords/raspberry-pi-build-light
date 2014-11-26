var projectsRepository = require('./projects-repository');
var lights = require('./lights');

module.exports = {
    notify: function() {
        var projects = projectsRepository.retrieve();

        if (projects.hasBuildingBuild()) {
            console.log('building');
            lights.turnOnLightOne();
        }

        if (projects.hasSuccessfulBuild()) {
            console.log('success');
            lights.turnOnLightTwo();
        }

        if (projects.hasFailedBuild()) {
            console.log('failure');
            lights.turnOnLightThree();
        }
    }
};

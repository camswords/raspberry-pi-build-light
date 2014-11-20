var projectsRepository = require('./projects-repository');
var lights = require('./lights');

module.exports = {
    notify: function() {
        var projects = projectsRepository.retrieve();

        if (projects.hasBuildingBuild()) {
            lights.turnOnLightOne();
        }

        if (projects.hasSuccessfulBuild()) {
            lights.turnOnLightTwo();
        }

        if (projects.hasFailedBuild()) {
            lights.turnOnLightThree();
        }
    }
};

var projectsRepository = require('./projects-repository');

module.exports = {
    notify: function() {
        var projects = projectsRepository.retrieve();

        if (projects.hasBuildingBuild()) {
            console.log('building');
        }

        if (projects.hasSuccessfulBuild()) {
            console.log('success');
        }

        if (projects.hasFailedBuild()) {
            console.log('failure');
        }
    }
};

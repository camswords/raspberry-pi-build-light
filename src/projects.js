_ = require('lodash');

module.exports = {
    create: function(projects) {
        var myprojects = projects.slice(0);

        myprojects.hasBuildingBuild = function() {
            return _.find(myprojects, function (project) { return project.activity === 'Building' });
        };

        myprojects.hasSuccessfulBuild = function() {
            return _.find(myprojects, function (project) { return project.status === 'Success' });
        };

        myprojects.hasFailedBuild = function() {
            return _.find(myprojects, function (project) { return project.status !== 'Success' });
        };

        return myprojects;
    }
};

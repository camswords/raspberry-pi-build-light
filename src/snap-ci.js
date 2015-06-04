var http = require('./http-gateway');
var Projects = require('./projects');
var projectsRepository = require('./projects-repository');
var clock = require('./clock');
var logger = require('./logger');

module.exports = {
    poll: function() {

        if (clock.bedTime()) { return; }

        var onSuccess = function (ccTray) {
            var projects = ccTray.Projects.Project.map(function (project) {
                return {
                    name: project['$']['name'],
                    activity: project['$']['activity'],
                    status: project['$']['lastBuildStatus']
                };
            });

            projectsRepository.save(Projects.create(projects));
        };
        
        http.get(process.env.CC_TRAY_URL)
            .then(onSuccess)
            .catch(function() {
                logger.info('failed to retrieve project information from ccTray.');
            }).done();
    }
};

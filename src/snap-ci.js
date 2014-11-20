var http = require('restler');
var Projects = require('./projects');
var projectsRepository = require('./projects-repository');

module.exports = {
    poll: function() {
        http.get(process.env.CC_TRAY_URL).on('complete', function (ccTray) {
            if (ccTray instanceof Error) {
                console.log('failed to get snap-ci status, error is', ccTray);
            }

            var projects = ccTray.Projects.Project.map(function (project) {
                return {
                    name: project['$']['name'],
                    activity: project['$']['activity'],
                    status: project['$']['lastBuildStatus']
                };
            });

            projectsRepository.save(Projects.create(projects));
        });
    }
};

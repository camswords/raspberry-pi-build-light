var http = require('./http-gateway');
var Projects = require('./projects');
var projectsRepository = require('./projects-repository');
var clock = require('./clock');
var logger = require('./logger');

module.exports = {
    poll: function() {

        console.log('polling snap');


        if (clock.bedTime()) {
            console.log(' -- polling snap -- bed time, return');
            return; 
        }

        var onSuccess = function (ccTray) {
            console.log(' -- polling snap -- got some projects');

            var projects = ccTray.Projects.Project.map(function (project) {
                return {
                    name: project['$']['name'],
                    activity: project['$']['activity'],
                    status: project['$']['lastBuildStatus']
                };
            });

            console.log(' -- polling snap -- saving to repo', projects);
            projectsRepository.save(Projects.create(projects));
        };
        
        http.get(process.env.CC_TRAY_URL)
            .then(onSuccess)
            .catch(function() {
                logger.info('failed to retrieve project information from ccTray.');
            }).done();
    }
};

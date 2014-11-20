var projectsRepository = require('./projects-repository');

module.exports = {
    notify: function() {
        projectsRepository.retrieve().forEach(function(project) {
            console.log(project.name, project.activity);
        });
    }
};

var Projects = require('./projects');

var latest = Projects.create([]);

module.exports = {
    save: function(projects) { latest = projects; },
    retrieve: function() { return latest; }
};

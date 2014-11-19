
var snapCI = require('./src/snap-ci');

snapCI.latest().then(function(projects) {
    projects.forEach(function(project) {
       console.log(project);
    });
}).done();

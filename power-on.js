
var snapCI = require('./src/snap-ci');
var supportTeam = require('./src/support-team');
var diagnostics = require('./src/diagnostics');

snapCI.poll();
setInterval(snapCI.poll, 10000);
setInterval(supportTeam.notify, 5000);
setInterval(diagnostics.run, 60000);


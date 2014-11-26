
var snapCI = require('./src/snap-ci');
var supportTeam = require('./src/support-team');

snapCI.poll();
setInterval(snapCI.poll, 10000);
setInterval(supportTeam.notify, 5000);


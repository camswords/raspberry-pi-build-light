
var snapCI = require('./src/snap-ci');
var supportTeam = require('./src/support-team');

setInterval(snapCI.poll, 10000);
setInterval(supportTeam.notify, 1000);


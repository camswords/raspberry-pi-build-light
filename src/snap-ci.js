var http = require('restler');
var Q = require('q');

module.exports = {
    latest: function() {
        var results = Q.defer();

        http.get(process.env.CC_TRAY_URL).on('complete', function (ccTray) {
            if (ccTray instanceof Error) {
                return results.reject(ccTray);
            }

            var projects = ccTray.Projects.Project.map(function (project) {
                return {
                    name: project['$']['name'],
                    activity: project['$']['activity']
                };
            });

            results.resolve(projects);
        });

        return results.promise;
    }
};

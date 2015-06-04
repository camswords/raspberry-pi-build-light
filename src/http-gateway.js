var http = require('restler');
var Q = require('q');
var logger = require('./logger');

var onSuccess = function(done) {
    return function(data) {
        if (data instanceof Error) {
            logger.info('request to url', url, 'failed due to returned error', data);
            return done.reject();
        }

        done.resolve(data);
    };
};

var onFailure = function(done) {
    return function(data) {
        logger.info('request to url', url, 'failed due to ', data);
        done.reject();
    };
};

var onError = function(done) {
    return function(error) {
        logger.info('request to url', url, 'errored due to ', error);
        done.reject();
    };
};

var onTimeout = function(done) {
    return function() {
        logger.info('request to url', url, 'timed out');
        done.reject();
    };
};

module.exports = {
    get: function(url) {
        var done = Q.defer();

        http.get(url, { timeout: 5000 })
            .on('success', onSuccess(done))
            .on('fail', onFailure(done))
            .on('error', onError(done))
            .on('timeout', onTimeout(done));
        
        return done.promise;
    },
    
    post: function(url, data) {
        var done = Q.defer();

        var options = {
            timeout: 5000,
            data: JSON.stringify(data)
        };

        http.post(url, options)
            .on('success', onSuccess(done))
            .on('fail', onFailure(done))
            .on('error', onError(done))
            .on('timeout', onTimeout(done));

        return done.promise;
    }
};
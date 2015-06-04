var http = require('./http-gateway');
var networkAddresses = require('./network-addresses');
var _ = require('lodash');
var logger = require('./logger');

module.exports = {
    run: function() {
        _.forEach(networkAddresses(), function(address) {
            http.post(process.env.THINGSSPEAK_URL + '&field1=' + address.value())
                .catch(function() {
                    logger.info('failed to notify thingsspeak of address', address);
                })
                .done();
        });
    }
};
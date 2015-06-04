var os = require('os');
var _ = require('lodash');

var Address = {
    create: function(name, address) {
        return {
            value: function() { return address; }
        };
    }
};


module.exports = function() {
    var addresses = [];

    _.each(Object.keys(os.networkInterfaces()), function(ifname) {
        var interfaces = _.filter(os.networkInterfaces()[ifname], function(iface) { 
            return iface && iface.family !== 'IPv4' && !iface.internal; 
        });
        
        _.each(interfaces, function(iface) {
            addresses.push(Address.create(ifname, iface.address));
        });
    });
    
    return addresses;
};

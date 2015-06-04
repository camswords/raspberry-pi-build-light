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
    var networkInterfaces = os.networkInterfaces();
    
    _.each(Object.keys(networkInterfaces), function(ifname) {
        var interfaces = _.filter(networkInterfaces[ifname], function(iface) { 
            return iface && iface.family === 'IPv4' && !iface.internal; 
        });
        
        _.each(interfaces, function(iface) {
            addresses.push(Address.create(ifname, iface.address));
        });
    });
    
    return addresses;
};

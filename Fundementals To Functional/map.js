const _ = {};

_.map = function(list, callback) {
    var storage = [];

    _.each(list, function(v, i, list) {
        storage.push(callback(v, i, list));
    })
    return storage; 
}
 _.map([1,2,3], function(val) {return val + 1;});

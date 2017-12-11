//Cause campfire
var map = function(){emit(this.STATE,1);};
var reduce = function(key, values){return Array.sum(values)};

db.Fires.mapReduce(map,reduce,{query : { STAT_CAUSE_DESCR : 'Campfire'},out:{inline:1}})
//feu par etat a mettre sur map 
var map = function(){emit(this.STATE,1);};
var reduce = function(key, values){return Array.sum(values)};

db.Fires.mapReduce(map,reduce,{out:{inline:1}})

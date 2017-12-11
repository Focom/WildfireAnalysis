//Nombre de feu total de chaque annee
var map = function(){emit(this.FIRE_YEAR,1);};
var reduce = function(key, values){return Array.sum(values)};

db.Fires.mapReduce(map,reduce,{out:{inline:1}})

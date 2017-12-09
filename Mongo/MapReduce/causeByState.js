var map = function(){
    emit(this.STATE,1)
}
var reduce = function(key,values){
    return(Array.sum(values))
}


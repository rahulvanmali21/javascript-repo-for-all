String.prototype.charAt = function(index){
    if(isNaN(index) && isFinite(index)){
        return this[index];
    }
}
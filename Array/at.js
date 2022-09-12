Array.prototype.at = function(index){
    if(this.length - 1 < index || isNaN(index)){
        return undefined;
    }
    if(index < 0 && this.length + (index) > 0 ){
        return this[this.length + (index)]
    }
    return this[index]
}

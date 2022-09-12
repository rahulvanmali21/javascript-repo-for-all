Array.prototype.lastIndexOf = function(element){
    if(element===undefined || this.length ===0){
        return -1;
    }
    for (let index = this.length - 1; index >= 0; index--) {
        if(this[index] === element){
            return index
        }
    }
    return -1;
}

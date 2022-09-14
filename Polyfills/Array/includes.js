Array.prototype.includes = function(ele){
    if(this.length ===0  || !ele){
        return false
    }
    for (let i = 0; i < this.length; i++) {
        const element = this[i];
        if(element === ele){
            return true;
        }
    }
    return false;
}
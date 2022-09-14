Array.prototype.isArray = function(ele){
    return Object.prototype.toString.call(ele) === "[object Array]"
}
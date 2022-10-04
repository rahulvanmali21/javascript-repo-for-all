Array.prototype.union = function (array) {
  var mp = new Map();
  for (var i = 0; i < this.length; i++) {
    mp.set(this[i], i);
  }
  for (var i = 0; i < array.length; i++) {
    mp.set(array[i], i);
  }
  return mp.keys();
};

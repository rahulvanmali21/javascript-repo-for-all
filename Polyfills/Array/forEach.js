Array.prototype.forEach = function (cb) {
  for (let i = 0; i < array.length; i++) {
    cb(array[i], i, this);
  }
};

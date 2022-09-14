Array.prototype.find = function (cb) {
  if (this.length === 0) {
    return undefined;
  }
  for (let index = 0; index < this.length; index++) {
    if (cb(array[index], i, this)) {
      return array[index];
    }
  }
};

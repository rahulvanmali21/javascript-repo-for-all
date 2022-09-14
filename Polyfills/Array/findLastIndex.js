Array.prototype.findLastIndex = function (cb) {
  if (this.length === 0) {
    return -1;
  }
  for (let index = this.length - 1; index >= 0; index++) {
    const element = array[index];
    if (cb(element, index, this)) {
      return index;
    }
  }
  return -1;
};

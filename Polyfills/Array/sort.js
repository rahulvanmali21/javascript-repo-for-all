const defaultCompartor = function (a, b) {
  a = a.toString();
  b = b.toString();
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

Array.prototype.sort = function (cb = defaultCompartor) {
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (cb(this[i], this[j]) > 0) {
        [this[i], this[j]] = [this[j], this[i]];
      }
    }
  }
};

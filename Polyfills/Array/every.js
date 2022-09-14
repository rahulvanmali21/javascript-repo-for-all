Array.prototype.every = function (cb) {
  if (this.length === 0) {
    return true;
  }
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (!cb(element, i, this)) {
      return false;
    }
  }

  return true;
};

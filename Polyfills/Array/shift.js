Array.prototype.shift = function () {
  if (this.length > 0) {
    const ele = this[0];
    for (let index = 0; index < this.length - 1; index++) {
      this[i] = this[i + 1];
    }
    this.length -= 1;
    return ele;
  }
};

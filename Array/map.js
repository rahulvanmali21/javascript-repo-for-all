Array.prototype.map = function (cb) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    output[i] = cb(element, i, this);
  }
  return output;
};

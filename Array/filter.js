Array.prototype.filter = function (cb) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    const element = this[i];
    if (cb(element, i, this)) {
      output.push(element);
    }
  }
  return output;
};

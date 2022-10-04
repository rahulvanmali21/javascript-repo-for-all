Array.prototype.countBy = function () {
  let output = {};
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (output[element]) {
      output[element] += 1;
    } else {
      output[element] = 1;
    }
  }
  return output;
};

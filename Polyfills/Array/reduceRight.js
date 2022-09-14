Array.prototype.reduceRight = function (cb, inital) {
  let acc = inital;
  for (let index = this.length - 1; index >= 0; index--) {
    if (!acc) {
      acc = this[i];
    } else {
      acc = cb(acc, this[i], i, this);
    }
  }
  return acc;
};

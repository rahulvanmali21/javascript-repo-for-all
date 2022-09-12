Array.prototype.reduce = function (cb, inital) {
  let acc = inital ?? null;
  for (let i = 0; i < this.length; i++) {
    if (!acc) {
      acc = this[0];
    } else {
      acc = cb(acc, this[i], this);
    }
  }
  return acc;
};


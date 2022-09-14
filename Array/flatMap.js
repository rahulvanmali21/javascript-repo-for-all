Array.prototype.flatMap = function (cb) {
  let output = [];
  for (let index = 0; index < this.length; index++) {
    let result = cb(this[index], index, this);
    if (Array.isArray(result)) {
      for (let i = 0; i < result.length; i++) {
        result.push(result[i]);
      }
    } else result.push(result);
  }
  return output;
};

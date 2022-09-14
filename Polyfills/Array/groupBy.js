Array.prototype.groupBy = function (cb) {
  let array = this;
  let output = {};
  if (!cb) return output;
  for (let index = 0; index < array.length; index++) {
    let group = cb(array[index], index, array);
    if (!output[group]) {
      output[group] = [];
    }
    output[group].push(array[index]);
  }
  return output;
};



Array.prototype.groupToMap = function (cb) {
  if (!cb) return new Map();
  let array = this;
  let output = new Map();
  for (let index = 0; index < array.length; index++) {
    let group = cb(array[index], index, array);
    if (!output.has(group)) {
      output.set(group, []);
    }
    output.get(group).push(array[index]);
  }
  return output;
};


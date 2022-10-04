Array.prototype.intersection = function (array) {
  let set = new Set(this);
  let output = new Set();
  for (let index = 0; index < array.length; index++) {
    if (set.has(array[index])) {
      output.add(array[index]);
    }
  }
  return [...output];
};

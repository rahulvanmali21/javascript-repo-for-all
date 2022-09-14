Array.prototype.from = function (arr, cb) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    const element = array[i];
    output[i] = cb ? cb(element, i, arr) : element;
  }
  return output;
};

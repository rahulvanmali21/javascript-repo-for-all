Array.prototype.fromRange = function (start, end) {
  let output = [];
  for (let index = start; index <= end; index++) {
    output.push(index);
  }
  return output;
};

Array.prototype.chunk = function (size = 0,[]) {
  if (size == 0) {
    return this;
  }
  let output = [];
  let count = 0;
  let chunkArr = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    chunkArr.push(element);
    count += 1;
    if (count === size) {
      output.push(chunkArr);
      count = 0;
      chunkArr = [];
    }
  }
  if (chunkArr.length > 0) {
    output.push(chunkArr);
  }
  return output;
};

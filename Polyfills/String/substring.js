String.prototype.substring = function (start = 0, end) {
  end = end && end > this.length ? this.length : end;
  if (start > this.length) {
    return "" + this;
  }
  let output = "";
  for (let index = start; index < end; index++) {
    output += this[index];
  }
  return output;
};

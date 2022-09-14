Array.prototype.slice = function (start, end) {
  let arr = [];
  start = start < 0 ? this.length + start : start;
  end = end < 0 ? this.length + end : end;
  for (let i = start; i < end; i++) {
    arr.push(this[i]);
  }
  return arr;
};

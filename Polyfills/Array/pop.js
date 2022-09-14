Array.prototype.pop = function () {
  if (this.length === 0) return;
  let ele = this[this.length - 1];
  this.length -= 1;
  return ele;
};

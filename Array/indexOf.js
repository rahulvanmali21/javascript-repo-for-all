Array.prototype.indexOf = function (element) {
  if (this.length === 0 || element == undefined) {
    return -1;
  }
  for (let i = 0; i < this.length; i++) {
    if (this[i] === element) {
      return i;
    }
  }
};


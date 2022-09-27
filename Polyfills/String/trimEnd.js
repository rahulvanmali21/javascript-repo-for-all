String.prototype.trimEnd = function () {
  if (this.length < 1) {
    return this;
  }
  let output = "";
  let isTailCharfound = false;
  for (let index = this.length - 1; index >= 0; index--) {
    const ele = this[index];
    if (!isTailCharfound) {
      if (ele === " ") {
        continue;
      } else {
        isTailCharfound = true;
      }
    }
    output = ele + output;
  }
  return output;
};


String.prototype.trim = function () {
  let output = "";
  let start = 0;
  let end = this.length - 1;
  for (let index = 0; index < this.length; index++) {
    let element = this[index];
    if (element !== " ") {
      break;
    }
    start += 1;
  }
  if (start === end) {
    return "";
  }
  for (let index = this.length - 1; index >= 0; index--) {
    let element = this[index];
    if (element !== " ") {
      break;
    }
    end -= 1;
  }

  for (let i = start; i <= end; i++) {
    output += this[i];
  }
  return output;
};

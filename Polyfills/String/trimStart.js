String.prototype.trimStart = function () {
  let str = this;
  let headCleared = false;
  let output = "";
  for (let index = 0; index < str.length; index++) {
    let ele = str[index];
    if (!headCleared) {
      if (ele === "" || ele === " ") {
        continue;
      } else {
        headCleared = true;
      }
    }
    output += ele;
  }
  return output
};



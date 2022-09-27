String.prototype.endsWith = function (str) {
  let strArr = str.split("");
  let mainArr = this.split("");
  if (str && str.length <= this.length) {
    for (let index = 1; index <= str.length; index++) {
      if (mainArr.at(index * -1) !== strArr.at(index * -1)) {
        return false;
      }
    }
    return true;
  }
  return false;
};

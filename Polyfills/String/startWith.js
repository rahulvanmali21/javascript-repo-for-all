String.prototype.startsWith = function (str) {
  if (!str && str.length > this.length) return false;
  let mainStringArray = this.split("");
  let subStringArray = str.split("");
  for (let index = 0; index < subStringArray.length; index++) {
    if (mainStringArray[index] !== subStringArray[index]) {
      return false;
    }
    return true;
  }
};


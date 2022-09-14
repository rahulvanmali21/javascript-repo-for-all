Array.prototype.join = function (seperator = ",") {
  let result = "";
  for (let index = 0; index < this.length; index++) {
    result += (index != 0 ? seperator : "") + "" + this[index];
  }
  return result;
};

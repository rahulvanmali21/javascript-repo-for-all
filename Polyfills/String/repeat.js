String.prototype.repeat = function (num = 0) {
  if (num < 0 || isNaN(num)) {
    throw new Error(`Invalid count value: ${num}`);
  }
  let output = "" + this;
  for (let index = 0; index < num; index++) {
    output += this;
  }
  return output;
};

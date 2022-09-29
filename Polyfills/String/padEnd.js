String.prototype.padEnd = function (count, value = "") {
  let output = "" + this;
  if (count <= output.length) {
    return output;
  }
  let apendLength = count - output.length;
  let apendingString = "";

  for (let index = 0; index < apendLength; index++) {
    const char = value[index % value.length];
    apendingString += char;
  }

  return output + apendingString;
};

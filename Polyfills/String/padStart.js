String.prototype.padStart = function (count, value = "") {
  let output = "" + this;
  if (output.length >= count) {
    return output;
  }
  let prepandLength = count - output.length;
  let prepandingString = "";

  for (let index = 0; index < prepandLength; index++) {
    const char = value[index % value.length];
    prepandingString += char;
  }
  return prepandingString + output;
};

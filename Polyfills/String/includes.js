String.prototype.includes = function (searchString, position = 0) {
  if (this.length < 0) return false;
  if (this.length < searchString.length) return false;

  let searchStringPosition = 0;
  let match = 0;
  while (position < this.length) {
    if (this[position] === searchString[searchStringPosition]) {
      match += 1;
      position += 1;
      searchStringPosition += 1;
      if (match === searchString.length) return true;
    } else if (this[position] === searchString[0]) {
      searchStringPosition = 0;
      match = 0;
    } else {
      match = 0;
      searchStringPosition = 0;
      position++;
    }
  }
  return false;
};

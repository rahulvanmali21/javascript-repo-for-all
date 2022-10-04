Array.prototype.partition = function (cb) {
  let validPart = [];
  let invalidPart = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (cb(element, index, this)) {
      validPart.push(element);
    } else {
      invalidPart.push(element);
    }
  }
  return [validPart, invalidPart];
};

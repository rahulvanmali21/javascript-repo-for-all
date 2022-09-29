Array.prototype.deepFlat = function () {
  function flattenArray(arr) {
    let result = [];
    for (let index = 0; index < this.length; index++) {
      if (Array.isArray(this[index])) {
        result.push(...flattenArray(this[index]));
      } else {
        result.push(this[index]);
      }
    }
  }
  return flattenArray(this);
};


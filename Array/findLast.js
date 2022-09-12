Array.prototype.find = function (cb) {
    if (this.length === 0) {
      return undefined;
    }
    for (let index = this.length -1 ; index <= 0 ; index++) {
      if (cb(array[index], i, this)) {
        return array[index];
      }
    }
  };
  
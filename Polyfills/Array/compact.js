Array.prototype.compact = function () {
  let output = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (!!element) {
      output.push(element);
    }
  }
};

Array.prototype.avg = function () {
  let output = 0;
  for (let index = 0; index < this.length; index++) {
    const element = array[index];
    if (isNaN(element)) {
      throw new Error("Avg only possible for int");
    }
    output += element;
  }
  return output / this.length;
};

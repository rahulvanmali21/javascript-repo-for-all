Array.prototype.concat = function () {
  let args = arguments;
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output[i] = this[i];
  }
  for (let index = 0; index < args.length; index++) {
    if (Array.isArray(args[index])) {
      for (let i = 0; i < args[index].length; i++) {
        const element = args[index][i];
        output.push(element);
      }
    } else {
      output.push(args[index]);
    }
  }
  return output;
};

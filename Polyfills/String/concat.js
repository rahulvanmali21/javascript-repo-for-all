String.prototype = function (...args) {
  let output = this;
  args.forEach((arg) => {
    output += args;
  });
  return output;
};

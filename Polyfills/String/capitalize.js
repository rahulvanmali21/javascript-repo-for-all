String.prototype.capitalize = function (context) {
  let string = context || this;
  return string[0].toUpperCase() + string.slice(1);
};

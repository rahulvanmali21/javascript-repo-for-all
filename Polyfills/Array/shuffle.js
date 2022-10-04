Array.prototype.shuffle = function () {
  for (let index = 0; index < this.length; index++) {
    let newIndex = Math.floor(Math.random() * (index + 1));
    [this[index], this[newIndex]] = [this[newIndex], this[index]];
  }
};

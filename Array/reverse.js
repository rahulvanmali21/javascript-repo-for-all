Array.prototype.myReverse = function () {
  if (this.length > 0) {
    let n = this.length;
    for (let i = 0; i < this.length / 2 ; i++) {
      [this[i], this[n - 1 - i]] = [this[n - 1 - i], this[i]];
    }
  }
};

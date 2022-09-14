class List {
  #collection = {};
  length = 0;
  remove() {
    if (this.length === 0) return;
    let element = this.#collection[this.length];
    delete this.#collection[this.length];
    this.length -= 1;
    return element;
  }
  add(element) {
    this.length += 1;
    this.#collection[this.length] = element;
  }
  *[Symbol.iterator]() {
    for (let i = 1; i <= this.length; i++) {
      yield this.#collection[i];
    }
  }
}

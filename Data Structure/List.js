class List {
  #collection = {};
  length = 0;
  constructor(array) {
    for (let index = 0; index < array.length; index++) {
      this.add(array[index]);
    }
  }
  remove() {
    if (this.length === 0) return;
    let element = this.#collection[this.length];
    delete this.#collection[this.length];
    this.length -= 1;
    return element;
  }
  add(element) {
    this.#collection[this.length] = element;
    this.length += 1;
  }
  forEach(cb) {
    for (let index = 0; index < this.length; index++) {
      cb?.(this.#collection[index], index);
    }
  }
  map(cb) {
    let output = new List();
    for (let index = 0; index < this.length; index++) {
      output.add(cb?.(this.#collection[index], index));
    }
    return output;
  }

  reduce(cb, inital) {
    let accumulator = inital ?? null;
    for (let index = 0; index < this.length; index++) {
      accumulator = !accumulator
        ? this.#collection[index]
        : cb?.(accumulator, this.#collection[index], index);
    }
    return accumulator;
  }
  toArray() {
    return Object.values(this.#collection);
  }
  at(index) {
    if (this.length - 1 < index || isNaN(index)) {
      return undefined;
    }
    if (index < 0) {
      return this.#collection[this.length + index];
    }
    return this.#collection[index];
  }

  filter(cb) {
    let output = new List();
    for (let index = 0; index < this.length; index++) {
      if (cb?.(this.#collection[index], index)) {
        output.add(this.#collection[index]);
      }
    }
    return output;
  }
  *[Symbol.iterator]() {
    for (let i = 0; i < this.length; i++) {
      yield this.#collection[i];
    }
  }
}

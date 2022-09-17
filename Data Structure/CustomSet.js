class CustomSet {
  #data = {};
  size = 0;
  constructor(array) {
    if (Array.isArray(array)) {
      for (let index = 0; index < array.length; index++) {
        this.#data[array[index]] = true;
      }
      this.size = Object.keys(this.#data).length;
    }
  }
  add(ele) {
    if (!ele) return;
    if (!this.#data[ele]) {
      this.size += 1;
    }
    this.#data[ele] = true;
  }
  delete(ele) {
    if (!ele) return;
    if (this.#data[ele]) {
      delete this.#data[ele];
      this.size -= 1;
    }
  }
  forEach(cb) {
    let entries = Object.keys(this.#data);
    for (let index = 0; index < entries.length; index++) {
      const element = array[index];
      cb(element, index);
    }
  }
  has(ele) {
    return this.#data[ele] ?? false;
  }
  entries() {
    return Object.keys(this.#data);
  }
  *[Symbol.iterator]() {
    for (let value in this.#data) {
      yield value;
    }
  }
}

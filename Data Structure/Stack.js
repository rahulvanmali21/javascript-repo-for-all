class Stack {
  #data = [];
  pop() {
    return this.#data.pop();
  }
  push(ele) {
    this.#data.push(ele);
  }
  top() {
    return this.#data[0];
  }
  isEmpty() {
    return this.#data.length === 0;
  }
  size() {
    return this.#data.length;
  }
}

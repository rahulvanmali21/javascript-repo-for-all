class Queue {
  #data = {};
  #start = 0;
  #end = 0;
  #capacity = 0;
  constructor(capacity) {
    this.#capacity = capacity;
  }
  isFull() {
    return this.#capacity === this.size();
  }
  isEmpty() {
    return this.size() === 0;
  }
  size() {
    return this.#end - this.#start;
  }
  peek() {
    if (this.isEmpty()) return;
    let ele = this.#data[this.#start];
    return ele;
  }
  enqueue(ele) {
    if (this.isFull()) return;
    this.#data[this.#end] = ele;
    this.#end += 1;
  }
  dequeue() {
    if (this.isEmpty()) return;
    let ele = this.#data[this.#start];
    delete this.#data[this.#start];
    this.#start += 1;
    return ele;
  }
}

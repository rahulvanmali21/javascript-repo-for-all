class CircularQueue {
  #data = [];
  #capacity = 0;
  #currentSize = 0;
  #start = -1;
  #end = -1;
  constructor(capacity) {
    this.#capatiy = capacity;
  }
  isFull() {
    return this.#currentSize === this.#capacity - 1;
  }
  isEmpty() {
    return this.#currentSize === 0;
  }
  enqueue(ele) {
    if (this.isFull) return;
    this.#currentSize += 1;
    this.#end = this.#end + (1 % this.#capacity);
    this.#start = this.#start === -1 ? 0 : this.#start;
    this.#data[this.#end] = ele;
  }
  dequeue() {
    if (this.isEmpty) return;
    this.#currentSize -= 1;
    const item = this.#data[this.#start];
    this.#data[this.#start] = null;
    this.#start = this.#start + (1 % this.#capacity);
    if (this.#currentSize === 0) {
      this.#start = -1;
      this.#end = -1;
    }
    return item;
  }
}

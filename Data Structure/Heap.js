class Heap {
  constructor(type = "MAX_HEAP") {
    this.data = [];
    this.comparator =
      type === "MAX_HEAP" ? this.greaterThanOrEqual : this.LessThanOrEqual;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  parent(childIndex) {
    return this.data[this.getParentIndex(childIndex)];
  }
  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }
  leftChild(parentIndex) {
    return this.data[this.getLeftChildIndex(parentIndex)];
  }
  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }
  rightChild(parentIndex) {
    return this.data[this.getRightChildIndex(parentIndex)];
  }
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0;
  }
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.data.length;
  }

  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.data.length;
  }

  swap(index1, index2) {
    [this.data[index1], this.data[index2]] = [
      this.data[index2],
      this.data[index1],
    ];
  }
  greaterThanOrEqual(a, b) {
    return a > b || a === b;
  }
  LessThanOrEqual(a, b) {
    return a < b || a === b;
  }

  add(item) {
    this.data[this.data.length] = item;
    this.#heapifyUp();
    return this;
  }

  poll() {
    const maxValue = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length -= 1;
    this.#heapifyDown();
    return maxValue;
  }
  #heapifyUp() {
    let currentIndex = this.data.length - 1;
    while (
      this.comparator(
        this.data[currentIndex],
        this.data[this.getParentIndex(currentIndex)]
      )
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }
  #heapifyDown() {
    let currentIndex = 0;
    while (this.leftChild(currentIndex) !== undefined) {
      let childIndex = this.getLeftChildIndex(currentIndex);
      if (
        this.rightChild(currentIndex) !== undefined &&
        this.comparator(
          this.rightChild(currentIndex),
          this.leftChild(currentIndex)
        )
      ) {
        childIndex = this.getRightChildIndex(currentIndex);
      }
      if (
        this.comparator(this.data[childIndex], this.data[currentIndex])
      ) {
        this.swap(currentIndex, biggestChildIndex);
        currentIndex = biggestChildIndex;
      } else {
        return null;
      }
    }
  }
}

module.exports = Heap;


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    }
    this.head = node;
    node.next = this.head;
    this.size += 1;
  }
  insertAt(value, index) {
    if (!index || index > this.size || index < 0) return;
    if (index === 0) {
      this.prepend(value);
      return;
    }
    if (index === this.size) {
      this.append(value);
      return;
    }
    let node = new Node(value);
    let currentIndex = 0;
    let current = this.head;
    while (currentIndex < index - 1) {
      current = current.next;
      currentIndex++;
    }

    node.next = current.next;
    current.next = node;
    this.size += 1;
  }
  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size += 1;
  }
  removeFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size -= 1;
    return value;
  }
  removeEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next != this.tail) {
        prev = pre.next;
      }
      prev.next = null;
      this.tail = prev;
    }
  }

  removeFrom(index) {
    if (index < 0 && index > this.size) return null;
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let currentIndex = 0;
      let prev = this.head;
      while (currentIndex < index - 1) {
        prev = prev.next;
        currentIndex += 1;
      }
      removeNode = prev.next;
      prev.next = removeNode?.next ?? null;
    }
    this.size--;
    return removeNode.value;
  }
  removeValue(value) {
    if (this.isEmpty() || !value) return;
    let prev = this.head;
    if (prev.value === value) {
      this.head = prev.next;
      this.size -= 1;
      return prev.value;
    }
    while (prev.next && prev.next.value !== value) {
      prev = prev.next;
    }
    if (prev.next) {
      let removeNode = prev.next;
      prev.next = removeNode.next;
      this.size -= 1;
    }
  }
  search(value) {
    if (this.isEmpty() || !value) return false;
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }
    return false;
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  print() {
    if (this.isEmpty()) {
      console.log("list is empty");
      return;
    }
    let current = this.head;
    let valuesToPrint = "";
    while (current) {
      valuesToPrint += current.value + " -> ";
      current = current.next;
    }
    valuesToPrint += "null";
    console.log(valuesToPrint);
  }
}

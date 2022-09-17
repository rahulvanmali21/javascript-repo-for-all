const Queue = require("./Queue");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.#insertNode(this.root, node);
    }
  }
  #insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.#insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        root.right = newNode;
      } else {
        this.#insertNode(root.right, newNode);
      }
    }
  }
  search(value) {
    return this.searchNode(this.root, value);
  }
  searchNode(root, value) {
    if (!root) {
      return false;
    }
    if (root.value === value) {
      return true;
    } else if (root.value > value) {
      return this.searchNode(root.left, value);
    } else {
      return this.searchNode(root.right, value);
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  inOrder(root) {
    if (root) {
      this.preOrder(root.left);
      console.log(root.value);
      this.preOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.preOrder(root.left);
      this.preOrder(root.right);
      console.log(root.value);
    }
  }
  levelOrder() {
    const queue = new Queue(Infinity);
    queue.enqueue(this.root);
    while (queue.size() > 0) {
      let current = queue.dequeue();
      console.log(current.value);
      if (current.left) {
        queue.enqueue(current.left);
      }
      if (current.right) {
        queue.enqueue(current.right);
      }
    }
  }
}
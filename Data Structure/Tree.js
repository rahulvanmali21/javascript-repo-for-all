const Queue = require("./Queue");
class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let treeValues = [];
    function preOrderHelper(node) {
      treeValues.push(node.value);
      if (node.children.length !== 0) {
        node.children.forEach((child) => {
          preOrderHelper(child);
        });
      }
      return true;
    }
    preOrderHelper(this.root);
    console.log(treeValues.join());
    return treeValues;
  }

  postOrder() {
    let treeValues = [];
    const postOrderHelper = (node) => {
      if (node.children.length !== 0) {
        node.children.forEach((child) => {
          postOrderHelper(child);
        });
      }
      treeValues.push(node.value);
      return true;
    };
    postOrderHelper(this.root);
    console.log(treeValues.join());
    return treeValues;
  }
  inOrder() {
    let treeValues = [];
    const inOrderHelper = (node) => {
      if (node.children.length > 0) {
        const halfway = Math.floor(node.children.length / 2);
        for (let i = 0; i < halfway; i++) {
          inOrderHelper(node.children[i]);
        }
        treeValues.push(node.value);
        for (let i = halfway; i < node.children.length; i++) {
          inOrderHelper(node.children[i]);
        }
      } else {
        treeValues.push(node.value);
      }
    };

    inOrderHelper(this.root);
    console.log(treeValues.join());
    return treeValues;
  }

  levelOrder() {
    let treeValues = [];
    let queue = new Queue();
    let node = this.root;
    queue.enqueue(node);
    while (!queue.isEmpty()) {
      let node = queue.dequeue();
      treeValues.push(node.value);
      node.children.forEach((child) => queue.enqueue(child));
    }
    console.log(treeValues.join());
    return treeValues
  }
}

const testTree = new Tree();

testTree.root = new TreeNode("H");
testTree.root.children.push(new TreeNode("e"));
testTree.root.children.push(new TreeNode("l"));
testTree.root.children[0].children.push(new TreeNode("m"));
testTree.root.children[0].children.push(new TreeNode("o"));
testTree.root.children[0].children.push(new TreeNode("W"));
testTree.root.children[1].children.push(new TreeNode("q"));
testTree.root.children[1].children.push(new TreeNode("r"));
testTree.root.children[1].children.push(new TreeNode("g"));
testTree.root.children[1].children.push(new TreeNode("d"));
testTree.postOrder(); // m,o,W,e,q,r,g,d,l,H
testTree.preOrder();  // H,e,m,o,W,l,q,r,g,d
testTree.inOrder();   // m,e,o,W,H,q,r,l,g,d
testTree.levelOrder(); // H,e,l,m,o,W,q,r,g,d



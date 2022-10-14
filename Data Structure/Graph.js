const Stack = require("./Stack");
const Queue = require("./Queue");
class Graph {
  constructor(directed = false) {
    this.directed = directed;
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEgde(vertex_1, vertex_2) {
    if (!this.adjacencyList[vertex_1]) {
      this.addVertex(vertex_1);
    }
    this.adjacencyList[vertex_1].add(vertex_2);
    if (!this.directed) {
      if (!this.adjacencyList[vertex_2]) {
        this.addVertex(vertex_2);
      }
      this.adjacencyList[vertex_2].add(vertex_1);
    }
  }
  hasEdge(vertex_1, vertex_2) {
    return (
      this.adjacencyList[vertex_1]?.has(vertex_2) &&
      this.adjacencyList[vertex_2]?.has(vertex_1)
    );
  }
  display() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
  removeEdge(vertex_1, vertex_2) {
    this.adjacencyList[vertex_1].delete(vertex_2);
    this.adjacencyList[vertex_2].delete(vertex_1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList;
  }
  depthFirstSearch(vertex) {
    let visited = new Set();
    let stack = new Stack();
    stack.push(vertex);
    while (!stack.isEmpty()) {
      let current = stack.pop();
      visited.add(current);
      this.adjacencyList[current].forEach((node) => {
        if (!visited.has(node)) {
          stack.push(node);
        }
      });
    }
    return [...visited];
  }

  breathfirstSearch(vertex) {
    let visited = new Set();
    let queue = new Queue();
    queue.enqueue(vertex);
    while (!queue.isEmpty()) {
      let current = queue.dequeue();
      visited.add(current);
      this.adjacencyList[current].forEach((node) => {
        if (!visited.has(node)) {
          queue.enqueue(node);
        }
      });
    }
    return [...visited];
  }

  hasPathDFS(src, target) {
    if (!(src in this.adjacencyList) || !(target in this.adjacencyList)) {
      return false;
    }
    if (src === target) return true;
    for (const neighbor of this.adjacencyList[src]) {
      if (this.hasPathDFS(neighbor, target)) return true;
    }
    return false;
  }

  hasPathBFS(src, target) {
    if (!(src in this.adjacencyList) || !(target in this.adjacencyList)) {
      return false;
    }
    let queue = new Queue();
    let visited = new Set();
    queue.enqueue(src);
    while (!queue.isEmpty()) {
      let current = queue.dequeue();
      visited.add(current);
      for (let node of this.adjacencyList[current]) {
        if (node === target) return true;
        if (!visited.has(node)) {
          queue.enqueue(node);
        }
      }
    }
    return false;
  }
}

let graph = new Graph(true);
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEgde("A", "B");
graph.addEgde("A", "C");
graph.addEgde("B", "D");
graph.addEgde("C", "E");

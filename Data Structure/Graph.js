class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList = new Set();
    }
  }
  addEgde(vertex_1, vertex_2) {
    if (!this.adjacencyList[vertex_1]) {
      this.addVertex(vertex_1);
    }
    if (!this.adjacencyList[vertex_2]) {
      this.addVertex(vertex_2);
    }
    this.adjacencyList[vertex_1].add(vertex_2)
    this.adjacencyList[vertex_2].add(vertex_1)
  }
}

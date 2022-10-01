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
    this.adjacencyList[vertex_1].add(vertex_2);
    this.adjacencyList[vertex_2].add(vertex_1);
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
}

class Graph{
  constructor(edgeDirection){
    this.nodes = new Map()
    this.edgeDirection = edgeDirection
  }
  addVertex(circ,value){
    if(this.nodes.has(value)){
      return this.nodes.get(value)
    } else {
      const vertex = new Node(circ,value)
      this.nodes.set(value,vertex)
      return vertex
    }
  }
  addEdge(source,destination,weight){
      source.addAdjacent(destination,weight)
      if (this.edgeDirection == Graph.UNDIRECTED){
        destination.addAdjacent(source,weight)
      }
      return [source, destination, weight]
  }
}
Graph.UNDIRECTED = Symbol('directed graph'); // one-ways edges
Graph.DIRECTED = Symbol('undirected graph'); // two-way edges

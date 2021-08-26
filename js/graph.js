class Graph{
  constructor(edgeDirection){
    this.nodes = new Map()
    this.edgeDirection = edgeDirection
  }
  addVertex(value){
    if(this.nodes.has(value)){
      return this.nodes.get(value)
    } else{
      const vertex = new Node(value)
      this.nodes.set(value,vertex)
      return vertex
    }
  }
  addEdge(source,destination,weight){
    const sourceNode = this.addVertex(source)
    const destNode = this.addVertex(destination)

    sourceNode.addAdjacent(destNode,weight)

    if (this.edgeDirection == Graph.UNDIRECTED){
      destNode.addAdjacent(sourceNode,weight)
    }
    return [sourceNode, destNode]
  }
}
Graph.UNDIRECTED = Symbol('directed graph'); // two-ways edges
Graph.DIRECTED = Symbol('undirected graph'); // one-way edges

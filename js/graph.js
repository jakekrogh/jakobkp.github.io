class Graph{
  constructor(edgeDirection){
    this.nodes = new Map()
    this.edgeDirection = edgeDirection
  }
  addVertex(x,y,value){
    if(this.nodes.has(value)){
      return this.nodes.get(value)
    } else{
      const vertex = new Node(x,y,value)
      this.nodes.set(value,vertex)
      return vertex
    }
  }
  addEdge(source,destination,weight){
      sourceNode.addAdjacent(destNode,weight)

      if (this.edgeDirection == Graph.UNDIRECTED){
        destNode.addAdjacent(sourceNode,weight)
      }
      return [sourceNode, destNode, weight]
  }
}
Graph.UNDIRECTED = Symbol('directed graph'); // one-way edges
Graph.DIRECTED = Symbol('undirected graph'); // two-ways edges

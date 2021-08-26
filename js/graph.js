class Graph{
  constructor(edgeDirection){
    this.nodes = new Map()
    this.edgeDirection = edgeDirection
  }
  addVertex(x,y,value){
    if(this.nodes.has(value)){
      return this.nodes.get(value)
    } else if (x == -1 && y == -1) {
        return null;
    } else{
      const vertex = new Node(x,y,value)
      this.nodes.set(value,vertex)
      return vertex
    }
  }
  addEdge(source,destination,weight){
    const sourceNode = this.addVertex(-1,-1,source)
    const destNode = this.addVertex(-1,-1,destination)

    sourceNode.addAdjacent(destNode,weight)

    if (this.edgeDirection == Graph.UNDIRECTED){
      destNode.addAdjacent(sourceNode,weight)
    }
    return [sourceNode, destNode, weight]
  }
}
Graph.UNDIRECTED = Symbol('directed graph'); // two-ways edges
Graph.DIRECTED = Symbol('undirected graph'); // one-way edges

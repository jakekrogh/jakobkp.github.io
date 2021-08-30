class Graph{
  constructor(edgeDirection){
    // array of nodes [["0",vert0], ["1",vert1]]
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

  removeVertex(value){
    let temp = this.nodes.get(value)
    if (temp){
      for (const node of this.nodes.values()){
        node.removeAdjacent(temp)
      }
    }
    return this.nodes.delete(value)
  }

  removeEdge(source,destination){
    source.removeAdjacent(destination)
    if (this.edgeDirection == Graph.UNDIRECTED){
      destination.removeAdjacent(source)
    }
    return [source, destination]
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

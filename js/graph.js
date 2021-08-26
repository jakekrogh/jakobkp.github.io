class Graph{
  constructor(edgeDirection){
    this.nodes = new Map()
    this.edgeDirection = edgeDirection
  }
  addVertex(x,y,value){
    if(this.nodes.has(value)){
      return this.nodes.get(value)
    // test at ingen vertex bliver oprettet hvis der er givet forkerte source og dest fra add edge.
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
    // test at edge kun bliver added, hvis source og destination eksisterer.
    if (sourceNode != null){
      sourceNode.addAdjacent(destNode,weight)

      if (this.edgeDirection == Graph.UNDIRECTED){
        destNode.addAdjacent(sourceNode,weight)
      }
      console.log("we return corerctly")
      return [sourceNode, destNode, weight]
    } else return null

  }
}
Graph.UNDIRECTED = Symbol('directed graph'); // two-ways edges
Graph.DIRECTED = Symbol('undirected graph'); // one-way edges

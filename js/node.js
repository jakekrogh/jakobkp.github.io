class Node{
  constructor(circ,value){
    this.value = value
    this.circ = circ
    this.adj = []
  }
  addAdjacent(node,weight){
    this.adj.push([node,weight])
  }

  removeAdjacent(node){
    var adjIndex = this.adj.indexOf(node)
    if (adjIndex != -1){
      this.adj.splice(adjIndex,1)
      return node
    }
  }

  getAdjacents(){
    return this.adj
  }

  isAdjacent(node){
    return this.adj.indexOf(node) > -1
  }
}
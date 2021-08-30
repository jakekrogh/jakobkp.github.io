class Node{
  constructor(circ,value){
    this.value = value
    this.circ = circ
    this.adj = []
  }
  addAdjacent(node,weight){
    this.adj.push([node,weight])
  }
}
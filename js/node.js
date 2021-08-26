class Node{
  constructor(value){
    this.value = value;
    this.adj = []
  }
  addAdjacent(node,weight){
    this.adj.push([node,weight])
  }
}
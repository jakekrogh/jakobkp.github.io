class Node{
  constructor(x,y,value){
    this.value = value;
    this.x = x;
    this.y = y;
    this.adj = []
  }
  addAdjacent(node,weight){
    this.adj.push([node,weight])
  }
}
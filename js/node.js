class Node{
  constructor(circ,value){
    this.value = value
    this.circ = circ
    this.adj = new Map()
  }
  addAdjacent(destnode,edge){
    this.adj.set(destnode,edge)
  }

  removeAdjacent(node){
    var temp = this.adj.get(node)
    if (temp){
      this.adj.delete(node)
    }
  }

  getAdjacents(){
    return this.adj
  }

  isAdjacent(node){
    if (this.adj.get(node)){
      return true
    } else false
  }
}
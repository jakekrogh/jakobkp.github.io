
// setup config variables and start the program
canvas = document.getElementById("layer0");
ctx = layer0.getContext("2d");

var counter = 0
var direction = Graph.UNDIRECTED
var graph = new Graph(direction)

function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  for (const nodes of graph.nodes.entries()){
    nodes[1].circ.draw(ctx);
    for(const adjNodes of nodes[1].adj.entries()){
      adjNodes[1].draw(ctx)
    }
  }
}

// add vertex
canvas.addEventListener('click', function(event){
  var rect = canvas.getBoundingClientRect()
  var x = (event.clientX - rect.left)
  var y = (event.clientY - rect.top)

  let circ = new Circle(x,y,20,"rgb(169,169,169)",counter)
  graph.addVertex(circ,counter)
  draw()
  counter++
})
// remove vertex
canvas.addEventListener('contextmenu', function(event){
  event.preventDefault()
  if(graph.nodes.size != 0 ){
    var rect = canvas.getBoundingClientRect()
    var pointx = (event.clientX - rect.left)
    var pointy = (event.clientY - rect.top)
    let min = 0
    let minNodeVal
    for (const entry of graph.nodes.entries()){
      let nodeval = entry[0]
      let nodecirc = entry[1].circ
      let val = (pointx-nodecirc.x)**2+(pointy-nodecirc.y)**2-nodecirc.rad**2
      if (val < min){
        min = val
        minNodeVal = nodeval
      }
    }
    if (min == 0){
      console.log("no nodes at cursor.")
    } else{
      graph.removeVertex(minNodeVal)
      draw()
    }
  } else{
    console.log("no nodes that can be deleted. There are no nodes")
  }
})

// add edge
function edgeAdder(){
  // get string from input boxes
  var vert1 = (document.getElementById("vert1").value);
  var vert2 = (document.getElementById("vert2").value);
  var edgew = (document.getElementById("edgeWeight").value);
  // test if it is only digits
  let isnumv1 = /^\d+$/.test(vert1)
  let isnumv2 = /^\d+$/.test(vert2)
  let isnumedgew = /^\d+$/.test(edgew)

  if (isnumv1 && isnumv2  && isnumedgew ){
    if(vert1 != vert2){
      v1 = graph.nodes.get(parseInt(vert1))
      v2 = graph.nodes.get(parseInt(vert2))
      // check that the given vertices exist
      if (v1 != null && v2 != null){
        if(v1.adj.get(v2)){
          // lav om til error output 
          console.log("there is already an edge between the given vertices")
        } else{
          // add and draw edge
          let edge = new Edge(v1.circ.x,v1.circ.y,v2.circ.x,v2.circ.y,edgew)
          const newedge = graph.addEdge(v1,v2,edge)
          draw()
        }
      } 
      else{
        // lav om til error output
        console.log("One of the given vertices dont exist.")
      }
    } else{
      // lav om til error input
      console.log("You cannot create an edge that starts and ends in the same vertex ( not yet..)")
    }
  } else{
    // lav om til error output
    console.log("Not all input values are numbers");
  }
}

function edgeRemover(){
  // get string from input boxes
  var rvert1 = (document.getElementById("rvert1").value);
  var rvert2 = (document.getElementById("rvert2").value);
  // test if it is only digits
  let isnumv1 = /^\d+$/.test(rvert1)
  let isnumv2 = /^\d+$/.test(rvert2)

  if (isnumv1 && isnumv2){
    v1 = graph.nodes.get(parseInt(rvert1))
    v2 = graph.nodes.get(parseInt(rvert2))
    // check that the given vertices exist
    if (v1 != null && v2 != null){
      // add and draw edge
      const newedge = graph.removeEdge(v1,v2)
      draw()
    } else{
      // lav om til error output
      console.log("One of the given vertices dont exist.")
    }
  } else{
    // lav om til error output
    console.log("Not all input values are numbers");
  }
}

function graphReset(){
  graph = new Graph(direction)
  draw()
}
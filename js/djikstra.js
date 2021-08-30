
// setup config variables and start the program
var canvas = document.getElementById("canv")
var ctx = canvas.getContext('2d')
var canvLeft = canvas.offsetLeft + canvas.clientLeft
var canvTop = canvas.offsetTop + canvas.clientTop
var step = 20
var counter = 0
var graph = new Graph(Graph.UNDIRECTED)

var drawGrid = function(){
  var w = canvas.width
  var h = canvas.height
  ctx.beginPath(); 
  for (var x=0;x<=w;x+=step) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
  }
  // set the color of the line
  ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  ctx.lineWidth = 1;
  // the stroke will actually paint the current path 
  ctx.stroke(); 
  // for the sake of the example 2nd path
  ctx.beginPath(); 
  for (var y=0;y<=h;y+=step) {
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
  }
  // set the color of the line
  ctx.strokeStyle = 'rgba(0,0,0,0.5)';
  ctx.lineWidth = 1;

  ctx.stroke(); 
};

// add vertex
canvas.addEventListener('click', function(event){
  var x = (event.pageX - canvLeft)
  var y = (event.pageY - canvTop)
  let circ = new Circle(x,y,20,"rgb(169,169,169)")
  circ.draw(counter)
  graph.addVertex(circ,counter)

  // ctx.lineWidth = 4
  // ctx.strokeStyle = 'rgb(0,0,0)'
  // ctx.stroke()
  // ctx.font = 'bold 12pt  Serif';
  // ctx.fillStyle = 'white';
  // ctx.textAlign = 'center';
  // ctx.fillText(counter.toString(),x,y+4);
  counter++
})
// remove vertex
canvas.addEventListener('contextmenu', function(event){
  event.preventDefault()
  var pointx = (event.pageX - canvLeft)
  var pointy = (event.pageY - canvTop)
  let inCircle = []
  for (const entry of graph.nodes.entries()){
    let nodecirc = entry[1].circ
    let val = (pointx-nodecirc.x)**2+(pointy-nodecirc.y)**2-nodecirc.rad**2
    inCircle.push(val)
  }
  let minIndex = indexofMin(inCircle)
  const iter = graph.nodes.entries()
  let minVal = -1
  for (i = 0; i <= minIndex; i++){
    minVal = iter.next().value[0]
  }
  let remNode = graph.nodes.get(minVal).circ
  ctx.beginPath()
  ctx.arc(remNode.x,remNode.y, remNode.rad+3, 0, 2 * Math.PI)
  ctx.fillStyle = "#f8f8f8";
  ctx.fill();
  
  for (const entry of graph.nodes.entries()){
    if (entry[0] != minVal){
      let inode = entry[1]
      let centerDist = Math.sqrt((remNode.x-inode.circ.x)**2+(remNode.y-inode.circ.y)**2) 
      let radSum = inode.circ.rad+remNode.rad
      if (centerDist < radSum){
        inode.circ.draw(inode.value)
      }
    }
  }
  graph.removeVertex(minVal)
})

function indexofMin(arr){
  if (arr.length == 0){
    return -1
  }
  var minIndex = 0
  var minVal = arr[0]
  for (var i = 0; i < arr.length; i++){
    if(arr[i] < minVal){
      minIndex = i
      minVal = arr[i]
    }
  }
  return minIndex
}

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
    v1 = graph.nodes.get(parseInt(vert1))
    v2 = graph.nodes.get(parseInt(vert2))
    // check that the given vertices exist
    if (v1 != null && v2 != null){
      // add and draw edge
      const newedge = graph.addEdge(v1,v2,parseInt(edgew))
      ctx.beginPath();
      ctx.moveTo(v1.circ.x+20,v1.circ.y); 
      ctx.lineTo(v2.circ.x-20,v2.circ.y);
      ctx.stroke();
    } else{
      // lav om til error output
      console.log("One of the given vertices dont exist.")
    }
  } else{
    // lav om til error output
    console.log("Not all input values are numbers");
  }
}
function edgeRemover(){
  var vert1 = (document.getElementById("rvert1").value);
  var vert2 = (document.getElementById("rvert2").value);
  let isnumv1 = /^\d+$/.test(vert1)
  let isnumv2 = /^\d+$/.test(vert2)
  if (isnumv1 && isnumv2 ){
    v1 = graph.nodes.get(parseInt(vert1))
    v2 = graph.nodes.get(parseInt(vert2))
    if (v1 != null && v2 != null){
      const newedge = graph.removeEdge(v1,v2)
      ctx.beginPath();
      ctx.moveTo(v1.circ.x+20,v1.circ.y); 
      ctx.lineTo(v2.circ.x-20,v2.circ.y);
      ctx.strokeStyle = "#f8f8f8"
      ctx.stroke();
    }
  }
}
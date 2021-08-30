
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
//drawGrid()

canvas.addEventListener('click', function(event){
  var x = (event.pageX - canvLeft)
  var y = (event.pageY - canvTop)
  let circ = new Circle(x,y,20,"rgb(169,169,169)")
  circ.draw(counter)
  graph.addVertex(circ,counter)
  // ctx.beginPath()
  // ctx.arc(x,y, 20, 0, 2 * Math.PI)
  // ctx.fillStyle = "rgb(169,169,169)";
  // ctx.fill();
  // ctx.lineWidth = 4
  // ctx.strokeStyle = 'rgb(0,0,0)'
  // ctx.stroke()
  // ctx.font = 'bold 12pt  Serif';
  // ctx.fillStyle = 'white';
  // ctx.textAlign = 'center';
  // ctx.fillText(counter.toString(),x,y+4);
  counter++
})

canvas.addEventListener('contextmenu', function(event){
  console.log("the event happens.")
  var pointx = (event.pageX - canvLeft)
  var pointy = (event.pageY - canvTop)
  let inCircle = []
  console.log("graph length:" + graph.nodessize)
  for (var i = 0; i < graph.nodes.size; i++){
    console.log("we get in for loop")
    let val = (pointx**2+pointy**2-(graph.nodes.get(i).circ.rad)**2)
    console.log(val)
    inCircle.push(val)
  }
  console.log(inCircle)
})

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
    v1 = graph.nodes.get(ParseInt(vert1))
    v2 = graph.nodes.get(ParseInt(vert2))
    // check that the given vertices exist
    if (v1 != null && v2 != null){
      // add and draw edge
      const newedge = graph.addEdge(v1,v2,ParseInt(edgew))
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

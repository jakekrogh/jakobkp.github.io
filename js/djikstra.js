
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

function edgeAdder(){
  console.log("the function is called")
  var vert1 = parseInt(document.getElementById("vert1").value);
  var vert2 = parseInt(document.getElementById("vert2").value);
  var edgew = parseInt(document.getElementById("edgeWeight").value);
  if (Number.isInteger(vert1) && Number.isInteger(vert2)  && Number.isInteger(edgew) ){
    console.log("all input values are numbers")
    v1 = graph.nodes.get(vert1)
    v2 = graph.nodes.get(vert2)

    if (v1 != null && v2 != null){
      console.log("the nodes exists")
      const newedge = graph.addEdge(v1,v2,edgew)
      ctx.beginPath();
      ctx.moveTo(v1.circ.x+20,v1.circ.y); 
      ctx.lineTo(v2.circ.x-20,v2.circ.y);
      ctx.stroke();
      console.log("edge has been drawn at " + v1.x + "," +v1.y +"and" + v2.x + "," +v2.y)
    } else{
      // lav om til error output
      console.log("One of the given vertices dont exist.")
    }
  } else{
    // lav om til error output
    console.log("Not all input values are numbers");
  }
}

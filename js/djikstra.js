
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
  graph.addVertex(counter)
  counter++
  var x = (event.pageX - canvLeft)
  var y = (event.pageY - canvTop)
  ctx.beginPath()
  ctx.arc(x,y, 20, 0, 2 * Math.PI)
  ctx.fillStyle = "rgb(169,169,169)";
  ctx.fill();
  ctx.lineWidth = 4
  ctx.strokeStyle = 'rgb(0,0,0)'
  ctx.stroke()
  ctx.font = 'bold 12pt  Serif';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(counter.toString(),x,y+4);
})

function edgeAdder(){
  var txtValue = document.getElementById("edgeInput").value;
  if ((txtValue)){
    console.log((txtValue));
  } else{
    console.log("Please enter the integer value..");
  }

}

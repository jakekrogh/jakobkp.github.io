
// setup config variables and start the program
var canvas = document.getElementById("canv")
var ctx = canvas.getContext('2d')
var step = 20

var drawGrid = function(){
  var w = canvas.width
  var h = canvas.height
  ctx.beginPath(); 
  for (var x=0;x<=w;x+=step) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
  }
  // set the color of the line
  ctx.strokeStyle = 'rgb(0,0,0)';
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
  ctx.strokeStyle = 'rgb(0,0,0)';
  ctx.lineWidth = 1;

  ctx.stroke(); 
};
drawGrid()

canvas.addEventListener('click', function(event){
  console.log(event.pageX)
  console.log(event.pageY)
  ctx.beginPath();
  ctx.rect(event.pageX,event.pageY, 150, 100);
  ctx.stroke();
})
var tgrap = new Graph(Graph.UNDIRECTED)
tgrap.addVertex(1)
tgrap.addVertex(2)
tgrap.addEdge(1,2,4)
tgrap.addEdge(2,3,5)
console.log(tgrap.nodes)

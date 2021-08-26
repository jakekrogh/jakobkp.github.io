// initialize config variables here
let canvas, ctx

// setup config variables and start the program
function init () {
  canvas = document.getElementById('canv')
  ctx = canvas.getContext('2d')
}

var drawGrid = function(w, h, id) {
  ctx.canvas.width  = w;
  ctx.canvas.height = h;


  for (x=0;x<=w;x+=20) {
      for (y=0;y<=h;y+=20) {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, h);
          ctx.stroke();
          ctx.moveTo(0, y);
          ctx.lineTo(w, y);
          ctx.stroke();
      }
  }

};

// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init)

console.log(3+2)

drawGrid(500,500,'canv')
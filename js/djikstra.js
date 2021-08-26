// initialize config variables here
var canvas, ctx

// setup config variables and start the program
function init () {
  canvas = document.getElementById('canv')
  ctx = canvas.getContext('2d')
}

// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init)

console.log(3+2)

for (x=0;x<=ctx.canvas.width;x+=20) {
  for (y=0;y<=ctx.canvas.height;y+=20) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
  }
}

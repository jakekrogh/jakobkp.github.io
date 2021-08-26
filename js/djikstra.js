// initialize config variables here
var canvas, ctx

// setup config variables and start the program
if( document.readyState !== 'loading' ) {
  console.log( 'document is already ready, just execute code here' );
  canvas = document.getElementById('canv')
  ctx = canvas.getContext('2d')
} else {
  document.addEventListener('DOMContentLoaded', function () {
      console.log( 'document was not ready, place code here' );
      canvas = document.getElementById('canv')
      ctx = canvas.getContext('2d')
  });
}

console.log(3+2)
console.log(canvas)
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

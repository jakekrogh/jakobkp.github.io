// initialize config variables here
let canvas, ctx

// setup config variables and start the program
function init () {
  canvas = document.getElementById('canv')
  ctx = canvas.getContext('2d')

  // for (var i = 10; i <= 490; i+10){

  //   // grid
  //   ctx.moveTo(i,10);
  //   ctx.lineTo(i,490);

  //   ctx.moveTo(10,i);
  //   ctx.lineTo(490,i);
  // }
}

// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init)

console.log(3+2)
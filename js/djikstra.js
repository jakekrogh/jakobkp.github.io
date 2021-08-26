// initialize config variables here
let canvas, ctx

// setup config variables and start the program
function init () {
  canvas = document.getElementById('gameCanvas')
  ctx = canvas.getContext('2d')
}

// wait for the HTML to load
document.addEventListener('DOMContentLoaded', init)

console.log(3+2)
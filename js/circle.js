class Circle{
  constructor(x,y,rad,col,value){
    this.x = x
    this.y = y
    this.rad = rad
    this.col = col
    this.value = value
    this.vis = true
  }
  draw(ctx){
    ctx.beginPath()
    ctx.arc(this.x,this.y, this.rad, 0, 2 * Math.PI)
    ctx.fillStyle = this.col;
    ctx.fill();
    ctx.lineWidth = 1 
    ctx.strokeStyle = 'rgb(0,0,0)'
    ctx.stroke()
    ctx.font = 'bold 12pt  Serif';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(this.value.toString(),this.x,this.y+4);
  }
}
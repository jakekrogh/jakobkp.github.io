class Edge{
  constructor(x1,y1,x2,y2,edgew){
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
    this.edgew = edgew
  }
  draw(ctx){
    ctx.beginPath();
    ctx.moveTo(this.x1+20,this.y1); 
    ctx.lineTo(this.x2-20,this.y2);
    ctx.stroke();
    var textx = (this.x1+this.x2)/2
    var texty = (this.y1+this.y2)/2
    ctx.font = ' 12pt  Serif';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.fillText(this.edgew,textx,texty);
  }
}
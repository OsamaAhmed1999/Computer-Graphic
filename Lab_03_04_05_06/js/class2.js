class point
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y; 
   
  }

  getXY()
  {
    return this.x + " " + this.y;
  }
  
  drawPoint(ctx)
  {
    var square = new Square(new point(this.x, this.y), 70 , 'blue');
    square.draw(ctx);

                             
  }
}

class Square
{
  constructor(origin , length , color)
  {
    this.origin = origin;
    this.length = length;
    this.color = color;
  }

  draw(ctx)
  {
    ctx.beginPath();
    ctx.moveTo(this.origin.x , this.origin.y);

    ctx.lineTo(this.origin.x + this.length , this.origin.y);
    ctx.lineTo(this.origin.x + this.length , this.origin.y+ this.length);
    ctx.lineTo(this.origin.x  , this.origin.y + this.length);
    ctx.lineTo(this.origin.x , this.origin.y);

    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;

    ctx.stroke();
    ctx.fill();
    ctx.closePath();
  }
}


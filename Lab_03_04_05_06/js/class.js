class point
{
  constructor(x, y, h, color)
  {
    this.x = x;
    this.y = y; 
    this.h = h;
    this.color = color;
  }

  getXY()
  {
    return this.x + " " + this.y;
  }
  
  drawPoint(ctx)
  {
    /*var square = new Square(new point(this.x, this.y), 50 , 'blue');
    square.draw(ctx);*/

//    var a = 0 , b =255;
//
//    var h = Math.floor(a + Math.random() * (b-a));
    var f = true;

    var rect = new Rectangle(new point(this.x-3 , this.y, this.h, this.color),
                             new point(this.x+3 , this.y, this.h, this.color),
                             new point(this.x+3 , this.y-this.h, this.h, this.color),
                             new point(this.x-3 , this.y-this.h, this.h, this.color)
                             ,this.color, f);

    var rect2 = new Rectangle(new point(this.x-1 , this.y, this.h, this.color),
                             new point(this.x+1 , this.y, this.h, this.color),
                             new point(this.x+1 , this.y-this.h, this.h, this.color),
                             new point(this.x-1 , this.y-this.h, this.h, this.color)
                             ,"black", !f);
    rect.draw(ctx);
    rect2.draw(ctx);
                             
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

class Rectangle
{
  constructor(left , right ,bottom , top ,color ,flag)
  {
    this.left = left;
    this.right = right;
    this.bottom = bottom;
    this.top = top;
    this.color = color;
    this.flag = flag;
  }

  draw(ctx)
  {
    ctx.beginPath();
    ctx.moveTo(this.left.x , this.left.y);
    ctx.lineTo(this.right.x , this.right.y);
    ctx.lineTo(this.right.x , this.top.y);
    ctx.lineTo(this.left.x , this.top.y);

    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.stroke();
    if(this.flag) ctx.fill();
    ctx.closePath();
  }
}

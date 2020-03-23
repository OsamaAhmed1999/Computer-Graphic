//Class Point and Rectangle
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
                             ,"blue", !f);
    rect.draw(ctx);
    rect2.draw(ctx);
                             
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

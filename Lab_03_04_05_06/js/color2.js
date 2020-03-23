//Tiling

window.onload = myInit()

function myInit()
{
    myDisplay();
}

function myDisplay()
{
//    alert("Inside MyDisplaay Function")
    var img1 = new Image();
    var img2 = new Image();
    img1.onload = function(){
        xIndex = 2, yIndex = 2;
        x = xIndex * tileWidth, y = yIndex * tileHeight;
        ctx.drawImage(img1, x, y, tileWidth, tileHeight);
    }
    
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(x , y + tileHeight);
    ctx.lineTo(x + tieWidth , y + tileHeight);
    ctx.closePath();
    ctx.stroke();
    
     img2.onload = function(){
        xIndex = 0, yIndex = 0;
        x = xIndex * tileWidth, y = yIndex * tileHeight;
        ctx.drawImage(img2, x, y, tileWidth, tileHeight);

    }
    img1.src = 'images/ball.jpg';
    img2.src = 'images/joker.jpg';
}

//Tiling

window.onload = myInit()

function myInit()
{
    myDisplay();
}

function myDisplay()
{
    var img1 = new Image();
    var img2 = new Image();
    img1.onload = function(){
        xIndex = 2, yIndex = 2;
        x = xIndex * tileWidth, y = yIndex * tileHeight;
        ctx.drawImage(img1, x, y, tileWidth, tileHeight);
        
        /*ctx.lineWidth = 4;
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x , y)
        ctx.lineTo(x + tileWidth , y)
        ctx.lineTo(x + tileWidth , y + tileHeight);
        ctx.lineTo(x , y + tileHeight);
        ctx.closePath();
        ctx.stroke();
        
        calcAndGraph(img1 , x , y)*/
    }
    
     img2.onload = function(){
        xIndex = 0, yIndex = 0;
        x = xIndex * tileWidth, y = yIndex * tileHeight;
        ctx.drawImage(img2, x, y, tileWidth, tileHeight);
         ctx.lineWidth = 4;
         
        /*ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x , y)
        ctx.lineTo(x + tileWidth , y)
        ctx.lineTo(x + tileWidth , y + tileHeight);
        ctx.lineTo(x , y + tileHeight);
        ctx.closePath();
        ctx.stroke();
         
         calcAndGraph(img2 , x , y)*/
    }
     
    img1.src = 'images/nature.jpg';
    img2.src = 'images/joker.jpg';
    
}


/*function calcAndGraph(img , x , y)
{
    let rD={}, gD={}, bD={};
    ctx.drawImage(img, x, y, tileWidth, tileHeight);
    const iD = ctx.getImageData(x, y, tileWidth, tileHeight).data;

    
    for(var i=0; i<256; i++)
        {
            rD[i] = 0;
            gD[i] = 0;
            bD[i] = 0;
        }
    for(var i=0; i<iD.length; i+=4)
        {
            rD[iD[i]]++;
            gD[iD[i+1]]++;
            bD[iD[i+2]]++;
        }
    histogram({rD, gD, bD} , x , y);
}

var index =0;
function histogram(data , x , y) {
    
    console.log(data);
    maxRed = 0
    maxGreen = 0
    maxBlue = 0

    for(i = 0; i < 256; i++){
        maxRed = Math.max(maxRed , data.rD[i]);
        maxBlue = Math.max(maxBlue , data.bD[i]);
        maxGreen = Math.max(maxGreen , data.gD[i]);
    }
    
   console.log("Max Red",maxRed);
    console.log(maxGreen);
    console.log(maxBlue);
    
    source = new point (x, y+tileHeight, 0, "green");
    destination = new point(x+tileWidth, y+tileHeight, 0, "green");

    var numPoints = 255;
    var tMin = 0.0; 
    var tMax= 1.0; 
    var delT =(tMax- tMin)/numPoints;
    var t = tMin;
    let lerpX = {}, lerpY={};
    
    
    for(var i=0; i<numPoints; i++)
    {
        lerpX[i] = Math.round((source.x + (destination.x - source.x) * t));
        lerpY[i] = Math.round((source.y + (destination.y - source.y) * t));
        
        redHeight = (data.rD[i]/maxRed) * 100;
        greenHeight =(data.gD[i]/maxGreen) * 100;
        blueHeight = (data.bD[i]/maxBlue) * 100;  
    
        
        tweenRed = new point (lerpX[i], lerpY[i], redHeight, "red");
        tweenGreen = new point (lerpX[i], lerpY[i], greenHeight, "green");
        tweenBlue = new point (lerpX[i], lerpY[i], blueHeight, "blue");
        
        tweenRed.drawPoint(ctx);
        tweenGreen.drawPoint(ctx);
        tweenBlue.drawPoint(ctx);
        
        t += delT;
    }
}*/
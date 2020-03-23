document.getElementById('imageFile').addEventListener("change", handleFiles);
function handleFiles() {
    var theGoods = document.getElementById('imageFile').files[0];
    var img = new Image();
    var reader = new FileReader();
    
    reader.addEventListener("load", function() {
        img.src = reader.result;
    });
    
    img.onload = function(){
        fitImageOn(img)
    }
    
    if(theGoods)
        {
            reader.readAsDataURL(theGoods);
        }
}




var fitImageOn = function(imageObj){
    imageAspectRatio = imageObj.width / imageObj.height;
    canvasAspectRatio = cvs.width / cvs.height;
    renderableHeight, renderableWidth, xStart, yStart;
    
    if(imageAspectRatio < canvasAspectRatio){
        renderableHeight = cvs.height;
        renderableWidth = imageObj.width * (renderableHeight / imageObj.height);
        xStart = (cvs.width - renderableWidth) / 2;
        yStart = 0;
    }
    else if(imageAspectRatio > canvasAspectRatio){
        renderableWidth = cvs.width;
        renderableHeight = imageObj.height * (renderableWidth / imageObj.width);
        xStart = 0;
        yStart = (cvs.height - renderableHeight) / 2;
    }
    else{
        renderableHeight = cvs.height;
        renderableWidth = cvs.width;
        xStart = 0;
        yStart = 0;
    }
    calcAndGraph(imageObj);
}

function calcAndGraph(img)
{
    let rD={}, gD={}, bD={};
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    ctx.drawImage(img, xStart, yStart, renderableWidth, renderableHeight);
    const iD = ctx.getImageData(xStart, yStart, renderableWidth, renderableHeight).data;

    
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
    histogram({rD, gD, bD});
}

let yAxis=false;
let activeColor='red';

function size_dict(d){
    var c = 0;
    while(c in d){
        c++;
    }
    return c;
}


function histogram(data) {
    
    console.log("RED: " + data.rD);
    console.log("GREEN: " + data.rD);
    console.log("BLUE: " + data.rD);

    console.log("R: " + data.rD[0]);
    console.log("G: " + data.rD[0]);
    console.log("B: " + data.rD[0]);
    
    console.log(data);
    
    console.log(size_dict(data.rD));
    console.log(size_dict(data.gD));
    console.log(size_dict(data.bD));
    
    ctx.lineWidth = 5;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(xStart , yStart + renderableHeight);
    ctx.lineTo(xStart + renderableWidth , yStart + renderableHeight);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(xStart , yStart + renderableHeight);
    ctx.lineTo(xStart , yStart);
    ctx.closePath();
    ctx.stroke();
    
    A = new point(260, 100);
    console.log(A);
    A.drawPoint(ctx);
    
    xx = A.x;
    yy = A.y;
    console.log(xx);
    console.log(yy);
    
    source = new point (xStart  , yStart+renderableHeight);  //A
    destination = new point(xStart+renderableWidth,yStart+renderableHeight); //B

    var numPoints = 4;
    var tMin = 0.0; 
    var tMax= 1.0; 
    var delT =(tMax- tMin)/numPoints;
    var t = tMin;

    let lerpX = {}, lerpY={};

    for(var i=0; i<numPoints; i++)
    {
        lerpX[i] = Math.round((source.x + (destination.x - source.x) * t));
        lerpY[i] = Math.round((source.y + (destination.y - source.y) * t));
        t += delT;
         
//        redHeight=(data.rD[i]/maxRed)*100;
//        greenHeight=(data.gD[i]/maxGreen)*100;
//        blueHeight=(data.bD[i]/maxBlue)*100; 
//
//        t+=delT; 
//
//        tweenRed = new point (lerpX[i] , lerpY[i],redHeight,"red");
//        tweenGreen = new point (lerpX[i] , lerpY[i],greenHeight,"green");
//        tweenBlue = new point (lerpX[i] , lerpY[i],blueHeight,"blue");

        //console.log(tween);
        tween = new point(lerpX[i], lerpY[i]);
        console.log(tween);
        tween.drawPoint(ctx);
        
//        tweenRed.drawPoint(ctx);
//        tweenGreen.drawPoint(ctx);
//        tweenBlue.drawPoint(ctx);

    }
    
  /*let W=800
  let H=W/2;
  const svg = d3.select('svg');
  const margin = {top: 20, right: 20, bottom: 30, left: 50};
  const width = W - margin.left - margin.right;
  const height = H - margin.top - margin.bottom;
  let q = document.querySelector('svg');
  q.style.width=W;
  q.style.height=H;
  if (yAxis) { d3.selectAll("g.y-axis").remove(); yAxis=false; }
  function graphComponent(data, color) {
    d3.selectAll(".bar-"+color).remove();
    var data = Object.keys(data).map(function(key){ return {freq:data[key], idx:+key}});
    var x = d3.scaleLinear()
      .range([0, width])
      .domain([0, d3.max(data, function(d) { return d.idx; })]);
    var y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, function(d) { return d.freq; })]);
    var g = svg.append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    if (!yAxis) {
      yAxis=true;
      g.append("g")
       .attr("class", "y-axis")
       .attr("transform", "translate(" + -5 + ",0)")
       .call(d3.axisLeft(y).ticks(10).tickSizeInner(10).tickSizeOuter(2));
    }
    g.selectAll(".bar-"+color)
      .data(data)
      .enter().append("rect")
      .attr("class", "bar-"+color)
      .attr("fill", color)
      .attr("x", function(d) { return x(d.idx); })
      .attr("y", function(d) { return y(d.freq); })
      .attr("width", 2)
      .attr("opacity", 0.8)
      .attr("height", function(d) { return height - y(d.freq); })    
  }
  graphComponent(data.gD, "green");
  graphComponent(data.bD, "blue");
  graphComponent(data.rD, "red");*/
}

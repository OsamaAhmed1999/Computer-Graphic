var cvs;
var ctx;
var columns, row;
var tileWidth, tileHeight;
cvs = document.getElementById("mycanvas");
ctx = cvs.getContext("2d");

//document.getElementById('imageFile').addEventListener("change", handleFiles);
var imageAspectRatio, canvasAspectRatio, renderableHeight, renderableWidth, xStart, yStart;
column = 3, row = 3;
tileWidth = Math.round(cvs.width/columns);
tileHeight = Math.round(cvs.height/row);
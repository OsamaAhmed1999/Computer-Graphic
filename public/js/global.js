var cvs;
var ctx;
var columns, row;
var tileWidth, tileHeight;
cvs = document.getElementById("mycanvas");
ctx = cvs.getContext("2d");
column = 3, row = 3;
tileWidth = Math.round(cvs.width/column);
tileHeight = Math.round(cvs.height/row);
//document.getElementById('imageFile').addEventListener("change", handleFiles);
var imageAspectRatio, canvasAspectRatio, renderableHeight, renderableWidth, xStart, yStart;

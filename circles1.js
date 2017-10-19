window.onload = init;
var x,y,color="#";
function init(){
    document.getElementById('canvas').addEventListener('click',function(e){
        x = e.clientX;
        y = e.clientY;
        DrawCircle();
    },false);
}
function DrawCircle(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.lineWidth = 3;
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    context.fillStyle = color;
    context.beginPath();
    context.arc(x,y,30,0,2*Math.PI,true);
    context.fill();
    context.closePath();
}
/*function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  console.log("we have color:"+color);
}*/
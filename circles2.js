window.onload = init;
var color="#",num = 0;
var x = new Array();
var y = new Array();
var colors = new Array(); 
var clientx,clienty;
var radius =30;

function init(){
    x.splice(0, 1);
    y.splice(0, 1);
    document.getElementById('canvas').addEventListener('click',function(e){
        clientx = e.clientX;
        clienty = e.clientY;
        DrawCircle();
    },false);
}
function DrawCircle(){
    console.log("DrawCircle");
    var canvas = document.getElementById("canvas");
    if((x.length>=1)&&(isValid()==false)){
        reloadCircle();
    }
    x.push(clientx);
    y.push(clienty);
    printAll();
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    colors.push(color);
    console.log("x.length():"+x.length);
    console.log("we have x:"+x);
    console.log("we have y:"+y);
    console.log("we have colors:"+colors);
    var context = canvas.getContext("2d");
    context.lineWidth = 3;
    context.fillStyle = color;
    context.beginPath();
    context.arc(clientx,clienty,30,0,2*Math.PI,true);
    context.fill();
    context.closePath();
}
function printAll(){
    for(var index in x){
        console.log(x[index]);
    }
}
function isValid(){
    for(var prevx in x){
            var dist =  Math.sqrt((clientx-x[prevx]) ** 2 + (clienty -y[prevx]) ** 2);
            console.log("clientx-prevx"+(clientx-x[prevx]));
            console.log("dist"+dist);
            if(dist<2*radius){
                x.splice(prevx);
                y.splice(prevx);
                colors.splice(prevx);
                return false;
            }
    }
    return true;
}
function reloadCircle(){
    console.log("----reloadCircle-----");
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    for(var newprevx in x){
            context.fillStyle = colors[newprevx];
            context.beginPath();
            context.arc(x[newprevx], y[newprevx], radius, 0, 2 * Math.PI, false);
            context.fill();
    }
    console.log("we have new x:"+x);
    console.log("we have new y:"+y);
}



///////////////
/*const circles = [
  {
    x: 40,
    y: 40,
    radius: 10,
    color: 'rgb(255,0,0)'
  },
  {
    x: 70,
    y: 70,
    radius: 10,
    color: 'rgb(0,255,0)'
  }
];

circles.forEach(circle => {
  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = circle.color;
  ctx.fill();
});
function isIntersect(point, circle) {
  return Math.sqrt((point.x-circle.x) ** 2 + (point.y - circle.y) ** 2) < circle.radius;
}

canvas.addEventListener('click', (e) => {
  const pos = {
    x: e.clientX,
    y: e.clientY
  };
  circles.forEach(circle => {
    if (isIntersect(mousePoint, circle)) {
      alert('click on circle: ' + circle.id);
    }
  });
});*/
window.onload = init;
var silerValue,lineWidth;
function init(){
    var currenWidth =document.getElementById("currenWidth");
    var defaultSlider = document.getElementById("defaultSlider");
    currenWidth.innerHTML =defaultSlider.value;;
    defaultSlider.onchange = changeHandler;
    DrawCanvas();
}
function changeHandler(){
    console.log("changing!");
    silerValue = defaultSlider.value;
    currenWidth.innerHTML =silerValue;
    console.log("current silerValue:"+silerValue); 
    DrawCanvas();
}
function DrawCanvas(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0,0,400,400);
    lineWidth = defaultSlider.value;
    context.lineWidth = lineWidth;
    silerValue = defaultSlider.value;
    context.strokeStyle = "#FF0000";
    console.log("in DrawCanvas,we have:"+silerValue);
    context.beginPath();
    context.arc(200,200,200-silerValue,0,2*Math.PI,true);
    context.stroke();
    context.closePath();
}
function DrawCanvas(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0,0,400,400);
    lineWidth = defaultSlider.value;
    context.lineWidth = lineWidth;
    silerValue = defaultSlider.value;
    for(var i=0;i<200/lineWidth;i++){
        if(i%2==0){
            context.strokeStyle = "#FF0000";
            context.beginPath();
            context.arc(200,200,200-silerValue*i-silerValue/2,0,2*Math.PI,true);
            context.stroke();
            context.closePath();
        }else if(i%2!=0){
            context.strokeStyle = "#0040FF";
            context.beginPath();
            context.arc(200,200,200-silerValue*i-silerValue/2,0,2*Math.PI,true);
            context.stroke();
            context.closePath();
        }
    }
}

/*for(var i=0;i<200/lineWidth;i++){
        if(i%2==0&&i<200/(lineWidth-1)){
            context.strokeStyle = "#FF0000";
            context.beginPath();
            context.arc(200,200,200-silerValue*i,0,2*Math.PI,true);
            context.stroke();
            context.closePath();
        }else if(i%2!=0){
            context.strokeStyle = "#0040FF";
            context.beginPath();
            context.arc(200,200,200-silerValue*i,0,2*Math.PI,true);
            context.stroke();
            context.closePath();
        }else if(i==200/(lineWidth-1)){
            if(i%2!=0){
                context.strokeStyle = "#0040FF";
            context.beginPath();
            context.arc(200,200,200-silerValue*i,0,2*Math.PI,true);
            context.fill();
            context.closePath();
            }else{
                context.strokeStyle = "#FF0000";
            context.beginPath();
            context.arc(200,200,200-silerValue*i,0,2*Math.PI,true);
            context.fill();
            context.closePath();
            }
            
        }
    }*/
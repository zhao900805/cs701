window.onload = init;
var value_array = [];
function init(){

    //------get elements
    var worker = new Worker("computeWorker.js");
    var start1 = document.getElementById("start_1").value;
    var end1 = document.getElementById("end_1").value;
    var start2 = document.getElementById("start_2").value;
    var end2 = document.getElementById("end_2").value;
    var start3 = document.getElementById("start_3").value;
    var end3 = document.getElementById("end_3").value;
    var start4 = document.getElementById("start_4").value;
    var end4 = document.getElementById("end_4").value;
    var start5 = document.getElementById("start_5").value;
    var end5 = document.getElementById("end_5").value;

    //-------add event callback functions
    var btn_1 = document.getElementById("btn_1");
    btn_1.addEventListener("click",function(){
        worker.postMessage({"index":"1","start":start1,"end":end1});
        console.log("click1");
    });
    var btn_2 = document.getElementById("btn_2");
    btn_2.addEventListener("click",function(){
        worker.postMessage({"index":"2","start":start2,"end":end2});
        console.log("click2");
    });
    var btn_3 = document.getElementById("btn_3");
    btn_3.addEventListener("click",function(){
        worker.postMessage({"index":"3","start":start3,"end":end3});
        console.log("click3");
    });
    var btn_4 = document.getElementById("btn_4");
    btn_4.addEventListener("click",function(){
        worker.postMessage({"index":"4","start":start4,"end":end4});
        console.log("click4");
    });
    var btn_5 = document.getElementById("btn_5");
    btn_5.addEventListener("click",function(){
        worker.postMessage({"index":"5","start":start5,"end":end5});
        console.log("click5");
    });

    //-------- start the worker
    worker.addEventListener("message",function(e){
        var index = e.data.index;
        value_array = JSON.stringify(value_array);
        window.localStorage.setItem("result",value_array);
        
        switch(index){
            case "1":
                var item = document.getElementById("result_1");
                item.innerHTML = e.data.result;
                    console.log(value_array);
                    var result1 = {result:e.data.result};
                    value_array.push(result1);
                    //value_array.result.push(1);//test
                    console.log(value_array);
                    value_array = JSON.stringify(value_array);
                    window.localStorage.setItem("result",value_array);
                break;
            case "2":
                var item = document.getElementById("result_2");
                item.innerHTML = e.data.result;
                break;
            case "3":
                var item = document.getElementById("result_3");
                item.innerHTML = e.data.result;
                break;
            case "4":
                var item = document.getElementById("result_4");
                item.innerHTML = e.data.result;
                break;
            case "5":
                var item = document.getElementById("result_5");
                item.innerHTML = e.data.result;
                break;
        }
    });
}


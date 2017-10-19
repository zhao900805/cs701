self.addEventListener("message",function(e){
    var index = e.data.index;
    var e = e.data;

    //-------five workers 

    switch(index){
        case "1":
            var start = e.start;
            var end = e.end;
            var result = calculateSum(start,end);
            var result_json={
                "index":"1",
                "start":start,
                "end":end,
                "result":result
            };
            self.postMessage(result_json);
            break;
        case "2":
            var start = e.start;
            var end = e.end;
            var result = calculateSum(start,end);
            var result_json={
                "index":"2",
                "start":start,
                "end":end,
                "result":result
            };
            self.postMessage(result_json);
            break;
        case "3":
            var start = e.start;
            var end = e.end;
            var result = calculateSum(start,end);
            var result_json={
                "index":"3",
                "start":start,
                "end":end,
                "result":result
            };
            self.postMessage(result_json);
            break;
        case "4":
            var start = e.start;
            var end = e.end;
            var result = calculateSum(start,end);
            var result_json={
                "index":"4",
                "start":start,
                "end":end,
                "result":result
            };
            self.postMessage(result_json);
            break;
        case "5":
            var start = e.start;
            var end = e.end;
            var result = calculateSum(start,end);
            var result_json={
                "index":"5",
                "start":start,
                "end":end,
                "result":result
            };
            self.postMessage(result_json);
            break;
    } 
});
//-------cal function

function calculateSum(start,end){
    var start = parseFloat(start);
    var end = parseFloat(end);
    return (start+end)*(end-start+1)/2;
}
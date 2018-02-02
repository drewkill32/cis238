
function displyOutput(operation,  func){
    document.write("<table>")
    document.write("<tr><th>Value</th><th>" + operation +  "</th><th>Result</th></tr>")
    
    for (let index = 0; index <= 5; index++) {
        var result =0;
        var opNum = index;
        if (operation == "Log") {
            opNum = Math.pow(5,index);
            var result = func(5,opNum);
        }
        else {
            result = func(5,index);
        }

        document.write("<tr><td>5</td><td>" + opNum + "</td><td>" + result +  "</td></tr>")
    }
        
    document.write("</table>")
}

function getBaseLog(x, y) {
    //I was a little unclear as to what the log function you wanted.
    //I assumed that you want log5(5^1) through log5(5^5)
    //and have the exponent reversed
    return Math.floor(Math.log(y) / Math.log(x));
  }

// do the power calculation
displyOutput("Exponent",function(x,y){return Math.pow(x,y);}); 

//do the log calculation
displyOutput("Log",getBaseLog); 
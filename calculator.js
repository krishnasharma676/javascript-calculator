var result=document.getElementById('result');
function display(number){
result.value+= number;
}
function calculatenumber(){
var finalnumber= result.value;
var finalresult=eval(finalnumber);
result.value=finalresult;
}

function clearb(){
    result.value="";
}
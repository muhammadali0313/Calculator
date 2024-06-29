function pick(val){
  document.getElementById("value") .value += val;
}

function clr(){
    document.getElementById("value") .value = "";
  }

function solve(){
    var  x=document.getElementById("value") .value;
    var y=eval (x);
    document.getElementById("value").value=y;
  }
let num;
let min;
let max;
document.getElementById("myButt").onclick = function(){
    min = Number(document.getElementById("mini").value);
    max = Number(document.getElementById("maxi").value);
    num = Math.floor(Math.random()*(max-min+1)) + min;
    document.getElementById("number").textContent = num;
}
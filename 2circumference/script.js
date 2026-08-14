const PI = 3.14;
let radius;
let circumference;

document.getElementById("myButt").onclick = function(){
    radius = document.getElementById("rad").value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("head3").textContent = `Circumference : ${circumference}cm`;
}
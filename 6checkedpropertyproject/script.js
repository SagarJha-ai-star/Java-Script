// .checked = property that determines the checked state of an 
//            Html checkbox or radio button element
const myCheckBox = document.getElementById("myCheckBox");
const visabtn = document.getElementById("visabtn");
const paypalbtn = document.getElementById("paypalbtn");
const axisbtn = document.getElementById("axisbtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const payment = document.getElementById("payment");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "You are subscribed.";
    }
    else{
        subResult.textContent = "You are NOT subscribed.";
    }
    if(visabtn.checked){
        payment.textContent = "Payment done by Visa.";
    }
    else if(paypalbtn.checked){
        payment.textContent = "Payment done by Paypal.";
    }
    else if(axisbtn.checked){
        payment.textContent = "Payment done by Axis.";
    }
    else{
        payment.textContent = "Payment PENDING.";
    }
}
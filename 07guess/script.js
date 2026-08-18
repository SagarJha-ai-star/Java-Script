let running = true;
let min = 1;
let max = 100;

let num = Math.floor(Math.random()*(max-min+1)) + min;
let user = Number(window.prompt("Enter a number: "));
while(running){
    if(user === num){
        console.log("congratulations! You won.");
        running = false;
    }
    else if(user < num){
        user = Number(window.prompt("Too low : "));
    }
    else{
        user = Number(window.prompt("Too high: "));
    }
}
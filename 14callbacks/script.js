// callback = a function that is passed as an arguement 
//            to another function.

sum(display, 1, 2);

function sum(callback,x,y){
    let result = x + y;
    callback(result);
}
function display(result){
    console.log(result);
}
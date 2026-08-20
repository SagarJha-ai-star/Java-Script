// map = same as forEach but returns new array

const nums = [1, 2, 3, 4, 5];

let squares = nums.map(square);
console.log(squares);
function square(element){
    return Math.pow(element, 2);
}
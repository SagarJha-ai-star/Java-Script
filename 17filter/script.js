// .filter() = creates a new array by filtering out elements

let nums = [1, 2, 3, 4, 5, 6, 7];
let evenNums = nums.filter(isEven);
console.log(evenNums);

function isEven(element){
    return element % 2 === 0;
}
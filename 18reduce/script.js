// .reduce() = returns the elements of an array to a single value

let nums = [12, 34, 24, 23, 10];

let total = nums.reduce(sum);
console.log(total);

function sum(accumulator , next){
    return accumulator + next;
}
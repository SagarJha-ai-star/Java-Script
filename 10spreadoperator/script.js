//spread opeator = ... allows an iterable such as an array or string
//                     to be expanded into separate elements (unpacks the element)

let nums = [1,2,3,4,5];
let maximum = Math.max(...nums);
console.log(maximum);
let fruits = ["Apple", "Banana", "Orange"];
let vegetables = ["Carrot", "Celere", "Potatoes"];
let foods = [...fruits, ...vegetables, "eggs"];
console.log(foods);
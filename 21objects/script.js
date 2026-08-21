// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key:value,
//          function()}

let person1 = {
    firstName : "Sagar",
    lastName : "Jha",
    age : 18,
    isEmployed : false,
    sayhello : function(){console.log("Hello")},
}

let person2 = {
    firstName : "Ankush",
    lastName : "Jha",
    age : 25,
    isEmployed : true,
    sayhello : function(){console.log("Hello")},
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayhello();
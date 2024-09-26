var module1 = require('./module1.js'); 

console.log(module1)
console.log(module)
console.log(module1.greet())
//console.log(module1.name)
console.log(module1.fullname)
console.log(module1.age)
console.log(module1.course)



var module = require('.calc.js');
console.log(calc)
console.log(module)
console.log(calc.greet())
console.log(calc.fullname)
console.log(calc.lastname)
console.log(calc.age)
console.log(calc.course)
console.log(calc.subtract)




console.log(__dirname);
console.log(__filename);

// console.log(console)

// setTimeout
// setTimeout(() => {
//     console.log('Hello World');
// }, 3000);

// // setInterval
// setInterval(() => {
//     console.log('Hello World');
// }, 3000);

// console.log(global);
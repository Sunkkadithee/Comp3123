console.log('Hello,world!');
console.log('Hello,world2');

var obj1 = {
    name: 'Pang',
    age: 26
};
var obj2 = {
    fname:"Pang",
    myage:26,
    result:"pass",
    pass: true,
    course: ['Math', 100 , 'English'],
    car: null
};

var x = 100
console.log(typeof x) //pixel of Number
console.log(typeof obj1)
console.log(typeof obj2.fname)
console.log(typeof obj2.course)
console.log(typeof obj2.car)


function greet(){
    console.log('Hello, Pang')
}


console.log(typeof greet)

var greet2 = greet3 = function(){
    console.log('Hello, Pang')
}

const greet4 = () => {
    console.log('Hello, Pang')
}

var greet5 = (name) => {
    console.log('Hello ' + name)
}

var greet5 = name => console.log('Hello, ' + name)
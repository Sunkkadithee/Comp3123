var firsrtname = "Pang"
var lastname = 'Sunkkadithee'
var age = 26
var course = "Computer Science"

function greet() {
    return "Ayoooooo"
}

calc.exports = {
    firsrtname,
    lastname,
    age,
    greet

}

exports.add = function(a, b) {
    return a + b;
}

exports.subtract = (a, b) => {
    return a - b;
}

exports.multiply = (a, b) => {
    return a * b;
}

exports.divide = (a, b) => {
    return a / b;
}

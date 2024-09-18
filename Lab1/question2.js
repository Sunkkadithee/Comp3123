// Exercise 2: Write a JavaScript program to find the largest of three given integers

function findLargest(a, b, c) {
    if (a > b && a > c) {
        return a; 
    } else if (b > c) {
        return b; 
    } else {
        return c; 
    }
}


console.log(findLargest(1, 0, 1));      
console.log(findLargest(0, -10, -20));  
console.log(findLargest(1000, 510, 440)); 

function right(str) {
    // Check if the string length is 3 or more
    if (str.length >= 3) {
        return str.slice(-3) + str.slice(0, -3);  
    } else {
        return str; 
    }
}

// Test cases
console.log(right("Python"));     
console.log(right("JavaScript"));  
console.log(right("Hi"));
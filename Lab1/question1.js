function capitalizeFirstLetterOfEachWord(str) {
    let words = str.split(" ");  
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");  
}


let inputString = "the quick brown fox";
let capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
console.log(capitalizedString);  

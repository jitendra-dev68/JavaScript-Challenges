// Write a function to find the first non-repeating character in a string and return its index. If it doesn’t exist, return -1.


function  firstNonRepeatingCharacter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i])=== str.lastIndexOf(str[i])) {
            return i
        }
        
    }
    return -1;
}

const result = firstNonRepeatingCharacter('swiss')
console.log('result: ', result);

function firstUniqueChar(str) {
    return str.split('').findIndex((char, i, arr) => arr.indexOf(char) === arr.lastIndexOf(char));
}
console.log('refactor result: ', firstUniqueChar('swiss'));


//  Count Character Occurrences
const charCount =(str)=>{
    const charMap = new Map();

    for (const char of str) {
        charMap.set(char,(charMap.get(char) || 0)+1)
    }
    return charMap
}

console.log(charCount("hello")); // { h: 1, e: 1, l: 2, o: 1 }

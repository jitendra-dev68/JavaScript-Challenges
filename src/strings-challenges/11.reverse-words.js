// Reverse Words in a String

const reverseWords = (sentance)=>{
    return sentance.split(' ').reverse().join(' ')
}

console.log(reverseWords("hello world")); // "world hello"

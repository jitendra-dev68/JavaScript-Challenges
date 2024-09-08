
// Remove a Specific Character from a String
const removeCharacter = (str,wordToRemove)=>{
    return str.split(wordToRemove).join('')
}
console.log(removeCharacter("hello world", "l")); // "heo word"

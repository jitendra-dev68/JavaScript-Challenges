// Count Vowels and Consonants


const countVowelsAndConsonants = (str)=>{
    let vowels = 'aeiouAEIOU';
    let vowelsCount = 0, consonantsCount = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++;
        } else if (char.match(/[a-z]/i)) {
            consonantsCount++;
        }
    }
    return { vowelsCount, consonantsCount };
}

console.log(countVowelsAndConsonants("hello world")); // { vowelsCount: 3, consonantsCount: 7 }

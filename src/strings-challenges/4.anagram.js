

function isAnagram(str1,str2) {
    const sorted1 = str1.toLowerCase().split('').sort().join('')
    const sorted2 = str2.toLowerCase().split('').sort().join('')
    return sorted1 === sorted2
}

const result = isAnagram("cinema", "iceman")
console.log('result: ', result);
const result2 = isAnagram("hello", "world")
console.log('result2: ', result2);

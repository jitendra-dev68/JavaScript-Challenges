// Remove Duplicate Characters

const removeDuplicate = (str)=>{
    return Array.from(new Set(str)).join('')
}

const result = removeDuplicate('aabbccddeeff')
console.log('result: ', result);
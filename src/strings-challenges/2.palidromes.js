

function isPalidrom(str) {
    const reverse = str.split('').reverse().join('')
    return str === reverse
}

const result = isPalidrom('ABCDCBA')
console.log('result: ', result);
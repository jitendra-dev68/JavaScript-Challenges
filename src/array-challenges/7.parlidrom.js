
// Check for Palindrome
const isPalindrome = (arr)=>{
    const current = arr.join('')
    const reverse = arr.reverse().join('')
    return current === reverse
}

const result = isPalindrome([1, 2, 3, 2, 1]) 
console.log('result: ', result);
// Output: true
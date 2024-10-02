const isPalindromeNumber = (num) => {
    const str = num.toString()
    return str === str.split('').reverse().join('');
};

console.log(isPalindromeNumber(122)); // Output: true

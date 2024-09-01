function findMissingNumber(arr) {
    const n = arr.length + 1; // Since one number is missing, array length is n-1
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

// Example usage:
const arr = [1, 2, 4, 5, 6];
console.log(findMissingNumber(arr)); // Output: 3


function findMissingNumbers(arr, n) {
    const completeSet = new Set([...Array(n + 1).keys()].slice(1)); // Set of numbers from 1 to n
    const arrSet = new Set(arr);
    
    const missingNumbers = [...completeSet].filter(num => !arrSet.has(num));
    return missingNumbers;
}

// Example usage:
const arr1 = [1, 2, 4, 6, 7, 9];
const n = 9;
console.log(findMissingNumbers(arr1, n)); // Output: [3, 5, 8]

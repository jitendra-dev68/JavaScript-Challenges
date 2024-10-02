const findMissingNumber = (arr)=>{
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum
}

console.log(findMissingNumber([3, 0, 1])); // Output: 2

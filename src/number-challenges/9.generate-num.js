const randomNums = n => Array.from({length: n}, () => Math.floor(Math.random() * 100) + 1);
console.log(randomNums(5)); // Output: [random 5 numbers between 1 and 100]

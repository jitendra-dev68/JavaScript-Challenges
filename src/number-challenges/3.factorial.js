// Write a function that returns the factorial of a given number.


const factorial = (n) => {
  if (n === 0) return 1;
  return n * factorial(n - 1);
};
console.log(factorial(5)); // Output: 120

const factorialV2 = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
};
console.log(factorialV2(5)); // Output: 120

function fibonacci(n) {
  if (n <= 1) return n;

  let a = 0,
    b = 1,
    temp;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Example usage
console.log(fibonacci(0));  // 0
console.log(fibonacci(1));  // 1
console.log(fibonacci(5));  // 5
console.log(fibonacci(10)); // 55

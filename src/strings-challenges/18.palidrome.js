//  Write a function to determine if a string can be rearranged to form a palindrome.
const canFormPalindrome = (str) => {
  const charCount = new Map();

  // Count occurrences of each character
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Count how many characters have an odd count
  const oddCount = Array.from(charCount.values()).filter(
    (count) => count % 2 !== 0
  ).length;

  return oddCount <= 1;
};
console.log(canFormPalindrome("civic")); // true
console.log(canFormPalindrome("ivicc")); // true
console.log(canFormPalindrome("hello")); // false

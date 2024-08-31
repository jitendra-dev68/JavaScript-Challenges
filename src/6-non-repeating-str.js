// find the first non-repeating character in a string using JavaScript

function nonRepeating(str) {
  const charCount = {};

  // Step 1: Fill the frequency map
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }
  console.log("charCount: ", charCount);
  // Step 2: Find the first non-repeating character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}


const result = nonRepeating("swiss");
console.log("result: ", result);

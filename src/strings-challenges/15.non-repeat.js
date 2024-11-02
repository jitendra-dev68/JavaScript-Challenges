const nonRepeat = (str) => {
  const charMap = new Map();

  for (const char of str) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  // Find the first character that appears only once
  for (const [char, count] of charMap) {
    if (count === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
};

console.log(nonRepeat("swiss")); // "w"

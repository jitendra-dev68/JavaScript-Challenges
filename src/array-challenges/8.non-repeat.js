// Find the First Non-Repeating Element
const nonRepeting = (arr) => {
  const frequencyMap = new Map();

  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }
  // Step 2: Find the first non-repeating element
  for (const num of arr) {
    if (frequencyMap.get(num) === 1) {
      return num;
    }
  }

  return -1;
};

const result = nonRepeting([4, 5, 1, 2, 0, 4]);
console.log("result: ", result);

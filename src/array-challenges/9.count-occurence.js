// Count Occurrences of Each Element

const countOccurrence = (array) => {
  const frequencyMap = new Map();

  for (const ele of array) {
    frequencyMap.set(ele, (frequencyMap.get(ele) || 0) + 1);
  }
  return frequencyMap;
};

const result = countOccurrence([1, 2, 2, 3, 1, 4, 2]);
console.log("result: ", result);

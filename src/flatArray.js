function flattenArray(arr) {
    return arr.flat(Infinity);
  }
  
  // Example usage
  console.log(flattenArray([1, [2, [3, 4], 5], 6])); // [1, 2, 3, 4, 5, 6]
  
function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }
  
  // Example usage
  console.log(removeDuplicates([1, 2, 3, 4, 3, 2, 1])); // [1, 2, 3, 4]
  
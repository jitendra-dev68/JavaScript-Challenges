// Write a function to find the k-th lexicographical substring of a string s.

const kthLexicographicalSubstring = (s, k) => {
  const substrings = new Set(
    Array.from({ length: s.length }, (_, i) =>
      Array.from({ length: s.length - i }, (_, j) => s.slice(i, i + j + 1))
    ).flat()
  );

  const sortedSubstring = Array.from(substrings).sort();
  return sortedSubstring[k - 1] || "";
};

console.log(kthLexicographicalSubstring("banana", 3)); // Output: "ana"

// Write a function to find the longest common prefix among an array of strings.

const longestCommonPrefix = (strs) => {
  if (!strs.length) return "";

  return strs.reduce((prefix, str) => {
    const minLength = Math.min(prefix.length, str.length);
    const newPrefix = Array.from({ length: minLength }, (_, i) =>
      prefix[i] === str[i] ? prefix[i] : ""
    ).join("");
       
    return newPrefix; // Will naturally return '' if there's no match
  });
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"

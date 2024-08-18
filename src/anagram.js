function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
  
    const sortString = (str) => str.split('').sort().join('');
    
    return sortString(str1) === sortString(str2);
  }
  
  // Example usage
  console.log(isAnagram("listen", "silent"));    // true
  console.log(isAnagram("triangle", "integral"));// true
  console.log(isAnagram("apple", "pale"));       // false
  
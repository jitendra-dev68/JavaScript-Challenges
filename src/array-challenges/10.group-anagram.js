// Given an array of strings, group anagrams together.

const groupAnagram = (array)=>{
    const map = new Map();

    for (const str of array) {
        // Sort the string to use as a key
        const sortedStr = str.split('').sort().join('');
        
        // If the key already exists, add the string to the corresponding array
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
        } else {
            // Otherwise, create a new array with the current string
            map.set(sortedStr, [str]);
        }
    }

    // Convert the map values to an array of arrays
    return Array.from(map.values());
}

const result = groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"])
console.log('result: ', result);
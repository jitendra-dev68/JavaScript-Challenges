const commonKeys = (obj1, obj2) => {
    return Object.keys(obj1).filter(key => key in obj2);
};

// Example usage:
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 4, c: 5, d: 6 };
console.log(commonKeys(obj1, obj2)); // Output: ['b', 'c']

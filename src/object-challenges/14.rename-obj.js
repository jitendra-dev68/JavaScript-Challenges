const renameKeys = (obj, newKeys) => {
    return Object.fromEntries(Object.entries(obj).map(([key,value])=>[newKeys[key] || key, value]))
};

// Example usage:
const obj = { fname: 'John', lname: 'Doe', age: 25 };
const newKeys = { fname: 'firstName', lname: 'lastName' };
console.log(renameKeys(obj, newKeys)); // Output: { firstName: 'John', lastName: 'Doe', age: 25 }

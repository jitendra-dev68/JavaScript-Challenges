const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
const deepCloneBuilt = (obj) => structuredClone(obj);


// Example usage:
const original = { name: 'John', details: { age: 30, city: 'New York' } };
const clone = deepClone(original);
clone.details.age = 35;
console.log(original.details.age); // Output: 30
console.log(clone.details.age);    // Output: 35

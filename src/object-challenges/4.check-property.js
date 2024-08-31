const hasProperty = (obj, prop) => obj.hasOwnProperty(prop);

// Example usage:
const user = { name: 'John', age: 30, city: 'New York' };
console.log(hasProperty(user, 'age')); // Output: true
console.log(hasProperty(user, 'gender')); // Output: false

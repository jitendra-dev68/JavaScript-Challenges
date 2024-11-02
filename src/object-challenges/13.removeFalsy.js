const removeFalsy = (obj) => {
    return Object.fromEntries(Object.entries(obj).filter(([_,value])=>Boolean(value)))
};

// Example usage:
const obj = { a: 1, b: '', c: 0, d: 'hello', e: null };
console.log(removeFalsy(obj)); // Output: { a: 1, d: 'hello' }

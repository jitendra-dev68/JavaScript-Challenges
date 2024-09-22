// Flatten a Nested Object

const flattenObject = (object, prefix = "") => {
  return Object.keys(object).reduce((acc, key) => {
    const value = object[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "object" && value !== null) {
      Object.assign(acc, flattenObject(value, newKey));
    } else {
      acc[newKey] = value;
    }
    return acc;
  }, {});
};

// Example usage:
const nestedObj = {
  name: "John",
  address: {
    city: "New York",
    zip: {
      code: 10001,
      area: 212,
    },
  },
};
console.log(flattenObject(nestedObj));

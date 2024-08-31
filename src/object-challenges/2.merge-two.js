const mergeProperties = (ob1, obj2) => {
  return { ...ob1, obj2 };
};

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
const obj1 = { name: 'Alice', age: 25 };
const obj2 = { age: 30, city: 'Paris' };
console.log(mergeObjects(obj1, obj2));
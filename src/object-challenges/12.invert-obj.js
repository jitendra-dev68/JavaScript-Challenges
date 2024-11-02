const invertObj = (obj)=>{
return Object.fromEntries(Object.entries(obj).map(([key,value])=>[value, key]))
}
const obj = { a: 'x', b: 'y', c: 'z' };
console.log(invertObj(obj)); // Output: { x: 'a', y: 'b', z: 'c' }
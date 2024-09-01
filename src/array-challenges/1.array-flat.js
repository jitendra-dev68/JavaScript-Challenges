const flatten = (arr)=> arr.flat(Infinity)

const result =flatten([1, [2, [3, [4]], 5]]) 
console.log('result: ', result);

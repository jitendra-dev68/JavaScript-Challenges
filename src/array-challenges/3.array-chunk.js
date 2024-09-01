// const chunkArray = (arr, size) => {
//   const result = [];
//   const chunkSize = size;
//   for (let i = 0; i < arr.length; i += chunkSize) {
//     const chunk = arr.slice(i, i + chunkSize);
//     result.push(chunk);
//   }
//   return result;
// };

// const result = chunkArray([1, 2, 3, 4, 5], 2);
// console.log("result: ", result);
const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) {
        acc.push(arr.slice(i, i + size));
      }
      return acc;
    }, []);
  };
  
  const result = chunkArray([1, 2, 3, 4, 5], 2);
  console.log("result: ", result);
  
// closure in JavaScript allows you to create functions with private variables that can be incremented or decremented

function closureCounter() {
  let counter = 0;

  return {
    increment: () => {
       counter++;
       return counter
    },
    decrement: () => {
       counter--;
       return counter
    },
    getCount:()=>{
        return counter
    }
  };
}

const result = closureCounter()

console.log(result.increment()); // 1
console.log(result.increment()); // 2
console.log(result.increment()); // 3
console.log(result.decrement()); // 2
console.log(result.getCount()); // 2



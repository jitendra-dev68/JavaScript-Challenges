// Sum of digits

const sumOfDigits = (num)=>{
    while (num > 9) {
        num = num.toString().split('').reduce((acc, digit) => acc + Number(digit), 0);
    }
    return num;
}
console.log(sumOfDigits(1234)); // Output: 1


const sumNumbers =(numbers)=>{
    return numbers.reduce((prev,curr)=>prev + curr,0)
}

console.log((sumNumbers([1,2,3,4,5])));

// reverse int

const reverseInteger = (num)=>{
    const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
    return num < 0 ? -reversed : reversed;
}

console.log(reverseInteger(-123)); // Output: -321

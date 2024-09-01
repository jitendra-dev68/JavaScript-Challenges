

// function secondLargest(array) {
//     const large = Math.max(...array)
//     let secondLargest = -1
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < large) {
//             secondLargest = array[i]
            
//         }
//     }
//     return secondLargest
// }

function secondLargest(array) {
    const largest = Math.max(...array);
    const filteredArray = array.filter(num => num < largest);
    return Math.max(...filteredArray);
}

const result = secondLargest([10, 20, 4, 45, 99]);
console.log('result: ', result); // Output: 45


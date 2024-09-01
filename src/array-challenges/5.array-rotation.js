// Challenge: Write a function that rotates an array by k positions to the right.

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // Normalize k

    if (k === 0) return arr;

    reverseArray(arr, 0, n - 1); // Step 1: Reverse the entire array
    reverseArray(arr, 0, k - 1); // Step 2: Reverse the first k elements
    reverseArray(arr, k, n - 1); // Step 3: Reverse the remaining elements

    return arr;
}

function reverseArray(arr, start, end) {
    const reversedPart = arr.slice(start, end + 1).reverse();
    arr.splice(start, reversedPart.length, ...reversedPart);
}

const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateArray(arr, k)); // Output: [4, 5, 1, 2, 3]
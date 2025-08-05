 // Find the Second Largest Element in an Array


// let arr = [12, 35, 10, 34, 1];
let arr = [1, 2, 3, 4, 5]

function secondLargest(arr) {
    if (arr.length < 2) return null; // Not enough elements
    
    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first; // old largest becomes second largest
            first = num;    // new largest found
        } else if (num > second && num < first) {
            second = num; // new second largest found
        }
    }

    if (second === -Infinity) {
        return null;
    } else {
        return second;
    }
}

console.log(secondLargest(arr)); // Output: 34

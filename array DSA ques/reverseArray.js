// Given array L is [23, 45, 32, 25, 46, 33, 71, 90]. After reversing, the output should be:

// reverseAndPrintArray(L); // Output: 90 71 33 46 25 32 45 

const arr = [23, 45, 71, 90];

function reverseAndPrintArray(arr) {
    const reversedArray = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
   return(reversedArray);
}

console.log(reverseAndPrintArray(arr));
// time complexity = O(n) one loop is running
// space complexity = O(n) whole array store again in new variables



// Reverse an array
let arr1 = [2, 3, 5, 6, 8, 9]

function reverseArray(arr){
    left = 0;
    right = arr.length - 1;

    while(left<right){
        [arr[left], arr[right]] = [arr[right], arr[left]];    // in swap js ([something] = [something])
        left++;
        right--;
    }
    return arr
}

console.log(reverseArray(arr1))
// time complexity = O(n)
// Space complexity = O(1) no, new any variables
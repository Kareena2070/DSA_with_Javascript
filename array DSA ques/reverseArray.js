// Given array L is [23, 45, 32, 25, 46, 33, 71, 90]. After reversing, the output should be:

// reverseAndPrintArray(L); // Output: 90 71 33 46 25 32 45 



const L = [23, 45, 71, 90];

function reverseAndPrintArray(arr) {
    const reversedArray = []
   
 for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
   
   return(reversedArray);
}

reverseAndPrintArray(L);

console.log(reverseAndPrintArray(L));

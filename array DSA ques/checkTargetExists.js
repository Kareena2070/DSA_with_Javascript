//  Write a program that takes the size of the array, the array elements, and the target number as input from the user, and checks whether the target number exists in the array or not. If the target number is found in the array, the program should output "Yes"; otherwise, it should output "No".
// Given array [1, 2, 3, 4, 5, 6, 7] with a size of 7 and a target of 3, the output should be:

// checkTargetExists(7, [1, 2, 3, 4, 5, 6, 7], 3); // Output: Yes

function checkTargetExists(size, arr, target) {
    // Only change code below this line
    
 for (let i = 0; i < size; i++) {  
         if (arr[i] === target) {
             return "Yes";
         }
     }
     return "No";
    // Only change code above this line
 }
 
 checkTargetExists(7, [1, 2, 3, 4, 5, 6, 7], 3);
 console.log(checkTargetExists(7, [1, 2, 3, 4, 5, 6, 7], 3));
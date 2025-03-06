// Write a program that takes two integers M and N as input and prints the sum of numbers in the range from M to N.

// If the input integers are 2 and 7, the sum of numbers in the range from 2 to 7 is 27.

// sumInRange(2, 7) // Output: 27


function sumInRange(M, N) {
    let sum =0;
    
    for (let i = M; i <= N; i++) {
         sum = sum+i;
     }
   
    return sum;
 }
 sumInRange(2,7);
 console.log(sumInRange(2,7));
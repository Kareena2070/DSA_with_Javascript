//  Write a function that takes an integer and prints the number of digits in the given number.

// Examples:

// If the input number is 7685, the number of digits in the given number is 4.

function countDigits(number) {
   
    if (number === 0) return 1;
   let sum = 0;
   // let a;
   while(number > 0)
   {
      sum = sum + 1;
      number = Math.floor(number / 10) ;
   }
   
      
      return sum;
   }
   
   console.log(countDigits(45698));
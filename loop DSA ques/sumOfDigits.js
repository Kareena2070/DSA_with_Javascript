// Write a program that takes an integer from the user as input and prints the sum of all the digits in the given number.
// Examples:

// If the input number is 456, the sum of the digits in the given number is 15.


function sumOfDigits(number) {
   
    let sum = 0;
   
        while(number>0)
        {
            sum += number%10;
            number = Math.floor(number / 10);
        }
    return sum;
  
}

// sumOfDigits(456);
console.log( sumOfDigits(456));

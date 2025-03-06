// Write a program that takes an integer from the user as input and prints the number formed by reversing the digits of the input number.

// f the input number is 478, the number formed by reversing the digits is 874.



function reverseDigits(number) {
  
    let reversed = 0;
    
       while (number > 0) {
          let digit = number % 10; // Get last digit
          reversed = reversed * 10 + digit; // Build reversed number
          number = Math.floor(number / 10); // Remove last digit
       }
    
       return reversed;
      
    }
    
    reverseDigits(123);
    console.log(reverseDigits(123));
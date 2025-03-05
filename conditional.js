// Write the logic inside the daysInAnYear function that;

// a. Accepts a parameter year.

// b. Determine if the “year” is a leap year or not.

// c. Return either 365 or 366 accordingly.

// Call the daysInAnYear function, pass 1900 as an argument.

// Receive the return value in a variable.

// Print “Yes” or “No” depending on the value returned by the daysInAnYear function, using if-else statements.

// 1. daysInAnYear(1800) should return 365.
// Passed:2. daysInAnYear(2000) should return 366.
// Passed:3. daysInAnYear(2024) should return 366.


function daysInAnYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
           return 366; // Leap year
       } else {
           return 365; // Non-leap year
       }
   }

   console.log(daysInAnYear(2023));
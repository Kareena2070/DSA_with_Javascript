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

//    Challenge : This challenge will test your JavaScript skills! Write a program that asks the user for two numbers. Then, use conditional statements to figure out which number is bigger.

function findGreaterNumber(number1, number2) {
    // Only change code below this line
    if(number1 > number2) {
        return number1;
    } else {
        return number2;
    }
}
findGreaterNumber(5,7);
console.log(findGreaterNumber(5,7));

// Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)

function findGreatestNumber(num1, num2, num3) {
    //  Only change code below this line
    if (num1 > num2){
        if(num1>num3) {
            return num1;
        } else {
            return num3;
        }
    } else {
        if (num2 >  num3) {
            return num2;
        } else {
            return num3;
        }
    }
}
findGreatestNumber(20,3,43);

console.log(findGreatestNumber(20,3,43));


// Comparing numbers is essential in programming. This challenge strengthens your JavaScript skills by teaching you how to determine the greatest number from user input using conditional statements.

function findGreatestNumber(num1, num2, num3, num4) {
    //    change code below this line
    let max
    let large

    if (num1 > num2) {
        max = num1;
    } else {
        max = num2;
    }

     if (num3 > num4) {
         large = num3;
     } else {
         large = num4;
     }

     if (max > large) {
         return max;
     } else {
         return large;
     }

}


findGreatestNumber(98, 13, 29, 58);
console.log(findGreatestNumber(98, 13, 29, 58));
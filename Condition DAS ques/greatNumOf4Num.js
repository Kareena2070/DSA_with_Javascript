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
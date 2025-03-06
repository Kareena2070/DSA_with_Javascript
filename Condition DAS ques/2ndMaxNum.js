// In this challenge, you are tasked with finding the second maximum among three given numbers. This problem tests your ability to compare numbers and determine their order.

function findSecondMax(num1, num2, num3) {
    //  Only change code below this line
    let big
    let small
     
     if (num1 > num2 ) {
         big = num1 
         small = num2
     } else {
         big = num2
         small = num1
     }

     if ( big < num3) {
         return big;
     } else {
         return num3;
     }
}

console.log(findSecondMax(5,4,6)) ;

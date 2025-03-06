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
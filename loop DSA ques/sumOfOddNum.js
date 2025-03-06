// Write a program that takes an integer N from the user as input and prints the sum of all odd numbers from 1 up to N.

// Examples: If the input number is 20, the sum of odd numbers up to 20 is 100.

function sumOfOddNumbers(N) {
  
    for(let i =0; i<=N; i++){
     if (i % 2 !=0){
        console.log(i)
     }
  }
  

}
sumOfOddNumbers(20);

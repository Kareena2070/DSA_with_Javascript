// Write a JavaScript function called printEvenNumbers that takes a number as an argument and prints all the even numbers from 1 till n (including n)the given number.

// For example, if the input number is 10, your function should print "2 4 6 8 10".

function printEvenNumbers(number) {
   
    for(let i =0; i <=number; i++){
       if(number % i == 0){
          console.log(i)
       }
    }
       
    }
    
    printEvenNumbers(10);     // 1, 2, 5, 10
    
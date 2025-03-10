// Write a program that takes an array of numbers as input and prints the sum of all the odd numbers and even numbers separately, in that order.

// Input:
// 23 45 32 25 46 33 71 90
// Output:
// 197
// 168


function oddEvenSum(arr) {
  
    let sumOfEven = 0;
    let sumOfOdd = 0;

      for(let i =0; i <arr.length; i++){
            // arr[i]= i;
    
          if(arr[i]%2==0){
            sumOfEven += arr[i]
          } else{
            sumOfOdd += arr[i];
          }
    
      }
      return [sumOfOdd, sumOfEven];
      
    }
    
    const inputArray = [23, 45, 32, 25, 46, 33, 71, 90];
    const result = oddEvenSum(inputArray);
    console.log(result[0]);
    console.log(result[1]);

    
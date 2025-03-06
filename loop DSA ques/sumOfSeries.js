// Write a JavaScript function called sumOfSeries that takes a number N as an argument and calculates the sum of the series: 1 + 1/2 + 1/3 + 1/4 + 1/5 + ... + 1/N.

// use the sum variable to count

function sumOfSeries(N) {
    let sum =0;
    // Only change code below this line
    
      for(let i = 1; i<= N; i++){
        sum = sum + 1/i
    }  
    
    // Only change code above this line
    return sum.toFixed(2);
 }
 

 
 console.log(sumOfSeries(6));
 console.log(sumOfSeries(10));
 


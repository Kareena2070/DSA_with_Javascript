// For input 483, the sum of its digits is 4 + 8 + 3 = 15, and then 1 + 5 = 6, so the output should be 6. For input 837, the sum of its digits is 8 + 3 + 7 = 18, and then 1 + 8 = 9, so the output should be 9.
// 1. sumOfDigits(483) should return 6.
// 2. sumOfDigits(837) should return 9.



function sumOfDigits(N) {
  
  let sum = 0
  let sum1 =0;
  let a;
  let b;

  while(N > 0){
    a = N%10;
    sum = sum + a;
    N = Math.floor(N / 10);
  }

  while(sum > 0){
    b = sum % 10;
    sum1 = sum1 + b;
    sum = Math.floor(sum / 10);
  }
  return sum1;
  
  
}

// sumOfDigits(10);
console.log(sumOfDigits(483));

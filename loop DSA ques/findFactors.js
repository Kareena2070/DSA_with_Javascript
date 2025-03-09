// Write a program that takes an integer from the user as input and prints all the factors of the given number.
// 1. For findFactors(12), the expected output is  [1, 2, 3, 4, 6, 12].

// SOLVE WITH OUT ARRAY
function findFactors(num) {
for(let i = 1; i<=num; i++){
  if(num%i==0){
      console.log(i);
      }
    }
}
findFactors(4)
console.log(findFactors(8));

// SOLVE WITH ARRAY

function findFactors(num) {
  // Only change code below this line
let arr=[];
let j=0;
for(let i=1;i<=num;i++)
{
  
  if(num%i==0)
  {
    arr[j] = i;
    j++;
  }
}
  return arr;
}

console.log(findFactors(10));
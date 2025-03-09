//   The objective of this challenge is to write a program that creates an array containing the first 20 natural numbers.
// 1. createArray(5) should return [1,2,3,4,5].
// 2. createArray(10) should return [1,2,3,4,5,6,7,8,9,10].



function createArray(num){        // arr ques with .push methord
  let arr =[];
  for(let i = 0; i < num; i++){
    arr.push(i+1);   // i+1 is used here so that arr[0] is not come 0 
  }
  return arr;
}
createArray(5);
createArray(10);
console.log(createArray(5));



function createArray(num){
  
  let arr =[];
  for(let i = 0; i < num; i++){     // arr ques without .push methord 
        arr[i] = i+1; // i+1 is used here so that arr[0] is not come 0 
  }
  return arr;
}



createArray(5);
createArray(10);
console.log(createArray(8));
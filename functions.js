// Declare a function named daysInAnYear. Inside this function, write a return statement that returns the number 365.

// Call the daysInAnYear function after declaring it, and store the returned value in a variable called days and console it.

function daysInAnYear() {
    return 365;
   }
    let days = daysInAnYear();
   
   console.log(days)


//    Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.

// Call the function with two numbers as arguments.

function functionWithArgs(a, b){
    return a+b;
  }
   
  console.log(functionWithArgs(1,2));
  console.log(functionWithArgs(7,9));
  

  // Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

  function timesFive(num) {
    return num * 5;
  }
  
  const a = timesFive(5);
  const b = timesFive(2);
  const c = timesFive(0);
  console.log(a);
  console.log(b);
  console.log(c);

  
//   Change the order of logic in the function so that it will return the correct statements in all cases.
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
console.log(orderMyLogic(7));






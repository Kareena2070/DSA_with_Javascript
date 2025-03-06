// Write a JavaScript function called printNameMultipleTimes that takes two inputs: a number and a name. Your function should print the given name the specified number of times.

// For example, if the number is 3 and the name is "john", your function should print "john" three times.


function printNameMultipleTimes(number, name) {
   
    for(let i = 1; i <= number; i++){
          console.log(name)             // its without array
    }          
};


printNameMultipleTimes(2, "Bedanti");     // Bedanti
                                          // Bedanti




function printNameMultipleTimes(number, name) {
   

    let arr = [];
    for(let i = 0; i < number; i++){
        arr[i] = name;                  // its with array
    }
     return arr;        // output = [ 'Bedanti', 'Bedanti' ]
 
 
    
 }
 
 console.log(printNameMultipleTimes(2, "Bedanti"))  //[ 'Bedanti', 'Bedanti' ]
 
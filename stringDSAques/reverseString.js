// Reverse a String

let input = require('readline-sync')
let UserName = input.question("enter your user name: ")

function reverseString1(str){
    let newStr = str.split("").reverse().join("");
    console.log(newStr);
}
reverseString1(UserName)

// time complexity 
// split() = O(n), reverse() =O(n), join() = O(n)
// so, total time complexity = O(n)
// space complexity 
// split("") creates a new array of n characters.split("") → new array of size O(n)
// reverse() reverses the array in-place (no extra space). 
// join("") creates a new string from the array. join("") → new string of size O(n)
// Original string → input (no extra space).
// so, total space complexity = O(n)



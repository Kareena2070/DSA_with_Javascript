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



function reverseString2(str){
    let newArray = "";
    for(let i = str.length-1; i>=0;i--){
        newArray+=str[i]
    }
    console.log(newArray)
}

reverseString2(UserName)

// time complexity
// Loop runs n times → O(n)
// Each += on a string creates a new string in memory every time (because JS strings are immutable).
// So internally, it can behave like O(n²) in worst-case scenarios — especially for long strings.
//  Total Time Complexity:
// O(n²) (because string concatenation in loop = repeated memory copying)
// space complexity
// newString is built character-by-character.
// JS strings are immutable, so each += creates a new copy in memory.
// Even though you are using just one variable (newString), JS makes intermediate copies every time you += → but 
// those copies are discarded by the garbage collector.
// Technically, it's O(n) space for the final result.
// But practically, there is extra memory churn due to repeated copying.
// so space complexity  = O(n)






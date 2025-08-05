// check an array is sorted or not 

// let arr = [1, 2, ,3 ,4 , 5]
let arr = [5, 2, 5, 8]

function is_sorted(arr){
    for(let i = 1; i< arr.length; i++){
        if(arr[i]<arr[i-1]){
            return false
        }
    }
    return true
}

console.log(is_sorted(arr))

// time complexity = O(n)
// space complexity = O(1)
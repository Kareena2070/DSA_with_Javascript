// find Max in array 

arr = [ 2, 5, 89, 24, 234, 67, 323]
// arr = []

function max(arr){
    if(arr.length ===0){
        return null
    }

    let max_num = arr[0]
    for(let i = 1; i<arr.length; i++){
        if(arr[i] > max_num){
            max_num =  arr[i]
        }
    }
    return max_num
}

console.log(max(arr))
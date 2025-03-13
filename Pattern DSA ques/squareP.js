function square(num){

for (let i = 1; i <= num; i++){
    let row = "";   // Initialize an empty string for the row
        for(let j=1; j <= num; j++){
            row += j +" ";   // Append numbers to the row and + "_" give space betwwen the num
        }
        console.log(row);
}
}
square(4);

// output    1234
          // 1234
          // 1234 
          // 1234
          // 1234


          

function star(n){
    for (let i = 1; i <= n; i++){    // outer loop
        let row = ""
        for(let j=1; j <= n; j++){    // inner loop
            row += "*"
        }
       console.log(row);
    }

}
star(3);

// output    ****
        //   ****
        //   ****
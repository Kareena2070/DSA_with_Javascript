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



 function apl(n){
    for(let i = 0; i < n; i++){
         let row = ""
        let char = "A"
        for(let j = 0; j < n; j++){
            row += char;
            char = String.fromCharCode(char.charCodeAt(0) + 1); // Move to next character
        }
        console.log(row);
    }
 }       

apl(3);

// output  ABC
        // ABC
        // ABC


 function continueNum(n){
    let num = 1;
    for(let i = 0; i < n; i++){
        let row = ""
        for(let j=0; j < n; j++){
            row += num;
            num++;
        }
       
        console.log(row);
    }
    console.log("After pattern num will be :", num);
 }       

 continueNum(3);

// output 123
//        456
//        789
//        After pattern num will be : 10


 function continueApl(n){
    let ch = "A";
    for(let i=0; i <n; i++){
        let row = "";
        for(let j = 0; j < n; j++){
            row += ch;
            ch = String.fromCharCode(ch.charCodeAt(0) + 1);
            
        }
        console.log(row);
    }
 }

 continueApl(3);
 
//  output ABC
//         DEF
//         GHI
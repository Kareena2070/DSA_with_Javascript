function starTri(n){
    for(let i = 0; i <n; i++){
        let row = ""
        for(let j=0; j<=i; j++){
             row +="*"
        }
        console.log(row);
    }
}

starTri(4);

 
// output  *
//         **
//         ***
//         ****

function numTri(n){
    // let num = 1
    for(let i = 0; i <n; i++){
        let row = "";
        for(let j =0; j <=i; j++){
            row +=i+1
            // num++;
        }
        console.log(row);
    }
}

numTri(4);

//  output 1
//         22
//         333
//         4444

function charTri(n){
     let char = "A"
    for(let i = 0; i <n; i++){
        let row = "";
        // char = "A"
        for(let j =0; j< i+1; j++){
            row +=char;
            // char = String.fromCharCode(char.charCodeAt(0) + 1); // Move to next character
        }
        console.log(row);
        char = String.fromCharCode(char.charCodeAt(0) + 1); // Move to next character
        
    }
}

charTri(4);

// output  A
//         BB
//         CCC
//         DDDD

// also char line code is placed outside the inner loop because we want the same character to be used for the entire row before moving to the next character.

// If we put it inside the loop, the character would change after each iteration of j, resulting in incorrect output.



function numTri(n){
    let num = 1
    for(let i = 0; i <n; i++){
        let row = "";
        for(let j =0; j <=i; j++){
            row +=j+1
            num++;
        }
        console.log(row);
    }
}

numTri(4);

// output  1
//         12
//         123
//         1234


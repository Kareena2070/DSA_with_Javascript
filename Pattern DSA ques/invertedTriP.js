function invertedNumTri(n){
    for(let i = 0; i <n; i++){
     let row = "";

     for(let j = 0; j <i; j++){
        row += " ";
     }
     for(let j =0; j <n-i; j++ ){
        row += i+1;
     }
     console.log(row);
    }
}

invertedNumTri(4);

function invertedCharTri(n){
     let char ="A"
    for(let i=0; i<n; i++){
        let row = "";
        // let char ="A"

        for(let j = 0; j <i; j++){
            row += " ";
        }
        for(let j = 0; j < n-i; j++){
            row += char;
        }
        console.log(row);
        char = String.fromCharCode(char.charCodeAt(0)+1);
    }
}

invertedCharTri(4);
function floydNumTri(n){
    let num =1;
    for(let  i=0; i <n; i++){
        
        let row ="";
       
        for(let j =0; j <=i; j++){
            
            row +=num;
            num++;
        } 
        console.log(row);
    }
}
floydNumTri(4)
//  output     1
//             23
//             456
//             78910

function floydCharTri(n){
    let char = "A";
    for(let i =0; i <n; i++){
        let row = "";
        for(let j = 0; j <=i; j++){
            row +=char;
            // char++;     here we cann't use char++ because in below line we already increase char by 1 ((0)+1)
            char = String.fromCharCode(char.charCodeAt(0)+1);
        }
        console.log(row);
    }
}
floydCharTri(4);

//   output    A
//             BC
//             DEF
//             GHIJ


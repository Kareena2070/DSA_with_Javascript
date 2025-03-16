function reverseNumTri(n){
    for(let i = n; i>0; i--){
        let row = "";
        for(let j = i; j>0; j--){  
            row += j;
        }
        console.log(row);
    }
}

reverseNumTri(5);
// output  54321
//         4321
//         321
//         21
//         1


function reverseCharTri(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        let char = String.fromCharCode(64 + n - i); // Start from 'D', 'C', 'B', etc.

        for (let j = n - i; j > 0; j--) {
            row += char;
            char = String.fromCharCode(char.charCodeAt(0) - 1); // Move to previous character
        }

        console.log(row);
    }
}

reverseCharTri(4);

// output  DCBA
//         CBA
//         BA
//         A



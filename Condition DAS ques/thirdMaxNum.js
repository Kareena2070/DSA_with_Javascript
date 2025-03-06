// Write a program that takes four numbers as input from the user and outputs the third maximum.
// . findThirdMax(5,4,6,7) should return 5
// findThirdMax(10,10,5,5) should return 5

function findThirdMax(num1, num2, num3, num4) {
    let min, smin, min1, smin1;

if(num1<num2)
    { 
        min = num1; //13  max
        smin = num2; //20  min
    }
    else
    {
        min = num2;  //max
        smin = num1;   //min
    }
    if(num3<num4)
    {
        min1 = num3;  //0   large
        smin1 = num4; //30    small
    }
    else
    {
        min1 = num4;     //large
        smin1 = num3;     // small
    }
    
    if(min<min1)         //max < large
    {
        if(min1<smin)     //large < min
        {
            return  min1;     //large
        }
        else
        {
            return smin ;      //min
        }
    }
    else
    {
        if(min<smin1)     //max < min
        {
            return min;      //max
        }
        else
        {
            return smin1;      //min
        }
    }
    }
    console.log(findThirdMax(4,5,3,0));
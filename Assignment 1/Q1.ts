/*
1. Write a typescript program which contains one function named as Maximum. 
That function accepts three parameters and it should returns largest value from three input parameters
Input : 23 89 6
Output : Maximum number is 89
*/
function Maximum( No1 : number,No2 : number, No3 : number ) : number
{
   var max_val = 0
if(No1 > No2) 
{
    max_val = No1
}
else 
{
 max_val = No2
}
if(No3 > max_val)
{
 max_val = No3
}
   return max_val
}

var ret =0
ret = Maximum(23,89,6)
console.log("Maximum number is "+ ret)
/*
1. Write a typescript program which contains one function named as Maximum. 
That function accepts three parameters and it should returns largest value from three input parameters
Input : 23 89 6
Output : Maximum number is 89
*/
function Maximum( No1 : number,No2 : number, No3 : number ) : void 
{
if(No1 > No2) 
{
    console.log("Largest number is "+No1)
}
else 
{
 console.log("Largest Number is "+No2)

}
if(No2 > No3)
{
    console.log("Largest Number is "+No2)
}
else
{
    console.log("Largest Number is "+No3)
}
if(No1 > No3)
{
    console.log("Largest Number is "+No1)
}
else
{
    console.log("Largest Number is "+No3)
}
}
var A = 11
var B = 90
var C = 54
Maximum(A,B,C)
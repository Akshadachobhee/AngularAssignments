/* Write a typescript program which contains one function named as Maximum.
That function accepts array of numbers and returns the largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Maximum number is 89 
*/
function Maximum(Array : number[]) : number
{
    var max=Array[0] 
    var no

    for(var i =1 ; i<Array.length ; i++) // Array.length = The length property sets or returns the number of elements in an array.
    if(Array[i]>max)
    {
        max=Array[i]
    }
    return max
}
var Arr : number[]=[23, 89,6, 29, 56, 45, 77, 32]
var ret = Maximum(Arr)
console.log("Maximum number is "+ret)
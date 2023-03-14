/*Write a typescript program which contains one function named as DisplayFators.
This function should accept one number and display factors of that number.
Input : 20
Output : 1 2 4 5 10 */
function DisplayFators(no) : number
{ 
    
    var i
    for(i=1;i<no;i++) 
    if (no%i == 0)
    {
        console.log(i)
    }
     return 0
     // if return i = it will print 20 also
}

 var ret =DisplayFators(20)

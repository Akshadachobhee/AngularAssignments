/* Write a typescript program which contains one function named as Fibonacci.
That function accepts one number from user and print Fibonacci series still that number.
Input : 21
Output : 1 1 2 3 5 8 13 21
*/
function Fibonacci(no) : number
{
    var n1 =0 , n2 = 1, nextTerm;
    nextTerm = n1 + n2
    console.log(n2)
    while(nextTerm <= no)
    {
    console.log(nextTerm)
    n1 = n2
    n2 = nextTerm
    nextTerm = n1 + n2
    }
    return 0
}
var ret = Fibonacci(21)

/*What do you mean by Fibonacci series?
The Fibonacci sequence is a type series where each number is the sum of the two that precede it. 
It starts from 0 and 1 usually.
The Fibonacci sequence is given by 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, and so on.
The numbers in the Fibonacci sequence are also called Fibonacci numbers.
*/
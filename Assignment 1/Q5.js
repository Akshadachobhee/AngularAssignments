/* Write a typescript program which contains one function named as Fibonacci.
That function accepts one number from user and print Fibonacci series still that number.
Input : 21
Output : 1 1 2 3 5 8 13 21
*/
function Fibonacci(no) {
    var n1 = 0, n2 = 1, nextTerm;
    nextTerm = n1 + n2;
    console.log(n2);
    while (nextTerm <= no) {
        console.log(nextTerm);
        n1 = n2;
        n2 = nextTerm;
        nextTerm = n1 + n2;
    }
    return 1;
}
var ret = Fibonacci(21);

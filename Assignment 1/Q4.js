/* Write a typescript program which contains one function named as ChkPrime.
That function should accept one number and it should return true if the given number is prime and otherwise return false
Input : 11
Output : It is a prime number */
function Chkprime(no) {
    var i, flag = true;
    for (i = 2; i <= no - 1; i++)
        if (no % i == 0) {
            flag = false;
            break;
        }
    if (flag == true)
        console.log("It is a Prime number");
    else
        console.log("It is not a Prime number");
    return 0;
}
var ret = Chkprime(11);

/* Write a typescript program which contains one function named as Summation.
That function accpets array of number and returns the Summation of each number from array.
Input : 23 6 7 4 5 7
Output : Addition is 52
 */
function Addition(Arr) {
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Arr.length; cnt++) {
        sum = sum + Arr[cnt];
    }
    return sum;
}
var week = [23, 6, 7, 4, 5, 7];
var ret = 0;
ret = Addition(week);
console.log("Addition is :" + ret);

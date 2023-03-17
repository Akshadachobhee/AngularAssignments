/*Write a typescript program which contains one function named Maximum.
That function accepts array of number and returns the second largest number from array.
Input : 23 89 6 29 56 45 77 32
Output : Second Maximum number is 77
 */
function SecondMaximum(Array) {
    var n = Array.length;
    var i, first, second;
    if (n < 2) {
        console.log("Invalid Input");
    }
    for (i = n - 2; i >= 0; i--) {
        if (Array[i] = Array[n - 1]) {
            console.log("Second Maximum number is " + Array[i]);
        }
    }
    return 0;
}
var arr = [23, 89, 6, 29, 56, 45, 77, 32];
var ret = 0;
ret = SecondMaximum(arr);

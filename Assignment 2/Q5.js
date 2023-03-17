/* Write a typescript program which contains one function named as ChkString.
That function accepts one string and check whether that string contains "Marvellous" word or not.
Input : "Pune Kothrud Marvellous Infosystems "
Output : String contains Marvellous in it.
*/
function ChkString(str) {
    if (str.search("Marvellous") == -1) {
        console.log("String contains does not Marvellous in it.");
    }
    else {
        console.log("String contains Marvellous in it.");
    }
    return 0;
}
var str1 = "Pune Kothrud  Infosystems";
var ret = ChkString(str1);

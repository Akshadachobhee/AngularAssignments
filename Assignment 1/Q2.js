/* Write a typescript program which contains one function named as Area.
 That function should calculate area of circle.
 Accept value of radius from user and return its area.
 Default value of PI should be 3.14 if it is not provided by the caller */
function Area(radius) {
    var AOC = 3.14 * radius * radius;
    return AOC;
}
var ret = Area(5);
console.log("Area of circle is " + ret);

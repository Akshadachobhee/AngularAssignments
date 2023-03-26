/* Create one typescript application which contains one class named as Circle.
Circle class contains two characteristics (Class data members) as Radius, PI.
Create one parametrised constructor which accepts one value and assign it to Radius.
Value of PI member is set to 3.14.
In Circle class we have to one method (Behaviours) as Area which will return area of circle.
After designing the class create two objects of that class by providing some hardcoded value.
Call the method Area by using both the objects.
*/
class Circle
{
    Radius : number
    PI : number
    constructor(R : number)
    {
        this.Radius= R
        this.PI = 3.14

    }
    Area()
    {
        let Ans : number = 0
        Ans = this.PI*this.Radius*this.Radius
        return Ans
    }
}
var Ret = 0 
var obj = new Circle(8)
Ret = obj.Area()
console.log("Area of Circle : "+Ret)
var obj2 = new Circle(78)
Ret = obj2.Area()
console.log("Area of Circle : "+Ret)
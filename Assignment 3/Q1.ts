/* Create one typescript application which contains one class named as Arithmetic.
Arithmetic class contains three charactristics (Class data members) as Number1,Number2.
Create one parametrised constructor which accepts two values and assign it to Number1 and Number2.
Arithmetic class we have to write four methods (Behaviours) as Addition, Substraction,Multiplication and Division.
Addition method will add Number1,Number2 & return result.
Substraction method will subtract Number1,Number2 & return result.
Multiplicaton method will multiply Number1,Number2  & return result.
Division method will Divide Number1,Number2  & return result.
 After designing the class create two objects of that class by providing some hardcore value.
 Call all the methods by using both the objects.
*/

class Arithmetic
{
    Number1 = 0
    Number2 = 0

    constructor(No1,No2)
    {
        this.Number1=No1
        this.Number2=No2
    }
    DisplayNumbers() : void
    {
     console.log("Numbers are : ",this.Number1,this.Number2)
    }
     Addition()
     {
return this.Number1 + this.Number2
     }

     Substraction()
     {
return this.Number1 -this.Number2
     }
     Multiplication()
     {
return this.Number1*this.Number2
     }

     Division()
     {
        return this.Number1/this.Number2
     }

}

var Ret = 0
var obj = new Arithmetic(10, 45)

obj.DisplayNumbers()
Ret = obj.Addition()
console.log("Addition is : "+Ret)
Ret = obj.Substraction()
console.log("Substraction is : "+Ret)
Ret = obj.Multiplication()
console.log("Multiplication is : "+Ret)
Ret = obj.Division()
console.log("Division is : "+Ret)


var obj2 = new Arithmetic(45,15)
obj2.DisplayNumbers()
Ret = obj2.Addition()
console.log("Addition is : "+Ret)
Ret = obj2.Substraction()
console.log("Substraction is : "+Ret)
Ret = obj2.Multiplication()
console.log("Multiplication is : "+Ret)
Ret = obj2.Division()
console.log("Division is : "+Ret)
"use strict";
//*******************************
//* STATIC PROPERTIES & METHODS
//*******************************
//* In TypeScript , static methods and properties belong to the class itself rather than to instance of the class. By making methods and properties static , we can access them directly from the class without needing to create an instance of the class. This is useful for utility function or property that don't rely on instance-specific data.
// class Person2 {
//     constructor( public name: string)  {} 
// }
// const user11 = new Person2("Vats")
// person2.name = "Vats"
class MathOperations {
    static PI = Math.PI;
    static add(num1, num2) {
        return num1 + num2;
    }
    static subs(num1, num2) {
        return num1 - num2;
    }
}
console.log(MathOperations.PI);
console.log(MathOperations.add(10, 20));
console.log(MathOperations.subs(10, 20));

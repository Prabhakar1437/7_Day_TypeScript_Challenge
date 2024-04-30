"use strict";
//* Abstract classes provide a way to define common properties and methods that multiple derived classes can share.This promotes code reuse and helps establish a common interface for related classes.
//*abstract class cannot be instantiated
//*abstract classes focus on class inheritance and sharing common functionality, 
//*whereas the use Context hook in React focuses on managing global state and allowing components to consume that state.
// abstract Class PerObj {
//     name:string;
//     age:number;
// }
// class perobj: PerObj ={
//     name:"Vats",
//     age:22
// }
// class perobj1: PerObj ={
//     name:"Vats",
//     age:25
// }
// class perobj2: PerObj={
//     name:"Vatsya",
//     age:21
// }
//? Example:Shape Hierarchy 
//?Suppose you're building a graphics application, and you want to create a hierarchy of different shapes. You can use an abstract base class shape to define common properties and methods that all shapes share.
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    color;
    radius;
    constructor(color, radius) {
        super(color);
        this.color = color;
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        console.log(`This is a ${this.color} circle with radius ${this.radius}`);
    };
}
const circle = new Circle("Red", 4);
circle.displayArea();
circle.calculateArea();
console.log(circle.calculateArea());
console.log(circle.calculateArea());

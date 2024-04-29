"use strict";
//******************* 
//*Inheritance in Ts
//****************** 
//*Inheritance allows a class to reuse the functionality of an existing class without rewriting it.
//? Inheritance is a mechanism in which one class acquires the property of another class.For example a child inherits the traits of his/her parents.
class Persons1 {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduces() {
        return `Hi, I am ${this.name} and I am ${this.age} 
        years old. I love ${this.hobbies.join(",")}`;
    }
}
class Students extends Persons1 {
    grade;
    constructor(name, age, hobbies, grade) {
        super(name, age, hobbies);
        this.grade = grade;
    }
    introduces() {
        return ` ${super.introduces()}.I am in grade ${this.grade}`;
    }
}
// the below code fragment can be found in:
const persons4 = new Persons1("John", 30, ["Reading", "Writing"]);
const persons5 = new Persons1("Jo", 56, ["Reading", "Writing"]);
const Student = new Students("Vats", 30, ["Reading", "Writing"], 10);
console.log(Student.introduces());

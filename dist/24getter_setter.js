"use strict";
//* * * * * * * * *
//* GETTER & SETTER
//* * * * * * * * * 
//? In TypeScript classes, you can use getter and setter methods to control the access and modification of class properties. Getter method allow you to retrieve the value of a property, while setter method allow you to set the value of a property with additional logic and validation.
//TODO the get method doesn't take any parameters, and set method take only one parameter.
class Persons3 {
    name;
    hobbies;
    _age;
    constructor(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    set age(age) {
        if (age > 150 || age < 0)
            throw new Error("Invalid Age");
        this._age = age;
    }
    get age() {
        if (this._age === undefined)
            throw new Error("Invalid Age");
        return this._age;
    }
    introducesParent() {
        return `Hi, I am ${this.name} and I am ${this.age} 
       years old. I love ${this.hobbies.join(",")}`;
    }
}
// the below code fragment can be found in:
const persons9 = new Persons3("John", ["Reading", "Writing"]);
// const persons8:Persons2 =  new Persons1("Jo",56,[ "Reading","Writing" ]);
persons9.age = 11;
console.log(persons9.introducesParent());



//getter and setter functions




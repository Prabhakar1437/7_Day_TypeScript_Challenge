//*A class in terms of OOP is a blueprint for creating objects

//*A class is like a blueprint for creating similar things.

//? In TypeScript,there is a convention to use PascalCase (also known as UpperCamelCase) for class names.This means that class names should start with a capital letter and each subsequent word in the class name should also begin with a capital letter.

class Persons {
    name: string ;
    age: number;
    hobbies:string[];

    constructor(name:string,age:number,hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

}


// the below code fragment can be found in:
const persons1:Persons  = new Persons("John",30,[ "Reading","Writing" ]);

const persons2:Persons =  new Persons("Jo",56,[ "Reading","Writing" ]);

const persons3:Persons=  new Persons("Vats",22,[ "Reading","Writing" ]);

console.log(persons1);

console.log(persons2);

console.log(persons3);





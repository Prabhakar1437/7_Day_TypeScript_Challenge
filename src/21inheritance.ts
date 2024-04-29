//******************* 

//*Inheritance in Ts

//****************** 

//*Inheritance allows a class to reuse the functionality of an existing class without rewriting it.

//? Inheritance is a mechanism in which one class acquires the property of another class.For example a child inherits the traits of his/her parents.

class Persons1 {
    name: string ;
    age: number;
    hobbies:string[];

    constructor(name:string,age:number,hobbies:string[]){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }

    introduces():string{
        return `Hi, I am ${this.name} and I am ${this.age} 
        years old. I love ${this.hobbies.join(",")}`;
    }

}

class Students extends Persons1{
    grade : number;
    constructor(name:string,age:number,hobbies:string[],grade:number){
        super(name,age,hobbies);
        this.grade = grade;
    }
    introduces():string{
        return ` ${super.introduces()}.I am in grade ${this.grade}`;
    }
}
    


// the below code fragment can be found in:
const persons4:Persons1  = new Persons1("John",30,[ "Reading","Writing" ]);

const persons5:Persons1 =  new Persons1("Jo",56,[ "Reading","Writing" ]);

const Student:Persons1=  new Students("Vats",30,[ "Reading","Writing" ],10);

console.log(Student.introduces());

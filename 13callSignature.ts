//*The function call signature refers to the declaration or definition of a function, which includes the function's name , parameters, and return type.It defines the structure and type information of  a function without including the function's implementation or body.

//? lets add one function inside the object . It's more like creating a method in the object.

//?Very Important => call signatures are typically used inside the object type notations to describe the shape of the function within object type.


type Student ={
    name:string;
    age:number;
    gender?:string;
    rollNo:number;
    greet:(country:string) =>string;//method call signature
    
}

let student:Student ={
    name:"John Doe",
    age:25,
    rollNo:101,
    greet:((country):string=>`Hello! I am from ${country}.`) 
    }


const introduction:(student1:Student)=>string=(student1:Student):string=>
    {
        const {name, age, rollNo}= student1;
         return `Hello! My Name is ${name}. I am ${age} years old and Roll No is ${rollNo}`;

    }
    console.log(introduction(student));
    console.log(student.greet("India"));
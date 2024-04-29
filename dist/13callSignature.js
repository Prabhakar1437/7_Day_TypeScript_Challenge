"use strict";
//*The function call signature refers to the declaration or definition of a function, which includes the function's name , parameters, and return type.It defines the structure and type information of  a function without including the function's implementation or body.
let student = {
    name: "John Doe",
    age: 25,
    rollNo: 101,
    greet: ((country) => `Hello! I am from ${country}.`)
};
const introduction = (student1) => {
    const { name, age, rollNo } = student1;
    return `Hello! My Name is ${name}. I am ${age} years old and Roll No is ${rollNo}`;
};
console.log(introduction(student));
console.log(student.greet("India"));

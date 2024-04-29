"use strict";
//?Union types allow you to specify that a variable can hold values of multiple types. You use the /(pipe) symbol to define a union type.In
//*In TypeScript, when using a union type, It is essential to ensure that at least one of the types in the union includes all the required properties.Failure to do so will result in a type error during compilation.
const inputValue = (value) => { };
const userInput = (value) => {
    if (typeof value === 'number') {
        return value * 2;
    }
    else if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        throw new Error('Invalid Input');
    }
};
console.log(userInput(10));
const employeeDetails = {
    name: 'John',
    age: 34,
    emp_id: 5678,
    department: "IT"
};
const myPersonalInfo = {
    name: 'Prabhakar',
    age: 25
};
const user = {
    name: 'Prabhakar',
    age: 25
};
const location1 = {
    city: 'Begusarai',
    country: 'India'
};
const createUserProfile = (user, location1) => {
    // return `my name is ${user.name} and my location is ${location1.city}`;
    return { ...user, ...location1 };
};
const myCompleteInfo = createUserProfile(user, location1);
console.log(myCompleteInfo);

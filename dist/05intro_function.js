"use strict";
//! Function Invocation:
//* To execute a function, you simply invoke it by using its name followed by  parenthesis.
//* you can provide arguments(actual value) for the parameters defined in the function declaration.
//!Function Declaration:
//*you can declare a function using function keyword followed by function name, a list of parameters enclosed in parenthesis, and a return type.
//* The Function body contains the code that will be executed when the function is called.
//declaration ke time jo define karte h oo perameters hai
// function greet(name:string, id:number ){
//     console.log(`Hello ${name} your id is ${id}`);
// }
// function call ke time jo define karte h oo arguments.
// const greet = (name:string, id:number ) =>{
//     console.log(`Hello ${name} your id is ${id}`);
// }
// greet("Vats",1)
//*Function return type : To specify the type of function , you can use the colon(:) followed by the desired type after the function's parameter list.
const greet = (name, id) => {
    return `Hello ${name} your id is ${id}`;
};
console.log(greet("Vats", 1));
// Palindrome
const isPalindrome = (palin) => {
    let myPalin = palin.split("").reverse().join("");
    return myPalin === palin;
};
console.log(isPalindrome("racecar"));

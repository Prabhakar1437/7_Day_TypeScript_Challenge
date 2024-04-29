"use strict";
//*Map & Filter Methods in Array in TS
const numbers = [1, 2, 3, 4, 5];
//!Map Method
//* The Map method creates a new array by applying a provided function to each element of original array. It transforms each element and returns a new array with the transformed values.
//? 1.Doubling each number
// const doubledNumbers:number[]=numbers.map(num=>num*2);
// console.log(doubledNumbers);
//!Filter Method
//? 2. Converting numbers to strings
// const numberToString:string[]=numbers.map((curElm:number)=>curElm.toString());
// console.log('Number To String',numberToString)
//!Filter Method
//? 1. Filtering even numbers
// const evenNumbers:number[]=numbers.filter((curElm:number)=>curElm%2===0);
// console.log('Even Numbers',evenNumbers);
//?2.Filtering number greater than 3
const greaterThanThree = numbers.filter((curElm) => curElm > 3);
console.log('Greater Than Three', greaterThanThree);

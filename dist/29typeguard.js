"use strict";
//* A typeof guard in TypeScript lets you narrow down the type of a variable based on its runtime value. In TypeScript,type narrowing allows you to write type-safe code by ensuring you only operate on the correct type under certain circumstances. This is particularly useful with union types and generic types.
// const favHobbies:(hobby: string | string[]) =(hobby: string | string[]): void[] |undefined => {
//     if (typeof hobby ==='object' && Array.isArray(hobby)) {
//         return hobby.map(callbackfn:(): void =>{});
//     } else {
//         console.log(hobby);
//     }
// }

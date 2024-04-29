"use strict";
//todo:When we use generic and non generic type together then while calling the function we need to defined the type in a manner but with non generics we don't
// function  add(a:number , b:number):number ;
// function  add(a:string , b:string):string ;
// function  add(a:any , b:any):any{
//     return a+b;
// }
function add(a, b) {
    console.log(typeof a);
    console.log(typeof b);
}
const result1 = add(5, "Vats");
const result2 = add("Hello", 5);
